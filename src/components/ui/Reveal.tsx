import type { ReactNode } from 'react'
import { useInView } from '../../lib/hooks/useInView'

/** Subtle fade-in-on-scroll wrapper. Fully disabled under prefers-reduced-motion. */
export function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <div ref={ref} className={className} style={{ transitionDelay: `${delay}ms` }}>
      <div
        className={`transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {children}
      </div>
    </div>
  )
}