import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  centered?: boolean
  headingLevel?: "h1" | "h2" | "h3"
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  headingLevel = "h2",
}: SectionHeadingProps) {
  const Heading = headingLevel

  return (
    <div className={cn("space-y-4", centered ? "mx-auto max-w-3xl" : "")}>
      <p
        className={cn(
          "text-[13px] font-semibold tracking-[0.32em] text-primary uppercase",
          centered ? "text-center" : ""
        )}
      >
        {eyebrow}
      </p>
      <div className="space-y-4">
        <Heading
          className={cn(
            "font-heading text-4xl leading-tight font-light tracking-[-0.03em] text-balance text-foreground sm:text-5xl md:text-2xl",
            centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
          )}
        >
          {title}
        </Heading>
        {description ? (
          <p
            className={cn(
              "text-[16px] leading-7 text-muted-foreground",
              centered ? "mx-auto max-w-2xl text-left" : "max-w-2xl"
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}
