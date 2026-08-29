import { ArrowRight } from 'lucide-react'
import { products } from '../../lib/content'
import { brandAssets } from '../../lib/site'
import { JappaWordmark } from './JappaWordmark'
import { Button } from '../ui/Button'

/** Reusable Jappa showcase card (used on Home + Products page).
 *  Communicates: MyTEAm Group → Our Products → Jappa (flagship).
 */
export function JappaFeature() {
  const jappa = products.find((p) => p.id === 'jappa')

  return (
    <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm">
      {/* Jappa visual panel (orange-toned but navy-compatible) */}
      <div className="relative flex flex-col items-center justify-center gap-3 overflow-hidden bg-gradient-to-br from-navy to-navy-light px-6 py-12 text-center sm:py-16">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
          Our Flagship Product
        </span>
        <JappaWordmark className="text-5xl sm:text-6xl" />
        <p className="max-w-md text-white/80">{jappa?.tagline}</p>
        {/* Decorative node ring */}
        <span aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full border border-accent/40" />
        <span aria-hidden="true" className="pointer-events-none absolute -bottom-14 -left-8 h-56 w-56 rounded-full border border-white/10" />
      </div>

      <div className="flex flex-col gap-6 p-8 sm:p-10">
        <div>
          <h3 className="text-2xl font-extrabold text-navy">Meet Jappa</h3>
          <p className="mt-1 font-semibold text-accent">Making global education more accessible to Africans.</p>
        </div>
        <p className="text-base text-muted">{jappa?.description}</p>
        <div className="flex flex-wrap gap-3">
          <Button to="/products/jappa" variant="accent">
            Explore Jappa
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          {/* External Jappa.com link intentionally not wired until it is
              verified live. Domain is configurable in lib/site.ts. */}
          <span className="inline-flex items-center rounded-lg border border-navy/15 px-4 py-2 text-sm font-semibold text-navy">
            {brandAssets.jappaDomain}
          </span>
        </div>
      </div>
    </div>
  )
}