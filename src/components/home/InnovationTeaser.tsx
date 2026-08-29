import { ArrowRight } from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionHeader } from '../ui/SectionHeader'
import { Button } from '../ui/Button'
import { ProductCard } from '../shared/ProductCard'
import { futureProducts } from '../../lib/content'

export function InnovationTeaser() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <Container>
        <SectionHeader
          label="Innovation"
          title="We're Just Getting Started"
          subtitle="Jappa is the first major product in a growing technology ecosystem. More is coming."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {futureProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button to="/innovation" variant="primary" size="lg">
            Explore Our Innovation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </section>
  )
}