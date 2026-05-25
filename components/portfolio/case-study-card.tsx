import Link from "next/link"
import { RiArrowRightUpLine } from "@remixicon/react"

import { EditorialCard } from "@/components/portfolio/editorial-card"
import { cn } from "@/lib/utils"
import type { CaseStudy } from "@/lib/content/portfolio"

type CaseStudyCardProps = {
  caseStudy: CaseStudy
  featured?: boolean
  id?: string
}

export function CaseStudyCard({
  caseStudy,
  featured = false,
  id,
}: CaseStudyCardProps) {
  return (
    <EditorialCard
      className={cn(
        "group relative overflow-hidden",
        featured ? "min-h-[28rem] justify-between" : "min-h-[17rem]"
      )}
    >
      <div
        id={id}
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-80 transition-transform duration-500 group-hover:scale-[1.02]",
          caseStudy.coverStyle
        )}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,12,18,0.35),rgba(12,12,18,0.92))]" />
      <div className="relative flex h-full flex-col justify-between gap-8">
        <div className="space-y-5">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span className="rounded-full border border-border/80 bg-background/70 px-3 py-1">
              {caseStudy.status}
            </span>
            <span>{caseStudy.duration}</span>
          </div>
          <div className="space-y-4">
            <h3
              className={cn(
                "font-heading leading-tight tracking-[-0.03em] text-foreground",
                featured ? "max-w-xl text-4xl sm:text-5xl" : "text-3xl"
              )}
            >
              {caseStudy.title}
            </h3>
            <p className="max-w-2xl text-base leading-7 text-primary">{caseStudy.tagline}</p>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground">{caseStudy.summary}</p>
          </div>
        </div>

        <div className="relative flex items-end justify-between gap-4">
          <div className="space-y-2 text-sm text-foreground">
            <p className="font-medium">{caseStudy.role}</p>
            <p className="text-muted-foreground">{caseStudy.team}</p>
          </div>
          <Link
            href={`/work/${caseStudy.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/85 px-4 py-2 text-sm font-medium text-foreground transition-transform duration-300 group-hover:-translate-y-0.5"
          >
            Read case study
            <RiArrowRightUpLine className="size-4" />
          </Link>
        </div>
      </div>
    </EditorialCard>
  )
}
