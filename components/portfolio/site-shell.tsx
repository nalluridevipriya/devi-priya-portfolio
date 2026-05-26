import type { ReactNode } from "react"

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

      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 pb-14 sm:px-8 lg:px-10">
        <main className={cn("flex flex-1 flex-col gap-24 pb-24", mainClassName)}>{children}</main>

        <footer className="border-t border-border/70 pt-8 text-sm text-muted-foreground">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>Built as a warm, editorial portfolio shell for evolving UX case studies.</p>
            <p>Replace local content as your real project details become ready.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
