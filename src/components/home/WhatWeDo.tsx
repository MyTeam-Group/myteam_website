import { Container } from '../ui/Container'
import { SectionHeader } from '../ui/SectionHeader'
import { Reveal } from '../ui/Reveal'
import { SolutionCard } from '../shared/SolutionCard'
import { solutions } from '../../lib/content'

export function WhatWeDo() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <Container>
        <SectionHeader
          title="What We Do"
          subtitle="We identify real problems, build technology around them, and create solutions designed to make a meaningful impact."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 60}>
              <SolutionCard icon={s.icon} title={s.title} description={s.description} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}