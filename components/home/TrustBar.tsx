'use client'

import { Star, Shield, Clock, MapPin } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function TrustBar() {
  const { t } = useLanguage()

  const items = [
    { Icon: Star, label: t.trust.rating, iconStyle: { color: '#f59e0b' } },
    { Icon: Shield, label: t.trust.projects, iconStyle: { color: '#c0392b' } },
    { Icon: Clock, label: t.trust.experience, iconStyle: { color: '#c0392b' } },
    { Icon: MapPin, label: t.trust.areas, iconStyle: { color: '#c0392b' } },
  ]

  return (
    <section style={{ background: '#111', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container-xl">
        <div className="grid-trust">
          {items.map(({ Icon, label, iconStyle }, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: 10, padding: '18px 12px',
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none',
            }}>
              <Icon size={15} style={{ ...iconStyle, flexShrink: 0 }} />
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, fontWeight: 500, lineHeight: 1.3 }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .grid-trust > div { padding: 15px 10px; font-size: 12px; }
          .grid-trust span { font-size: 12px !important; }
        }
      `}</style>
    </section>
  )
}
