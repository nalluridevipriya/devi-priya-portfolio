import { HighlightGrid, HighlightGridBody } from "@/components/portfolio/highlight-grid"

type KeyDecision = {
  title: string
  description: string
  impact?: string
}

type KeyDecisionsGridProps = {
  decisions: KeyDecision[]
}

export function KeyDecisionsGrid({ decisions }: KeyDecisionsGridProps) {
  return (
    <HighlightGrid
      showIconBar={false}
      items={decisions.map((decision) => ({
        label: decision.title,
        body: (
          <HighlightGridBody
            description={decision.description}
            trailing={
              decision.impact ? `Impact: ${decision.impact}` : undefined
            }
          />
        ),
      }))}
    />
  )
}
