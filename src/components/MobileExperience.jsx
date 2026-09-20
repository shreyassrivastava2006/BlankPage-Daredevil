const mobileModules = [
  {
    number: '01',
    title: 'Sensory Precision',
    subtitle: 'Frontend & Interfaces',
    technologies: ['React', 'Tailwind CSS', 'JavaScript', 'HTML5/CSS3'],
    focus: 'Responsive component design, minimal DOM footprint, accessible navigation.',
  },
  {
    number: '02',
    title: 'Core Engine & Data Flow',
    subtitle: 'Backend & Logic',
    technologies: ['Node.js', 'Express', 'Python', 'REST APIs', 'JSON pipelines'],
    focus: 'Role-based access control, state coordination, clean API contracts.',
    horizon: 'FastAPI, high-concurrency Python backend engineering.',
  },
  {
    number: '03',
    title: 'The Armory & Hardware',
    subtitle: 'Tools & Core Systems',
    technologies: ['C', 'Core Java'],
    tooling: ['Git', 'GitHub', 'Linux / WSL', 'Postman', 'Vite'],
    focus: 'Version control, terminal efficiency, low-level problem solving.',
  },
]

const mobileChannels = [
  ['01', 'Public repo', 'GitHub', 'Inspect source code, build commits, and active repositories.', 'Open vault ↗', 'https://github.com/your-username'],
  ['02', 'Professional', 'LinkedIn', 'Career background, network, recommendations, and credentials.', 'Connect ↗', 'https://www.linkedin.com/in/your-username'],
  ['03', 'Direct dispatch', 'Direct mail', 'Inquiries regarding roles, hackathons, and systems design.', 'Send message ↗', 'https://mail.google.com/mail/?view=cm&fs=1&to=shreyassrivastava50%40gmail.com&su=Project%20inquiry&body=Hi%2C%20I%20would%20like%20to%20discuss%20a%20project%20or%20opportunity%20with%20you.'],
]

function MobileImage({ src, alt = '' }) {
  return (
    <img
      className="absolute inset-0 -z-20 size-full object-cover object-[center_top]"
      src={src}
      alt={alt}
    />
  )
}

function MobileHero({ day }) {
  return (
    <section className={`relative isolate mx-auto flex min-h-[90svh] max-w-6xl items-end overflow-hidden px-4 pb-32 pt-28 ${day ? 'bg-amber-50 text-slate-950' : 'bg-neutral-950 text-white'}`}>
      <MobileImage src={day ? '/DMH.jpg' : '/NMD.jpg'} />
      <div className={`absolute inset-0 -z-10 ${day ? 'bg-[linear-gradient(180deg,rgba(255,251,235,0.22)_0%,rgba(255,251,235,0.86)_100%)]' : 'bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.9)_100%)]'}`} />
      <div className={`relative z-10 w-full max-w-[21rem] rounded-sm p-4 ${day ? 'bg-amber-50/65' : 'bg-black/35'}`}>
        <p className={`mb-4 flex flex-wrap items-center gap-3 text-[0.6rem] font-bold uppercase tracking-[0.2em] ${day ? 'text-amber-700' : 'text-red-400'}`}>
          <span className={`h-px w-8 ${day ? 'bg-amber-500' : 'bg-red-500'}`} />
          {day ? 'Nelson & Murdoch // Attorneys at Law' : 'Blind To Distractions'}
        </p>
        <h1 className={`max-w-[10ch] text-5xl font-[Impact,'Arial_Narrow',sans-serif] uppercase leading-[0.88] tracking-tight ${day ? 'text-slate-950' : 'text-white'}`}>
          <span className={day ? 'text-amber-600' : 'text-red-500'}>{day ? 'Lawyer' : 'Vigilante'}</span>
        </h1>
        <p className={`mt-5 border-l-2 pl-4 text-xs font-semibold uppercase tracking-[0.16em] leading-6 ${day ? 'border-amber-500 text-slate-700' : 'border-red-600/80 text-white/90'}`}>
          {day ? 'Attorney at Law' : 'Blind Justice'}
        </p>
      </div>
      <ScrollPrompt href="#about" label={day ? 'investigate' : 'classified'} day={day} />
    </section>
  )
}

