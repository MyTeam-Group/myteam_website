import { usePageMeta } from '../lib/hooks/usePageMeta'
import { PageHeader } from '../components/ui/PageHeader'
import { Container } from '../components/ui/Container'
import { SectionHeader } from '../components/ui/SectionHeader'
import { ProcessStep } from '../components/shared/ProcessStep'
import { CTASection } from '../components/shared/CTASection'
import { innovationPipeline } from '../lib/content'

export function Innovation() {
  usePageMeta(
    'Innovation | MyTEAm Group',
    'MyTEAm Group is building a growing technology ecosystem starting with its first flagship product, Jappa.',
  )

  return (
    <>
      <PageHeader
        label="Innovation"
        title="We're Just Getting Started."
        subtitle="Jappa is the first major product in a growing technology ecosystem — and there is much more to come."
      />

      <section className="bg-white py-16 sm:py-24">
        <Container>
          <SectionHeader
            title="From Idea to Impact"
            subtitle="A disciplined pipeline that turns meaningful problems into dependable products."
          />
          <ol className="mx-auto mt-12 max-w-3xl">
            {innovationPipeline.map((step, i) => (
              <ProcessStep
                key={step.title}
                step={step}
                index={i}
                isLast={i === innovationPipeline.length - 1}
              />
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <Container className="max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">A Long-Term Technology Company</h2>
          <p className="mt-4 text-muted">
            We continuously explore opportunities to build technology around meaningful problems.
            What we announce publicly reflects what we are genuinely working on — early stages remain
            internal until they are ready.
          </p>
          <p className="mt-4 text-muted">
            Jappa is where we started. It is the flagship product of MyTEAm Group — and the platform
            on which our product ecosystem will grow.
          </p>
        </Container>
      </section>

      <CTASection
        title="Explore the products we're building."
        subtitle="See our portfolio and the next chapter of the MyTEAm ecosystem."
        primary="View Our Products"
        primaryTo="/products"
        secondary="Partner With Us"
        secondaryTo="/contact"
      />
    </>
  )
}