import Link from "next/link"
import { RiArrowRightUpLine } from "@remixicon/react"

import type { CaseStudy } from "@/lib/content/portfolio"

type WorkShowcaseGridProps = {
  caseStudies: CaseStudy[]
}

export function WorkShowcaseGrid({ caseStudies }: WorkShowcaseGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {caseStudies.map((caseStudy, index) => (
        <Link
          key={caseStudy.slug}
          href={`/work/${caseStudy.slug}`}
          className="group flex min-h-[18rem] flex-col justify-between rounded-[2rem] border border-border/80 bg-card/90 p-6 shadow-[0_24px_70px_-40px_rgba(74,56,40,0.28)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 sm:p-8"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="rounded-full border border-border/80 bg-background/90 px-2.5 py-1 text-[0.625rem] font-medium tracking-[0.04em] text-muted-foreground">
                {caseStudy.projectType}
              </span>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-2xl leading-tight tracking-[-0.02em] text-foreground">
                {caseStudy.title}
              </h2>
              <p className="text-sm leading-6 text-primary">{caseStudy.tagline}</p>
              <p className="text-sm leading-6 text-muted-foreground">{caseStudy.summary}</p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-3 border-t border-border/80 pt-4">
            <div className="text-xs text-muted-foreground">
              <p className="font-medium text-foreground">UX designer and researcher</p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-transform duration-300 group-hover:translate-x-0.5">
              Case Study
              <RiArrowRightUpLine className="size-4" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
