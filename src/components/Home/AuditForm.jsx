import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, ShieldCheck, Sparkles, Loader2, AlertCircle, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import { MOTION_TOKENS } from '../../constants/motionTokens';
import { Link, useLocation } from 'react-router-dom';
import styles from './AuditForm.module.css';
import { supabase } from '../../supabaseClient';
import { trackFormSubmission } from '../../utils/analytics';

const REQUIREMENT_OPTIONS = [
    { value: 'new_website', label: 'New Website' },
    { value: 'ecommerce_store', label: 'E-commerce' },
    { value: 'ai_automation', label: 'AI Automation' },
    { value: 'whatsapp_automation', label: 'WhatsApp API' },
    { value: 'website_plus_automation', label: 'Web + AI Combo' },
    { value: 'not_sure', label: 'Need Advice' },
];

const AuditForm = () => {
    const location = useLocation();
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [hasError, setHasError] = useState(false);
    const [errors, setErrors] = useState({});
    const [showMoreDetails, setShowMoreDetails] = useState(false);

    // Spam protection: honeypot & time-gate
    const [honeypot, setHoneypot] = useState('');
    const formMountTime = useRef(Date.now());

    // Field refs for accessible focus management
    const nameInputRef = useRef(null);
    const whatsappRef = useRef(null);
    const requirementRef = useRef(null);

    // Form field states
    const [formData, setFormData] = useState({
        name: '',
        business_name: '',
        whatsapp: '',
        website_url: '',
        business_type: '',
        requirement: 'new_website',
        monthly_leads: 'under_50',
        biggest_challenge: '',
    });

    useEffect(() => {
        const parseIntent = () => {
            // 1. Check standard URL search query (?req=...)
            const searchParams = new URLSearchParams(location.search || window.location.search);
            let rawReq = searchParams.get('req');

            // 2. If not in search, check hash fragment (?req=... in #audit?req=...)
            const rawHash = location.hash || window.location.hash;
            if (!rawReq && rawHash && rawHash.includes('?')) {
                const hashQuery = rawHash.split('?')[1];
                if (hashQuery) {
                    const hashParams = new URLSearchParams(hashQuery);
                    rawReq = hashParams.get('req');
                }
            }

            if (!rawReq) return;

            const normalizedReq = rawReq.trim().toLowerCase();
            const aliasMap = {
                'new_website': 'new_website',
                'website': 'new_website',
                'web': 'new_website',
                'ecommerce_store': 'ecommerce_store',
                'ecommerce': 'ecommerce_store',
                'store': 'ecommerce_store',
                'ai_automation': 'ai_automation',
                'ai': 'ai_automation',
                'automation': 'ai_automation',
                'whatsapp_automation': 'whatsapp_automation',
                'whatsapp_waba': 'whatsapp_automation',
                'waba': 'whatsapp_automation',
                'whatsapp': 'whatsapp_automation',
                'api': 'whatsapp_automation',
                'website_plus_automation': 'website_plus_automation',
                'combo': 'website_plus_automation',
                'bundle': 'website_plus_automation',
                'custom': 'not_sure',
                'not_sure': 'not_sure',
                'advice': 'not_sure'
            };

            const matched = aliasMap[normalizedReq];
            if (matched) {
                setFormData(prev => ({ ...prev, requirement: matched }));
            }
        };

        parseIntent();
        window.addEventListener('hashchange', parseIntent);
        window.addEventListener('popstate', parseIntent);
        return () => {
            window.removeEventListener('hashchange', parseIntent);
            window.removeEventListener('popstate', parseIntent);
        };
    }, [location.search, location.hash]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => {
                const updated = { ...prev };
                delete updated[name];
                return updated;
            });
        }
    };

    const handleRequirementSelect = (value) => {
        setFormData(prev => ({ ...prev, requirement: value }));
        if (errors.requirement) {
            setErrors(prev => {
                const updated = { ...prev };
                delete updated.requirement;
                return updated;
            });
        }
    };

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();
        const newErrors = {};

        if (!formData.requirement) {
            newErrors.requirement = 'Please select your requirement';
        }
        if (!formData.name.trim()) {
            newErrors.name = 'Please enter your name';
        }
        if (!formData.whatsapp.trim()) {
            newErrors.whatsapp = 'Please enter your WhatsApp number';
        } else if (formData.whatsapp.trim().replace(/\D/g, '').length < 8) {
            newErrors.whatsapp = 'Please enter a valid phone number (min 8 digits)';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setHasError(true);
            setTimeout(() => setHasError(false), 300);

            if (newErrors.requirement) requirementRef.current?.focus();
            else if (newErrors.name) nameInputRef.current?.focus();
            else if (newErrors.whatsapp) whatsappRef.current?.focus();
            return;
        }

        // Anti-spam check 1: Hidden honeypot field must be untouched
        if (honeypot) {
            console.warn('[AuditForm] Spam submission prevented via honeypot.');
            setStatus('success');
            return;
        }

        // Anti-spam check 2: Time-gate check (must be at least 3 seconds from component mount)
        if (Date.now() - formMountTime.current < 3000) {
            console.warn('[AuditForm] Rapid submission prevented via time-gate (<3s).');
            setStatus('success');
            return;
        }

        setStatus('loading');

        const payload = {
            name: formData.name.trim(),
            business_name: formData.business_name.trim() || null,
            phone: formData.whatsapp.trim(),
            website_url: formData.website_url.trim() || null,
            business_type: formData.business_type || 'other',
            requirement: formData.requirement,
            monthly_leads: formData.monthly_leads || null,
            biggest_challenge: formData.biggest_challenge.trim() || null,
            source: 'free_audit_form',
            consent_agreed: true,
            consent_version: 'v2.0',
            consent_timestamp: new Date().toISOString(),
            created_at: new Date().toISOString()
        };

        try {
            const { error } = await supabase
                .from('leads')
                .insert([payload]);

            if (error) {
                console.error('Supabase Insert Error:', error);
                throw error;
            }
            trackFormSubmission('free_growth_audit', {
                requirement: formData.requirement,
                business_type: formData.business_type || 'other',
                monthly_leads: formData.monthly_leads
            });
            setStatus('success');
        } catch (err) {
            console.error('Submission error:', err);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <section id="audit" className="section section-dark">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, ease: MOTION_TOKENS.ease.outExpo }}
                        className={styles.successCard}
                        style={{ textAlign: 'center', padding: '3.5rem 2rem', background: '#0f141f', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', maxWidth: '640px', margin: '0 auto' }}
                    >
                        <CheckCircle2 size={56} style={{ color: '#16a34a', margin: '0 auto 1.25rem auto' }} />
                        <h3 className={styles.successTitle} style={{ color: '#fff', fontSize: '1.75rem', marginBottom: '0.75rem' }}>Enquiry Received!</h3>
                        <p className={styles.successText} style={{ color: '#94a3b8', marginBottom: '2rem', lineHeight: 1.6 }}>
                            Thank you for reaching out. We will review your project details and message you on WhatsApp within 24 hours with a recommended plan and next steps.
                        </p>
                        <button 
                            onClick={() => { 
                                setStatus('idle'); 
                                setFormData({ name: '', business_name: '', whatsapp: '', website_url: '', business_type: '', requirement: 'new_website', monthly_leads: 'under_50', biggest_challenge: '' }); 
                                setErrors({}); 
                            }} 
                            className="btn btn-outline" 
                            style={{ color: '#fff', borderColor: '#475569' }}
                        >
                            Submit Another Request
                        </button>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section id="audit" className={styles.auditSectionDeck}>
            <div className="container">
                <div className={styles.formGrid}>
                    <motion.div
                        className={styles.infoCol}
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: MOTION_TOKENS.ease.outExpo }}
                    >
                        <span className={styles.watermarkNumberDark}>08</span>
                        <span className="section-badge section-badge-dark">
                            <Sparkles size={14} /> Project Scope & Consultation
                        </span>
                        <h2 className={styles.infoTitle}>
                            Tell Us What You Need
                        </h2>
                        <p className={styles.infoDesc}>
                            Share a few details. We'll recommend a suitable approach and explain the next steps.
                        </p>

                        <div className={styles.benefitList}>
                            <motion.div className={styles.benefitItem} whileHover={{ x: 4 }}>
                                <CheckCircle2 size={18} className={styles.checkIcon} />
                                <div>
                                    <span className={styles.benefitHeading}>Tailored Technical Scoping</span>
                                    <span className={styles.benefitSub}>Custom architecture recommendation suited to your budget</span>
                                </div>
                            </motion.div>
                            <motion.div className={styles.benefitItem} whileHover={{ x: 4 }}>
                                <CheckCircle2 size={18} className={styles.checkIcon} />
                                <div>
                                    <span className={styles.benefitHeading}>Transparent Fixed Pricing</span>
                                    <span className={styles.benefitSub}>Milestone-based delivery with zero hidden retainers</span>
                                </div>
                            </motion.div>
                            <motion.div className={styles.benefitItem} whileHover={{ x: 4 }}>
                                <CheckCircle2 size={18} className={styles.checkIcon} />
                                <div>
                                    <span className={styles.benefitHeading}>Direct Technical Review</span>
                                    <span className={styles.benefitSub}>Actionable roadmap delivered via WhatsApp in 24 hours</span>
                                </div>
                            </motion.div>
                        </div>

                        <div className={styles.guaranteeBox}>
                            <ShieldCheck size={20} className={styles.shieldIcon} />
                            <span>100% Confidential • Direct Founder Response • No Sales Spam</span>
                        </div>
                    </motion.div>

                    {/* Streamlined Enquiry Form Card */}
                    <motion.div
                        className={styles.formCard}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: MOTION_TOKENS.ease.outExpo }}
                    >
                        <div style={{ marginBottom: '1.25rem' }}>
                            <h3 className={styles.formHeader} style={{ margin: 0, paddingBottom: '0.5rem', borderBottom: 'none' }}>
                                Project Enquiry
                            </h3>
                            <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-slate-400)' }}>
                                Select your service and leave your contact. We'll get back to you directly.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} noValidate className={styles.form}>
                            {/* Honeypot field for bot mitigation - hidden from humans and screen readers */}
                            <div style={{ display: 'none', position: 'absolute', left: '-9999px', opacity: 0 }} aria-hidden="true">
                                <label htmlFor="bt_honeypot_field">Do not fill this field</label>
                                <input
                                    type="text"
                                    id="bt_honeypot_field"
                                    name="bt_honeypot_field"
                                    value={honeypot}
                                    onChange={(e) => setHoneypot(e.target.value)}
                                    tabIndex={-1}
                                    autoComplete="off"
                                />
                            </div>

                            {/* Service Requirement Selection (Visible & Selectable on Initial View) */}
                            <div className={styles.inputGroup}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <label htmlFor="requirement" className={styles.label}>What do you need? *</label>
                                    {formData.requirement && (
                                        <span className={styles.contextualBadge} style={{ margin: 0 }}>
                                            <Zap size={12} />
                                            Selected: {REQUIREMENT_OPTIONS.find(o => o.value === formData.requirement)?.label}
                                        </span>
                                    )}
                                </div>

                                <div className={styles.reqPillsGrid} role="group" aria-label="Primary need selector">
                                    {REQUIREMENT_OPTIONS.map((opt) => {
                                        const isSelected = formData.requirement === opt.value;
                                        return (
                                            <button
                                                key={opt.value}
                                                type="button"
                                                className={`${styles.reqPill} ${isSelected ? styles.reqPillActive : ''}`}
                                                onClick={() => handleRequirementSelect(opt.value)}
                                                aria-pressed={isSelected}
                                            >
                                                {opt.label}
                                            </button>
                                        );
                                    })}
                                </div>
                                {errors.requirement && (
                                    <span id="req-error" role="alert" className={styles.errorText}>
                                        <AlertCircle size={12} /> {errors.requirement}
                                    </span>
                                )}
                            </div>

                            {/* Core Contact Inputs */}
                            <div className={styles.row2}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="name" className={styles.label}>Your Name *</label>
                                    <input
                                        ref={nameInputRef}
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        autoComplete="name"
                                        autoCapitalize="words"
                                        required
                                        aria-required="true"
                                        aria-invalid={!!errors.name}
                                        aria-describedby={errors.name ? "name-error" : undefined}
                                        className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                                    />
                                    {errors.name && (
                                        <span id="name-error" role="alert" className={styles.errorText}>
                                            <AlertCircle size={12} /> {errors.name}
                                        </span>
                                    )}
                                </div>

                                <div className={styles.inputGroup}>
                                    <label htmlFor="whatsapp" className={styles.label}>WhatsApp Number *</label>
                                    <input
                                        ref={whatsappRef}
                                        type="tel"
                                        id="whatsapp"
                                        name="whatsapp"
                                        value={formData.whatsapp}
                                        onChange={handleChange}
                                        placeholder="+91 98765 43210"
                                        inputMode="tel"
                                        autoComplete="tel"
                                        required
                                        aria-required="true"
                                        aria-invalid={!!errors.whatsapp}
                                        aria-describedby={errors.whatsapp ? "whatsapp-error" : undefined}
                                        className={`${styles.input} ${errors.whatsapp ? styles.inputError : ''}`}
                                    />
                                    {errors.whatsapp && (
                                        <span id="whatsapp-error" role="alert" className={styles.errorText}>
                                            <AlertCircle size={12} /> {errors.whatsapp}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Business Context (Streamlined & Optional) */}
                            <div className={styles.row2}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="business_name" className={styles.label}>Business Name (Optional)</label>
                                    <input
                                        type="text"
                                        id="business_name"
                                        name="business_name"
                                        value={formData.business_name}
                                        onChange={handleChange}
                                        placeholder="e.g. Acme Brands"
                                        autoComplete="organization"
                                        className={styles.input}
                                    />
                                </div>

                                <div className={styles.inputGroup}>
                                    <label htmlFor="business_type" className={styles.label}>Industry / Category (Optional)</label>
                                    <select
                                        id="business_type"
                                        name="business_type"
                                        value={formData.business_type}
                                        onChange={handleChange}
                                        className={styles.select}
                                    >
                                        <option value="">Select industry</option>
                                        <option value="ecommerce">E-commerce / Retail</option>
                                        <option value="manufacturing">Manufacturer / B2B</option>
                                        <option value="startup">Startup / Tech</option>
                                        <option value="local">Local Service / Clinic</option>
                                        <option value="realestate">Real Estate</option>
                                        <option value="education">Coaching / Education</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            {/* Notes / What are you looking to achieve */}
                            <div className={styles.inputGroup}>
                                <label htmlFor="biggest_challenge" className={styles.label}>
                                    Project Notes or Questions (Optional)
                                </label>
                                <textarea
                                    id="biggest_challenge"
                                    name="biggest_challenge"
                                    rows={2}
                                    value={formData.biggest_challenge}
                                    onChange={handleChange}
                                    placeholder="Briefly describe what you need or any specific features..."
                                    className={styles.textarea}
                                />
                            </div>

                            {/* Expandable Optional Details */}
                            <div>
                                <button
                                    type="button"
                                    onClick={() => setShowMoreDetails(!showMoreDetails)}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        color: '#94a3b8',
                                        fontSize: '0.8rem',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.35rem',
                                        cursor: 'pointer',
                                        padding: '0.25rem 0',
                                        fontFamily: 'inherit'
                                    }}
                                >
                                    {showMoreDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                                    <span>{showMoreDetails ? 'Hide additional details' : 'Add website URL or monthly inquiry volume (optional)'}</span>
                                </button>

                                {showMoreDetails && (
                                    <div className={styles.row2} style={{ marginTop: '0.75rem' }}>
                                        <div className={styles.inputGroup}>
                                            <label htmlFor="website_url" className={styles.label}>Current Website URL (if any)</label>
                                            <input
                                                type="url"
                                                id="website_url"
                                                name="website_url"
                                                value={formData.website_url}
                                                onChange={handleChange}
                                                placeholder="https://yourbusiness.com"
                                                inputMode="url"
                                                autoComplete="url"
                                                autoCapitalize="none"
                                                className={styles.input}
                                            />
                                        </div>
                                        <div className={styles.inputGroup}>
                                            <label htmlFor="monthly_leads" className={styles.label}>Monthly Inquiry Volume</label>
                                            <select
                                                id="monthly_leads"
                                                name="monthly_leads"
                                                value={formData.monthly_leads}
                                                onChange={handleChange}
                                                className={styles.select}
                                            >
                                                <option value="under_50">Under 50 leads / month</option>
                                                <option value="50_200">50 – 200 leads / month</option>
                                                <option value="200_1000">200 – 1,000 leads / month</option>
                                                <option value="1000_plus">1,000+ leads / month</option>
                                            </select>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {status === 'error' && (
                                <div style={{ padding: '0.75rem 1rem', background: 'rgba(239, 68, 68, 0.12)', border: '1px solid rgba(239, 68, 68, 0.35)', borderRadius: '8px', color: '#fca5a5', fontSize: '0.875rem', textAlign: 'center' }}>
                                    Unable to submit enquiry right now. Please <a href="https://wa.me/916261003050?text=Hi%20Bluetick%20Digital%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8', textDecoration: 'underline' }}>message us directly on WhatsApp</a>.
                                </div>
                            )}

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={status === 'loading'}
                                className="btn btn-primary btn-lg"
                                style={{ width: '100%', minHeight: '48px', marginTop: '0.25rem' }}
                                whileHover={{ scale: 1.01, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" /> Submitting Enquiry...
                                    </>
                                ) : (
                                    <>
                                        Send Project Enquiry <Send size={18} />
                                    </>
                                )}
                            </motion.button>

                            {/* WhatsApp Direct Chat Fallback */}
                            <div className={styles.whatsappDirectOption}>
                                <span>Prefer direct chat?</span>
                                <a 
                                    href="https://wa.me/916261003050?text=Hi%20Bluetick%20Digital%2C%20I%20would%20like%20to%20discuss%20a%20project."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.waDirectLink}
                                >
                                    Chat with a Founder on WhatsApp →
                                </a>
                            </div>

                            <div style={{ textAlign: 'center', marginTop: '0.5rem', fontSize: '0.75rem', color: '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                                <ShieldCheck size={13} style={{ color: '#16a34a' }} />
                                <span>256-bit SSL encrypted • Zero spam guarantee</span>
                            </div>

                            <p style={{ textAlign: 'center', marginTop: '0.25rem', fontSize: '0.75rem', color: '#94a3b8', lineHeight: 1.5, margin: '0.25rem 0 0 0' }}>
                                By submitting this form, you agree to our <Link to="/terms" style={{ color: '#38bdf8', textDecoration: 'underline' }}>Terms of Service</Link> and acknowledge our <Link to="/privacy" style={{ color: '#38bdf8', textDecoration: 'underline' }}>Privacy Policy</Link>.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AuditForm;
