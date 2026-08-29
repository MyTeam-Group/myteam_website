import { Link } from 'react-router'
import { footerNavGroups, site } from '../../lib/site'
import { Container } from '../ui/Container'
import { BrandLogo } from '../ui/BrandLogo'

/** Strong navy footer. No invented social links are shown. */
export function Footer() {
  return (
    <footer className="bg-navy-deepest text-white">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" className="inline-block" aria-label="MyTEAm Group home">
              <BrandLogo className="h-11" />
            </Link>
            <p className="mt-4 max-w-xs text-2xl font-extrabold leading-tight">
              One Team. One Vision. Limitless Impact.
            </p>
          </div>

          {footerNavGroups.map((group) => (
            <div key={group.heading}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white/50">
                {group.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} className="text-sm text-white/80 transition-colors hover:text-accent">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {site.year} {site.legalName}. All Rights Reserved.
          </p>
          <p>
            {site.location} · {site.domain}
          </p>
        </Container>
      </div>
    </footer>
  )
}