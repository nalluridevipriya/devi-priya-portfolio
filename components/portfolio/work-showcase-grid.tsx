import Link from "next/link"
import { RiArrowRightUpLine } from "@remixicon/react"

import { cn } from "@/lib/utils"
import type { CaseStudy } from "@/lib/content/portfolio"

type WorkShowcaseGridProps = {
  caseStudies: CaseStudy[]
}

export function WorkShowcaseGrid({ caseStudies }: WorkShowcaseGridProps) {
  return (
    <div className="grid gap-14 sm:gap-16 md:grid-cols-2 md:gap-x-10 md:gap-y-20 lg:gap-x-14">
      {caseStudies.map((caseStudy, index) => (
        <Link
          key={caseStudy.slug}
          href={`/work/${caseStudy.slug}`}
          className="group flex min-h-[14rem] flex-col justify-between gap-10 outline-none transition-opacity duration-300 hover:opacity-95 focus-visible:ring-2 focus-visible:ring-ring/50 sm:min-h-[15rem]"
        >
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="rounded-full border border-border/60 bg-background/50 px-2.5 py-1 text-[0.625rem] font-medium uppercase tracking-[0.04em] text-muted-foreground backdrop-blur-sm">
                {caseStudy.projectType}
              </span>
            </div>

            <div
              className={cn(
                "flex flex-col gap-4",
                index % 2 === 1 && "md:items-end md:text-right"
              )}
            >
              <h2
                className={cn(
                  "w-fit max-w-full rounded-2xl bg-primary/15 px-4 py-3 font-heading text-[1.875rem] leading-[1.04] tracking-[-0.03em] text-foreground transition-transform duration-500 group-hover:scale-[1.02] sm:px-5 sm:py-4 sm:text-[1.875rem] lg:leading-[1.06]"
                )}
              >
                {caseStudy.title}
              </h2>

              <p className="max-w-md text-sm leading-6 text-primary sm:text-base sm:leading-7">
                {caseStudy.tagline}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 border-t border-border/50 pt-4">
            <p className="text-xs font-medium text-foreground">UX designer and researcher</p>
            <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-primary transition-transform duration-300 group-hover:translate-x-0.5">
              Case Study
              <RiArrowRightUpLine className="size-4" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
