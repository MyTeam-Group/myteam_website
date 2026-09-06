import { ArrowRight } from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionHeader } from '../ui/SectionHeader'
import { Button } from '../ui/Button'

const points = [
  { title: 'Our Story', text: 'MyTEAm Group began with a simple conviction: technology should solve real problems that people actually face.' },
  { title: 'Our Mission', text: 'We build technology that solves meaningful real-world problems across education, technology, and innovation.' },
  { title: 'Our Vision', text: 'To create long-term, technology-driven impact across Nigeria, Africa, and the world.' },
]

export function AboutTeaser() {
  return (
    <section className="bg-navy-light text-white">
      <Container className="py-16 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <SectionHeader
            align="left"
            label="About MyTEAm"
            title="Technology Built Around Real Problems."
            light
            subtitle=""
          />
          <div className="grid gap-5">
            {points.map((p) => (
              <div key={p.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-bold text-accent">{p.title}</h3>
                <p className="mt-1 text-white/80">{p.text}</p>
              </div>
            ))}
            <Button to="/about" variant="accent">
              Learn More About Us
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}