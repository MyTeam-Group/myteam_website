import { site } from '../lib/site'
import { usePageMeta } from '../lib/hooks/usePageMeta'
import { Hero } from '../components/home/Hero'
import { WhatWeDo } from '../components/home/WhatWeDo'
import { FeaturedProduct } from '../components/home/FeaturedProduct'
import { HowWeBuild } from '../components/home/HowWeBuild'
import { Vision } from '../components/home/Vision'
import { Impact } from '../components/home/Impact'
import { AboutTeaser } from '../components/home/AboutTeaser'
import { InnovationTeaser } from '../components/home/InnovationTeaser'
import { CTASection } from '../components/shared/CTASection'

export function Home() {
  usePageMeta(site.seo.homeTitle, site.seo.homeDescription)

  return (
    <>
      <Hero />
      <WhatWeDo />
      <FeaturedProduct />
      <HowWeBuild />
      <Vision />
      <Impact />
      <AboutTeaser />
      <InnovationTeaser />
      <CTASection
        title="Let's build what's next together."
        subtitle="Explore our products, partner with us, or join the team — we'd love to hear from you."
        primary="Partner With Us"
        primaryTo="/contact"
        secondary="Explore Careers"
        secondaryTo="/careers"
      />
    </>
  )
}