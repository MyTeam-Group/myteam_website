import { Globe, Sparkles, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionHeader } from '../ui/SectionHeader'
import { Reveal } from '../ui/Reveal'
import { impactMetricSlots, impactStatements } from '../../lib/content'

const statementIcons: LucideIcon[] = [Users, Globe, Sparkles]

/** Our Impact — non-numeric, honest messaging. No fabricated statistics. */
export function Impact() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeader
          label="Our Impact"
          title="Our Impact"
          subtitle="We measure success by the real difference our products make."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {impactStatements.map((statement, i) => {
            const Icon = statementIcons[i % statementIcons.length]
            return (
              <Reveal key={statement} delay={i * 60}>
                <div className="flex h-full flex-col items-center gap-4 rounded-xl border border-navy/10 bg-background p-8 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-accent">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="font-semibold text-navy">{statement}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Clearly-marked placeholder — never presented as real numbers. */}
        <div className="mt-10 rounded-2xl border border-dashed border-navy/20 bg-background p-8 text-center">
          <p className="font-bold text-navy">Impact metrics coming soon</p>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted">
            We will share verified numbers here as they become available — we do not publish unverified figures.
          </p>
          <ul className="mt-5 flex flex-wrap justify-center gap-3">
            {impactMetricSlots.map((slot) => (
              <li
                key={slot}
                className="rounded-full border border-navy/15 bg-white px-4 py-1.5 text-xs font-semibold text-muted"
              >
                {slot} — coming soon
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}