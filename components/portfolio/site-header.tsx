import Link from "next/link"

import { SiteNav } from "@/components/portfolio/site-nav"

function SiteLogo() {
  return (
    <Link href="/" className="group flex items-center gap-3 sm:gap-3.5">
      <span className="shrink-0 text-sm font-semibold leading-none tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-base">
        {"d"}P
      </span>
      <span className="flex items-baseline gap-2 sm:gap-2.5">
        <span className="font-heading text-[1.35rem] font-bold leading-none tracking-[-0.02em] text-foreground transition-colors group-hover:text-primary sm:text-[1.5rem]">
          devi
        </span>
        <span className="text-[0.72rem] font-semibold uppercase leading-none tracking-[0.24em] text-foreground transition-colors group-hover:text-primary sm:text-[0.78rem]">
          Priya
        </span>
      </span>
    </Link>
  )
}

export function SiteHeader() {
  return (
    <header className="site-header sticky top-0 z-40 mb-10 border-b border-border/45 bg-background/92 backdrop-blur-md">
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-4 sm:py-[1.125rem] lg:py-5">
          <SiteLogo />
          <SiteNav />
        </div>
      </div>
    </header>
  )
}
