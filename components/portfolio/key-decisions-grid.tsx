import {
  StickyNote,
  StickyNoteLabel,
  StickyNoteText,
} from "@/components/portfolio/sticky-note"

type KeyDecision = {
  title: string
  description: string
  impact?: string
}

type KeyDecisionsGridProps = {
  decisions: KeyDecision[]
}

const tiltByIndex = [
  "portfolio-sticky-note-tilt-1",
  "portfolio-sticky-note-tilt-2",
  "portfolio-sticky-note-tilt-3",
  "portfolio-sticky-note-tilt-4",
  "portfolio-sticky-note-tilt-5",
]

export function KeyDecisionsGrid({ decisions }: KeyDecisionsGridProps) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10">
      {decisions.map((decision, index) => (
        <StickyNote key={decision.title} tiltClassName={tiltByIndex[index % tiltByIndex.length]}>
          <StickyNoteLabel>{decision.title}</StickyNoteLabel>
          <StickyNoteText>{decision.description}</StickyNoteText>
          {decision.impact ? (
            <StickyNoteText className="portfolio-sticky-note-artifact">
              Impact: {decision.impact}
            </StickyNoteText>
          ) : null}
        </StickyNote>
      ))}
    </div>
  )
}
