import {
  StickyNote,
  StickyNoteLabel,
  StickyNoteText,
} from "@/components/portfolio/sticky-note"

type Outcome = {
  title: string
  description: string
}

type OutcomesGridProps = {
  outcomes: Outcome[]
}

const tiltByIndex = [
  "portfolio-sticky-note-tilt-1",
  "portfolio-sticky-note-tilt-2",
  "portfolio-sticky-note-tilt-3",
  "portfolio-sticky-note-tilt-4",
  "portfolio-sticky-note-tilt-5",
]

export function OutcomesGrid({ outcomes }: OutcomesGridProps) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10">
      {outcomes.map((outcome, index) => (
        <StickyNote key={outcome.title} tiltClassName={tiltByIndex[index % tiltByIndex.length]}>
          <StickyNoteLabel>{outcome.title}</StickyNoteLabel>
          <StickyNoteText>{outcome.description}</StickyNoteText>
        </StickyNote>
      ))}
    </div>
  )
}
