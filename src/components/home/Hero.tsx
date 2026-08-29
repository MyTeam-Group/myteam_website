import { useMemo } from 'react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'

/** Decorative abstract network/connectivity SVG — subtle, on-brand, no stock imagery. */
function NetworkVisual() {
  const nodes = useMemo(() => {
    const seed = [
      [60, 40], [130, 90], [210, 50], [270, 120], [340, 80],
      [90, 170], [200, 150], [300, 190], [150, 250], [250, 260], [320, 150],
    ]
    return seed.map(([x, y], i) => ({ x, y, accent: i % 4 === 0 }))
  }, [])

  return (
    <svg
      viewBox="0 0 380 300"
      className="h-full w-full"
      role="img"
      aria-label="Abstract network of connected nodes representing technology and connection"
    >
      <defs>
        <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F58220" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#F58220" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="190" cy="150" r="130" fill="url(#heroGlow)" />
      {nodes.map((a, i) =>
        nodes.slice(i + 1).map((b, j) => {
          const dx = a.x - b.x
          const dy = a.y - b.y
          if (Math.hypot(dx, dy) > 120) return null
          return (
            <line
              key={`${i}-${j}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="1"
            />
          )
        }),
      )}
      {nodes.map((n, i) => (
        <circle
          key={`node-${i}`}
          cx={n.x}
          cy={n.y}
          r={n.accent ? 6 : 4}
          fill={n.accent ? '#F58220' : 'rgba(255,255,255,0.6)'}
        />
      ))}
    </svg>
  )
}

/** Homepage hero — navy dominated, technology + network visual. */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Technology Company · Africa &amp; Beyond
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]">
            Technology That Solves Real-World Problems.
          </h1>
          <p className="mt-5 text-lg font-semibold text-white/85">
            Building innovative digital solutions for Africa and beyond.
          </p>
          <p className="mt-3 max-w-xl text-white/70">
            MyTEAm Group is a technology company building innovative digital products that solve
            real-world challenges, create opportunities, and connect people to better possibilities.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button to="/products" variant="accent" size="lg">
              Explore Our Products
            </Button>
            <Button to="/contact" variant="white" size="lg">
              Partner With Us
            </Button>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="aspect-[380/300] w-full rounded-2xl border border-white/10 bg-navy-light/40">
            <NetworkVisual />
          </div>
        </div>
      </Container>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-transparent via-accent to-transparent"
      />
    </section>
  )
}