import { useEffect, useState } from 'react'
import Rain from './Rain'
import Dossier from './Dossier'
import Arsenal from './Arsenal'
import Contact from './Contact'
import ThemeToggle from './ThemeToggle'
import MobileExperience from './MobileExperience'
import ScrollPrompt from './ScrollPrompt'

function Hero() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('signal-theme') === 'day' ? 'day' : 'red'
  })

  useEffect(() => {
    localStorage.setItem('signal-theme', theme)
  }, [theme])

  const isDay = theme === 'day'

  return (
    <main>
      <ThemeToggle
        theme={theme}
        onToggle={() => setTheme(isDay ? 'red' : 'day')}
      />
      <div className="hidden sm:block">
      <section className={`relative isolate flex min-h-svh items-end overflow-hidden px-5 pb-32 pt-28 sm:px-8 sm:py-12 lg:px-24 lg:py-24 ${isDay ? 'bg-amber-50 text-slate-950' : ''}`}>
        <picture>
          <source
            media="(max-width: 639px)"
            srcSet={isDay ? '/DMH.jpg' : '/NMD.jpg'}
          />
          <img
            className="absolute inset-0 -z-20 size-full object-cover object-[58%_top] sm:object-center"
            src={isDay ? '/day-hero.jpg' : '/dare.jpg'}
            alt=""
          />
        </picture>
        <div
          className={`absolute inset-0 -z-10 ${
            isDay
              ? 'bg-[linear-gradient(90deg,rgba(255,251,235,0.62)_0%,rgba(255,251,235,0.22)_45%,rgba(255,251,235,0.04)_100%),linear-gradient(0deg,rgba(255,251,235,0.28),transparent_55%)] max-sm:bg-[linear-gradient(180deg,rgba(255,251,235,0.3)_0%,rgba(255,251,235,0.12)_42%,rgba(255,251,235,0.78)_100%)]'
              : 'bg-[linear-gradient(90deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.3)_58%,rgba(0,0,0,0.1)_100%),linear-gradient(0deg,rgba(0,0,0,0.75),transparent_55%)] max-sm:bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.25)_38%,rgba(0,0,0,0.88)_100%)]'
          }`}
        />
        {!isDay && (
          <>
            <div className="pointer-events-none absolute inset-0 -z-0 bg-red-950/10 mix-blend-screen" />
            <Rain />
          </>
        )}
        <div className={`relative z-10 w-full max-w-[21rem] rounded-sm max-sm:p-4 sm:max-w-2xl ${isDay ? 'max-sm:bg-amber-50/65' : 'max-sm:bg-black/35'}`}>
          <p className={`mb-4 flex flex-wrap items-center gap-3 text-[0.6rem] font-bold uppercase tracking-[0.2em] sm:mb-5 sm:text-[0.7rem] sm:tracking-[0.32em] ${isDay ? 'text-amber-700' : 'text-red-400'}`}>
            <span className={`h-px w-10 ${isDay ? 'bg-amber-500' : 'bg-red-500'}`} />
            {isDay ? 'Nelson & Murdoch // Attorneys at Law' : 'Blind To Distractions'}
          </p>
          <h1 className={`max-w-[10ch] text-5xl font-[Impact,'Arial_Narrow',sans-serif] uppercase leading-[0.88] tracking-tight sm:text-8xl sm:leading-[0.86] sm:tracking-[0.015em] lg:text-[clamp(5rem,11vw,10rem)] ${isDay ? 'text-slate-950' : 'text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.55)]'}`}>
            <span className={isDay ? 'text-amber-600' : 'text-red-500'}>
              {isDay ? 'Lawyer' : 'Vigilante'}
            </span>
          </h1>
          <p className={`mb-5 mt-5 max-w-lg border-l-2 pl-4 text-xs font-semibold uppercase tracking-[0.16em] leading-6 sm:mb-8 sm:mt-7 sm:text-base sm:tracking-[0.28em] sm:leading-7 ${isDay ? 'border-amber-500 text-slate-700' : 'border-red-600/80 text-white/90'}`}>
            {isDay ? 'Attorney at Law' : 'Blind Justice'}
          </p>
        </div>
        <ScrollPrompt href="#about" label={isDay ? 'investigate' : 'classified'} day={isDay} desktop />
      </section>
      <Dossier theme={theme} />
      <Arsenal theme={theme} />
      <Contact theme={theme} />
      </div>
      <MobileExperience theme={theme} />
    </main>
  )
}

export default Hero
