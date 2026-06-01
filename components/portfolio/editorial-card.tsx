import type { ReactNode } from "react"
import Link from "next/link"
import { RiArrowRightUpLine } from "@remixicon/react"

import { cn } from "@/lib/utils"

type EditorialCardProps = {
  title?: string
  description?: string
  icon?: ReactNode
  chip?: {
    href: string
    label?: string
  }
  children?: ReactNode
  className?: string
  contentClassName?: string
  variant?: "default" | "plain"
}

export function EditorialCard({
  title,
  description,
  icon,
  chip,
  children,
  className,
  contentClassName,
  variant = "default",
}: EditorialCardProps) {
  return (
    <article
      className={cn(
        variant === "plain"
          ? "p-0"
          : "rounded-[2rem] border border-border/80 bg-card/90 p-6 shadow-[0_24px_70px_-40px_rgba(74,56,40,0.28)] backdrop-blur-sm sm:p-8",
        className
      )}
    >
      {icon ? <div className="mb-5 inline-flex rounded-full border border-border/80 bg-background/90 p-3">{icon}</div> : null}
      {title ? (
        <div className="space-y-3">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h3 className="font-heading text-2xl font-light leading-tight tracking-[-0.02em] text-foreground">
              {title}
            </h3>
            {chip ? (
              <Link
                href={chip.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-1 rounded-full border border-border/80 bg-background/90 px-2.5 py-1 text-[0.625rem] font-medium tracking-[0.04em] text-muted-foreground transition-colors duration-300 hover:border-primary/40 hover:text-primary"
              >
                {chip.label ?? "Figma"}
                <RiArrowRightUpLine className="size-3" />
              </Link>
            ) : null}
          </div>
          {description ? (
            <p className="text-base leading-7 text-muted-foreground">{description}</p>
          ) : null}
        </div>
      ) : null}
      {children ? (
        <div className={cn(title ? "mt-6" : "", contentClassName)}>{children}</div>
      ) : null}
    </article>
  )
}
