import { BeforeAfterPanel } from "@/components/portfolio/before-after-panel"
import {
  StickyNote,
  StickyNoteLabel,
  StickyNoteText,
} from "@/components/portfolio/sticky-note"
import type { ProcessStep } from "@/lib/content/portfolio"

type ProcessStepListProps = {
  steps: ProcessStep[]
}

const tiltByIndex = [
  "portfolio-sticky-note-tilt-1",
  "portfolio-sticky-note-tilt-2",
  "portfolio-sticky-note-tilt-3",
  "portfolio-sticky-note-tilt-4",
  "portfolio-sticky-note-tilt-5",
]

export function ProcessStepList({ steps }: ProcessStepListProps) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10">
      {steps.map((step, index) => (
        <StickyNote key={step.title} tiltClassName={tiltByIndex[index % tiltByIndex.length]}>
          <StickyNoteLabel>{step.title}</StickyNoteLabel>
          <StickyNoteText>{step.description}</StickyNoteText>
          {step.artifact ? (
            <StickyNoteText className="portfolio-sticky-note-artifact">{step.artifact}</StickyNoteText>
          ) : null}
          {step.beforeAfter ? (
            <div className="portfolio-sticky-note-media">
              <BeforeAfterPanel {...step.beforeAfter} showTopDivider={false} />
            </div>
          ) : null}
        </StickyNote>
      ))}
    </div>
  )
}
