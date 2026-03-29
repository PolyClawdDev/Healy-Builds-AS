'use client'

import Link from 'next/link'
import { Phone, ArrowRight, Star, ChevronDown } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section style={{ position: 'relative', minHeight: '100svh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>

      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute', inset: 0, zIndex: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      >
        <source src="/hero-bg.webm" type="video/webm" />
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(105deg, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.68) 55%, rgba(0,0,0,0.50) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, rgba(0,0,0,0.70) 0%, transparent 55%)' }} />

      {/* Red top bar */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: '#c0392b', zIndex: 10 }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 5, width: '100%' }}>
        <div className="container-xl hero-content">

          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.12)',
            padding: '8px 16px', marginBottom: 28,
          }}>
            <div style={{ display: 'flex', gap: 2 }}>
              {[0,1,2,3,4].map(i => (
                <Star key={i} size={12} style={{ fill: '#f59e0b', color: '#f59e0b' }} />
              ))}
            </div>
            <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              {t.hero.badge}
            </span>
          </div>

          {/* Headline */}
          <h1 style={{ color: '#fff', marginBottom: 20 }} className="display hero-headline">
            <span style={{ display: 'block' }}>{t.hero.headline}</span>
            <span style={{
              display: 'block',
              background: 'linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              paddingBottom: '0.1em',
            }}>
              {t.hero.headline2}
            </span>
          </h1>

          {/* Subtext */}
          <p className="hero-sub" style={{ color: 'rgba(255,255,255,0.62)', lineHeight: 1.65, marginBottom: 40, fontWeight: 400 }}>
            {t.hero.subtext}
          </p>

          {/* CTAs */}
          <div className="hero-ctas" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 56 }}>
            <Link href="/contact" className="btn-red" style={{ fontSize: 13 }}>
              <ArrowRight size={16} />
              {t.hero.cta1}
            </Link>
            <a href="tel:+4746549432" className="btn-ghost" style={{ fontSize: 13 }}>
              <Phone size={16} />
              {t.hero.cta2}
            </a>
          </div>

          {/* Stats */}
          <div className="hero-stats" style={{ display: 'flex', flexWrap: 'wrap', gap: 0 }}>
            {[
              { val: '4.8★', sub: t.heroStats.reviews },
              { val: '123+', sub: t.heroStats.projects },
              { val: '15+', sub: t.heroStats.years },
            ].map((s, i) => (
              <div key={i} style={{
                paddingRight: 28, marginRight: 28,
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.12)' : 'none',
              }}>
                <div style={{ color: '#fff', fontSize: 26, fontWeight: 900, lineHeight: 1, letterSpacing: '-0.02em' }}>{s.val}</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10, marginTop: 5, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
        zIndex: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
      }}>
        <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700 }}>Scroll</span>
        <ChevronDown size={15} style={{ color: 'rgba(255,255,255,0.2)' }} />
      </div>

      {/* Fade to white */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, background: 'linear-gradient(to top, #fff 0%, transparent 100%)', zIndex: 4, pointerEvents: 'none' }} />

      <style>{`
        .hero-content {
          padding-top: 110px;
          padding-bottom: 90px;
        }
        .hero-sub { font-size: 17px; max-width: 500px; }
        @media (max-width: 640px) {
          .hero-content { padding-top: 100px; padding-bottom: 80px; }
          .hero-sub { font-size: 15px; }
          .hero-ctas { flex-direction: column; }
          .hero-ctas .btn-red,
          .hero-ctas .btn-ghost { width: 100%; justify-content: center; padding: 16px 24px; }
          .hero-stats > div { padding-right: 20px !important; margin-right: 20px !important; }
          .hero-stats > div > div:first-child { font-size: 22px !important; }
        }
      `}</style>
    </section>
  )
}
