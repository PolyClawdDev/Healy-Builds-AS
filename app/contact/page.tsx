'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle2, Send } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export default function ContactPage() {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: '', phone: '', email: '', project: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1600))
    setStatus('sent')
  }

  const inp: React.CSSProperties = {
    width: '100%', border: '1px solid #e0e0da', background: '#fafaf8',
    padding: '14px 16px', fontSize: 16, color: '#0a0a0a', outline: 'none',
    transition: 'border-color 0.2s', fontFamily: 'inherit', borderRadius: 0,
    WebkitAppearance: 'none',
  }
  const lbl: React.CSSProperties = {
    display: 'block', fontSize: 10, fontWeight: 800, letterSpacing: '0.15em',
    textTransform: 'uppercase', color: '#888', marginBottom: 7,
  }

  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', background: '#0a0a0a', overflow: 'hidden' }} className="page-hero">
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: '#c0392b' }} />
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1,
          backgroundImage: 'url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=60)',
          backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="container-xl page-hero-content" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow" style={{ display: 'block', marginBottom: 18 }}>Healy Builds AS</span>
          <h1 className="display" style={{ color: '#fff' }}>{t.contact.hero}</h1>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 17, marginTop: 20, maxWidth: 460, lineHeight: 1.65 }}>
            {t.contact.heroSub}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section" style={{ background: '#f7f7f4' }}>
        <div className="container-xl">
          <div className="grid-contact">

            {/* Form */}
            <AnimateOnScroll>
              <div style={{ background: '#fff', padding: '44px 36px', border: '1px solid #e8e8e3' }} className="contact-form-pad">
                <h2 style={{ fontSize: 26, fontWeight: 900, color: '#0a0a0a', letterSpacing: '-0.02em', marginBottom: 32 }}>
                  {t.contact.formTitle}
                </h2>

                {status === 'sent' ? (
                  <div style={{ textAlign: 'center', padding: '52px 20px' }}>
                    <div style={{ width: 68, height: 68, background: '#f0fdf4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                      <CheckCircle2 size={34} style={{ color: '#16a34a' }} />
                    </div>
                    <h3 style={{ fontSize: 18, fontWeight: 800, color: '#0a0a0a', marginBottom: 10 }}>{t.contact.sent}</h3>
                    <p style={{ color: '#6b6b6b', fontSize: 14 }}>{t.contact.formSuccess}</p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <div className="grid-form-row">
                      <div>
                        <label style={lbl}>{t.contact.name} *</label>
                        <input type="text" name="name" value={form.name} onChange={onChange} required placeholder="John Doe" style={inp}
                          onFocus={e => (e.target.style.borderColor='#c0392b')}
                          onBlur={e => (e.target.style.borderColor='#e0e0da')} />
                      </div>
                      <div>
                        <label style={lbl}>{t.contact.phone} *</label>
                        <input type="tel" name="phone" value={form.phone} onChange={onChange} required placeholder="+47 XXX XX XXX" style={inp}
                          onFocus={e => (e.target.style.borderColor='#c0392b')}
                          onBlur={e => (e.target.style.borderColor='#e0e0da')} />
                      </div>
                    </div>
                    <div>
                      <label style={lbl}>{t.contact.email}</label>
                      <input type="email" name="email" value={form.email} onChange={onChange} placeholder="your@email.com" style={inp}
                        onFocus={e => (e.target.style.borderColor='#c0392b')}
                        onBlur={e => (e.target.style.borderColor='#e0e0da')} />
                    </div>
                    <div>
                      <label style={lbl}>{t.contact.project} *</label>
                      <textarea name="project" value={form.project} onChange={onChange} required rows={5}
                        placeholder={t.contact.projectPlaceholder}
                        style={{ ...inp, resize: 'none' }}
                        onFocus={e => (e.target.style.borderColor='#c0392b')}
                        onBlur={e => (e.target.style.borderColor='#e0e0da')} />
                    </div>
                    <button type="submit" disabled={status === 'sending'} className="btn-red"
                      style={{ justifyContent: 'center', fontSize: 13, padding: '16px', opacity: status === 'sending' ? 0.7 : 1 }}>
                      {status === 'sending' ? (
                        <><div style={{ width: 15, height: 15, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />{t.contact.sending}</>
                      ) : (
                        <><Send size={15} />{t.contact.send}</>
                      )}
                    </button>
                    <p style={{ color: '#bbb', fontSize: 12, textAlign: 'center' }}>{t.contact.formNote}</p>
                  </form>
                )}
              </div>
            </AnimateOnScroll>

            {/* Info */}
            <AnimateOnScroll delay={150}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ background: '#0a0a0a', padding: '36px 32px' }}>
                  <h2 style={{ color: '#fff', fontSize: 20, fontWeight: 800, marginBottom: 28, letterSpacing: '-0.01em' }}>
                    {t.contact.info}
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
                    {[
                      { Icon: Phone, lbl: t.contact.phone2, val: '+47 46 54 94 32', href: 'tel:+4746549432' },
                      { Icon: Mail, lbl: 'Email', val: 'post@healybuilds.no', href: 'mailto:post@healybuilds.no' },
                      { Icon: MapPin, lbl: t.contact.address, val: 'Bjørnekollen 4,\n1344 Haslum', href: 'https://maps.google.com/?q=Bjørnekollen+4+Haslum' },
                      { Icon: Clock, lbl: t.contact.hours, val: t.contact.hoursText, href: null },
                    ].map(({ Icon, lbl: l, val, href }) => (
                      <div key={l} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                        <div style={{ width: 38, height: 38, background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <Icon size={15} style={{ color: '#c0392b' }} />
                        </div>
                        <div>
                          <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 9, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 3 }}>{l}</div>
                          {href ? (
                            <a href={href} style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, fontWeight: 600, textDecoration: 'none', whiteSpace: 'pre-line' }}>{val}</a>
                          ) : (
                            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, fontWeight: 600, whiteSpace: 'pre-line' }}>{val}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 32, borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 28 }}>
                    <a href="tel:+4746549432" className="btn-red" style={{ width: '100%', justifyContent: 'center', fontSize: 13 }}>
                      <Phone size={15} />{t.hero.cta2}
                    </a>
                  </div>
                </div>

                {/* Map */}
                <div style={{ overflow: 'hidden', height: 200 }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.0!2d10.53!3d59.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e7da8dc4399%3A0x100c3a8d0e7c5b30!2sBj%C3%B8rnekollen%204%2C%201344%20Haslum!5e0!3m2!1sen!2sno!4v1"
                    width="100%" height="200"
                    style={{ border: 0, display: 'block', filter: 'grayscale(100%) contrast(1.1) brightness(0.9)' }}
                    allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        .page-hero-content { padding-top: 140px; padding-bottom: 90px; }
        @media (max-width: 640px) {
          .page-hero-content { padding-top: 110px; padding-bottom: 60px; }
          .contact-form-pad { padding: 28px 20px !important; }
        }
      `}</style>
    </>
  )
}
