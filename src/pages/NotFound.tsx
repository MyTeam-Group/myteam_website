import { usePageMeta } from '../lib/hooks/usePageMeta'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'

export function NotFound() {
  usePageMeta('Page Not Found | MyTEAm Group', 'The page you are looking for could not be found.')

  return (
    <section className="bg-background py-24">
      <Container className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">404</p>
        <h1 className="mt-4 text-4xl font-extrabold text-navy sm:text-5xl">Page Not Found</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <div className="mt-8">
          <Button to="/" variant="primary" size="lg">
            Back to Home
          </Button>
        </div>
      </Container>
    </section>
  )
}