function MobileDossier({ day }) {
  return (
    <section id="about" className={`relative isolate mx-auto max-w-6xl overflow-hidden px-4 py-12 pb-48 ${day ? 'bg-amber-50 text-slate-950' : 'bg-neutral-950 text-white'}`}>
      <MobileImage src={day ? '/DDM.jpg' : '/NDD.jpg'} />
      <div className={`absolute inset-0 -z-10 ${day ? 'bg-[linear-gradient(180deg,rgba(255,251,235,0.2)_0%,rgba(255,251,235,0.95)_100%)]' : 'bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.94)_100%)]'}`} />
      <div className={`relative z-10 mx-auto w-full max-w-[22rem] rounded-sm p-4 ${day ? 'bg-amber-50/72' : 'bg-black/48'}`}>
        <p className={`mb-5 flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.2em] ${day ? 'text-red-900' : 'text-red-400'}`}>
          <span className={`h-px w-8 ${day ? 'bg-red-900' : 'bg-red-500'}`} />{day ? 'Nelson & Murdoch' : 'Case file 001'}
        </p>
        <h2 className={`max-w-[11ch] text-3xl font-black font-[Impact,'Arial_Narrow',sans-serif] uppercase leading-[0.92] tracking-tight sm:text-5xl ${day ? 'text-slate-950' : 'text-white'}`}>
          {day ? <>The <span className="text-red-900">Dossier</span></> : <>The <span className="text-red-500">Man in the Mask</span></>}
        </h2>
        <p className={`mt-5 border-l-2 pl-4 text-sm leading-relaxed sm:text-base ${day ? 'border-red-900 text-slate-700' : 'border-red-500/80 text-stone-100'}`}>
          {day ? 'Nelson & Murdoch, Attorneys at Law — curriculum vitae and case records.' : 'Refusing to quit when a system breaks. Obsessed with clean execution, low overhead, and speed.'}
        </p>
        <div className="mt-6 space-y-7">
          <div>
            <p className={`mb-4 text-[0.65rem] font-bold uppercase tracking-[0.2em] ${day ? 'text-red-900' : 'text-red-400'}`}>{day ? 'Core practice' : 'Built Under Pressure'}</p>
            <h3 className={`mb-3 font-[Impact,'Arial_Narrow',sans-serif] text-2xl uppercase leading-none ${day ? 'text-slate-900' : 'text-white'}`}>The Unyielding Instinct</h3>
            <p className={`text-sm leading-relaxed sm:text-base ${day ? 'text-slate-800' : 'text-stone-100'}`}>For me, computing isn’t just software—it’s an obsession with how systems operate under the hood. When a complex bug or an unyielding architectural wall stands in the way, backing down isn’t an option.</p>
            <h3 className={`mb-3 mt-7 font-[Impact,'Arial_Narrow',sans-serif] text-2xl uppercase leading-none ${day ? 'text-slate-900' : 'text-white'}`}>Simplicity Under Pressure</h3>
            <p className={`text-sm leading-relaxed sm:text-base ${day ? 'text-slate-800' : 'text-stone-100'}`}>Code must be simple, readable, and lightning-fast. Whether engineering compliance workflows or scaling modern web interfaces, I build systems to perform smoothly when the pressure peaks.</p>
          </div>
          <aside className={`border-l-4 p-4 ${day ? 'border-y border-r border-slate-200 border-l-red-900 bg-stone-50' : 'border border-white/15 bg-black/65'}`}>
            <p className={`mb-4 border-b pb-3 font-mono text-[0.65rem] font-bold uppercase tracking-[0.15em] ${day ? 'border-slate-200 text-red-900' : 'border-white/15 text-red-400'}`}>// Subject specifications</p>
            <dl className={`space-y-4 font-mono text-[0.68rem] uppercase leading-5 tracking-[0.04em] ${day ? 'text-slate-800' : 'text-white'}`}>
              <div><dt className="text-slate-500">Operational base</dt><dd>Lucknow, IN</dd></div>
              <div><dt className="text-slate-500">Core role</dt><dd>Full-Stack Web Developer &amp; Normal human</dd></div>
              <div><dt className="text-slate-500">Philosophy</dt><dd>No complexity, No attachments, No debates - Only practical work.</dd></div>
              <div><dt className="text-slate-500">Status</dt><dd className={day ? 'text-amber-700' : 'text-red-300'}>Active // Ready for deployment</dd></div>
            </dl>
          </aside>
        </div>
      </div>
      <ScrollPrompt href="#arsenal" label={day ? 'the briefcase' : 'the arsenal'} day={day} />
    </section>
  )
}

