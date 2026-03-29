'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

const REVIEWS = [
  { name: 'Victoria', date: '26. mars 2026', service: 'Oppussing av U-formet trapp', text: 'Prisen var god og kommunikasjonen underveis har vært veldig bra. Jobben ble godt utført. Han er i tillegg veldig hyggelig, som er en bonus. Anbefales absolutt!', stars: 5 },
  { name: 'Paul', date: '18. mars 2026', service: 'Fjerning av tapet og klargjøring av vegger', text: 'Ben og hans team leverer med en detaljorientering og ferdighetsnivå som sjelden sees. Han tar ikke snarveier, og sikrer at sluttproduktet skiller seg ut. En pålitelig partner for deg som krever profesjonell standard uten kompromisser.', stars: 5 },
  { name: 'Torkjell', date: '1. mars 2026', service: 'Slipe lakkerte trapper – 25 trinn', text: 'Gjorde en god jobb. Svært effektiv. Lurt å være presis på avtale om pris.', stars: 5 },
  { name: 'Jostein', date: '5. januar 2026', service: 'Fullføre pergola og tak', text: 'Veldig fornøyd med Healy Builds. Kvalitet, kreativitet og løsningsorientert. Bruker de gjerne igjen ved behov!', stars: 5 },
  { name: 'Maria Estefan', date: '11. desember 2025', service: 'Slipe gulv, tilpasse lister og male paneltak', text: 'Vi ble veldig fornøyd med det Ben leverte. Han svarte raskt, lyttet til våre ønsker og kom med gode forslag underveis. Resultatet ble meget bra, og over forventning.', stars: 5 },
  { name: 'Åsne Hauso', date: '20. august 2025', service: 'Sliping av furugulv', text: 'Gjorde en veldig god og fin jobb. Veldig enkle å kommunisere med og tilpasser seg. Anbefaler de veldig!', stars: 5 },
  { name: 'Cathrine', date: '12. august 2025', service: 'Pusse gulv og male vinduskarm', text: 'Veldig godt fornøyd. De kom presis. Var til å stole på og utførte arbeidet som bestilt. Raskt, grundig og effektivt.', stars: 5 },
  { name: 'Grünerløkka-kunde', date: 'Juli 2025', service: 'Sliping av 100 år gammelt furugulv', text: 'These guys know the wooden floor! They were quick, professional, and had the right equipment. They did a lovely job restoring a 100-year-old pine floor — the result looks smooth and new. Highly recommended.', stars: 5 },
  { name: 'Andreas', date: '9. juli 2025', service: 'Legge fiskebeinsgulv 25 kvm', text: 'Ben did a great job with our floor.', stars: 5 },
  { name: 'Runa', date: '4. juli 2025', service: 'Maling av innvendig trappeoppgang', text: 'Veldig hyggelig, lett å kommunisere med, og veldig fornøyd med resultatet.', stars: 5 },
  { name: 'Christian', date: '17. juni 2025', service: 'Ny terrasse og pergola', text: 'Bygde terrasse og pergola i hagen min. Utrolig hyggelige og flinke fagfolk, anbefaler på det sterkeste!', stars: 5 },
  { name: 'Tor Rune', date: '27. august 2025', service: 'Utskifting av gammelt balkonggulv', text: 'Jobbet raskt og effektivt. Anstendig pris. Noen detaljer kunne vært mer nøye utført, men alt i alt fornøyd. Vil sannsynligvis bruke Healy Builds flere ganger.', stars: 4 },
  { name: 'Margrete', date: '17. februar 2025', service: 'Pusse ned trapp og olje', text: 'Healy Build AS pusset ned og oljet en trapp + repos, samt to kjøkkenbenker for oss. De var svært effektive, hyggelige og gjorde en fin jobb. Vi er veldig fornøyde.', stars: 5 },
  { name: 'Kristine Hauge', date: '22. desember 2024', service: 'Lage gardinbrett i stue', text: 'Vi er veldig fornøyde med Healy Builds. Rask respons og kunne levere i løpet av få dager. Oppdraget ble utført svært profesjonelt og godt. Resultatet ble akkurat som vi ønsket med pen finish.', stars: 5 },
  { name: 'Ida', date: '20. desember 2024', service: 'Male vegger og tak soverom', text: 'Enkel kommunikasjon, resultatet ble veldig fint, de kunne starte raskt og ryddighet rundt pris og betaling. Kan anbefales!', stars: 5 },
  { name: 'Oda', date: '26. mai 2025', service: 'Bygge platting og gjerde', text: 'Highly recommended!', stars: 5 },
]

