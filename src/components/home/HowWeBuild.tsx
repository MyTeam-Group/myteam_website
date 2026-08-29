import { Container } from '../ui/Container'
import { SectionHeader } from '../ui/SectionHeader'
import { ProcessStep } from '../shared/ProcessStep'
import { processSteps } from '../../lib/content'

export function HowWeBuild() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <Container>
        <SectionHeader
          title="We Don't Just Build Software. We Solve Problems."
          subtitle="A disciplined product-building process grounded in real-world needs."
        />
        <ol className="mx-auto mt-12 max-w-3xl">
          {processSteps.map((step, i) => (
            <ProcessStep key={step.title} step={step} index={i} isLast={i === processSteps.length - 1} />
          ))}
        </ol>
      </Container>
    </section>
  )
}