function MobileArsenal({ day }) {
  return (
    <section id="arsenal" className={`relative isolate mx-auto max-w-6xl overflow-hidden px-4 py-12 pb-28 ${day ? 'bg-sky-50 text-slate-950' : 'bg-neutral-950 text-white'}`}>
      <MobileImage src={day ? '/DMA.jpg' : '/NMA.jpg'} />
      <div className={`absolute inset-0 -z-10 backdrop-blur-[2px] ${day ? 'bg-[linear-gradient(180deg,rgba(248,250,252,0.2)_0%,rgba(248,250,252,0.95)_100%)]' : 'bg-black/85'}`} />
      <div className={`relative z-10 mx-auto w-full max-w-[22rem] rounded-sm p-4 ${day ? 'bg-slate-50/78' : 'bg-black/48'}`}>
        <p className={`mb-5 flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.2em] ${day ? 'text-red-900' : 'text-red-400'}`}>
          <span className={`h-px w-8 ${day ? 'bg-red-900' : 'bg-red-500'}`} />{day ? 'Briefcase Records' : 'Case file 002: Combat Loadout'}
        </p>
        <h2 className={`max-w-[11ch] text-3xl font-black font-[Impact,'Arial_Narrow',sans-serif] uppercase leading-[0.92] tracking-tight sm:text-5xl ${day ? 'text-slate-950' : 'text-white'}`}>The <span className={day ? 'text-red-900' : 'text-red-500'}>{day ? 'Briefcase' : 'Arsenal'}</span></h2>
        <p className={`mt-5 border-l-2 pl-4 text-sm leading-relaxed sm:text-base ${day ? 'border-amber-500 text-slate-700' : 'border-red-500/80 text-stone-100'}`}>{day ? 'Technical practice, selected systems, and working methods.' : 'Stripped of bloat. Engineered for responsiveness, structural integrity, and raw velocity.'}</p>
        <div className="mt-8 grid gap-4">
          {mobileModules.map((module) => (
            <article className={`border p-4 ${day ? 'border-y border-r border-slate-200 border-l-4 border-l-red-900 bg-stone-50' : 'border-white/10 bg-black/55'}`} key={module.number}>
              <div className="mb-5 flex items-start justify-between gap-3 border-b border-white/10 pb-4">
                <p className={`font-mono text-xs tracking-[0.15em] ${day ? 'text-red-900' : 'text-red-400'}`}>Module {module.number}</p>
                <span className={`max-w-[12ch] text-right font-mono text-[0.58rem] leading-4 ${day ? 'text-slate-500' : 'text-white/45'}`}>// {module.subtitle}</span>
              </div>
              <h3 className={`max-w-[14ch] font-[Impact,'Arial_Narrow',sans-serif] text-2xl uppercase leading-none ${day ? 'text-slate-900' : 'text-white'}`}>{module.title}</h3>
              <dl className={`mt-6 space-y-4 font-mono text-xs leading-relaxed ${day ? 'text-slate-800' : 'text-stone-100'}`}>
                <div>
                  <dt className={day ? 'text-red-900' : 'text-red-400'}>Technologies</dt>
                  <dd className="mt-2 flex flex-wrap gap-1.5">
                    {module.technologies.map((technology) => (
                      <span className={`rounded-sm px-2 py-1 text-xs ${day ? 'bg-red-950/10 text-slate-800' : 'bg-white/10 text-stone-100'}`} key={technology}>{technology}</span>
                    ))}
                  </dd>
                </div>
                {module.tooling && <div><dt className={day ? 'text-red-900' : 'text-red-400'}>Environment &amp; tooling</dt><dd className="mt-2 flex flex-wrap gap-1.5">{module.tooling.map((tool) => <span className={`rounded-sm px-2 py-1 text-xs ${day ? 'bg-red-950/10 text-slate-800' : 'bg-white/10 text-stone-100'}`} key={tool}>{tool}</span>)}</dd></div>}
                <div className="hidden sm:block"><dt className={day ? 'text-red-900' : 'text-red-400'}>Tactical focus</dt><dd>{module.focus}</dd></div>
                {module.horizon && <div className="border-t border-red-500/20 pt-3"><dt className={day ? 'text-red-900' : 'text-red-400'}>Under development</dt><dd>{module.horizon}</dd></div>}
              </dl>
            </article>
          ))}
        </div>
      </div>
      <ScrollPrompt href="#contact" label={day ? 'transmit' : 'the beacon'} day={day} />
    </section>
  )
}

