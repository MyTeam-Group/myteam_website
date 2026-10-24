import { ArrowRight, BookOpen } from 'lucide-react'
import { usePageMeta } from '../lib/hooks/usePageMeta'
import { PageHeader } from '../components/ui/PageHeader'
import { Container } from '../components/ui/Container'
import { SectionHeader } from '../components/ui/SectionHeader'
import { Button } from '../components/ui/Button'
import { JappaFeature } from '../components/shared/JappaFeature'
import { brandAssets, site } from '../lib/site'

const helpPoints = [
  {
    title: 'Discover opportunities',
    text: 'Find international university admission opportunities suited to your goals.',
  },
  {
    title: 'Find scholarships',
    text: 'Access scholarships and funding information that can make study abroad possible.',
  },
  {
    title: 'Navigate the journey',
    text: 'Simpler guidance through the steps of studying abroad.',
  },
]

export function Jappa() {
  usePageMeta('Jappa | MyTEAm Group', 'Jappa — a study-abroad platform by MyTEAm Group.')

  return (
    <>
      <PageHeader
        label="Flagship Product"
        title="Jappa"
        subtitle="Making global education more accessible to Africans."
      >
        <p className="mt-2 max-w-2xl text-white/60">
          A product of {site.name}. Available at <span className="font-semibold text-accent">{brandAssets.jappaDomain}</span>.
        </p>
      </PageHeader>

      {/* Relationship line */}
      <section className="border-b border-navy/10 bg-white">
        <Container className="py-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm font-semibold text-muted">
            <li><span className="text-navy">MyTEAm Group</span></li>
            <li aria-hidden="true">→</li>
            <li><span className="text-navy">Our Products</span></li>
            <li aria-hidden="true">→</li>
            <li><span className="text-accent">Jappa</span></li>
          </ol>
        </Container>
      </section>

      {/* Overview */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader
              align="left"
              label="About Jappa"
              title="Education, Made More Accessible"
              subtitle=""
            />
            <p className="mt-4 text-muted">
              Jappa is a study-abroad platform designed to connect students across Africa with
              international university admission opportunities, scholarships, and tools that simplify the
              journey toward studying abroad.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/products" variant="primary">
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
                Back to Products
              </Button>
              <Button to="/contact" variant="outline">
                Contact MyTEAm
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            {helpPoints.map((p) => (
              <div key={p.title} className="flex gap-4 rounded-xl border border-navy/10 bg-background p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy text-accent">
                  <BookOpen className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-navy">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Showcase */}
      <section className="bg-background py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <SectionHeader
              align="left"
              label="The Product"
              title="Meet Jappa"
              subtitle="Jappa is the first flagship product of the MyTEAm ecosystem — one important piece of a bigger vision."
            />
          </div>
          <div className="mt-10">
            <div className="mx-auto max-w-md">
              <a
                href="/brand/Jappa.jpg"
                target="_blank"
                rel="noreferrer"
                className="block overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm focus-visible:outline-offset-4"
                aria-label="View the Jappa study-abroad opportunities graphic at full size"
              >
                <img
                  src="/brand/Jappa.jpg"
                  alt="Jappa study-abroad opportunities graphic"
                  width={720}
                  height={1080}
                  className="h-auto w-full object-contain"
                  loading="lazy"
                />
              </a>
              <a
                href="/brand/Jappa.jpg"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex text-sm font-semibold text-navy underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
              >
                View the full-size graphic
              </a>
            </div>
            <div className="mt-10">
              <JappaFeature />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
