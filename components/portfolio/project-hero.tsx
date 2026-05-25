import Link from "next/link"
import { RiArrowLeftLine } from "@remixicon/react"

import { cn } from "@/lib/utils"
import type { CaseStudy } from "@/lib/content/portfolio"

type ProjectHeroProps = {
  caseStudy: CaseStudy
  backHref?: string
  backLabel?: string
  centered?: boolean
}

export function ProjectHero({
  caseStudy,
  backHref = "/work",
  backLabel = "Back to projects",
  centered = false,
}: ProjectHeroProps) {
  return (
    <section className="space-y-6">
      <Link
        href={backHref}
        className={cn(
          "inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-primary",
          centered ? "self-start" : ""
        )}
      >
        <RiArrowLeftLine className="size-4" />
        {backLabel}
      </Link>

      <div
        className={cn(
          "space-y-4",
          centered ? "mx-auto max-w-3xl text-center" : ""
        )}
      >
        <h1
          className={cn(
            "font-heading text-[40px] leading-[1.1] tracking-[-0.04em] text-foreground",
            centered ? "mx-auto max-w-4xl" : "max-w-4xl"
          )}
        >
          {caseStudy.title}
        </h1>
        <p
          className={cn(
            "text-[20px] leading-8 text-primary",
            centered ? "mx-auto max-w-3xl" : "max-w-3xl"
          )}
        >
          {caseStudy.tagline}
        </p>
        <p
          className={cn(
            "text-lg leading-8 text-muted-foreground",
            centered ? "mx-auto max-w-3xl" : "max-w-3xl"
          )}
        >
          {caseStudy.summary}
        </p>
      </div>
    </section>
  )
}
