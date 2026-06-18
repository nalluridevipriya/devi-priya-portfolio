import { SkillsLogoGrid } from "@/components/portfolio/skills-logo-grid"
import { cn } from "@/lib/utils"
import {
  resumeQuickLook,
  resumeSections,
  resumeSkillTags,
  skillTools,
} from "@/lib/content/portfolio"

type ResumeListItem = (typeof resumeSections)[number]["items"][number]

function ResumeSectionLabel({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3">
      <h3 className="shrink-0 text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-primary">
        {title}
      </h3>
      <span aria-hidden className="h-px flex-1 bg-border/80" />
    </div>
  )
}

function ResumeEntry({ item }: { item: ResumeListItem }) {
  return (
    <li className="flex gap-3">
      <span aria-hidden className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-primary" />
      <div className="space-y-1">
        <p className="font-medium text-foreground">{item.title}</p>
        <p className="text-sm leading-6 text-muted-foreground">
          {item.description}
          <span className="text-muted-foreground/80"> · {item.eyebrow}</span>
        </p>
      </div>
    </li>
  )
}

function SkillPill({ label }: { label: string }) {
  return (
    <span className="inline-flex rounded-full border border-border/80 bg-background px-3.5 py-1.5 text-sm text-foreground/85">
      {label}
    </span>
  )
}

export function ResumeSummarySection({ className }: { className?: string }) {
  const experience = resumeSections.find((section) => section.title === "Experience")
  const education = resumeSections.find((section) => section.title === "Education")
  const aiToolIds = new Set(["cursor", "codex"])
  const designTools = skillTools.filter((tool) => !aiToolIds.has(tool.id))
  const aiTools = skillTools.filter((tool) => aiToolIds.has(tool.id))

  return (
    <section className={cn("space-y-10 sm:space-y-12", className)}>
      <div className="mx-auto max-w-3xl space-y-3 text-center">
        <h2 className="font-heading text-3xl font-light leading-tight tracking-[-0.03em] text-foreground sm:text-[2rem]">
          {resumeQuickLook.titlePrefix}{" "}
          <span className="font-heading italic text-primary">{resumeQuickLook.titleAccent}</span>
          <span aria-hidden className="ml-1.5 inline-block text-primary">
            ✦
          </span>
        </h2>
        <p className="text-sm italic leading-6 text-muted-foreground">{resumeQuickLook.subtitle}</p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
        {experience ? (
          <div className="space-y-5">
            <ResumeSectionLabel title="Experience" />
            <ul className="space-y-5">
              {experience.items.map((item) => (
                <ResumeEntry key={`${item.title}-${item.eyebrow}`} item={item} />
              ))}
            </ul>
          </div>
        ) : null}

        {education ? (
          <div className="space-y-5">
            <ResumeSectionLabel title="Education" />
            <ul className="space-y-5">
              {education.items.map((item) => (
                <ResumeEntry key={`${item.title}-${item.eyebrow}`} item={item} />
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      <div className="rounded-[2rem] border border-border/60 bg-muted/45 p-6 sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-5">
            <ResumeSectionLabel title="Skills" />
            <div className="flex flex-wrap gap-2.5">
              {resumeSkillTags.map((tag) => (
                <SkillPill key={tag} label={tag} />
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-5">
              <ResumeSectionLabel title="Tools & Software" />
              <SkillsLogoGrid tools={designTools} className="justify-start gap-x-5 gap-y-5" />
            </div>

            {aiTools.length ? (
              <div className="space-y-5">
                <ResumeSectionLabel title="AI Tools" />
                <SkillsLogoGrid tools={aiTools} className="justify-start gap-x-5 gap-y-5" />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
