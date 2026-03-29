'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, Award, Users, Clock, Star } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export default function AboutPage() {
  const { t } = useLanguage()

  const values = [
    { Icon: CheckCircle2, title: t.about.value1Title, text: t.about.value1Text },
    { Icon: Users,        title: t.about.value2Title, text: t.about.value2Text },
    { Icon: Award,        title: t.about.value3Title, text: t.about.value3Text },
    { Icon: Clock,        title: t.about.value4Title, text: t.about.value4Text },
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
          <h1 className="display" style={{ color: '#fff' }}>{t.about.hero}</h1>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 17, marginTop: 20, maxWidth: 500, lineHeight: 1.65 }}>
            {t.about.heroSub}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: '#111', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container-xl">
          <div className="grid-stats">
            {[
              { val: '15+', lbl: t.stats.yearsExp },
              { val: '123+', lbl: t.stats.projectsDone },
              { val: '4.8★', lbl: t.stats.avgRating },
              { val: '79', lbl: t.stats.happyClients },
            ].map((s, i) => (
              <div key={s.lbl} style={{
                textAlign: 'center', padding: '32px 16px',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              }}>
                <div style={{ color: '#fff', fontSize: 36, fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1 }}>{s.val}</div>
                <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 7 }}>{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container-xl">
          <div className="grid-2">
            <AnimateOnScroll>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden' }}>
                  <Image
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=85&fit=crop"
                    alt="Ben Healy at work" fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 860px) 100vw, 50vw"
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)' }} />
                </div>
                <div style={{ position: 'absolute', bottom: -20, right: -16, background: '#c0392b', color: '#fff', padding: '22px 26px', boxShadow: '0 20px 50px rgba(192,57,43,0.4)' }}>
                  <div style={{ fontSize: 34, fontWeight: 900, lineHeight: 1 }}>15+</div>
                  <div style={{ fontSize: 11, fontWeight: 600, opacity: 0.8, marginTop: 4, lineHeight: 1.3 }}>Years<br/>Experience</div>
                </div>
                <div style={{ position: 'absolute', top: -16, left: -16, background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.08)', padding: '16px 20px', boxShadow: '0 20px 50px rgba(0,0,0,0.4)' }}>
                  <div style={{ display: 'flex', gap: 3, marginBottom: 5 }}>
                    {[0,1,2,3,4].map(j => <Star key={j} size={12} style={{ fill: '#f59e0b', color: '#f59e0b' }} />)}
                  </div>
                  <div style={{ color: '#fff', fontWeight: 800, fontSize: 17 }}>4.8 / 5.0</div>
                  <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11, marginTop: 2 }}>79 reviews</div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={150}>
              <div>
                <span className="eyebrow" style={{ display: 'block', marginBottom: 18 }}>{t.about.story}</span>
                <h2 className="heading-xl" style={{ color: '#0a0a0a', marginBottom: 28 }}>
                  {t.about.storyHeadline}{' '}
                  <span style={{ background: 'linear-gradient(135deg, #c0392b, #e74c3c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {t.about.storyHeadlineAccent}
                  </span>
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {[t.about.storyText1, t.about.storyText2, t.about.storyText3].map((txt, i) => (
                    <p key={i} style={{ fontSize: 15, color: '#5a5a5a', lineHeight: 1.75 }}>{txt}</p>
                  ))}
                </div>
                <div style={{ marginTop: 36 }}>
                  <Link href="/contact" className="btn-red"><ArrowRight size={16} />{t.nav.getQuote}</Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: '#f7f7f4' }}>
        <div className="container-xl">
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <span className="eyebrow" style={{ display: 'block', marginBottom: 14 }}>{t.about.values}</span>
              <h2 className="heading-xl" style={{ color: '#0a0a0a' }}>{t.about.values}</h2>
              <span className="red-line" style={{ margin: '20px auto 0', display: 'block' }} />
            </div>
          </AnimateOnScroll>
          <div className="grid-4">
            {values.map(({ Icon, title, text }, i) => (
              <AnimateOnScroll key={title} delay={i * 80}>
                <div style={{
                  background: '#fff', padding: '36px 28px',
                  borderTop: '3px solid transparent', transition: 'all 0.3s',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderTopColor='#c0392b'; (e.currentTarget as HTMLDivElement).style.boxShadow='0 16px 50px rgba(0,0,0,0.08)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderTopColor='transparent'; (e.currentTarget as HTMLDivElement).style.boxShadow='none' }}
                >
                  <div style={{ width: 48, height: 48, background: '#f7f7f4', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                    <Icon size={21} style={{ color: '#c0392b' }} />
                  </div>
                  <h3 style={{ fontSize: 15, fontWeight: 800, color: '#0a0a0a', marginBottom: 8 }}>{title}</h3>
                  <p style={{ fontSize: 14, color: '#6b6b6b', lineHeight: 1.65 }}>{text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ background: '#0a0a0a' }}>
        <div className="container-xl">
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: 60 }}>
              <span className="eyebrow" style={{ display: 'block', marginBottom: 14 }}>{t.about.team}</span>
              <h2 className="heading-xl" style={{ color: '#fff' }}>{t.about.team}</h2>
              <p style={{ color: 'rgba(255,255,255,0.35)', marginTop: 14, fontSize: 15 }}>{t.about.teamSub}</p>
            </div>
          </AnimateOnScroll>

          <div className="team-grid" style={{ display: 'flex', gap: 60, justifyContent: 'center', flexWrap: 'wrap' }}>

            {/* Ben Healy */}
            <AnimateOnScroll delay={80}>
              <div style={{ textAlign: 'center', maxWidth: 280 }}>
                {/* Circular photo with quality treatment */}
                <div style={{
                  position: 'relative',
                  width: 180, height: 180,
                  margin: '0 auto 24px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  /* Red ring */
                  boxShadow: '0 0 0 3px #c0392b, 0 0 0 8px rgba(192,57,43,0.15), 0 20px 50px rgba(0,0,0,0.5)',
                }}>
                  <Image
                    src="/ben-healy.jpg"
                    alt="Ben Healy"
                    fill
                    style={{
                      objectFit: 'cover',
                      /* Focus on face — Ben is upper-right in the photo */
                      objectPosition: '60% 8%',
                      /* Subtle quality enhancement */
                      filter: 'contrast(1.06) brightness(1.04) saturate(1.08)',
                    }}
                    sizes="180px"
                  />
                </div>
                <h3 style={{ color: '#fff', fontWeight: 800, fontSize: 20, letterSpacing: '-0.01em', marginBottom: 6 }}>
                  Ben Healy
                </h3>
                <p style={{ color: '#c0392b', fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
                  {t.about.ben.role}
                </p>
                <p style={{ color: 'rgba(255,255,255,0.42)', fontSize: 14, lineHeight: 1.7 }}>
                  {t.about.ben.bio}
                </p>
              </div>
            </AnimateOnScroll>

            {/* Em Jackson */}
            <AnimateOnScroll delay={160}>
              <div style={{ textAlign: 'center', maxWidth: 280 }}>
                <div style={{
                  position: 'relative',
                  width: 180, height: 180,
                  margin: '0 auto 24px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: '0 0 0 3px #c0392b, 0 0 0 8px rgba(192,57,43,0.15), 0 20px 50px rgba(0,0,0,0.5)',
                }}>
                  <Image
                    src="/em-jackson.jpg"
                    alt="Em Jackson"
                    fill
                    style={{
                      objectFit: 'cover',
                      /* Em's face is centered in upper half */
                      objectPosition: '50% 12%',
                      filter: 'contrast(1.05) brightness(1.03) saturate(1.06)',
                    }}
                    sizes="180px"
                  />
                </div>
                <h3 style={{ color: '#fff', fontWeight: 800, fontSize: 20, letterSpacing: '-0.01em', marginBottom: 6 }}>
                  Em Jackson
                </h3>
                <p style={{ color: '#c0392b', fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
                  {t.about.em.role}
                </p>
                <p style={{ color: 'rgba(255,255,255,0.42)', fontSize: 14, lineHeight: 1.7 }}>
                  {t.about.em.bio}
                </p>
              </div>
            </AnimateOnScroll>

          </div>
        </div>

        <style>{`
          @media (max-width: 480px) {
            .team-grid { gap: 48px !important; }
            .team-grid > div > div > div:first-child {
              width: 160px !important; height: 160px !important;
            }
          }
        `}</style>
      </section>

      {/* CTA */}
      <section style={{ background: '#f7f7f4', padding: '72px 0', borderTop: '1px solid #e8e8e3' }}>
        <div className="container-xl" style={{ textAlign: 'center' }}>
          <h2 className="heading-lg" style={{ color: '#0a0a0a', marginBottom: 12 }}>{t.cta.title}</h2>
          <p style={{ color: '#6b6b6b', marginBottom: 32, fontSize: 15 }}>{t.cta.subtitle}</p>
          <Link href="/contact" className="btn-red"><ArrowRight size={16} />{t.cta.button}</Link>
        </div>
      </section>

      <style>{`
        .page-hero { }
        .page-hero-content { padding-top: 140px; padding-bottom: 90px; }
        @media (max-width: 640px) {
          .page-hero-content { padding-top: 110px; padding-bottom: 64px; }
        }
      `}</style>
    </>
  )
}
