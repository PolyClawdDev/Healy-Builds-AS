'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, X } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

const ALL = [
  { id:1, cat:'flooring', title:'Oak Parquet Flooring', loc:'Bærum', year:'2024', img:'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=900&q=85&fit=crop' },
  { id:2, cat:'painting', title:'Interior Repaint', loc:'Oslo', year:'2024', img:'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=700&q=85&fit=crop' },
  { id:3, cat:'renovation', title:'Full Apartment Renovation', loc:'Asker', year:'2024', img:'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=85&fit=crop' },
  { id:4, cat:'outdoor', title:'Hardwood Terrace', loc:'Bærum', year:'2023', img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85&fit=crop' },
  { id:5, cat:'painting', title:'Exterior House Painting', loc:'Drammen', year:'2023', img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=85&fit=crop' },
  { id:6, cat:'flooring', title:'Laminate – Full Home', loc:'Oslo', year:'2024', img:'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=700&q=85&fit=crop' },
  { id:7, cat:'renovation', title:'Bathroom Renovation', loc:'Oslo', year:'2023', img:'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=700&q=85&fit=crop' },
  { id:8, cat:'outdoor', title:'Garden Pergola', loc:'Asker', year:'2024', img:'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=700&q=85&fit=crop' },
  { id:9, cat:'painting', title:'Hallway & Staircase', loc:'Bærum', year:'2024', img:'https://images.unsplash.com/photo-1618219944342-824e40a13285?w=700&q=85&fit=crop' },
  { id:10, cat:'renovation', title:'Kitchen Renovation', loc:'Oslo', year:'2023', img:'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=85&fit=crop' },
]

export default function ProjectsPage() {
  const { t } = useLanguage()
  const [active, setActive] = useState('all')
  const [light, setLight] = useState<typeof ALL[0] | null>(null)

  const filters = [
    { key:'all', label: t.projects.all },
    { key:'flooring', label: t.projects.flooring },
    { key:'painting', label: t.projects.painting },
    { key:'renovation', label: t.projects.renovation },
    { key:'outdoor', label: t.projects.outdoor },
  ]

  const items = active === 'all' ? ALL : ALL.filter(p => p.cat === active)

  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', background: '#0a0a0a', overflow: 'hidden' }} className="page-hero">
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: '#c0392b' }} />
        <div style={{ position: 'absolute', inset: 0, opacity: 0.12,
          backgroundImage: 'url(https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=1920&q=60)',
          backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="container-xl page-hero-content" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow" style={{ display: 'block', marginBottom: 18 }}>Healy Builds AS</span>
          <h1 className="display" style={{ color: '#fff' }}>{t.projectsPage.hero}</h1>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 17, marginTop: 20, maxWidth: 500, lineHeight: 1.65 }}>
            {t.projectsPage.heroSub}
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container-xl">
          {/* Filters — scrollable on mobile */}
          <AnimateOnScroll>
            <div style={{
              display: 'flex', gap: 8, marginBottom: 36,
              overflowX: 'auto', paddingBottom: 4,
              msOverflowStyle: 'none', scrollbarWidth: 'none',
            }}>
              {filters.map(f => (
                <button key={f.key} onClick={() => setActive(f.key)} style={{
                  flexShrink: 0, padding: '9px 20px', fontSize: 11, fontWeight: 800,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  border: `2px solid ${active === f.key ? '#0a0a0a' : '#ddd'}`,
                  background: active === f.key ? '#0a0a0a' : 'transparent',
                  color: active === f.key ? '#fff' : '#999',
                  cursor: 'pointer', transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>{f.label}</button>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Masonry */}
          <div className="proj-masonry">
            {items.map((p, i) => (
              <AnimateOnScroll key={p.id} delay={i * 40}>
                <div onClick={() => setLight(p)} className="proj-masonry-item" style={{ cursor: 'pointer', position: 'relative', overflow: 'hidden', marginBottom: 6 }}>
                  <img src={p.img} alt={p.title} style={{ width: '100%', display: 'block', transition: 'transform 0.6s ease' }} />
                  <div className="proj-overlay" style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 55%)',
                    display: 'flex', alignItems: 'flex-end', padding: '16px 14px',
                  }}>
                    <div>
                      <span style={{ display: 'block', color: '#c0392b', fontSize: 9, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 3 }}>{p.cat}</span>
                      <span style={{ color: '#fff', fontWeight: 800, fontSize: 13 }}>{p.title}</span>
                      <span style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: 11 }}>{p.loc} · {p.year}</span>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#f7f7f4', padding: '72px 0', borderTop: '1px solid #e8e8e3' }}>
        <div className="container-xl" style={{ textAlign: 'center' }}>
          <h2 className="heading-lg" style={{ color: '#0a0a0a', marginBottom: 12 }}>{t.cta.title}</h2>
          <p style={{ color: '#6b6b6b', marginBottom: 32, fontSize: 15 }}>{t.cta.subtitle}</p>
          <Link href="/contact" className="btn-red"><ArrowRight size={16} />{t.cta.button}</Link>
        </div>
      </section>

      {/* Lightbox */}
      {light && (
        <div onClick={() => setLight(null)} style={{
          position: 'fixed', inset: 0, zIndex: 500, background: 'rgba(0,0,0,0.93)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px',
        }}>
          <button onClick={() => setLight(null)} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', padding: 8 }}>
            <X size={28} />
          </button>
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: 860, width: '100%' }}>
            <img src={light.img} alt={light.title} style={{ width: '100%', maxHeight: '76vh', objectFit: 'contain', display: 'block' }} />
            <div style={{ textAlign: 'center', marginTop: 16 }}>
              <p style={{ color: '#fff', fontWeight: 800, fontSize: 17 }}>{light.title}</p>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>{light.loc} · {light.year}</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .page-hero-content { padding-top: 140px; padding-bottom: 90px; }
        @media (max-width: 640px) { .page-hero-content { padding-top: 110px; padding-bottom: 60px; } }

        .proj-masonry { columns: 3; column-gap: 6px; }
        .proj-masonry-item img { transition: transform 0.6s ease; }
        .proj-masonry-item:hover img { transform: scale(1.04); }
        .proj-overlay { opacity: 0; transition: opacity 0.3s; }
        .proj-masonry-item:hover .proj-overlay { opacity: 1; }

        /* Always show labels on touch devices */
        @media (hover: none), (max-width: 640px) {
          .proj-overlay { opacity: 1 !important; }
        }
        @media (max-width: 860px) { .proj-masonry { columns: 2; } }
        @media (max-width: 480px) { .proj-masonry { columns: 1; } }
      `}</style>
    </>
  )
}
