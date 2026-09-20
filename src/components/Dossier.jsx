import ScrollPrompt from './ScrollPrompt'

function Dossier({ theme }) {
  const isDay = theme === 'day'

  return (
    <section
      id="about"
      className={`relative isolate flex min-h-svh items-center overflow-hidden px-5 py-12 sm:px-8 sm:py-24 lg:px-24 ${isDay ? 'bg-amber-50' : 'bg-neutral-950'}`}
    >
      <picture>
        <source
          media="(max-width: 639px)"
          srcSet={isDay ? '/DDM.jpg' : '/NDD.jpg'}
        />
        <img
          className="absolute inset-0 -z-20 size-full object-cover max-sm:object-[68%_center] sm:object-center"
          src={isDay ? '/day-dossier.jpg' : '/dossier.jpg'}
          alt=""
        />
      </picture>
      <div
        className={`absolute inset-0 -z-10 ${
          isDay
          ? 'bg-[linear-gradient(90deg,rgba(255,251,235,0.78)_0%,rgba(255,251,235,0.58)_38%,rgba(255,251,235,0.16)_72%,rgba(255,251,235,0.04)_100%),linear-gradient(0deg,rgba(255,251,235,0.42),transparent_65%)] max-sm:bg-[linear-gradient(180deg,rgba(255,251,235,0.22)_0%,rgba(255,251,235,0.56)_42%,rgba(255,251,235,0.92)_100%)]'
          : 'bg-[linear-gradient(90deg,rgba(7,7,7,0.94)_0%,rgba(7,7,7,0.72)_45%,rgba(7,7,7,0.28)_100%),linear-gradient(0deg,rgba(7,7,7,0.7),transparent_55%)] max-sm:bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.45)_45%,rgba(0,0,0,0.92)_100%)]'
        }`}
      />
      <div className={`relative z-10 mx-auto w-full max-w-[22rem] rounded-sm max-sm:p-4 sm:max-w-7xl ${isDay ? 'drop-shadow-[0_1px_2px_rgba(255,255,255,0.5)] max-sm:bg-amber-50/72' : 'max-sm:bg-black/48'}`}>
        <p className="mb-5 flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.32em] text-red-400">
          <span className={`h-px w-10 ${isDay ? 'bg-red-900' : 'bg-red-500'}`} />
          {isDay ? 'Nelson & Murdoch' : 'Case file 001'}
        </p>
        <h2 className={`max-w-[11ch] text-4xl font-[Impact,'Arial_Narrow',sans-serif] uppercase leading-[0.9] tracking-tight sm:text-8xl sm:leading-[0.88] sm:tracking-[0.02em] ${isDay ? 'text-slate-950' : 'text-white'}`}>
          {isDay ? (
            <>The <span className="text-red-900">Dossier</span></>
          ) : (
            <>The <span className="text-red-500">Man in the Mask</span></>
          )}
        </h2>
        <p className={`mt-5 max-w-2xl border-l-2 pl-4 text-sm font-medium leading-6 sm:mt-7 sm:pl-5 sm:text-lg sm:leading-8 ${isDay ? 'border-red-900 text-slate-700' : 'border-red-500/80 text-stone-100'}`}>
          {isDay
            ? 'Nelson & Murdoch, Attorneys at Law — curriculum vitae and case records.'
            : 'Refusing to quit when a system breaks. Obsessed with clean execution, low overhead, and speed.'}
        </p>
        <div className="mt-6 grid gap-6 sm:mt-14 sm:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="max-w-2xl">
            <p className={`mb-6 text-xs font-bold uppercase tracking-[0.24em] ${isDay ? 'text-red-900' : 'text-red-400'}`}>
              {isDay ? 'Core practice' : 'Built Under Pressure'}
            </p>
            <h3 className={`mb-3 font-[Impact,'Arial_Narrow',sans-serif] text-2xl uppercase tracking-[0.03em] sm:text-3xl ${isDay ? 'text-slate-900' : 'text-white'}`}>
              The Unyielding Instinct
            </h3>
            <p className={`text-sm leading-6 sm:text-lg sm:leading-8 ${isDay ? 'text-slate-800' : 'text-stone-100'}`}>
              For me, computing isn’t just software—it’s an obsession with how
              systems operate under the hood. When a complex bug or an
              unyielding architectural wall stands in the way, backing down
              isn’t an option. The question is never if it can be solved, but
              how fast and how cleanly.
            </p>
            <h3 className={`mb-3 mt-9 font-[Impact,'Arial_Narrow',sans-serif] text-2xl uppercase tracking-[0.03em] sm:text-3xl ${isDay ? 'text-slate-900' : 'text-white'}`}>
              Simplicity Under Pressure
            </h3>
            <p className={`text-sm leading-6 sm:text-lg sm:leading-8 ${isDay ? 'text-slate-800' : 'text-stone-100'}`}>
              While others overcomplicate architecture with unnecessary layers,
              my philosophy is grounded in discipline: code must be simple,
              readable, and lightning-fast. Whether engineering multi-role
              compliance workflows like <a
                className={`font-semibold underline decoration-1 underline-offset-4 transition-colors ${
                  isDay
                    ? 'text-red-900 hover:text-red-700'
                    : 'text-red-300 hover:text-red-400'
                }`}
                href="https://nexora-inky-ten.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                NEXORA
              </a>
              —ensuring zero data friction
              across inspectors and admins—or scaling modern web interfaces, I
              build WEBs to perform smoothly when the pressure
              peaks.
            </p>
          </div>
          <aside className={`self-start border-l-4 p-4 shadow-xl backdrop-blur-md sm:p-8 ${isDay ? 'border-y border-r border-slate-200 border-l-red-900 bg-stone-50 shadow-slate-300/50' : 'border border-white/15 bg-black/65 shadow-black/30'}`}>
            <p className={`mb-6 border-b pb-4 font-mono text-[0.7rem] font-bold uppercase tracking-[0.18em] ${isDay ? 'border-slate-200 text-red-900' : 'border-white/15 text-red-400'}`}>
              // Subject specifications
            </p>
            <dl className={`space-y-6 font-mono text-xs uppercase tracking-[0.06em] sm:text-sm ${isDay ? 'text-slate-700' : 'text-white'}`}>
              <div>
                <dt className={isDay ? 'text-slate-500' : 'text-neutral-400'}>Operational base</dt>
                <dd className={isDay ? 'mt-1.5 text-slate-900' : 'mt-1.5 text-stone-100'}>Lucknow, IN</dd>
              </div>
              <div>
                <dt className={isDay ? 'text-slate-500' : 'text-neutral-400'}>Core role</dt>
                <dd className={isDay ? 'mt-1.5 leading-6 text-slate-900' : 'mt-1.5 leading-6 text-stone-100'}>
                  Full-Stack Web Developer & Normal human
                </dd>
              </div>
              <div>
                <dt className={isDay ? 'text-slate-500' : 'text-neutral-400'}>Philosophy</dt>
                <dd className={isDay ? 'mt-1.5 leading-6 text-slate-900' : 'mt-1.5 leading-6 text-stone-100'}>
                  No complexity, No attachements, No discussions, No debates - Only Practical work.
                </dd>
              </div>
              <div>
                <dt className={isDay ? 'text-slate-500' : 'text-neutral-400'}>Status</dt>
                <dd className={isDay ? 'mt-1.5 text-amber-700' : 'mt-1.5 text-red-300'}>Active // Ready for deployment</dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
      <ScrollPrompt href="#arsenal" label={isDay ? 'the briefcase' : 'the arsenal'} day={isDay} desktop />
    </section>
  )
}

export default Dossier
