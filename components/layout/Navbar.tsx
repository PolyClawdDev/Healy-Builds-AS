'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { lang, t, toggleLanguage } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  const links = [
    { href: '/', label: t.nav.home },
    { href: '/services', label: t.nav.services },
    { href: '/projects', label: t.nav.projects },
    { href: '/about', label: t.nav.about },
    { href: '/contact', label: t.nav.contact },
  ]

  const isHome = pathname === '/'
  const isTransparent = isHome && !scrolled

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: isTransparent ? 'transparent' : 'rgba(10,10,10,0.97)',
        backdropFilter: isTransparent ? 'none' : 'blur(20px)',
        WebkitBackdropFilter: isTransparent ? 'none' : 'blur(20px)',
        borderBottom: isTransparent ? 'none' : '1px solid rgba(255,255,255,0.05)',
        transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
      }}>
        {/* Red accent line top */}
        {!isTransparent && (
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: '#c0392b' }} />
        )}

        <div className="container-xl">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>

            {/* Logo */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <Image
                src="/logo.png"
                alt="Healy Builds AS"
                width={1154}
                height={472}
                style={{
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)',
                  height: 52,
                  width: 'auto',
                  maxWidth: 200,
                }}
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="desktop-nav">
              {links.map(l => (
                <Link key={l.href} href={l.href} style={{
                  color: pathname === l.href ? '#c0392b' : 'rgba(255,255,255,0.75)',
                  fontSize: 12, fontWeight: 700, letterSpacing: '0.1em',
                  textTransform: 'uppercase', textDecoration: 'none',
                  transition: 'color 0.2s',
                  borderBottom: pathname === l.href ? '1px solid #c0392b' : '1px solid transparent',
                  paddingBottom: 2,
                }}>
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }} className="desktop-nav">
              {/* Lang toggle */}
              <button onClick={toggleLanguage} style={{
                background: 'transparent', border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.5)', fontSize: 11, fontWeight: 700,
                letterSpacing: '0.1em', padding: '5px 10px', cursor: 'pointer',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.4)'; (e.currentTarget as HTMLButtonElement).style.color = '#fff' }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.15)'; (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.5)' }}
              >
                {lang === 'no' ? 'EN' : 'NO'}
              </button>

              <a href="tel:+4746549432" style={{
                display: 'flex', alignItems: 'center', gap: 7,
                color: 'rgba(255,255,255,0.65)', fontSize: 13, fontWeight: 600,
                textDecoration: 'none', transition: 'color 0.2s',
              }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#fff')}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.65)')}
              >
                <Phone size={13} />
                +47 46 54 94 32
              </a>

              <Link href="/contact" className="btn-red" style={{ fontSize: 11, padding: '10px 20px' }}>
                {t.nav.getQuote}
              </Link>
            </div>

            {/* Mobile: lang + burger */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }} className="mobile-nav">
              <button onClick={toggleLanguage} style={{
                background: 'transparent', border: 'none',
                color: 'rgba(255,255,255,0.5)', fontSize: 11, fontWeight: 700,
                letterSpacing: '0.1em', cursor: 'pointer',
              }}>
                {lang === 'no' ? 'EN' : 'NO'}
              </button>
              <button onClick={() => setOpen(!open)} style={{
                background: 'transparent', border: 'none',
                color: '#fff', cursor: 'pointer', padding: 4,
              }}>
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div style={{
        position: 'fixed', top: 72, left: 0, right: 0, zIndex: 99,
        background: 'rgba(8,8,8,0.82)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        maxHeight: open ? 500 : 0, overflow: 'hidden',
        transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)',
      }}>
        <div style={{ padding: '12px 24px 24px' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '13px 0',
              color: pathname === l.href ? '#c0392b' : 'rgba(255,255,255,0.72)',
              fontWeight: 600, fontSize: 13, letterSpacing: '0.1em',
              textTransform: 'uppercase', textDecoration: 'none',
              borderBottom: '1px solid rgba(255,255,255,0.04)',
            }}>
              {l.label}
              {pathname === l.href && <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#c0392b', display: 'inline-block' }} />}
            </Link>
          ))}
          <div style={{ marginTop: 16, display: 'flex', gap: 10 }}>
            <a href="tel:+4746549432" style={{
              flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
              padding: '11px 0', border: '1px solid rgba(255,255,255,0.12)',
              color: 'rgba(255,255,255,0.65)', fontSize: 12, fontWeight: 600,
              textDecoration: 'none', letterSpacing: '0.04em',
            }}>
              <Phone size={13} /> Ring nå
            </a>
            <Link href="/contact" style={{
              flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '11px 0', background: '#c0392b',
              color: '#fff', fontSize: 12, fontWeight: 700,
              textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase',
            }}>
              {t.nav.getQuote}
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-nav  { display: none  !important; }
        @media (max-width: 1024px) {
          .desktop-nav { display: none  !important; }
          .mobile-nav  { display: flex !important; }
        }
      `}</style>
    </>
  )
}
