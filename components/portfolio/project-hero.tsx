import { cn } from "@/lib/utils"
import type { CaseStudy } from "@/lib/content/portfolio"

type ProjectHeroProps = {
  caseStudy: CaseStudy
  centered?: boolean
}

export function ProjectHero({ caseStudy, centered = false }: ProjectHeroProps) {
  return (
    <section className="space-y-6">
      <div className={cn("space-y-4", centered && "mx-auto")}>
        <h1
          className={cn(
            "font-heading text-[56px] leading-[1.1] tracking-[-0.04em] text-foreground whitespace-nowrap",
            centered ? "text-center" : "max-w-4xl"
          )}
        >
          {caseStudy.title}
        </h1>
        <p
          className={cn(
            "text-[20px] leading-8 text-primary",
            centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
          )}
        >
          {caseStudy.tagline}
        </p>
        <p
          className={cn(
            "text-base leading-8 text-muted-foreground",
            centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
          )}
        >
          {caseStudy.summary}
        </p>
      </div>
    </section>
  )
}
