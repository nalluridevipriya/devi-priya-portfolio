import Link from "next/link"
import { RiArrowRightUpLine } from "@remixicon/react"

import { Button } from "@/components/ui/button"

type PullQuoteProps = {
  quote: string
  attribution: string
  role: string
  resumeHref?: string
}

export function PullQuote({
  quote,
  attribution,
  role,
  resumeHref,
}: PullQuoteProps) {
  return (
    <blockquote className="rounded-[2rem] border border-border/80 bg-[linear-gradient(135deg,rgba(180,120,80,0.12),rgba(20,20,20,0.95))] p-8 shadow-[0_24px_70px_-40px_rgba(0,0,0,0.55)] sm:p-10">
      <p className="max-w-3xl font-heading text-3xl leading-tight tracking-[-0.03em] text-foreground sm:text-4xl">
        "{quote}"
      </p>
      <footer className="mt-6 space-y-4">
        <div className="space-y-1">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary">
            {attribution}
          </p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
        {resumeHref ? (
          <Button asChild size="lg" className="w-fit px-6">
            <Link href={resumeHref}>
              Open resume
              <RiArrowRightUpLine className="size-4" />
            </Link>
          </Button>
        ) : null}
      </footer>
    </blockquote>
  )
}
