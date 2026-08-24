import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, ShieldCheck, Sparkles, ArrowRight, ArrowLeft, Loader2, AlertCircle, Zap } from 'lucide-react';
import { MOTION_TOKENS } from '../../constants/motionTokens';
import { Link } from 'react-router-dom';
import styles from './AuditForm.module.css';
import { supabase } from '../../supabaseClient';

const REQUIREMENT_OPTIONS = [
    { value: 'new_website', label: 'New Website' },
    { value: 'ecommerce_store', label: 'E-commerce' },
    { value: 'ai_automation', label: 'AI Automation' },
    { value: 'whatsapp_automation', label: 'WhatsApp API' },
    { value: 'website_plus_automation', label: 'Web + AI Combo' },
    { value: 'not_sure', label: 'Need Advice' },
];

const AuditForm = () => {
    const [status, setStatus] = useState('idle'); // idle, loading, success
    const [step, setStep] = useState(1);
    const [hasError, setHasError] = useState(false);
    const [errors, setErrors] = useState({});

    // Field refs for accessible focus management
    const nameInputRef = useRef(null);
    const businessNameRef = useRef(null);
    const whatsappRef = useRef(null);
    const businessTypeRef = useRef(null);
    const requirementRef = useRef(null);

    // Form field states
    const [formData, setFormData] = useState({
        name: '',
        business_name: '',
        whatsapp: '',
        website_url: '',
        business_type: '',
        requirement: '',
        monthly_leads: 'under_50',
        biggest_challenge: '',
    });

    useEffect(() => {
        const parseIntentFromHash = () => {
            const hash = window.location.hash;
            if (!hash.includes('?')) return;
            const queryString = hash.split('?')[1];
            const params = new URLSearchParams(queryString);
            const req = params.get('req');
            const validValues = ['new_website', 'ecommerce_store', 'ai_automation', 'whatsapp_automation', 'website_plus_automation', 'not_sure', 'custom'];
            if (req && validValues.includes(req)) {
                setFormData(prev => ({ ...prev, requirement: req === 'custom' ? 'not_sure' : req }));
            }
        };

        parseIntentFromHash();
        window.addEventListener('hashchange', parseIntentFromHash);
        return () => window.removeEventListener('hashchange', parseIntentFromHash);
    }, []);


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

    const handleNextStep = (e) => {
        if (e) e.preventDefault();
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Please enter your full name';
        }
        if (!formData.business_name.trim()) {
            newErrors.business_name = 'Please enter your business or company name';
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

            // Move focus to first invalid field
            if (newErrors.name) nameInputRef.current?.focus();
            else if (newErrors.business_name) businessNameRef.current?.focus();
            else if (newErrors.whatsapp) whatsappRef.current?.focus();
            return;
        }

        setErrors({});
        setStep(2);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.business_type) {
            newErrors.business_type = 'Please select your industry or business type';
        }
        if (!formData.requirement) {
            newErrors.requirement = 'Please select your primary requirement';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setHasError(true);
            setTimeout(() => setHasError(false), 300);

            if (newErrors.business_type) businessTypeRef.current?.focus();
            else if (newErrors.requirement) requirementRef.current?.focus();
            return;
        }

        setStatus('loading');

        const payload = {
            name: formData.name.trim(),
            business_name: formData.business_name.trim(),
            phone: formData.whatsapp.trim(),
            website_url: formData.website_url.trim() || null,
            business_type: formData.business_type,
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
                        style={{ textAlign: 'center', padding: '3rem 2rem', background: '#1e293b', borderRadius: '12px', maxWidth: '640px', margin: '0 auto' }}
                    >
                        <CheckCircle2 size={64} style={{ color: '#16a34a', margin: '0 auto 1rem auto' }} />
                        <h3 className={styles.successTitle} style={{ color: '#fff', fontSize: '1.75rem', marginBottom: '1rem' }}>Audit Request Received!</h3>
                        <p className={styles.successText} style={{ color: '#94a3b8', marginBottom: '2rem' }}>
                            Thank you for submitting your details. Our Senior Technical Architect will analyze your digital presence and send a custom Website & Automation Audit report via WhatsApp within 24 hours.
                        </p>
                        <button onClick={() => { setStatus('idle'); setStep(1); setFormData({ name: '', business_name: '', whatsapp: '', website_url: '', business_type: '', requirement: '', monthly_leads: 'under_50', biggest_challenge: '' }); setErrors({}); }} className="btn btn-outline" style={{ color: '#fff', borderColor: '#475569' }}>
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
                        <span className={styles.watermarkNumberDark}>07</span>
                        <span className="section-badge section-badge-dark">
                            <Sparkles size={14} /> Free Growth Assessment
                        </span>
                        <h2 className={styles.infoTitle}>
                            Get Your Free Website & Automation Audit.
                        </h2>
                        <p className={styles.infoDesc}>
                            Tell us about your business goals and current setup. We’ll analyze your website, identify automation opportunities, and send you an actionable roadmap.
                        </p>

                        <div className={styles.benefitList}>
                            <motion.div className={styles.benefitItem} whileHover={{ x: 4 }}>
                                <CheckCircle2 size={18} className={styles.checkIcon} />
                                <div>
                                    <span className={styles.benefitHeading}>UX & Speed Analysis</span>
                                    <span className={styles.benefitSub}>Mobile optimization & conversion gaps</span>
                                </div>
                            </motion.div>
                            <motion.div className={styles.benefitItem} whileHover={{ x: 4 }}>
                                <CheckCircle2 size={18} className={styles.checkIcon} />
                                <div>
                                    <span className={styles.benefitHeading}>AI Automation Mapping</span>
                                    <span className={styles.benefitSub}>Where AI can eliminate manual work</span>
                                </div>
                            </motion.div>
                            <motion.div className={styles.benefitItem} whileHover={{ x: 4 }}>
                                <CheckCircle2 size={18} className={styles.checkIcon} />
                                <div>
                                    <span className={styles.benefitHeading}>Custom Architecture Plan</span>
                                    <span className={styles.benefitSub}>Exact stack recommendation & pricing</span>
                                </div>
                            </motion.div>
                        </div>

                        <div className={styles.guaranteeBox}>
                            <ShieldCheck size={20} className={styles.shieldIcon} />
                            <span>100% Confidential • No Sales Pressure • Delivered in 24 Hours</span>
                        </div>
                    </motion.div>

                    {/* Audit Form Card */}
                    <motion.div
                        className={styles.formCard}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: MOTION_TOKENS.ease.outExpo }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                            <h3 className={styles.formHeader} style={{ margin: 0, paddingBottom: 0, borderBottom: 'none' }}>Request Your Free Audit</h3>
                            <span style={{ fontSize: '0.85rem', fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--color-brand)' }}>
                                STEP {step} OF 2
                            </span>
                        </div>

                        <form onSubmit={handleSubmit} noValidate className={styles.form}>
                            <AnimatePresence mode="wait" initial={false}>
                                {step === 1 ? (
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, x: -24 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -24 }}
                                        transition={{ duration: 0.25, ease: MOTION_TOKENS.ease.outExpo }}
                                        style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                                    >
                                        {formData.requirement && (
                                            <div className={styles.contextualBadge}>
                                                <Zap size={13} />
                                                <span>Pre-selected: {REQUIREMENT_OPTIONS.find(o => o.value === formData.requirement)?.label || formData.requirement}</span>
                                            </div>
                                        )}

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
                                                 <label htmlFor="business_name" className={styles.label}>Business Name *</label>
                                                 <input
                                                     ref={businessNameRef}
                                                     type="text"
                                                     id="business_name"
                                                     name="business_name"
                                                     value={formData.business_name}
                                                     onChange={handleChange}
                                                     placeholder="Acme Brands"
                                                     autoComplete="organization"
                                                     required
                                                     aria-required="true"
                                                     aria-invalid={!!errors.business_name}
                                                     aria-describedby={errors.business_name ? "business-error" : undefined}
                                                     className={`${styles.input} ${errors.business_name ? styles.inputError : ''}`}
                                                 />
                                                 {errors.business_name && (
                                                     <span id="business-error" role="alert" className={styles.errorText}>
                                                         <AlertCircle size={12} /> {errors.business_name}
                                                     </span>
                                                 )}
                                             </div>
                                         </div>

                                         <div className={styles.row2}>
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
                                             <div className={styles.inputGroup}>
                                                 <label htmlFor="website_url" className={styles.label}>Website URL (if existing)</label>
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
                                         </div>

                                         <motion.button
                                             type="button"
                                             onClick={handleNextStep}
                                             className="btn btn-primary btn-lg"
                                             style={{ width: '100%', marginTop: '0.5rem', minHeight: '48px' }}
                                             whileHover={{ scale: 1.01, y: -2 }}
                                             whileTap={{ scale: 0.97 }}
                                         >
                                             Next: Business Specifications <ArrowRight size={18} />
                                         </motion.button>

                                         <div className={styles.whatsappDirectOption}>
                                             <span>Prefer direct chat?</span>
                                             <a 
                                                 href="https://wa.me/916261003050?text=Hi%20Bluetick%20Digital%2C%20I%20would%20like%20to%20request%20a%20Free%20Website%20%26%20Automation%20Audit."
                                                 target="_blank"
                                                 rel="noopener noreferrer"
                                                 className={styles.waDirectLink}
                                             >
                                                 Chat with a Founder on WhatsApp →
                                             </a>
                                         </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0, x: 24 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 24 }}
                                        transition={{ duration: 0.25, ease: MOTION_TOKENS.ease.outExpo }}
                                        style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                                    >
                                        <div className={styles.row2}>
                                            <div className={styles.inputGroup}>
                                                <label htmlFor="business_type" className={styles.label}>Business Type *</label>
                                                <select
                                                    ref={businessTypeRef}
                                                    id="business_type"
                                                    name="business_type"
                                                    value={formData.business_type}
                                                    onChange={handleChange}
                                                    required
                                                    aria-required="true"
                                                    aria-invalid={!!errors.business_type}
                                                    aria-describedby={errors.business_type ? "type-error" : undefined}
                                                    className={`${styles.select} ${errors.business_type ? styles.inputError : ''}`}
                                                >
                                                    <option value="">Select industry</option>
                                                    <option value="ecommerce">E-commerce Brand</option>
                                                    <option value="manufacturing">Manufacturer / B2B</option>
                                                    <option value="startup">Startup / Tech</option>
                                                    <option value="local">Local Business</option>
                                                    <option value="realestate">Real Estate</option>
                                                    <option value="education">Coaching / Education</option>
                                                    <option value="other">Other</option>
                                                </select>
                                                {errors.business_type && (
                                                    <span id="type-error" role="alert" className={styles.errorText}>
                                                        <AlertCircle size={12} /> {errors.business_type}
                                                    </span>
                                                )}
                                            </div>

                                            <div className={styles.inputGroup}>
                                                 <label htmlFor="requirement" className={styles.label}>What do you need? *</label>

                                                 {/* Accessible 1-tap pill selectors for instant mobile selection */}
                                                 <div className={styles.reqPillsGrid} role="group" aria-label="Primary need selector">
                                                     {REQUIREMENT_OPTIONS.map((opt) => {
                                                         const isSelected = formData.requirement === opt.value;
                                                         return (
                                                             <button
                                                                 key={opt.value}
                                                                 type="button"
                                                                 className={`${styles.reqPill} ${isSelected ? styles.reqPillActive : ''}`}
                                                                 onClick={() => {
                                                                     setFormData(prev => ({ ...prev, requirement: opt.value }));
                                                                     if (errors.requirement) {
                                                                         setErrors(prev => {
                                                                             const next = { ...prev };
                                                                             delete next.requirement;
                                                                             return next;
                                                                         });
                                                                     }
                                                                 }}
                                                                 aria-pressed={isSelected}
                                                             >
                                                                 {opt.label}
                                                             </button>
                                                         );
                                                     })}
                                                 </div>

                                                 <select
                                                     ref={requirementRef}
                                                     id="requirement"
                                                     name="requirement"
                                                     value={formData.requirement}
                                                     onChange={handleChange}
                                                     required
                                                     aria-required="true"
                                                     aria-invalid={!!errors.requirement}
                                                     aria-describedby={errors.requirement ? "req-error" : undefined}
                                                     className={`${styles.select} ${errors.requirement ? styles.inputError : ''}`}
                                                     style={{ marginTop: '0.5rem' }}
                                                 >
                                                     <option value="">Select primary need (or tap a pill above)</option>
                                                     <option value="new_website">New Business Website</option>
                                                     <option value="ecommerce_store">E-commerce Website</option>
                                                     <option value="ai_automation">AI & Workflow Automation</option>
                                                     <option value="whatsapp_automation">WhatsApp API</option>
                                                     <option value="website_plus_automation">Website + AI Automation System</option>
                                                     <option value="not_sure">Not sure (Need Advice)</option>
                                                 </select>
                                                 {errors.requirement && (
                                                     <span id="req-error" role="alert" className={styles.errorText}>
                                                         <AlertCircle size={12} /> {errors.requirement}
                                                     </span>
                                                 )}
                                             </div>
                                        </div>

                                        <div className={styles.inputGroup}>
                                            <label htmlFor="monthly_leads" className={styles.label}>Monthly Enquiries / Traffic Volume</label>
                                            <select id="monthly_leads" name="monthly_leads" value={formData.monthly_leads} onChange={handleChange} className={styles.select}>
                                                <option value="under_50">Under 50 leads / month</option>
                                                <option value="50_200">50 – 200 leads / month</option>
                                                <option value="200_1000">200 – 1,000 leads / month</option>
                                                <option value="1000_plus">1,000+ leads / month</option>
                                            </select>
                                        </div>

                                        <div className={styles.inputGroup}>
                                            <label htmlFor="biggest_challenge" className={styles.label}>Biggest Business / Website Challenge</label>
                                            <textarea id="biggest_challenge" name="biggest_challenge" rows={3} value={formData.biggest_challenge} onChange={handleChange} placeholder="e.g. Low website conversions, slow lead follow-ups..." className={styles.textarea}></textarea>
                                        </div>

                                        {status === 'error' && (
                                            <div style={{ padding: '0.75rem 1rem', background: 'rgba(239, 68, 68, 0.12)', border: '1px solid rgba(239, 68, 68, 0.35)', borderRadius: '8px', color: '#fca5a5', fontSize: '0.875rem', marginBottom: '0.75rem', textAlign: 'center' }}>
                                                Unable to submit request. Please try again or <a href="https://wa.me/916261003050?text=Hi,%20I'd%20like%20to%20request%20a%20free%20growth%20audit" target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8', textDecoration: 'underline' }}>chat directly on WhatsApp</a>.
                                            </div>
                                        )}

                                        <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                                            <motion.button
                                                type="button"
                                                onClick={() => { setStep(1); setErrors({}); }}
                                                className="btn btn-outline"
                                                style={{ flex: '0 0 auto', minHeight: '48px' }}
                                                whileHover={{ scale: 1.01, y: -2 }}
                                                whileTap={{ scale: 0.97 }}
                                            >
                                                <ArrowLeft size={16} /> Back
                                            </motion.button>
                                            <motion.button
                                                type="submit"
                                                disabled={status === 'loading'}
                                                className="btn btn-primary btn-lg"
                                                style={{ flex: 1, minHeight: '48px' }}
                                                whileHover={{ scale: 1.01, y: -2 }}
                                                whileTap={{ scale: 0.97 }}
                                            >
                                                {status === 'loading' ? (
                                                    <>
                                                        <Loader2 size={18} className="animate-spin" /> Submitting...
                                                    </>
                                                ) : (
                                                    <>
                                                        Generate My Growth Roadmap <Send size={18} />
                                                    </>
                                                )}
                                            </motion.button>
                                        </div>

                                        <div style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.75rem', color: '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                                            <ShieldCheck size={13} style={{ color: '#16a34a' }} />
                                            <span>256-bit SSL encrypted • Zero spam guarantee</span>
                                        </div>

                                        <p style={{ textAlign: 'center', marginTop: '0.5rem', fontSize: '0.75rem', color: '#94a3b8', lineHeight: 1.5, margin: '0.5rem 0 0 0' }}>
                                            By submitting this form, you agree to our <Link to="/terms" style={{ color: '#38bdf8', textDecoration: 'underline' }}>Terms of Service</Link> and acknowledge our <Link to="/privacy" style={{ color: '#38bdf8', textDecoration: 'underline' }}>Privacy Policy</Link>.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AuditForm;

