import {
  RiAwardLine,
  RiFocus3Line,
  RiGroupLine,
  RiLayoutGridLine,
} from "@remixicon/react"

import { HighlightGrid } from "@/components/portfolio/highlight-grid"

type OverviewHighlight = {
  label: string
  value: string
}

type OverviewHighlightsGridProps = {
  items: OverviewHighlight[]
  className?: string
}

const iconByLabel = {
  audience: RiGroupLine,
  "core lens": RiFocus3Line,
  format: RiLayoutGridLine,
  "strength shown": RiAwardLine,
} as const

export function OverviewHighlightsGrid({ items, className }: OverviewHighlightsGridProps) {
  return (
    <HighlightGrid
      className={className}
      items={items.map((item) => ({
        ...item,
        icon: iconByLabel[item.label.toLowerCase() as keyof typeof iconByLabel] ?? RiFocus3Line,
      }))}
    />
  )
}
