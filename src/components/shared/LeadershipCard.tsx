import type { Leader } from '../../lib/content'

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')
}

/** Leadership card. Handles future members; bio/social only render when provided. */
export function LeadershipCard({ leader }: { leader: Leader }) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-xl border border-navy/10 bg-white p-7 shadow-sm">
      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-navy">
        {leader.image ? (
          <img
            src={leader.image}
            alt={leader.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-lg font-extrabold text-white">
            {initials(leader.name)}
          </div>
        )}
      </div>
      <div>
        <h3 className="text-lg font-bold text-navy">{leader.name}</h3>
        <p className="mt-1 text-sm font-semibold text-accent">{leader.role}</p>
      </div>
      {leader.bio && <p className="text-sm text-muted">{leader.bio}</p>}
      {leader.social && (
        <a
          href={leader.social}
          className="mt-auto text-sm font-semibold text-navy hover:text-accent"
          target="_blank"
          rel="noreferrer noopener"
        >
          LinkedIn →
        </a>
      )}
    </div>
  )
}