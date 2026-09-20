import ScrollPrompt from './ScrollPrompt'

const modules = [
  {
    number: '01',
    title: 'Sensory Precision',
    subtitle: 'Frontend & Interfaces',
    description:
      'The agility, reflex, and micro-interactions that make an interface feel alive.',
    technologies: 'React, Tailwind CSS, JavaScript (ES6+), HTML5/CSS3',
    focus:
      'Responsive component design, minimal DOM footprint, accessible navigation, clean layout architecture.',
  },
  {
    number: '02',
    title: 'Core Engine & Data Flow',
    subtitle: 'Backend & Logic',
    description:
      'The structural spine that ensures data moves without friction or latency.',
    technologies: 'Node.js, JSON data pipelines',
    focus: 'Role-based access control (RBAC), state coordination, clean API contracts.',
    horizon: 'FastAPI, high-concurrency Python backend engineering.',
  },
  {
    number: '03',
    title: 'The Armory & Hardware',
    subtitle: 'Tools & Core Systems',
    description: 'The environment where the craft is forged.',
    technologies: 'C, Javascript,Python',
    tooling: 'Git, GitHub, Linux / WSL, Vercel, Vite, shadcn',
    focus: 'Version control, terminal efficiency, low-level problem solving.',
  },
]

function Arsenal({ theme }) {
  const isDay = theme === 'day'

  return (
    <section
      id="arsenal"
      className={`relative isolate overflow-hidden px-5 py-12 pb-32 sm:px-8 sm:py-24 sm:pb-40 lg:px-24 lg:py-32 lg:pb-48 ${isDay ? 'bg-sky-50' : 'bg-neutral-950'}`}
    >
      <picture>
        <source
          media="(max-width: 639px)"
          srcSet={isDay ? '/DMA.jpg' : '/NMA.jpg'}
        />
        <img
          className="absolute inset-0 -z-20 size-full object-cover max-sm:object-[58%_center] sm:object-center"
          src={isDay ? '/day-briefcase.jpg' : '/arsenal.jpg'}
          alt=""
        />
      </picture>
      <div
        className={`absolute inset-0 -z-10 ${
          isDay
          ? 'bg-[linear-gradient(90deg,rgba(248,250,252,0.78)_0%,rgba(248,250,252,0.58)_38%,rgba(248,250,252,0.16)_72%,rgba(248,250,252,0.04)_100%),linear-gradient(0deg,rgba(248,250,252,0.42),transparent_65%)] max-sm:bg-[linear-gradient(180deg,rgba(248,250,252,0.2)_0%,rgba(248,250,252,0.58)_45%,rgba(248,250,252,0.94)_100%)]'
          : 'bg-[linear-gradient(90deg,rgba(7,7,7,0.9)_0%,rgba(7,7,7,0.68)_50%,rgba(7,7,7,0.45)_100%),linear-gradient(0deg,rgba(7,7,7,0.88),rgba(7,7,7,0.35))] max-sm:bg-[linear-gradient(180deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.48)_45%,rgba(0,0,0,0.94)_100%)]'
        }`}
      />
      <div className={`relative z-10 mx-auto w-full max-w-[22rem] rounded-sm max-sm:p-4 sm:max-w-7xl ${isDay ? 'drop-shadow-[0_1px_2px_rgba(255,255,255,0.5)] max-sm:bg-slate-50/78' : 'max-sm:bg-black/48'}`}>
        <p className="mb-5 flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.32em] text-red-400">
          <span className={`h-px w-10 ${isDay ? 'bg-red-900' : 'bg-red-500'}`} />
          {isDay
            ? ' Briefcase Records'
            : 'Case file 002: Combat Loadout'}
        </p>
        <h2 className={`max-w-[11ch] text-4xl font-[Impact,'Arial_Narrow',sans-serif] uppercase leading-[0.9] tracking-tight sm:text-8xl sm:leading-[0.88] sm:tracking-[0.02em] ${isDay ? 'text-slate-950' : 'text-white'}`}>
          The{' '}
          <span className={isDay ? 'text-red-900' : 'text-red-500'}>
            {isDay ? 'Briefcase' : 'Arsenal'}
          </span>
        </h2>
        <p className={`mt-5 max-w-2xl border-l-2 pl-4 text-sm font-medium leading-6 sm:mt-7 sm:pl-5 sm:text-lg sm:leading-8 ${isDay ? 'border-amber-500 text-slate-700' : 'border-red-500/80 text-stone-100'}`}>
          {isDay
            ? ' Technical practice, selected systems, and working methods.'
            : 'Stripped of bloat. Engineered for responsiveness, structural integrity, and raw velocity.'}
        </p>
        <div className="mt-8 grid gap-4 sm:mt-14 sm:gap-5 lg:grid-cols-3">
          {modules.map((module) => (
            <article
              className={`border p-4 backdrop-blur-sm transition-colors sm:p-7 ${isDay ? 'border-y border-r border-slate-200 border-l-4 border-l-red-900 bg-stone-50 shadow-lg shadow-slate-300/45 hover:border-l-red-700 hover:bg-white' : 'border-white/10 bg-black/45 hover:border-red-500/60 hover:bg-black/65'}`}
              key={module.number}
            >
              <div className="mb-8 flex items-start justify-between border-b border-white/10 pb-5">
                <p className={`font-mono text-xs tracking-[0.2em] ${isDay ? 'text-red-900' : 'text-red-400'}`}>
                  Module {module.number}
                </p>
                <span className={`max-w-[12ch] text-right font-mono text-[0.6rem] leading-4 ${isDay ? 'text-slate-400' : 'text-white/30'}`}>
                  // {module.subtitle}
                </span>
              </div>
              <h3 className={`max-w-[14ch] font-[Impact,'Arial_Narrow',sans-serif] text-3xl uppercase leading-none tracking-[0.03em] ${isDay ? 'text-slate-900' : 'text-white'}`}>
                {module.title}
              </h3>
              <p className={`mt-5 text-sm italic leading-6 sm:leading-7 ${isDay ? 'text-slate-600' : 'text-stone-300/80'} max-sm:hidden`}>
                {module.description}
              </p>
              <dl className={`mt-8 space-y-5 font-mono text-xs leading-6 ${isDay ? 'text-slate-700' : ''}`}>
                <div>
                  <dt className={`uppercase tracking-[0.16em] ${isDay ? 'text-red-900' : 'text-red-400'}`}>
                    Technologies
                  </dt>
                  <dd className={isDay ? 'mt-1 text-slate-700' : 'mt-1 text-stone-200'}>{module.technologies}</dd>
                </div>
                {module.tooling && (
                  <div>
                    <dt className={`uppercase tracking-[0.16em] ${isDay ? 'text-red-900' : 'text-red-400'}`}>
                      Environment &amp; tooling
                    </dt>
                    <dd className={isDay ? 'mt-1 text-slate-700' : 'mt-1 text-stone-200'}>{module.tooling}</dd>
                  </div>
                )}
                <div>
                  <dt className={`uppercase tracking-[0.16em] ${isDay ? 'text-red-900' : 'text-red-400'}`}>
                    Tactical focus
                  </dt>
                  <dd className={isDay ? 'mt-1 text-slate-700' : 'mt-1 text-stone-200'}>{module.focus}</dd>
                </div>
                {module.horizon && (
                  <div className={`border-t pt-4 ${isDay ? 'border-red-900/20' : 'border-red-500/20'}`}>
                    <dt className={`uppercase tracking-[0.16em] ${isDay ? 'text-red-900' : 'text-red-400'}`}>
                      Under development // The horizon
                    </dt>
                    <dd className={isDay ? 'mt-1 text-slate-700' : 'mt-1 text-stone-200'}>{module.horizon}</dd>
                  </div>
                )}
              </dl>
            </article>
          ))}
        </div>
      </div>
      <ScrollPrompt href="#contact" label={isDay ? 'transmit' : 'the beacon'} day={isDay} desktop />
    </section>
  )
}

export default Arsenal
