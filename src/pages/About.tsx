import { Compass, Target } from 'lucide-react'
import { usePageMeta } from '../lib/hooks/usePageMeta'
import { PageHeader } from '../components/ui/PageHeader'
import { Container } from '../components/ui/Container'
import { SectionHeader } from '../components/ui/SectionHeader'
import { LeadershipCard } from '../components/shared/LeadershipCard'
import { CTASection } from '../components/shared/CTASection'
import { leadership, values } from '../lib/content'

export function About() {
  usePageMeta(
    'About | MyTEAm Group',
    'Learn about MyTEAm Group — our story, mission, vision, values, and leadership.',
  )

  return (
    <>
      <PageHeader
        label="About MyTEAm Group"
        title="Technology Built Around Real Problems."
        subtitle="We are a technology-driven company building software and digital products across education, health, computer science, engineering, and entertainment."
      />

      {/* Our Story */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeader align="left" label="Our Story" title="Our Story" />
          <p className="mt-6 text-navy">
            MyTEAm Group is a technology-driven company focused on building software and digital
            products that solve modern real-world challenges. We work across education technology,
            health technology, computer science and digital technology, engineering, and
            entertainment, and provide technology and educational consultancy. We are not a
            single-product company — we build an ecosystem of products and solutions over the long
            term, starting with our first flagship product, Jappa.
          </p>
          <p className="mt-4 text-muted">
            We begin with real problems, invest in research and design, and build technology that
            creates opportunity and meaningful impact in Nigeria, across Africa, and beyond.
          </p>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="bg-background py-16 sm:py-20">
        <Container>
          <SectionHeader
            label="Mission & Vision"
            title="Driven by Purpose"
            subtitle="Our mission and vision guide how we build and who we serve."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-navy/10 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy/5 text-navy">
                <Target className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-navy">Our Mission</h3>
              <p className="mt-2 text-muted">
                We build technology that solves meaningful real-world problems — through education,
                technology, and innovation — creating opportunities for individuals, businesses, and
                institutions across Nigeria, Africa, and beyond.
              </p>
            </div>
            <div className="rounded-2xl border border-navy/10 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy/5 text-navy">
                <Compass className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-navy">Our Vision</h3>
              <p className="mt-2 text-muted">
                To drive long-term, technology-led impact across Nigeria, Africa, and the world —
                building a company that endures and a product ecosystem that grows.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeader label="Core Values" title="What We Stand For" />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <li key={v.title} className="rounded-xl border border-navy/10 bg-background p-7">
                <span className="flex h-3 w-3 rounded-full bg-accent" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold text-navy">{v.title}</h3>
                <p className="mt-1 text-muted">{v.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Leadership */}
      <section className="bg-background py-16 sm:py-20">
        <Container>
          <SectionHeader
            label="Leadership"
            title="The Team Behind MyTEAm"
            subtitle="Leadership information will be expanded as the team grows."
          />
          <div className="mx-auto mt-12 grid max-w-2xl gap-6 sm:grid-cols-2">
            {leadership.map((leader) => (
              <LeadershipCard key={leader.name} leader={leader} />
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-md text-center text-sm text-muted">
            More leadership profiles will be added here as the team grows.
          </p>
        </Container>
      </section>

      <CTASection
        title="Let's build a better product together."
        subtitle="Whether you're a partner, a customer, or a future teammate — we'd love to connect."
        primary="Partner With Us"
        primaryTo="/contact"
        secondary="Explore Our Products"
        secondaryTo="/products"
      />
    </>
  )
}