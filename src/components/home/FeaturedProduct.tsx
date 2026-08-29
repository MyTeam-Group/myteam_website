import { Container } from '../ui/Container'
import { SectionHeader } from '../ui/SectionHeader'
import { JappaFeature } from '../shared/JappaFeature'

/** Reinforces the parent → product hierarchy before the Jappa card. */
function ProductLine() {
  const items = ['MyTEAm Group', 'Our Products', 'Jappa']
  return (
    <ol className="flex flex-wrap items-center justify-center gap-2 text-sm font-semibold text-muted">
      {items.map((item, i) => (
        <li key={item} className="flex items-center gap-2">
          <span className={i === items.length - 1 ? 'text-accent' : ''}>{item}</span>
          {i < items.length - 1 && <span aria-hidden="true">→</span>}
        </li>
      ))}
    </ol>
  )
}

export function FeaturedProduct() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeader
          title="A Flagship Product Within Something Bigger"
          subtitle="Jappa is an important product of MyTEAm Group — the first of many solutions we are building."
        />
        <div className="mt-10">
          <ProductLine />
        </div>
        <div className="mt-8">
          <JappaFeature />
        </div>
      </Container>
    </section>
  )
}