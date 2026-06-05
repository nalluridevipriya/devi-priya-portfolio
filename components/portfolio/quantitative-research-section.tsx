import { cn } from "@/lib/utils"
import type { QuantitativeResearch } from "@/lib/content/portfolio"

type QuantitativeResearchSectionProps = {
  research: QuantitativeResearch
  className?: string
}

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={index} className="font-semibold text-foreground">
              {part.slice(2, -2)}
            </strong>
          )
        }

        return <span key={index}>{part}</span>
      })}
    </>
  )
}

export function QuantitativeResearchSection({
  research,
  className,
}: QuantitativeResearchSectionProps) {
  const leftObservations = research.observations.filter((_, index) => index % 2 === 0)
  const rightObservations = research.observations.filter((_, index) => index % 2 === 1)

  return (
    <section className={cn("space-y-10", className)}>
      <div className="max-w-3xl space-y-4">
        <h3 className="text-left text-[13px] font-semibold uppercase tracking-[0.32em] text-primary">
          {research.observationsHeading ?? "Observations"}
        </h3>
        <h2 className="font-heading text-2xl font-light tracking-[-0.03em] text-foreground">
          {research.title ?? "Quantitative Research"}
        </h2>
        <p className="max-w-2xl text-base leading-8 text-muted-foreground">
          <RichText text={research.description} />
        </p>
      </div>

      <div className="space-y-8">
        <div className="grid gap-10 md:grid-cols-2 md:gap-x-16 lg:gap-x-24">
          <div className="flex flex-col gap-12 md:gap-16">
            {leftObservations.map((observation) => (
              <ObservationStat key={observation.description} {...observation} />
            ))}
          </div>
          <div className="flex flex-col gap-12 md:-mt-10 md:gap-16 lg:-mt-14">
            {rightObservations.map((observation) => (
              <ObservationStat key={observation.description} {...observation} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ObservationStat({
  value,
  description,
}: QuantitativeResearch["observations"][number]) {
  return (
    <div className="max-w-md space-y-3">
      <p className="font-heading text-5xl font-light leading-none tracking-[-0.04em] text-primary sm:text-6xl">
        {value}
      </p>
      <p className="text-base leading-7 text-foreground">
        <RichText text={description} />
      </p>
    </div>
  )
}
