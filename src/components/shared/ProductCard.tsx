import { Rocket } from 'lucide-react'
import type { Product } from '../../lib/content'

/** "Coming Soon" placeholder product card. No invented names/descriptions. */
export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex h-full flex-col gap-3 rounded-xl border border-dashed border-navy/15 bg-white p-7">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
        <Rocket className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-bold text-navy">{product.name}</h3>
      <span className="inline-flex w-fit rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
        {product.status}
      </span>
      <p className="text-sm text-muted">
        {product.description || `More details about ${product.name} will be shared soon.`}
      </p>
    </div>
  )
}