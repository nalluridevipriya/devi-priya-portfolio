import { HighlightGrid, HighlightGridBody } from "@/components/portfolio/highlight-grid"

type Outcome = {
  title: string
  description: string
}

type OutcomesGridProps = {
  outcomes: Outcome[]
}

export function OutcomesGrid({ outcomes }: OutcomesGridProps) {
  return (
    <HighlightGrid
      showIconBar={false}
      items={outcomes.map((outcome) => ({
        label: outcome.title,
        body: <HighlightGridBody description={outcome.description} />,
      }))}
    />
  )
}
