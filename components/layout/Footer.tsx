'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Mail } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  const links = [
    { href: '/', label: t.nav.home },
    { href: '/services', label: t.nav.services },
    { href: '/projects', label: t.nav.projects },
    { href: '/about', label: t.nav.about },
    { href: '/contact', label: t.nav.contact },
  ]

  return (
    <footer style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container-xl">
        <div className="grid-footer">

          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'inline-block', textDecoration: 'none', marginBottom: 20 }}>
              <Image
                src="/logo.png"
                alt="Healy Builds AS"
                width={1154}
                height={472}
                style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)', height: 52, width: 'auto', maxWidth: 200 }}
              />
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: 13, lineHeight: 1.7, maxWidth: 300, marginBottom: 24 }}>
              {t.footer.tagline}
            </p>
            <a href="tel:+4746549432" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.5)', fontSize: 13, textDecoration: 'none', fontWeight: 600 }}>
              <Phone size={13} style={{ color: '#c0392b' }} />
              +47 46 54 94 32
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{ color: 'rgba(255,255,255,0.28)', fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 20 }}>
              {t.footer.links}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 11 }}>
              {links.map(l => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
                    onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color='#fff')}
                    onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color='rgba(255,255,255,0.5)')}
                  >{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: 'rgba(255,255,255,0.28)', fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 20 }}>
              {t.footer.contact}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <a href="tel:+4746549432" style={{ display: 'flex', gap: 10, color: 'rgba(255,255,255,0.5)', fontSize: 13, textDecoration: 'none', alignItems: 'flex-start', fontWeight: 500 }}>
                <Phone size={13} style={{ color: '#c0392b', marginTop: 1, flexShrink: 0 }} />+47 46 54 94 32
              </a>
              <a href="mailto:post@healybuilds.no" style={{ display: 'flex', gap: 10, color: 'rgba(255,255,255,0.5)', fontSize: 13, textDecoration: 'none', alignItems: 'flex-start', fontWeight: 500 }}>
                <Mail size={13} style={{ color: '#c0392b', marginTop: 1, flexShrink: 0 }} />post@healybuilds.no
              </a>
              <div style={{ display: 'flex', gap: 10, color: 'rgba(255,255,255,0.5)', fontSize: 13, alignItems: 'flex-start', fontWeight: 500 }}>
                <MapPin size={13} style={{ color: '#c0392b', marginTop: 1, flexShrink: 0 }} />
                <span>Bjørnekollen 4,<br />1344 Haslum</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '18px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
          <p style={{ color: 'rgba(255,255,255,0.18)', fontSize: 11 }}>
            © {new Date().getFullYear()} Healy Builds AS. {t.footer.rights}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.1)', fontSize: 11 }}>Org. nr. 123 456 789 MVA</p>
        </div>
      </div>
    </footer>
  )
}
