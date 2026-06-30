import type { ReactNode } from "react"

import { SiteFooter } from "@/components/portfolio/site-footer"
import { SiteHeader } from "@/components/portfolio/site-header"
import { cn } from "@/lib/utils"

type SiteShellProps = {
  children: ReactNode
  mainClassName?: string
}

export function SiteShell({ children, mainClassName }: SiteShellProps) {
  return (
    <div className="relative overflow-hidden">
      <a
        href="#main-content"
        className="sr-only fixed top-4 left-4 z-50 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg focus:not-sr-only focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
      >
        Skip to main content
      </a>
      <SiteHeader />

      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 sm:px-8 lg:px-10">
        <main
          id="main-content"
          className={cn("flex flex-1 flex-col gap-5 pb-14", mainClassName)}
        >
          {children}
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}
