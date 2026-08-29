import { brandAssets } from '../../lib/site'

interface BrandLogoProps {
  className?: string
  loading?: 'eager' | 'lazy'
}

/**
 * Single source for the MyTEAm brand mark used in the navbar/footer.
 *
 * - Uses the compact/horizontal official logo when configured, so a future
 *   compact variant can be swapped in via `brandAssets.myteamLogoCompact`
 *   with no markup changes.
 * - Otherwise renders the existing square lockup (public/brand/myteam-logo.jpeg).
 * - `w-auto object-contain` preserves the asset's aspect ratio and internal
 *   whitespace exactly — never distorted, cropped, or stretched.
 */
export function BrandLogo({ className = '', loading = 'lazy' }: BrandLogoProps) {
  const src = brandAssets.myteamLogoCompact || brandAssets.myteamLogo

  return (
    <img
      src={src}
      alt="MyTEAm Group logo"
      className={`w-auto object-contain ${className}`}
      loading={loading}
    />
  )
}