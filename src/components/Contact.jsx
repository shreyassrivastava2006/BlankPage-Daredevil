const CONTACT = {
  github: 'https://github.com/shreyassrivastava2006',
  linkedin: 'https://www.linkedin.com/in/srivastavshreyas',
  email: 'shreyassrivastava50@gmail.com',
}

const emailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  CONTACT.email,
)}&su=${encodeURIComponent('Project inquiry')}&body=${encodeURIComponent(
  'Hi, I would like to discuss a project or opportunity with you.',
)}`

const channels = [
  ['01', 'Public repo', 'GitHub', 'Inspect source code, build commits, and active repositories.', 'Open vault ↗', CONTACT.github],
  ['02', 'Professional', 'LinkedIn', 'Career background, network, recommendations, and credentials.', 'Connect ↗', CONTACT.linkedin],
  ['03', 'Direct dispatch', 'Direct mail', 'Inquiries regarding roles, hackathons, and systems design.', 'Send message ↗', emailHref],
]

function Contact({ theme }) {
  const isDay = theme === 'day'

  return (
    <section
      id="contact"
      className={`relative isolate min-h-[70vh] overflow-hidden border-t px-5 py-12 sm:px-8 sm:py-24 lg:px-24 ${
        isDay ? 'border-slate-200 bg-white text-slate-950' : 'border-neutral-900 bg-black text-white'
      }`}
    >
      <picture>
        <source
          media="(max-width: 639px)"
          srcSet={isDay ? '/DMC.jpg' : '/NMC.jpg'}
        />
        <img
          className={`absolute inset-0 -z-20 size-full max-sm:object-[58%_center] ${
            isDay
              ? 'origin-center object-cover sm:scale-[1.18] lg:scale-[1.12] sm:object-center opacity-100'
              : 'object-cover sm:object-center'
          }`}
          src={isDay ? '/day-contact.jpg' : '/contact.jpg'}
          alt=""
        />
      </picture>
      <div
        className={`absolute inset-0 -z-10 ${
          isDay
          ? 'bg-[linear-gradient(90deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.76)_35%,rgba(255,255,255,0.18)_68%,transparent_100%),linear-gradient(0deg,rgba(255,255,255,0.38),transparent_60%)] max-sm:bg-[linear-gradient(180deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.58)_42%,rgba(255,255,255,0.94)_100%)]'
          : 'bg-[linear-gradient(90deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.42)_50%,rgba(0,0,0,0.22)_100%),linear-gradient(0deg,rgba(0,0,0,0.72),rgba(0,0,0,0.18))] max-sm:bg-[linear-gradient(180deg,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.5)_45%,rgba(0,0,0,0.92)_100%)]'
        }`}
      />
      <div className={`relative z-10 mx-auto w-full max-w-[22rem] rounded-sm max-sm:p-4 sm:max-w-5xl ${isDay ? 'drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)] max-sm:bg-white/78' : 'max-sm:bg-black/48'}`}>
        <div className="space-y-3">
          <span className={`font-mono text-xs font-semibold uppercase tracking-[0.25em] ${isDay ? 'text-red-950' : 'text-red-500'}`}>
            {isDay ? '// Case file Final: Daylight dispatch' : '// Case file Final: Direct dispatch'}
          </span>
          <h2 className="max-w-[10ch] text-4xl font-[Impact,'Arial_Narrow',sans-serif] uppercase leading-[0.92] tracking-tight sm:max-w-none sm:text-7xl sm:tracking-[0.02em]">
            {isDay ? (
              <span className="text-slate-950">Transmit</span>
            ) : (
              <span className="text-red-600">The Beacon</span>
            )}
          </h2>
          <p className={`max-w-xl text-sm leading-7 sm:text-base ${isDay ? 'font-medium text-slate-900' : 'text-neutral-200'}`}>
            {isDay
              ? 'Have a system to simplify or a difficult problem to solve? Send a clear signal.'
              : 'Have an architectural challenge, a system to build, or an open role? Drop the frequency.'}
          </p>
        </div>
        <div className="grid gap-4 pt-7 sm:gap-6 sm:pt-10 md:grid-cols-3">
          {channels.map(([number, type, name, description, action, href]) => (
            <a
              className={`group flex min-h-48 flex-col justify-between rounded-lg border p-4 transition-all duration-300 sm:min-h-56 sm:p-6 ${
                isDay
                  ? 'border-slate-300/90 bg-white/95 shadow-lg shadow-slate-400/25 backdrop-blur-md hover:border-red-900 hover:bg-white hover:shadow-[0_0_20px_rgba(127,29,29,0.15)]'
                  : 'border-neutral-800/80 bg-neutral-950/70 hover:border-red-600 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)]'
              }`}
              href={href}
              key={number}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              target="_blank"
              title={number === '03' ? `Send an email to ${CONTACT.email}` : undefined}
            >
              <div className="space-y-3">
                <div className={`flex flex-wrap items-center justify-between gap-2 font-mono text-[0.65rem] transition-colors ${isDay ? 'text-slate-600 group-hover:text-red-900' : 'text-neutral-500 group-hover:text-red-500'}`}>
                  <span>[ Channel {number} ]</span>
                  <span>{type}</span>
                </div>
                <h3 className={`text-xl font-bold transition-colors ${isDay ? 'text-slate-950 group-hover:text-red-900' : 'text-white group-hover:text-red-500'}`}>
                  {name}
                </h3>
                <p className={`text-xs leading-6 sm:leading-relaxed ${isDay ? 'text-slate-900' : 'text-neutral-200'}`}>
                  {description}
                </p>
              </div>
              <span className={`flex items-center gap-1 pt-6 font-mono text-xs transition-colors ${isDay ? 'text-slate-600 group-hover:text-red-950' : 'text-neutral-400 group-hover:text-white'}`}>
                {action}
              </span>
            </a>
          ))}
        </div>
        <div className={`mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 font-mono text-center text-xs sm:flex-row sm:text-left ${isDay ? 'border-slate-200 text-slate-500' : 'border-neutral-900 text-neutral-600'}`}>
          <span>// Encrypted transmission — all signals verified</span>
          <span className={isDay ? 'text-slate-600' : 'text-neutral-500'}>
            Hell&apos;s Kitchen protocol © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </section>
  )
}

export default Contact
