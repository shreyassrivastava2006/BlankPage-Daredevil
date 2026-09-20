function ThemeToggle({ theme, onToggle }) {
  const isDay = theme === 'day'

  return (
    <button
      className={`fixed right-3 top-3 z-50 flex items-center gap-2 border px-2.5 py-2 text-[0.6rem] font-mono uppercase tracking-[0.12em] backdrop-blur-md transition-colors sm:right-5 sm:top-5 sm:gap-3 sm:px-3 sm:text-[0.65rem] sm:tracking-[0.16em] ${
        isDay
          ? 'border-slate-300 bg-white/85 text-slate-600 hover:border-amber-500 hover:text-slate-950'
          : 'border-white/20 bg-black/60 text-white/70 hover:border-red-500 hover:text-white'
      }`}
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${isDay ? 'vigilante' : 'lawyer'} theme`}
    >
      <span
        className={`size-2 rounded-full ${
          isDay ? 'bg-amber-500' : 'bg-red-500'
        }`}
      />
      {isDay ? 'Lawyer' : 'Vigilante'}
      <span className={`hidden sm:inline ${isDay ? 'text-slate-400' : 'text-white/40'}`}>/ switch</span>
    </button>
  )
}

export default ThemeToggle
