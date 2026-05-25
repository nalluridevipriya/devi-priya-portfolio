type HighlightItem = {
  label: string
  value: string
}

type HighlightStripProps = {
  items: HighlightItem[]
}

export function HighlightStrip({ items }: HighlightStripProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-[1.5rem] border border-border/80 bg-background/85 p-4"
        >
          <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">{item.label}</p>
          <p className="mt-3 text-sm leading-6 text-foreground">{item.value}</p>
        </div>
      ))}
    </div>
  )
}
