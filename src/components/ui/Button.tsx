import { Link } from 'react-router'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'accent' | 'outline' | 'white' | 'ghost'
type Size = 'md' | 'lg'

interface BaseProps {
  to?: string
  href?: string
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 whitespace-nowrap'

const sizeClasses: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-navy text-white hover:bg-navy-light',
  accent: 'bg-accent text-white hover:bg-accent/90',
  outline: 'border-2 border-navy text-navy hover:bg-navy hover:text-white',
  white: 'bg-white text-navy hover:bg-background',
  ghost: 'bg-transparent text-current hover:bg-white/10',
}

/** Polymorphic button: renders an internal Link, external anchor, or button. */
export function Button({
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}: ButtonProps) {
  const cls = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={cls} target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    )
  }

  const { type, ...buttonRest } = rest
  return (
    <button type={type ?? 'button'} className={cls} {...buttonRest}>
      {children}
    </button>
  )
}