import type { Step } from '../../lib/content'

interface ProcessStepProps {
  step: Step
  index: number
  isLast?: boolean
  light?: boolean
}

/** Vertical process step with accent node + connecting line. */
export function ProcessStep({ step, index, isLast = false, light = false }: ProcessStepProps) {
  return (
    <li className="relative flex gap-5">
      <div className="flex flex-col items-center">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-white text-sm font-extrabold text-navy">
          {index + 1}
        </span>
        {!isLast && (
          <span
            className={`mt-1 w-0.5 flex-1 ${light ? 'bg-white/25' : 'bg-navy/15'}`}
            aria-hidden="true"
          />
        )}
      </div>
      <div className="pb-6">
        <h3 className={`text-lg font-bold ${light ? 'text-white' : 'text-navy'}`}>{step.title}</h3>
        <p className={`mt-1 text-sm ${light ? 'text-white/75' : 'text-muted'}`}>{step.description}</p>
      </div>
    </li>
  )
}