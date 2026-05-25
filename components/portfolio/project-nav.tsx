import Link from "next/link"
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react"

import type { CaseStudy } from "@/lib/content/portfolio"

type ProjectNavProps = {
  previous?: CaseStudy
  next?: CaseStudy
}

export function ProjectNav({ previous, next }: ProjectNavProps) {
  return (
    <nav className="flex flex-col gap-4 border-t border-border/80 pt-8 sm:flex-row sm:items-center sm:justify-between">
      {previous ? (
        <Link
          href={`/work/${previous.slug}`}
          className="group inline-flex max-w-sm items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
        >
          <RiArrowLeftLine className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
          <span>
            <span className="block text-xs uppercase tracking-[0.2em]">Previous</span>
            <span className="font-medium text-foreground group-hover:text-primary">
              {previous.title}
            </span>
          </span>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={`/work/${next.slug}`}
          className="group inline-flex max-w-sm items-center gap-2 text-right text-sm text-muted-foreground transition-colors duration-300 hover:text-primary sm:ml-auto"
        >
          <span>
            <span className="block text-xs uppercase tracking-[0.2em]">Next</span>
            <span className="font-medium text-foreground group-hover:text-primary">
              {next.title}
            </span>
          </span>
          <RiArrowRightLine className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      ) : null}
    </nav>
  )
}
