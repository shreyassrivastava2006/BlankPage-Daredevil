const RAIN_DROP_COUNT = 150

function Rain() {
  return (
    <div className="pointer-events-none absolute inset-x-0 -top-[20%] z-0 h-[120%] overflow-hidden opacity-65 max-sm:opacity-50" aria-hidden="true">
      {Array.from({ length: RAIN_DROP_COUNT }, (_, index) => (
        <span
          className="absolute -top-[15%] left-[var(--drop-left)] w-px rotate-[10deg] bg-gradient-to-b from-transparent via-red-400/70 to-red-600/80 blur-[0.2px] [animation:rain-fall_var(--drop-duration)_linear_infinite]"
          key={index}
          style={{
            '--drop-left': `${(index * 37) % 108 - 4}%`,
            '--drop-duration': `${0.75 + (index % 9) * 0.12}s`,
            '--drop-delay': `-${(index % 14) * 0.19}s`,
            height: `${24 + (index % 9) * 6}px`,
            opacity: 0.35 + (index % 5) * 0.1,
          }}
        />
      ))}
    </div>
  )
}

export default Rain
