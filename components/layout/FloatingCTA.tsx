'use client'

import { Phone, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useState, useEffect } from 'react'

export default function FloatingCTA() {
  const { t } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{
      position: 'fixed', bottom: 20, right: 16, zIndex: 200,
      display: 'flex', flexDirection: 'column', gap: 10,
      transition: 'all 0.5s cubic-bezier(0.4,0,0.2,1)',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(20px)',
      pointerEvents: visible ? 'auto' : 'none',
    }}>
      {/* WhatsApp */}
      <a
        href="https://wa.me/4746549432"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        style={{
          width: 46, height: 46, borderRadius: '50%',
          background: '#25D366',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', textDecoration: 'none',
          boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
          transition: 'transform 0.2s',
        }}
        onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.transform='scale(1.1)')}
        onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.transform='scale(1)')}
      >
        <MessageCircle size={20} />
      </a>

      {/* Call pill — always visible on mobile, icon only on desktop */}
      <a
        href="tel:+4746549432"
        aria-label="Call Now"
        className="floating-call"
        style={{
          display: 'flex', alignItems: 'center', gap: 8,
          background: '#c0392b', color: '#fff', textDecoration: 'none',
          fontWeight: 800, fontSize: 13, letterSpacing: '0.04em',
          boxShadow: '0 8px 32px rgba(192,57,43,0.45)',
          transition: 'all 0.2s',
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background='#e74c3c'; (e.currentTarget as HTMLAnchorElement).style.transform='translateY(-2px)' }}
        onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background='#c0392b'; (e.currentTarget as HTMLAnchorElement).style.transform='translateY(0)' }}
      >
        <Phone size={16} />
        <span className="call-label">{t.floating}</span>
      </a>

      <style>{`
        /* Mobile: pill with text */
        .floating-call {
          padding: 12px 20px;
          border-radius: 40px;
        }
        .call-label { display: inline; }

        /* Desktop: just icon circle */
        @media (min-width: 768px) {
          .floating-call {
            width: 46px;
            height: 46px;
            border-radius: 50%;
            padding: 0;
            justify-content: center;
          }
          .call-label { display: none; }
        }
      `}</style>
    </div>
  )
}
