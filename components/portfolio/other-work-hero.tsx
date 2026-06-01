import { cn } from "@/lib/utils"
import type { OtherWork } from "@/lib/content/portfolio"

type OtherWorkHeroProps = {
  work: OtherWork
  centered?: boolean
}

export function OtherWorkHero({ work, centered = false }: OtherWorkHeroProps) {
  return (
    <section className="space-y-6">
      <div className={cn("space-y-4", centered && "mx-auto")}>
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.32em] text-secondary",
            centered && "text-center"
          )}
        >
          {work.category}
        </p>
        <h1
          className={cn(
            "max-w-4xl font-heading text-[clamp(2rem,5vw,3.5rem)] leading-[1.08] tracking-[-0.04em] text-foreground",
            centered && "mx-auto text-center"
          )}
        >
          {work.title}
        </h1>
        <p
          className={cn(
            "max-w-3xl text-[1.125rem] leading-8 text-secondary",
            centered && "mx-auto text-center"
          )}
        >
          {work.tagline}
        </p>
        <p
          className={cn(
            "max-w-3xl text-base leading-8 text-muted-foreground",
            centered && "mx-auto text-center"
          )}
        >
          {work.summary}
        </p>
      </div>
    </section>
  )
}