const AUTOPLAY_MS = 5000

function Stars({ count, size = 14 }: { count: number; size?: number }) {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {[0,1,2,3,4].map(i => (
        <Star key={i} size={size} style={{
          color: i < count ? '#f59e0b' : 'rgba(255,255,255,0.12)',
          fill: i < count ? '#f59e0b' : 'rgba(255,255,255,0.12)',
        }} />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const { t } = useLanguage()
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const [animClass, setAnimClass] = useState<'enter-right' | 'enter-left' | ''>('')
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const touchStartX = useRef(0)
  const total = REVIEWS.length

  const go = useCallback((next: number, dir: 'left' | 'right') => {
    setAnimClass(dir === 'right' ? 'enter-right' : 'enter-left')
    setProgress(0)
    setTimeout(() => {
      setIdx(next)
      setAnimClass('')
    }, 320)
  }, [])

  const goNext = useCallback(() => go((idx + 1) % total, 'right'), [go, idx, total])
  const goPrev = useCallback(() => go((idx - 1 + total) % total, 'left'), [go, idx, total])
  const goTo   = useCallback((i: number) => go(i, i > idx ? 'right' : 'left'), [go, idx])

  useEffect(() => {
    if (paused) {
      if (timerRef.current) clearInterval(timerRef.current)
      if (progressRef.current) clearInterval(progressRef.current)
      return
    }
    setProgress(0)
    const step = 100 / (AUTOPLAY_MS / 50)
    progressRef.current = setInterval(() => setProgress(p => Math.min(p + step, 100)), 50)
    timerRef.current = setInterval(goNext, AUTOPLAY_MS)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
      if (progressRef.current) clearInterval(progressRef.current)
    }
  }, [goNext, paused, idx])

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd   = (e: React.TouchEvent) => {
    const dx = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(dx) > 50) dx > 0 ? goNext() : goPrev()
  }

  const review = REVIEWS[idx]
  const leftIdx  = (idx - 1 + total) % total
  const rightIdx = (idx + 1) % total

  return (
    <section
      className="section"
      style={{ background: '#0a0a0a', position: 'relative', overflow: 'hidden' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* BG glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 50% 70%, rgba(192,57,43,0.08) 0%, transparent 65%)',
      }} />

      <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <AnimateOnScroll>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span className="eyebrow" style={{ display: 'block', marginBottom: 14 }}>{t.testimonials.title}</span>
            <h2 className="heading-xl" style={{ color: '#fff' }}>{t.testimonials.subtitle}</h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 18 }}>
              <Stars count={5} size={17} />
              <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, fontWeight: 500 }}>
                4.8 / 5.0 · {total} {t.heroStats.reviewsLabel}
              </span>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Carousel */}
        <div
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          style={{ touchAction: 'pan-y' }}
        >
          {/* 3-panel layout — ghost cards hidden on mobile via CSS */}
          <div className="grid-carousel">

            {/* Left ghost */}
            <div className="carousel-ghost" onClick={goPrev} style={{ cursor: 'pointer', opacity: 0.4, transform: 'scale(0.94)', transition: 'all 0.3s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.opacity='0.65'; (e.currentTarget as HTMLDivElement).style.transform='scale(0.96)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.opacity='0.4'; (e.currentTarget as HTMLDivElement).style.transform='scale(0.94)' }}
            >
              <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.05)', padding:'28px 22px', height:'100%' }}>
                <Stars count={REVIEWS[leftIdx].stars} size={11} />
                <p style={{ color:'rgba(255,255,255,0.45)', fontSize:13, lineHeight:1.6, margin:'12px 0', fontStyle:'italic',
                  overflow:'hidden', display:'-webkit-box', WebkitLineClamp:4, WebkitBoxOrient:'vertical' as const }}>
                  &ldquo;{REVIEWS[leftIdx].text}&rdquo;
                </p>
                <p style={{ color:'rgba(255,255,255,0.25)', fontSize:12, fontWeight:700 }}>{REVIEWS[leftIdx].name}</p>
              </div>
            </div>

            {/* Main card */}
            <div>
              <div
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  borderTop: '2px solid #c0392b',
                  padding: '40px 36px 36px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'opacity 0.32s ease, transform 0.32s ease',
                  opacity: animClass ? 0 : 1,
                  transform: animClass === 'enter-right' ? 'translateX(18px)' : animClass === 'enter-left' ? 'translateX(-18px)' : 'translateX(0)',
                }}
              >
                <Quote size={44} style={{ color: 'rgba(192,57,43,0.18)', position: 'absolute', top: 28, right: 28 }} />

                <Stars count={review.stars} size={15} />

                <p style={{
                  color: 'rgba(255,255,255,0.85)', fontSize: 16, lineHeight: 1.78,
                  margin: '22px 0 28px', fontStyle: 'italic',
                  minHeight: 100,
                }}>
                  &ldquo;{review.text}&rdquo;
                </p>

                <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 22 }} />

                <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
                  <div style={{
                    width: 46, height: 46, borderRadius: '50%', flexShrink: 0,
                    background: 'linear-gradient(135deg, #c0392b, #8e1a0e)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontWeight: 900, fontSize: 17,
                  }}>
                    {review.name[0]}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ color: '#fff', fontWeight: 800, fontSize: 15 }}>{review.name}</div>
                    <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, marginTop: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{review.service}</div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <span style={{
                      fontSize: 9, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: '#c0392b', border: '1px solid rgba(192,57,43,0.3)', padding: '3px 8px',
                    }}>Verified</span>
                    <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: 10, marginTop: 4 }}>{review.date}</div>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div style={{ height: 2, background: 'rgba(255,255,255,0.05)' }}>
                <div style={{ height: '100%', background: '#c0392b', width: `${progress}%`, transition: 'width 0.05s linear' }} />
              </div>
            </div>

            {/* Right ghost */}
            <div className="carousel-ghost" onClick={goNext} style={{ cursor: 'pointer', opacity: 0.4, transform: 'scale(0.94)', transition: 'all 0.3s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.opacity='0.65'; (e.currentTarget as HTMLDivElement).style.transform='scale(0.96)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.opacity='0.4'; (e.currentTarget as HTMLDivElement).style.transform='scale(0.94)' }}
            >
              <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.05)', padding:'28px 22px', height:'100%' }}>
                <Stars count={REVIEWS[rightIdx].stars} size={11} />
                <p style={{ color:'rgba(255,255,255,0.45)', fontSize:13, lineHeight:1.6, margin:'12px 0', fontStyle:'italic',
                  overflow:'hidden', display:'-webkit-box', WebkitLineClamp:4, WebkitBoxOrient:'vertical' as const }}>
                  &ldquo;{REVIEWS[rightIdx].text}&rdquo;
                </p>
                <p style={{ color:'rgba(255,255,255,0.25)', fontSize:12, fontWeight:700 }}>{REVIEWS[rightIdx].name}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginTop: 32 }}>
            <button onClick={goPrev} aria-label="Previous" style={{
              width: 44, height: 44, border: '1px solid rgba(255,255,255,0.12)',
              background: 'transparent', color: 'rgba(255,255,255,0.5)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', transition: 'all 0.2s', flexShrink: 0,
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor='#c0392b'; (e.currentTarget as HTMLButtonElement).style.color='#fff' }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor='rgba(255,255,255,0.12)'; (e.currentTarget as HTMLButtonElement).style.color='rgba(255,255,255,0.5)' }}
            ><ChevronLeft size={18} /></button>

            {/* Dots — scrollable on mobile */}
            <div style={{ display: 'flex', gap: 5, alignItems: 'center', overflowX: 'auto', maxWidth: 260, paddingBottom: 2, msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
              {REVIEWS.map((_, i) => (
                <button key={i} onClick={() => goTo(i)} aria-label={`Review ${i+1}`} style={{
                  flexShrink: 0,
                  width: i === idx ? 22 : 6, height: 6,
                  border: 'none', padding: 0,
                  background: i === idx ? '#c0392b' : 'rgba(255,255,255,0.15)',
                  cursor: 'pointer', transition: 'all 0.3s', borderRadius: 3,
                  minWidth: i === idx ? 22 : 6,
                }} />
              ))}
            </div>

            <button onClick={goNext} aria-label="Next" style={{
              width: 44, height: 44, border: '1px solid rgba(255,255,255,0.12)',
              background: 'transparent', color: 'rgba(255,255,255,0.5)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', transition: 'all 0.2s', flexShrink: 0,
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor='#c0392b'; (e.currentTarget as HTMLButtonElement).style.color='#fff' }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor='rgba(255,255,255,0.12)'; (e.currentTarget as HTMLButtonElement).style.color='rgba(255,255,255,0.5)' }}
            ><ChevronRight size={18} /></button>
          </div>

          <div style={{ textAlign: 'center', marginTop: 12 }}>
            <span style={{ color: 'rgba(255,255,255,0.18)', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em' }}>
              {String(idx + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
