import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router'
import { ArrowRight, Menu } from 'lucide-react'
import { navLinks } from '../../lib/site'
import { MobileMenu } from './MobileMenu'
import { Container } from '../ui/Container'
import { BrandLogo } from '../ui/BrandLogo'

/** Sticky, responsive navbar with scroll state and mobile hamburger menu. */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 bg-white/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-none'
      }`}
    >
      <Container className="flex h-18 items-center justify-between gap-5 sm:h-20">
        <Link to="/" aria-label="MyTEAm Group home" className="flex items-center">
          <BrandLogo lockup className="h-12 sm:h-14" loading="eager" />
        </Link>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors ${
                  isActive ? 'text-accent' : 'text-navy hover:text-accent'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Link
            to="/products/jappa"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
          >
            Explore Jappa
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy hover:bg-background xl:hidden"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </Container>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}