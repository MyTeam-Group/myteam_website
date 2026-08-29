import { BookOpen, FileText, Megaphone } from 'lucide-react'
import { usePageMeta } from '../lib/hooks/usePageMeta'
import { PageHeader } from '../components/ui/PageHeader'
import { Container } from '../components/ui/Container'
import { EmptyState } from '../components/shared/EmptyState'
import { CTASection } from '../components/shared/CTASection'

const resourceSections = [
  {
    icon: BookOpen,
    title: 'Blog',
    description: 'Insights and perspectives from the team. Coming soon.',
  },
  {
    icon: Megaphone,
    title: 'News',
    description: 'Company announcements and updates. Coming soon.',
  },
  {
    icon: FileText,
    title: 'Case Studies',
    description: 'Stories of problems solved and impact created. Coming soon.',
  },
]

export function Resources() {
  usePageMeta('Resources | MyTEAm Group', 'Read MyTEAm Group news, insights, and case studies.')

  return (
    <>
      <PageHeader
        label="Resources"
        title="Resources"
        subtitle="Stories, insights, and updates from MyTEAm Group."
      />

      <section className="bg-background py-16 sm:py-24">
        <Container>
          <p className="mx-auto max-w-xl text-center text-muted">
            Our resource library is being prepared. Browse the areas below — content will be added here
            as it becomes available.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resourceSections.map((r) => (
              <EmptyState key={r.title} icon={r.icon} title={r.title} description={r.description} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Want to talk to us in the meantime?"
        subtitle="We're happy to answer questions directly."
        primary="Contact Us"
        primaryTo="/contact"
      />
    </>
  )
}