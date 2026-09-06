import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router'
import { ArrowRight, X } from 'lucide-react'
import { navLinks } from '../../lib/site'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

/**
 * Accessible slide-in mobile navigation panel.
 *
 * Rendered via a portal to document.body so the `fixed inset-0` overlay is
 * positioned against the viewport. The sticky navbar has `backdrop-blur`,
 * and any ancestor with a `backdrop-filter` becomes the containing block
 * for `position: fixed`/`absolute` descendants — which would otherwise trap
 * this menu inside the 64px-high header and render it invisible/off-screen.
 */
export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const closeRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div className="fixed inset-0 z-50 xl:hidden" id="mobile-menu">
      <div className="absolute inset-0 bg-navy/50" onClick={onClose} aria-hidden="true" />
      <nav
        className="absolute inset-y-0 right-0 flex h-full w-72 max-w-[85%] flex-col gap-1 overflow-y-auto bg-white p-6 shadow-xl"
        aria-label="Mobile navigation"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="mb-4 inline-flex h-10 w-10 items-center justify-center self-end rounded-lg text-navy hover:bg-background"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" aria-hidden="true" />
        </button>

        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={onClose}
            className="rounded-lg px-3 py-3 text-base font-semibold text-navy transition-colors hover:bg-background hover:text-accent"
          >
            {link.label}
          </Link>
        ))}

        <Link
          to="/products/jappa"
          onClick={onClose}
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-white"
        >
          Explore Jappa
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </nav>
    </div>,
    document.body,
  )
}