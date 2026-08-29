import { Globe, MapPin } from 'lucide-react'
import { usePageMeta } from '../lib/hooks/usePageMeta'
import { PageHeader } from '../components/ui/PageHeader'
import { Container } from '../components/ui/Container'
import { ContactForm } from '../components/shared/ContactForm'
import { site } from '../lib/site'

export function Contact() {
  usePageMeta('Contact | MyTEAm Group', 'Get in touch with MyTEAm Group.')

  return (
    <>
      <PageHeader
        label="Contact"
        title="Let's Talk."
        subtitle="Questions, partnerships, opportunities — we'd love to hear from you."
      />

      <section className="bg-background py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <ContactForm />

          <aside className="flex flex-col gap-6">
            <div className="rounded-2xl border border-navy/10 bg-white p-8">
              <h3 className="text-lg font-bold text-navy">Company Information</h3>
              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-navy/5 text-navy">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-navy">Location</p>
                    <p className="text-sm text-muted">{site.location}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-navy/5 text-navy">
                    <Globe className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-navy">Website</p>
                    <p className="text-sm text-muted">{site.domain}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-accent/30 bg-accent-soft p-8">
              <h3 className="text-lg font-bold text-navy">Before you send</h3>
              <p className="mt-2 text-sm text-muted">
                This is an MVP preview — the contact form does not send real messages yet. We connect
                live message handling before launch.
              </p>
            </div>
          </aside>
        </Container>
      </section>
    </>
  )
}