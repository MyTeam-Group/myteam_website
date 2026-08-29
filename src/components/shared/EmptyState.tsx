import type { LucideIcon } from 'lucide-react'

interface EmptyStateProps {
  icon: LucideIcon
  title: string
  description: string
}

/** Empty / coming-soon state used on the Resources page. */
export function EmptyState({ icon: Icon, title, description }: EmptyStateProps) {
  return (
    <div className="flex h-full flex-col items-center gap-3 rounded-xl border border-dashed border-navy/15 bg-white p-8 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy/5 text-navy">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-bold text-navy">{title}</h3>
      <p className="text-sm text-muted">{description}</p>
    </div>
  )
}