function MobileContact({ day }) {
  return (
    <section id="contact" className={`relative isolate mx-auto max-w-6xl overflow-hidden border-t px-4 py-12 ${day ? 'border-slate-200 bg-white text-slate-950' : 'border-neutral-900 bg-black text-white'}`}>
      <MobileImage src={day ? '/DMC.jpg' : '/NMC.jpg'} />
      <div className={`absolute inset-0 -z-10 ${day ? 'bg-[linear-gradient(180deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.94)_100%)]' : 'bg-[linear-gradient(180deg,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.94)_100%)]'}`} />
      <div className={`relative z-10 mx-auto w-full max-w-[22rem] rounded-sm p-4 ${day ? 'bg-white/78' : 'bg-black/48'}`}>
        <span className={`font-mono text-[0.65rem] font-semibold uppercase tracking-[0.18em] ${day ? 'text-red-950' : 'text-red-500'}`}>{day ? '// Case file Final: Daylight dispatch' : '// Case file Final: Direct dispatch'}</span>
        <h2 className={`mt-3 max-w-[10ch] text-3xl font-black font-[Impact,'Arial_Narrow',sans-serif] uppercase leading-[0.92] tracking-tight sm:text-5xl ${day ? 'text-slate-950' : 'text-red-600'}`}>{day ? 'Transmit' : 'The Beacon'}</h2>
        <p className={`mt-4 text-sm leading-relaxed sm:text-base ${day ? 'text-slate-900' : 'text-neutral-200'}`}>{day ? 'Have a system to simplify or a difficult problem to solve? Send a clear signal.' : 'Have an architectural challenge, a system to build, or an open role? Drop the frequency.'}</p>
        <div className="mt-7 grid gap-4">
          {mobileChannels.map(([number, type, name, description, action, href]) => (
            <a className={`flex min-h-44 flex-col justify-between rounded-lg border p-4 ${day ? 'border-slate-300 bg-white/95' : 'border-neutral-800 bg-neutral-950/75'}`} href={href} key={number} target="_blank" rel="noreferrer">
              <div className="space-y-3">
                <div className={`flex flex-wrap justify-between gap-2 font-mono text-[0.62rem] ${day ? 'text-slate-600' : 'text-neutral-400'}`}><span>[ Channel {number} ]</span><span>{type}</span></div>
                <h3 className={`text-lg font-bold ${day ? 'text-slate-950' : 'text-white'}`}>{name}</h3>
                <p className={`text-xs leading-6 ${day ? 'text-slate-900' : 'text-neutral-200'}`}>{description}</p>
              </div>
              <span className={`pt-5 font-mono text-xs ${day ? 'text-slate-700' : 'text-neutral-200'}`}>{action}</span>
            </a>
          ))}
        </div>
        <div className={`mt-10 border-t pt-5 text-center font-mono text-[0.65rem] leading-5 ${day ? 'border-slate-200 text-slate-600' : 'border-neutral-800 text-neutral-400'}`}>// Encrypted transmission — all signals verified</div>
      </div>
    </section>
  )
}

function MobileExperience({ theme }) {
  const day = theme === 'day'

  return (
    <div className="sm:hidden">
      <MobileHero day={day} />
      <MobileDossier day={day} />
      <MobileArsenal day={day} />
      <MobileContact day={day} />
    </div>
  )
}

export default MobileExperience
import ScrollPrompt from './ScrollPrompt'
