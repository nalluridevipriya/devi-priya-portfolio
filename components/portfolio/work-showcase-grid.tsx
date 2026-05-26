import Link from "next/link"
import { RiArrowRightUpLine } from "@remixicon/react"

import { cn } from "@/lib/utils"
import type { CaseStudy } from "@/lib/content/portfolio"

type WorkShowcaseGridProps = {
  caseStudies: CaseStudy[]
}

const colorBoxStyle = "bg-secondary/40"

export function WorkShowcaseGrid({ caseStudies }: WorkShowcaseGridProps) {
  return (
    <div className="grid gap-14 sm:gap-16 md:grid-cols-2 md:gap-x-10 md:gap-y-20 lg:gap-x-14">
      {caseStudies.map((caseStudy, index) => (
        <Link
          key={caseStudy.slug}
          href={`/work/${caseStudy.slug}`}
          className="group relative mr-10 block overflow-visible outline-none transition-opacity duration-300 hover:opacity-95 focus-visible:ring-2 focus-visible:ring-ring/50"
        >
          <div className="relative z-10 flex min-h-[14rem] flex-col justify-between gap-10 pr-10 sm:min-h-[15rem]">
            <div className="space-y-5 overflow-visible">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="rounded-full border border-border/60 bg-background/50 px-2.5 py-1 text-[0.625rem] font-medium tracking-[0.04em] text-muted-foreground backdrop-blur-sm">
                  {caseStudy.projectType}
                </span>
              </div>

              <div className="space-y-4 overflow-visible">
                <div
                  className={cn(
                    "relative w-fit max-w-full overflow-visible",
                    index % 2 === 1 && "md:ml-auto md:text-right"
                  )}
                >
                  <div
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute -bottom-3 -left-3 -right-8 -top-2 rounded-sm transition-transform duration-500 group-hover:scale-[1.03] sm:-bottom-4 sm:-left-4 sm:-right-10 sm:-top-3",
                      colorBoxStyle,
                      index % 2 === 1 && "md:-left-10 md:-right-4"
                    )}
                  />
                  <h2 className="relative z-10 font-heading text-[1.75rem] leading-[1.04] tracking-[-0.03em] text-foreground sm:text-[2rem] lg:text-[2.25rem] lg:leading-[1.06]">
                    {caseStudy.title}
                  </h2>
                </div>

                <p className="text-sm leading-6 text-primary sm:text-[0.9375rem] sm:leading-7">
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
          </div>
        </Link>
      ))}
    </div>
  )
}
