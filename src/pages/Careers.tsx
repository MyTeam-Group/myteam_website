import { Check } from 'lucide-react'
import { usePageMeta } from '../lib/hooks/usePageMeta'
import { PageHeader } from '../components/ui/PageHeader'
import { Container } from '../components/ui/Container'
import { SectionHeader } from '../components/ui/SectionHeader'
import { Button } from '../components/ui/Button'
import { CTASection } from '../components/shared/CTASection'

const whyPoints = [
  'Work on meaningful problems that create real impact.',
  'Contribute to digital products used by real people.',
  'Grow with an ambitious, early-stage technology company.',
  'Learn across product, design, and engineering, and beyond.',
]

const culturePoints = [
  'Collaborative and mission-driven.',
  'A culture of learning and continuous improvement.',
  'Integrity at the centre of how we work.',
  'A long-term view of building something that lasts.',
]

export function Careers() {
  usePageMeta('Careers | MyTEAm Group', 'Build the future with us at MyTEAm Group.')

  return (
    <>
      <PageHeader
        label="Careers"
        title="Build the Future With Us."
        subtitle="We're building technology that solves meaningful problems. Come build with us."
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeader align="left" title="Why Work at MyTEAm" />
              <ul className="mt-6 space-y-3">
                {whyPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-navy">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeader align="left" title="Our Culture" />
              <ul className="mt-6 space-y-3">
                {culturePoints.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-navy">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Open positions */}
      <section className="bg-background py-16 sm:py-20">
        <Container className="max-w-2xl text-center">
          <SectionHeader label="Open Positions" title="Open Positions" />
          <div className="mt-8 rounded-2xl border border-dashed border-navy/25 bg-white p-8">
            <p className="font-semibold text-navy">No open positions at the moment.</p>
            <p className="mt-2 text-sm text-muted">
              We're always interested in connecting with talented, mission-driven people. Reach out and
              tell us about yourself.
            </p>
            <div className="mt-6">
              <Button to="/contact" variant="accent">
                Get In Touch
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to build with us?"
        subtitle="Introduce yourself — we'd love to hear from motivated people."
        primary="Contact Us"
        primaryTo="/contact"
        secondary="Explore Our Products"
        secondaryTo="/products"
      />
    </>
  )
}