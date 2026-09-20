import { useEffect, useState } from 'react'

function ScrollPrompt({ href, label, day, desktop = false }) {
  const [destinationVisible, setDestinationVisible] = useState(false)

  useEffect(() => {
    const destinationId = href.startsWith('#') ? href.slice(1) : ''
    const destinations = destinationId
      ? document.querySelectorAll(`#${CSS.escape(destinationId)}`)
      : []

    if (!destinations.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        setDestinationVisible(entries.some((entry) => entry.isIntersecting))
      },
      { threshold: 0.15 },
    )

    destinations.forEach((destination) => observer.observe(destination))

    return () => observer.disconnect()
  }, [href])

  return (
    <a
      className={`group absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-center text-[0.58rem] font-bold uppercase tracking-[0.2em] transition-all duration-500 sm:bottom-8 sm:gap-3 sm:text-[0.65rem] sm:tracking-[0.28em] ${
        destinationVisible ? 'pointer-events-none opacity-0' : 'opacity-100'
      } ${day ? 'text-slate-500 hover:text-amber-700' : 'text-white/65 hover:text-red-400'} ${
        desktop ? 'max-sm:hidden' : 'sm:hidden'
      }`}
      href={href}
      aria-label={`Scroll to ${label}`}
    >
      <span className={`relative h-8 w-px overflow-hidden ${day ? 'bg-slate-300' : 'bg-white/20'}`}>
        <span className={`absolute inset-x-0 -top-full h-1/2 animate-[scroll-line_1.8s_ease-in-out_infinite] ${day ? 'bg-amber-500' : 'bg-red-500'}`} />
      </span>
      <span className="flex flex-col items-center gap-1">
        <span>Scroll to</span>
        <span className={day ? 'text-amber-700' : 'text-red-400'}>{label}</span>
      </span>
      <span className={`text-lg leading-none transition-transform group-hover:translate-y-1 ${day ? 'text-amber-600' : 'text-red-500'}`} aria-hidden="true">
        ↓
      </span>
    </a>
  )
}

export default ScrollPrompt
