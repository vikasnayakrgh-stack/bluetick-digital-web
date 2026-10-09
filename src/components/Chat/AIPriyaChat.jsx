import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Sparkles, CheckCircle2, Smile } from 'lucide-react';
import styles from './AIPriyaChat.module.css';
import SafeMarkdown from './SafeMarkdown';

const WEBHOOK_URL = 'https://n8n.srv1179181.hstgr.cloud/webhook/e49f94b2-3263-43f5-b6e0-57e80b718347/chat';

const QUICK_CHIPS = [
  'AI Automation',
  'WhatsApp',
  'Website Development',
  'Talk to Team'
];

const formatCurrentTime = () => {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  const minutesStr = minutes < 10 ? '0' + minutes : minutes;
  return `${hours}:${minutesStr} ${ampm}`;
};

/**
 * AI Priya Bespoke Chatbox Component
 * Matching reference image with 2-column executive profile, suggestion chips, and live n8n AI engine
 */
const AIPriyaChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'init-1',
      sender: 'bot',
      text: "Hi there! 👋\nI'm Priya, your AI Sales Assistant at Bluetick Digital.\n\nHow can I help you today?",
      time: '10:24 AM'
    }
  ]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const sessionIdRef = useRef('');

  // Initialize unique session ID
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let savedSession = sessionStorage.getItem('bluetick_priya_session');
      if (!savedSession) {
        savedSession = 'priya-' + Date.now() + '-' + Math.random().toString(36).substring(2, 8);
        sessionStorage.setItem('bluetick_priya_session', savedSession);
      }
      sessionIdRef.current = savedSession;
    }
  }, []);

  // Global event triggers
  useEffect(() => {
    if (typeof window === 'undefined') return;

    window.openAIPriyaChat = () => setIsOpen(true);
    window.closeAIPriyaChat = () => setIsOpen(false);

    const handleOpen = () => setIsOpen(true);
    window.addEventListener('bluetick:open-ai-chat', handleOpen);

    return () => {
      window.removeEventListener('bluetick:open-ai-chat', handleOpen);
    };
  }, []);

  // Keyboard accessibility and body scroll lock
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen]);

  // Send message to live n8n webhook
  const handleSendMessage = async (textToSend) => {
    const query = (textToSend || inputMessage).trim();
    if (!query || isLoading) return;

    const userMessage = {
      id: 'user-' + Date.now(),
      sender: 'user',
      text: query,
      time: formatCurrentTime()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chatInput: query,
          sessionId: sessionIdRef.current
        })
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();
      const botReply = data.output || data.text || data.message || "Namaste! Main aapki help ke liye available hoon.";

      setMessages((prev) => [
        ...prev,
        {
          id: 'bot-' + Date.now(),
          sender: 'bot',
          text: botReply,
          time: formatCurrentTime()
        }
      ]);
    } catch (err) {
      console.error('[AI Priya Error]:', err);
      setMessages((prev) => [
        ...prev,
        {
          id: 'bot-err-' + Date.now(),
          sender: 'bot',
          text: "Maaf kijiye, abhi server connect nahi ho pa raha hai. Aap direct humare WhatsApp par contact kar sakte hain: +91 62610 03050",
          time: formatCurrentTime()
        }
      ]);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendMessage();
  };

  const handleChipClick = (chipText) => {
    handleSendMessage(chipText);
  };

  return (
    <div 
      className={`${styles.modalOverlay} ${isOpen ? styles.modalVisible : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsOpen(false);
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Priya AI Sales Assistant"
    >
      <div className={styles.modalCard}>
        {/* ============================================
            LEFT PROFILE SIDEBAR (EXACT MATCH TO REFERENCE)
            ============================================ */}
        <aside className={styles.sidebarCol}>
          {/* Avatar with blue ring and online badge */}
          <div className={styles.avatarContainer}>
            <div className={styles.avatarRing}>
              <img 
                src="/assets/priya-large.png" 
                alt="Priya - AI Sales Assistant" 
                className={styles.avatarImg}
                onError={(e) => {
                  e.target.src = '/assets/priya-face.png';
                }}
              />
            </div>
            <div className={styles.onlineBadge}>
              <span className={styles.onlineDot} />
              <span className={styles.onlineText}>Online</span>
            </div>
          </div>

          {/* Profile Name & Title */}
          <div className={styles.profileInfo}>
            <h2 className={styles.profileName}>AI Priya</h2>
            <p className={styles.profileRole}>Senior Sales Agent</p>
            <div className={styles.profileCompany}>
              <span>Bluetick Digital</span>
              <CheckCircle2 size={16} className={styles.verifiedCheck} fill="#1d4ed8" color="#ffffff" />
            </div>
          </div>

          {/* Helper Card */}
          <div className={styles.quoteCard}>
            <Sparkles size={16} className={styles.sparkleIcon} />
            <p className={styles.quoteText}>
              Helping businesses build, automate and scale with AI.
            </p>
          </div>

          {/* Decorative Blue Wave at bottom */}
          <div className={styles.waveWrapper} aria-hidden="true">
            <svg 
              className={styles.waveSvg} 
              viewBox="0 0 290 140" 
              fill="none" 
              preserveAspectRatio="none"
            >
              <path 
                d="M0 60 C70 100, 150 20, 290 50 L290 140 L0 140 Z" 
                fill="url(#waveGrad1)" 
                opacity="0.5" 
              />
              <path 
                d="M0 85 C90 40, 180 120, 290 80 L290 140 L0 140 Z" 
                fill="url(#waveGrad2)" 
              />
              <defs>
                <linearGradient id="waveGrad1" x1="0" y1="0" x2="290" y2="140" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#93c5fd" />
                  <stop offset="1" stopColor="#3b82f6" />
                </linearGradient>
                <linearGradient id="waveGrad2" x1="0" y1="0" x2="290" y2="140" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3b82f6" />
                  <stop offset="1" stopColor="#1d4ed8" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </aside>

        {/* ============================================
            RIGHT CHAT AREA
            ============================================ */}
        <section className={styles.chatCol}>
          {/* Mobile Top Header */}
          <div className={styles.mobileHeader}>
            <div className={styles.mobileHeaderLeft}>
              <img 
                src="/assets/priya-small.png" 
                alt="Priya" 
                className={styles.mobileAvatar}
              />
              <div className={styles.mobileNameWrap}>
                <span className={styles.mobileName}>
                  AI Priya <CheckCircle2 size={13} fill="#1d4ed8" color="#ffffff" />
                </span>
                <span className={styles.mobileSubtitle}>Senior Sales Agent • Online</span>
              </div>
            </div>
            <button 
              type="button" 
              className={styles.closeButton} 
              onClick={() => setIsOpen(false)}
              aria-label="Close Chat"
              style={{ position: 'static' }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Desktop Close Button */}
          <button 
            type="button" 
            className={styles.closeButton} 
            onClick={() => setIsOpen(false)}
            aria-label="Close Chat"
          >
            <X size={22} />
          </button>

          {/* Messages Scroll Area */}
          <div className={styles.messagesContainer}>
            {messages.map((msg) => {
              if (msg.sender === 'bot') {
                return (
                  <div key={msg.id} className={styles.botMessageRow}>
                    <img 
                      src="/assets/priya-small.png" 
                      alt="Priya" 
                      className={styles.botAvatarThumb}
                    />
                    <div className={styles.botBubbleWrap}>
                      <div className={styles.botBubble}>
                        <SafeMarkdown content={msg.text} styles={styles} />
                      </div>
                      <span className={styles.msgTime}>{msg.time}</span>
                    </div>
                  </div>
                );
              }

              return (
                <div key={msg.id} className={styles.userMessageRow}>
                  <div className={styles.userBubble}>
                    {msg.text}
                  </div>
                  <span className={styles.msgTime}>{msg.time}</span>
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isLoading && (
              <div className={styles.typingRow}>
                <img 
                  src="/assets/priya-small.png" 
                  alt="Priya typing" 
                  className={styles.botAvatarThumb}
                />
                <div className={styles.typingBubble}>
                  <span className={styles.typingDot} />
                  <span className={styles.typingDot} />
                  <span className={styles.typingDot} />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className={styles.chipsRow} role="group" aria-label="Suggested questions">
            {QUICK_CHIPS.map((chip, idx) => (
              <button
                key={idx}
                type="button"
                className={styles.chipBtn}
                onClick={() => handleChipClick(chip)}
                disabled={isLoading}
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Bottom Pill Input Bar */}
          <form onSubmit={handleSubmit} className={styles.inputForm}>
            <div className={styles.pillInputBar}>
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className={styles.textInput}
                disabled={isLoading}
              />

              <button 
                type="button" 
                className={styles.inputIconBtn}
                title="Add emoji"
                onClick={() => {
                  setInputMessage((prev) => prev + ' 😊');
                  inputRef.current?.focus();
                }}
                aria-label="Add emoji"
              >
                <Smile size={20} />
              </button>

              <button 
                type="submit" 
                className={styles.sendBtn}
                disabled={!inputMessage.trim() || isLoading}
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AIPriyaChat;
