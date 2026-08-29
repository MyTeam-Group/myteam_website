interface SectionHeaderProps {
  label?: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  light?: boolean
  className?: string
}

/** Consistent section heading with accent label + optional subtitle. */
export function SectionHeader({
  label,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}: SectionHeaderProps) {
  const centered = align === 'center'
  return (
    <div
      className={`max-w-2xl ${centered ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      {label && (
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-accent">
          <span className={`h-px w-6 bg-accent ${centered ? 'hidden' : ''}`} aria-hidden="true" />
          {label}
          {centered && <span className="h-px w-6 bg-accent" aria-hidden="true" />}
        </span>
      )}
      <h2
        className={`mt-4 text-3xl font-extrabold sm:text-4xl ${light ? 'text-white' : 'text-navy'}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg ${light ? 'text-white/75' : 'text-muted'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}