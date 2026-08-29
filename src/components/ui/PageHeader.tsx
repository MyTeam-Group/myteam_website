import type { ReactNode } from 'react'
import { Container } from './Container'

interface PageHeaderProps {
  label?: string
  title: string
  subtitle?: string
  children?: ReactNode
}

/** Consistent navy page hero header used across interior pages. */
export function PageHeader({ label, title, subtitle, children }: PageHeaderProps) {
  return (
    <section className="border-b border-white/10 bg-navy text-white">
      <Container className="py-16 sm:py-20">
        {label && (
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
            {label}
          </span>
        )}
        <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-5xl">
          {title}
        </h1>
        {subtitle && <p className="mt-4 max-w-2xl text-base text-white/75 sm:text-lg">{subtitle}</p>}
        {children}
      </Container>
    </section>
  )
}