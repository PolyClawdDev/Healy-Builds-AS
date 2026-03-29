'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

const PROJECTS = [
  { id:1, cat:'flooring', title:'Oak Parquet', loc:'Bærum', img:'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=900&q=85&fit=crop' },
  { id:2, cat:'painting', title:'Interior Repaint', loc:'Oslo', img:'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=700&q=85&fit=crop' },
  { id:3, cat:'renovation', title:'Full Renovation', loc:'Asker', img:'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=85&fit=crop' },
  { id:4, cat:'outdoor', title:'Hardwood Terrace', loc:'Bærum', img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=85&fit=crop' },
  { id:5, cat:'painting', title:'Exterior Paint', loc:'Drammen', img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=85&fit=crop' },
  { id:6, cat:'flooring', title:'Laminate – Full Home', loc:'Oslo', img:'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=700&q=85&fit=crop' },
]

export default function ProjectsGallery() {
  const { t } = useLanguage()
  const [active, setActive] = useState('all')

  const filters = [
    { key:'all', label: t.projects.all },
    { key:'flooring', label: t.projects.flooring },
    { key:'painting', label: t.projects.painting },
    { key:'renovation', label: t.projects.renovation },
    { key:'outdoor', label: t.projects.outdoor },
  ]

  const items = active === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat === active)

  return (
    <section className="section" style={{ background: '#fff' }}>
      <div className="container-xl">

        <AnimateOnScroll>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <span className="eyebrow" style={{ display: 'block', marginBottom: 12 }}>{t.projects.title}</span>
              <h2 className="heading-xl" style={{ color: '#0a0a0a' }}>{t.projects.subtitle}</h2>
            </div>
            <Link href="/projects" style={{
              display: 'flex', alignItems: 'center', gap: 6,
              color: '#0a0a0a', fontWeight: 700, fontSize: 12,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              textDecoration: 'none', borderBottom: '1px solid #0a0a0a',
              paddingBottom: 2,
            }}>
              {t.projects.viewAll}
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </AnimateOnScroll>

        {/* Filters — horizontally scrollable on mobile */}
        <AnimateOnScroll delay={80}>
          <div style={{
            display: 'flex', gap: 8, marginBottom: 28,
            overflowX: 'auto', paddingBottom: 4,
            msOverflowStyle: 'none', scrollbarWidth: 'none',
          }}>
            {filters.map(f => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                style={{
                  flexShrink: 0,
                  padding: '9px 20px', fontSize: 11, fontWeight: 800,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  border: `2px solid ${active === f.key ? '#0a0a0a' : '#ddd'}`,
                  background: active === f.key ? '#0a0a0a' : 'transparent',
                  color: active === f.key ? '#fff' : '#999',
                  cursor: 'pointer', transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                }}
              >{f.label}</button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Gallery — CSS class handles responsive columns */}
        <div className="grid-gallery">
          {items.slice(0, 6).map((p, i) => (
            <AnimateOnScroll key={p.id} delay={i * 50}>
              <div
                className="proj-item img-zoom"
                style={{ position: 'relative', height: '100%', overflow: 'hidden' }}
              >
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="img-inner"
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 500px) 100vw, (max-width: 860px) 50vw, 33vw"
                />
                {/* Always-visible label on mobile, hover on desktop */}
                <div className="proj-caption" style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 55%)',
                  display: 'flex', alignItems: 'flex-end',
                  padding: '16px 14px',
                }}>
                  <div>
                    <span style={{ display: 'block', color: '#c0392b', fontSize: 10, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 3 }}>{p.cat}</span>
                    <span style={{ color: '#fff', fontWeight: 800, fontSize: 13 }}>{p.title}</span>
                    <span style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: 11 }}>{p.loc}</span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      <style>{`
        .proj-item .proj-caption { opacity: 0; transition: opacity 0.3s; }
        .proj-item:hover .proj-caption { opacity: 1; }
        /* Always show on touch/mobile */
        @media (hover: none) {
          .proj-item .proj-caption { opacity: 1 !important; }
        }
        @media (max-width: 500px) {
          .proj-item .proj-caption { opacity: 1 !important; }
        }
      `}</style>
    </section>
  )
}
