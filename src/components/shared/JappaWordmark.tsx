import { brandAssets } from '../../lib/site'

/**
 * Jappa brand mark. Uses the official logo when available; otherwise a
 * clean text wordmark. Swap the logo in via brandAssets without markup
 * changes.
 */
export function JappaWordmark({ className = 'text-3xl' }: { className?: string }) {
  if (brandAssets.jappaLogo) {
    return <img src={brandAssets.jappaLogo} alt="Jappa logo" className={`h-10 w-auto ${className}`} />
  }
  return (
    <span className={`font-extrabold italic tracking-tight text-accent ${className}`}>
      Jappa
    </span>
  )
}