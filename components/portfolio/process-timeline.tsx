type ProcessItem = {
  title: string
  description: string
  artifact: string
}

type ProcessTimelineProps = {
  items: ProcessItem[]
}

export function ProcessTimeline({ items }: ProcessTimelineProps) {
  return (
    <div className="rounded-[2rem] border border-border/80 bg-card/90 p-6 shadow-[0_24px_70px_-40px_rgba(74,56,40,0.25)] sm:p-8">
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={item.title} className="grid gap-4 md:grid-cols-[auto_1fr] md:gap-6">
            <div className="flex items-start gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border/80 bg-background/90 text-sm font-medium text-foreground">
                {index + 1}
              </div>
              {index < items.length - 1 ? (
                <div className="mt-11 hidden h-full w-px bg-border md:block" />
              ) : null}
            </div>
            <div className="space-y-3 rounded-[1.5rem] border border-border/80 bg-background/85 p-5">
              <div className="space-y-2">
                <h3 className="font-heading text-2xl leading-tight tracking-[-0.02em] text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
              </div>
              <p className="text-sm leading-7 text-foreground">{item.artifact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
