import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type StickyNoteProps = {
  children: ReactNode
  className?: string
  tiltClassName?: string
}

export function StickyNote({ children, className, tiltClassName }: StickyNoteProps) {
  return (
    <div className={cn("portfolio-sticky-note-wrap", className)}>
      <article
        className={cn(
          "about-sticky-note portfolio-sticky-note h-full bg-[#ede4f2]",
          tiltClassName
        )}
      >
        <span className="about-sticky-note-tape" aria-hidden="true" />
        <div className="portfolio-sticky-note-body about-sticky-note-body">{children}</div>
      </article>
    </div>
  )
}

export function StickyNoteLabel({ children }: { children: ReactNode }) {
  return <p className="portfolio-sticky-note-label">{children}</p>
}

export function StickyNoteText({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("about-sticky-note-text portfolio-sticky-note-text", className)}>{children}</p>
}
