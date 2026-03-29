'use client'

import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export default function CTASection() {
  const { t } = useLanguage()

  return (
    <section style={{ position: 'relative', padding: '90px 0', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=85&fit=crop)',
        backgroundSize: 'cover', backgroundPosition: 'center',
      }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,10,0.88)' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: '#c0392b' }} />

      <div className="container-xl" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <AnimateOnScroll>
          <span className="eyebrow" style={{ display: 'block', marginBottom: 18 }}>Healy Builds AS</span>
          <h2 className="heading-xl" style={{ color: '#fff', marginBottom: 18 }}>
            {t.cta.title}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, lineHeight: 1.6, marginBottom: 40, maxWidth: 520, margin: '0 auto 40px' }}>
            {t.cta.subtitle}
          </p>
          <div className="cta-btns" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <Link href="/contact" className="btn-red" style={{ fontSize: 13 }}>
              <ArrowRight size={16} />{t.cta.button}
            </Link>
            <a href="tel:+4746549432" className="btn-ghost" style={{ fontSize: 13 }}>
              <Phone size={16} />+47 46 54 94 32
            </a>
          </div>
        </AnimateOnScroll>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .cta-btns { flex-direction: column; align-items: stretch; }
          .cta-btns .btn-red, .cta-btns .btn-ghost { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  )
}
