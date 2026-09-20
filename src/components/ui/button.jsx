import { forwardRef } from 'react'

const Button = forwardRef(function Button(
  { className = '', href, children, ...props },
  ref,
) {
  const Component = href ? 'a' : 'button'

  return (
    <Component
      ref={ref}
      href={href}
      className={`inline-flex items-center gap-3 rounded-sm border border-red-500/80 bg-red-600/90 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-[0_8px_24px_rgba(153,27,27,0.35)] transition-colors hover:bg-red-500 ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  )
})

export default Button
