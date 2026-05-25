import type { ComponentType, ReactNode } from "react"

import { cn } from "@/lib/utils"

export type HighlightGridItem = {
  label: string
  value?: string
  body?: ReactNode
  icon?: ComponentType<{ className?: string }>
  footer?: ReactNode
}

type HighlightGridProps = {
  items: HighlightGridItem[]
  className?: string
  showIconBar?: boolean
}

function HighlightGridCard({
  label,
  value,
  body,
  icon: Icon,
  footer,
  showIconBar,
}: HighlightGridItem & { showIconBar: boolean }) {
  return (
    <article className="flex flex-col gap-4">
      {showIconBar && Icon ? (
        <div
          className="relative flex h-14 items-center overflow-hidden rounded-l-[1.125rem] rounded-r-md sm:h-16"
          aria-hidden
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/55 via-primary/22 to-transparent" />
          <div className="relative px-4 sm:px-5">
            <Icon className="size-6 shrink-0 text-foreground" />
          </div>
        </div>
      ) : null}

      <div className="space-y-3 px-0.5">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">{label}</p>
        {body ?? (
          <p className="text-sm leading-7 text-muted-foreground">{value}</p>
        )}
        {footer}
      </div>
    </article>
  )
}

export function HighlightGrid({
  items,
  className,
  showIconBar = true,
}: HighlightGridProps) {
  const columnClass =
    items.length >= 5
      ? "lg:grid-cols-5"
      : items.length === 3
        ? "lg:grid-cols-3"
        : "lg:grid-cols-4"

  return (
    <div
      className={cn("grid gap-8 sm:grid-cols-2 lg:gap-6", columnClass, className)}
    >
      {items.map((item) => (
        <HighlightGridCard key={item.label} {...item} showIconBar={showIconBar} />
      ))}
    </div>
  )
}

export function HighlightGridBody({
  description,
  trailing,
}: {
  description: string
  trailing?: string
}) {
  if (!trailing) {
    return <p className="text-sm leading-7 text-muted-foreground">{description}</p>
  }

  return (
    <div className="space-y-3">
      <p className="text-sm leading-7 text-muted-foreground">{description}</p>
      <p className="text-sm leading-7 text-muted-foreground">{trailing}</p>
    </div>
  )
}
