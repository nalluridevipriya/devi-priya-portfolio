import { BeforeAfterPanel } from "@/components/portfolio/before-after-panel"
import { HighlightGrid, HighlightGridBody } from "@/components/portfolio/highlight-grid"
import type { ProcessStep } from "@/lib/content/portfolio"

type ProcessStepListProps = {
  steps: ProcessStep[]
}

export function ProcessStepList({ steps }: ProcessStepListProps) {
  return (
    <HighlightGrid
      showIconBar={false}
      items={steps.map((step) => ({
        label: step.title,
        body: (
          <HighlightGridBody description={step.description} trailing={step.artifact} />
        ),
        footer: step.beforeAfter ? (
          <BeforeAfterPanel {...step.beforeAfter} showTopDivider={false} />
        ) : undefined,
      }))}
    />
  )
}
