'use client'

import Link from 'next/link'
import { Paintbrush, Hammer, LayoutGrid, Home, ChefHat, TreePine, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

const ICONS = [Paintbrush, Hammer, LayoutGrid, Home, ChefHat, TreePine]

export default function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    t.services.painting,
    t.services.carpentry,
    t.services.flooring,
    t.services.renovation,
    t.services.kitchen,
    t.services.outdoor,
  ]

  return (
    <section className="section" style={{ background: '#f7f7f4' }}>
      <div className="container-xl">

        <AnimateOnScroll>
          <div style={{ marginBottom: 52 }}>
            <span className="eyebrow" style={{ display: 'block', marginBottom: 14 }}>{t.services.title}</span>
            <h2 className="heading-xl" style={{ color: '#0a0a0a' }}>
              {t.services.subtitle}
            </h2>
            <span className="red-line" style={{ marginTop: 20, display: 'block' }} />
          </div>
        </AnimateOnScroll>

        {/* Grid — uses CSS class for responsive breakpoints */}
        <div className="grid-3">
          {services.map((svc, i) => {
            const Icon = ICONS[i]
            return (
              <AnimateOnScroll key={svc.title} delay={i * 60}>
                <div className="service-card" style={{ height: '100%' }}>
                  <div style={{
                    fontSize: 10, fontWeight: 800, letterSpacing: '0.2em',
                    color: 'rgba(0,0,0,0.18)', marginBottom: 24, textTransform: 'uppercase',
                  }}>
                    0{i + 1}
                  </div>
                  <div
                    className="svc-icon-box"
                    style={{
                      width: 50, height: 50, background: '#0a0a0a',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: 22, transition: 'background 0.25s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = '#c0392b')}
                    onMouseLeave={e => (e.currentTarget.style.background = '#0a0a0a')}
                  >
                    <Icon size={21} color="#fff" />
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: '#0a0a0a', marginBottom: 10, letterSpacing: '-0.01em' }}>
                    {svc.title}
                  </h3>
                  <p style={{ fontSize: 14, color: '#6b6b6b', lineHeight: 1.65 }}>
                    {svc.desc}
                  </p>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>

        <AnimateOnScroll delay={180}>
          <div style={{ marginTop: 48, display: 'flex', justifyContent: 'flex-end' }}>
            <Link href="/services" className="btn-dark" style={{ fontSize: 12 }}>
              {t.nav.services}
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
