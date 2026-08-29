// ============================================================
// MyTEAm Group — central site metadata & configuration.
// Everything editable about the company lives here so content
// can be updated without touching component markup.
// ============================================================

export const site = {
  name: 'MyTEAm Group',
  legalName: 'MyTEAm Group',
  tagline: 'One Team. One Vision. Limitless Impact.',
  philosophy: '...with information, the world is in your hands.',
  description:
    'MyTEAm Group is a technology company building innovative digital products that solve real-world challenges, create opportunities, and connect people to better possibilities.',
  location: 'Lagos, Nigeria',
  // NOTE: The corporate domain is configurable metadata. It is only
  // rendered as reference text and is never used as a live external
  // link until it is verified to be live.
  domain: 'www.myteamgroup.com',
  year: 2026,
  // Per-page SEO defaults (title + description). Pages may override.
  seo: {
    homeTitle: 'MyTEAm Group | Technology That Solves Real-World Problems',
    homeDescription:
      'MyTEAm Group builds innovative digital products that solve real-world challenges across Africa and beyond.',
  },
}

// Brand asset paths. Add the official logo files here when available
// and the layout will pick them up without any markup changes.
export const brandAssets = {
  // Official MyTEAm Group logo (square lockup).
  myteamLogo: '/brand/myteam-logo.jpeg',
  // Optional compact/horizontal official logo variant. Leave empty to use
  // the square lockup above. When a real compact logo is provided at
  // public/brand/ and this path is set, the navbar swaps it in automatically
  // with no layout change.
  myteamLogoCompact: '',
  // Official Jappa logo — not available yet. When provided, drop the
  // file at public/brand/jappa-logo.png and set this path; the
  // wordmark component will swap automatically.
  jappaLogo: '',
  jappaDomain: 'jappa.com',
}

export interface NavItem {
  label: string
  to: string
}

export const navLinks: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Innovation', to: '/innovation' },
  { label: 'Resources', to: '/resources' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
]

// Secondary/footer navigation groups.
export const footerNavGroups: { heading: string; items: NavItem[] }[] = [
  {
    heading: 'Company',
    items: navLinks.filter((i) => ['About', 'Innovation', 'Contact'].includes(i.label)),
  },
  {
    heading: 'Explore',
    items: [
      { label: 'Products', to: '/products' },
      { label: 'Jappa', to: '/products/jappa' },
      { label: 'Careers', to: '/careers' },
      { label: 'Resources', to: '/resources' },
    ],
  },
]