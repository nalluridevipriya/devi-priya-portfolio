import Link from "next/link"
import { RiArrowRightUpLine } from "@remixicon/react"

import { cn } from "@/lib/utils"
import {
  getOtherWorksForGroup,
  type OtherWork,
  type OtherWorkGroup,
} from "@/lib/content/portfolio"

type OtherWorksGridProps = {
  groups: OtherWorkGroup[]
  basePath?: string
}

function OtherWorkCard({
  work,
  index,
  basePath,
}: {
  work: OtherWork
  index: number
  basePath: string
}) {
  return (
    <Link
      href={`${basePath}/${work.slug}`}
      className="group flex min-h-[14rem] flex-col justify-between gap-10 outline-none transition-opacity duration-300 hover:opacity-95 focus-visible:ring-2 focus-visible:ring-ring/50 sm:min-h-[15rem]"
    >
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="rounded-full border border-border/60 bg-background/50 px-2.5 py-1 text-[0.625rem] font-medium uppercase tracking-[0.04em] text-muted-foreground backdrop-blur-sm">
            {work.category}
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="w-fit max-w-full rounded-2xl bg-secondary/15 px-4 py-3 font-heading text-[1.875rem] leading-[1.04] tracking-[-0.03em] text-foreground transition-transform duration-500 group-hover:scale-[1.02] sm:px-5 sm:py-4 sm:text-[1.875rem] lg:leading-[1.06]">
            {work.title}
          </h2>

          <p className="max-w-md text-sm leading-6 text-secondary sm:text-base sm:leading-7">
            {work.tagline}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-border/50 pt-4">
        <p className="text-xs font-medium text-foreground">{work.role}</p>
        <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-secondary transition-transform duration-300 group-hover:translate-x-0.5">
          View project
          <RiArrowRightUpLine className="size-4" />
        </span>
      </div>
    </Link>
  )
}

export function OtherWorksGrid({ groups, basePath = "/other-works" }: OtherWorksGridProps) {
  return (
    <div className="space-y-14 sm:space-y-20">
      {groups.map((group) => {
        const works = getOtherWorksForGroup(group)

        if (works.length === 0) {
          return null
        }

        return (
          <section key={group.id} className="space-y-8 sm:space-y-10">
            <header className="space-y-3 border-b border-border/50 pb-5">
              <h3 className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-light leading-tight tracking-[-0.03em] text-foreground">
                {group.title}
              </h3>
              {group.description ? (
                <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-[0.9375rem]">
                  {group.description}
                </p>
              ) : null}
            </header>

            <div
              className={cn(
                "grid gap-14 sm:gap-16",
                works.length > 1 && "md:grid-cols-2 md:gap-x-10 md:gap-y-20 lg:gap-x-14"
              )}
            >
              {works.map((work, index) => (
                <OtherWorkCard
                  key={work.slug}
                  work={work}
                  index={index}
                  basePath={basePath}
                />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
