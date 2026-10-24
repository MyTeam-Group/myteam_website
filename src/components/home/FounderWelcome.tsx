import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { SectionHeader } from '../ui/SectionHeader'

/** Founder welcome graphic, placed directly after the homepage hero. */
export function FounderWelcome() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,28rem)] lg:gap-16">
          <div>
            <SectionHeader
              align="left"
              label="MyTEAm Group"
              title="A Message from Our Founder"
              subtitle="A welcome from Jozef Ike and the vision that guides MyTEAm Group."
            />
            <div className="mt-8">
              <Button to="/about" variant="accent">
                Learn More About Us
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>

          <a
            href="/brand/CEO welcome message.jpg"
            target="_blank"
            rel="noreferrer"
            className="mx-auto block w-full max-w-md overflow-hidden rounded-2xl border border-navy/10 bg-background shadow-sm focus-visible:outline-offset-4"
            aria-label="View Jozef Ike's founder welcome message at full size"
          >
            <img
              src="/brand/CEO welcome message.jpg"
              alt="Founder Jozef Ike's welcome message for MyTEAm Group"
              width={853}
              height={1280}
              className="h-auto w-full object-contain"
              loading="lazy"
            />
          </a>
        </div>
      </Container>
    </section>
  )
}
