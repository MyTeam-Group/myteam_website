import { Container } from '../ui/Container'

export function Vision() {
  return (
    <section className="bg-navy py-20 text-white sm:py-28">
      <Container className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-5xl">
          One Team. One Vision. Limitless Impact.
        </h2>
        <p className="mt-6 text-xl font-medium italic text-accent sm:text-2xl">
          &ldquo;&hellip;with information, the world is in your hands.&rdquo;
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-white/75">
          We believe that solving real problems with technology — and putting the right information
          in people&apos;s hands — creates opportunity, unlocks potential, and drives genuine progress.
        </p>
      </Container>
    </section>
  )
}