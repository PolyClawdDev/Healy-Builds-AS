'use client'

import Link from 'next/link'
import { Paintbrush, Hammer, LayoutGrid, Home, ChefHat, TreePine, DoorOpen, Layers, ArrowRight, Phone } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

const ICONS = [Paintbrush, Hammer, LayoutGrid, Home, ChefHat, TreePine, DoorOpen, Layers]

const IMGS = [
  'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=700&q=85&fit=crop',
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=85&fit=crop',
  'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=700&q=85&fit=crop',
  'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=85&fit=crop',
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=85&fit=crop',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=85&fit=crop',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=85&fit=crop',
  'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=700&q=85&fit=crop',
]

export default function ServicesPage() {
  const { t } = useLanguage()

  const services = [
    t.services.painting, t.services.carpentry, t.services.flooring,
    t.services.renovation, t.services.kitchen, t.services.outdoor,
    t.services.windows, t.services.microcement,
  ]

  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', background: '#0a0a0a', overflow: 'hidden' }} className="page-hero">
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: '#c0392b' }} />
        <div style={{ position: 'absolute', inset: 0, opacity: 0.12,
          backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=60)',
          backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="container-xl page-hero-content" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow" style={{ display: 'block', marginBottom: 18 }}>Healy Builds AS</span>
          <h1 className="display" style={{ color: '#fff' }}>{t.servicesPage.hero}</h1>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 17, marginTop: 20, maxWidth: 500, lineHeight: 1.65 }}>
            {t.servicesPage.heroSub}
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="section" style={{ background: '#f7f7f4' }}>
        <div className="container-xl">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {services.map((svc, i) => {
              const Icon = ICONS[i]
              return (
                <AnimateOnScroll key={svc.title} delay={i * 50}>
                  <div className="svc-row" style={{
                    background: '#fff', border: '1px solid #e8e8e3',
                    overflow: 'hidden', display: 'flex',
                    transition: 'box-shadow 0.3s',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.boxShadow='0 16px 50px rgba(0,0,0,0.07)')}
                    onMouseLeave={e => (e.currentTarget.style.boxShadow='none')}
                  >
                    {/* Image – hidden on small mobile */}
                    <div className="svc-img img-zoom" style={{ width: 200, flexShrink: 0, position: 'relative', overflow: 'hidden' }}>
                      <img src={IMGS[i]} alt={svc.title} className="img-inner"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.12)' }} />
                    </div>

                    {/* Content */}
                    <div className="svc-content" style={{ padding: '32px 36px', flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 14 }}>
                        <div style={{ width: 46, height: 46, background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background 0.2s' }}
                          onMouseEnter={e => (e.currentTarget.style.background='#c0392b')}
                          onMouseLeave={e => (e.currentTarget.style.background='#0a0a0a')}
                        >
                          <Icon size={19} color="#fff" />
                        </div>
                        <h3 style={{ fontSize: 20, fontWeight: 800, color: '#0a0a0a', letterSpacing: '-0.015em', paddingTop: 4 }}>
                          {svc.title}
                        </h3>
                      </div>
                      <p style={{ fontSize: 14, color: '#6b6b6b', lineHeight: 1.68, marginBottom: 18, maxWidth: 520 }}>
                        {svc.desc}
                      </p>
                      <Link href="/contact" style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        color: '#c0392b', fontWeight: 700, fontSize: 11,
                        letterSpacing: '0.1em', textTransform: 'uppercase',
                        textDecoration: 'none', borderBottom: '1px solid rgba(192,57,43,0.3)', paddingBottom: 2,
                      }}>
                        {t.servicesPage.cta} <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </AnimateOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0a0a0a', padding: '72px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container-xl" style={{ textAlign: 'center' }}>
          <h2 className="heading-lg" style={{ color: '#fff', marginBottom: 14 }}>{t.cta.title}</h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', marginBottom: 36, fontSize: 15 }}>{t.cta.subtitle}</p>
          <div className="svc-cta-btns" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <Link href="/contact" className="btn-red"><ArrowRight size={16} />{t.cta.button}</Link>
            <a href="tel:+4746549432" className="btn-ghost"><Phone size={16} />+47 46 54 94 32</a>
          </div>
        </div>
      </section>

      <style>{`
        .page-hero-content { padding-top: 140px; padding-bottom: 90px; }
        @media (max-width: 640px) {
          .page-hero-content { padding-top: 110px; padding-bottom: 60px; }
        }
        @media (max-width: 600px) {
          .svc-img { display: none !important; }
          .svc-content { padding: 24px 20px !important; }
        }
        @media (max-width: 480px) {
          .svc-cta-btns { flex-direction: column; align-items: stretch; }
          .svc-cta-btns .btn-red, .svc-cta-btns .btn-ghost { width: 100%; justify-content: center; }
        }
      `}</style>
    </>
  )
}
