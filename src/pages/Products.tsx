import { usePageMeta } from '../lib/hooks/usePageMeta'
import { PageHeader } from '../components/ui/PageHeader'
import { Container } from '../components/ui/Container'
import { SectionHeader } from '../components/ui/SectionHeader'
import { JappaFeature } from '../components/shared/JappaFeature'
import { ProductCard } from '../components/shared/ProductCard'
import { CTASection } from '../components/shared/CTASection'
import { futureProducts, products } from '../lib/content'

export function Products() {
  usePageMeta('Products | MyTEAm Group', 'Explore the products built by MyTEAm Group.')

  const jappa = products.find((p) => p.id === 'jappa')

  return (
    <>
      <PageHeader
        label="Products"
        title="Our Products"
        subtitle="We build digital products designed to solve real-world challenges."
      />

      {/* Featured product */}
      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <SectionHeader
              align="left"
              label="Featured · Flagship Product"
              title={jappa?.name ?? 'Jappa'}
              subtitle="Jappa is an important product of MyTEAm Group."
            />
          </div>
          <div className="mt-10">
            <JappaFeature />
          </div>
        </Container>
      </section>

      {/* Future products */}
      <section className="bg-background py-16 sm:py-24">
        <Container>
          <SectionHeader
            label="Coming Soon"
            title="Future Products in Development"
            subtitle="These are placeholders for products we are building. Details will be shared as they launch."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {futureProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Interested in what we're building?"
        subtitle="Reach out to learn more or explore partnership opportunities."
        primary="Get In Touch"
        primaryTo="/contact"
        secondary="Explore Careers"
        secondaryTo="/careers"
      />
    </>
  )
}