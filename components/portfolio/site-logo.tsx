import Link from "next/link"

import { cn } from "@/lib/utils"

type SiteLogoProps = {
  className?: string
  variant?: "full" | "mark"
}

export function SiteLogo({ className, variant = "full" }: SiteLogoProps) {
  if (variant === "mark") {
    return (
      <Link
        href="/"
        aria-label="Devi Priya Nalluri home"
        className={cn(
          "shrink-0 text-sm leading-none font-semibold tracking-tight text-primary transition-colors hover:text-foreground sm:text-base",
          "focus:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/30",
          className
        )}
      >
        {"d"}P
      </Link>
    )
  }

  return (
    <Link
      href="/"
      className={cn(
        "group flex items-center gap-3 rounded-sm focus:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/30 sm:gap-3.5",
        className
      )}
    >
      <span className="shrink-0 text-sm leading-none font-semibold tracking-tight text-primary transition-colors group-hover:text-foreground sm:text-base">
        {"d"}P
      </span>
      <span className="flex items-baseline gap-2 sm:gap-2.5">
        <span className="font-heading text-[1.35rem] leading-none font-bold tracking-[-0.02em] text-primary transition-colors group-hover:text-foreground sm:text-[1.5rem]">
          devi
        </span>
        <span className="text-[0.72rem] leading-none font-semibold tracking-[0.24em] text-primary uppercase transition-colors group-hover:text-foreground sm:text-[0.78rem]">
          Priya
        </span>
      </span>
    </Link>
  )
}
