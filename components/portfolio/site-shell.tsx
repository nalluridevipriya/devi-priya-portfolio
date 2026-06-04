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
      <SiteHeader />

      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 sm:px-8 lg:px-10">
        <main className={cn("flex flex-1 flex-col gap-5 pb-14", mainClassName)}>{children}</main>
        <SiteFooter />
      </div>
    </div>
  )
}
