import type { LucideIcon } from 'lucide-react'

/** Card used in "What We Do": icon + title + description with subtle hover. */
export function SolutionCard({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) {
  return (
    <div className="group flex h-full flex-col gap-4 rounded-xl border border-navy/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy/5 text-navy transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-bold text-navy">{title}</h3>
      <p className="text-sm text-muted">{description}</p>
    </div>
  )
}