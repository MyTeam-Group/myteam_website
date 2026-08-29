import { Container } from '../ui/Container'
import { Button } from '../ui/Button'

interface CTASectionProps {
  title: string
  subtitle?: string
  primary: string
  primaryTo: string
  secondary?: string
  secondaryTo?: string
}

/** Persistent, reusable navy conversion band. */
export function CTASection({
  title,
  subtitle,
  primary,
  primaryTo,
  secondary,
  secondaryTo,
}: CTASectionProps) {
  return (
    <section className="bg-navy text-white">
      <Container className="py-16 text-center sm:py-20">
        <h2 className="mx-auto max-w-3xl text-3xl font-extrabold text-white sm:text-4xl">{title}</h2>
        {subtitle && <p className="mx-auto mt-4 max-w-2xl text-white/75">{subtitle}</p>}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button to={primaryTo} variant="accent" size="lg">
            {primary}
          </Button>
          {secondary && secondaryTo && (
            <Button to={secondaryTo} variant="white" size="lg">
              {secondary}
            </Button>
          )}
        </div>
      </Container>
    </section>
  )
}