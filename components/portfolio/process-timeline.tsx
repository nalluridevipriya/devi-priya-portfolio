type ProcessItem = {
  title: string
  description: string
  artifact: string
}

type ProcessTimelineProps = {
  items: ProcessItem[]
}

function ProcessStepCard({ item }: { item: ProcessItem }) {
  return (
    <div className="flex h-full flex-col space-y-3 rounded-[1.5rem] border border-border/80 bg-background/85 p-4 sm:p-5">
      <div className="space-y-2">
        <h3 className="font-heading text-xl leading-tight tracking-[-0.02em] text-foreground lg:text-[1.35rem]">
          {item.title}
        </h3>
        <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
      </div>
      <p className="text-sm leading-6 text-foreground">{item.artifact}</p>
    </div>
  )
}

function ProcessConnector({ showArrow }: { showArrow: boolean }) {
  if (!showArrow) {
    return null
  }

  return (
    <div className="relative mx-2 h-px min-w-4 flex-1 bg-border" aria-hidden>
      <span className="absolute -right-0.5 top-1/2 block size-2 -translate-y-1/2 rotate-45 border-r border-t border-muted-foreground/70" />
    </div>
  )
}

export function ProcessTimeline({ items }: ProcessTimelineProps) {
  return (
    <>
      <div className="hidden lg:block">
        <div
          className="mb-6 grid items-center gap-0"
          style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}
        >
          {items.map((item, index) => (
            <div key={`${item.title}-flow`} className="flex min-w-0 items-center">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border/80 bg-background/90 text-sm font-medium text-foreground">
                {index + 1}
              </div>
              <ProcessConnector showArrow={index < items.length - 1} />
            </div>
          ))}
        </div>

        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}
        >
          {items.map((item) => (
            <ProcessStepCard key={item.title} item={item} />
          ))}
        </div>
      </div>

      <div className="space-y-6 lg:hidden">
        {items.map((item, index) => (
          <div key={item.title}>
            <div className="grid gap-4 md:grid-cols-[auto_1fr] md:gap-6">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border/80 bg-background/90 text-sm font-medium text-foreground">
                {index + 1}
              </div>
              <ProcessStepCard item={item} />
            </div>
            {index < items.length - 1 ? (
              <div className="mt-6 flex justify-center md:justify-start md:pl-[1.375rem]" aria-hidden>
                <div className="h-6 w-px bg-border" />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </>
  )
}
