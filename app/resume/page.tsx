import Link from "next/link"
import {
  RiArrowRightUpLine,
  RiFilePdfLine,
  RiMailLine,
  RiMapPin2Line,
  RiPhoneLine,
} from "@remixicon/react"

import { CtaRow } from "@/components/portfolio/cta-row"
import { EditorialCard } from "@/components/portfolio/editorial-card"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { SkillsLogoGrid } from "@/components/portfolio/skills-logo-grid"
import { SiteShell } from "@/components/portfolio/site-shell"
import { Button } from "@/components/ui/button"
import { profile, resumeSections, skillTools } from "@/lib/content/portfolio"

export default function ResumePage() {
  return (
    <SiteShell>
      <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <SectionHeading
          eyebrow="Resume"
          title={profile.title}
          description={profile.resumeSummary}
        />

        <EditorialCard className="h-40 space-y-6">
          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            {profile.location ? (
              <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-4 py-2">
                <RiMapPin2Line className="size-4" />
                {profile.location}
              </span>
            ) : null}
            {profile.phone ? (
              <a
                href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-4 py-2 transition-colors hover:border-primary/40 hover:text-primary"
              >
                <RiPhoneLine className="size-4" />
                {profile.phone}
              </a>
            ) : null}
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-4 py-2 transition-colors hover:border-primary/40 hover:text-primary"
            >
              <RiMailLine className="size-4" />
              {profile.email}
            </a>
          </div>

          {profile.resumePdfHref ? (
            <Button asChild size="lg" className="my-[15px] h-[40px] w-40">
              <a href={profile.resumePdfHref} target="_blank" rel="noreferrer">
                Open PDF resume
                <RiFilePdfLine className="size-4" />
              </a>
            </Button>
          ) : null}
        </EditorialCard>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        {resumeSections.map((section) => (
          <EditorialCard
            key={section.title}
            title={section.title}
            description={section.summary}
            className={section.title === "Experience" ? "lg:col-span-2" : undefined}
          >
            {section.title === "Skills" ? (
              <SkillsLogoGrid tools={skillTools} />
            ) : (
              <div className="space-y-4">
                {section.items.map((item) => (
                  <div
                    key={`${section.title}-${item.title}`}
                    className="rounded-[1.5rem] border border-border/80 bg-background/80 p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                          {item.eyebrow}
                        </p>
                        <h3 className="mt-2 font-medium text-foreground">{item.title}</h3>
                      </div>
                      {item.href ? (
                        item.href.startsWith("/") ? (
                          <Link
                            href={item.href}
                            className="inline-flex items-center gap-2 text-sm text-primary transition-transform duration-300 hover:-translate-y-0.5"
                          >
                            View
                            <RiArrowRightUpLine className="size-4" />
                          </Link>
                        ) : (
                          <a
                            href={item.href}
                            className="inline-flex items-center gap-2 text-sm text-primary transition-transform duration-300 hover:-translate-y-0.5"
                          >
                            View
                            <RiArrowRightUpLine className="size-4" />
                          </a>
                        )
                      ) : null}
                    </div>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                    {item.bullets?.length ? (
                      <ul className="mt-4 space-y-2 border-t border-border/60 pt-4">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3 text-sm leading-7 text-muted-foreground">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </div>
            )}
          </EditorialCard>
        ))}
      </section>

      <section id="contact">
        <CtaRow
          title="Let's connect"
          description="Reach out about internships, UX roles, or collaboration. You can also open the PDF resume for sharing or printing."
          primaryAction={{
            href: profile.resumePdfHref ?? `mailto:${profile.email}`,
            label: "Open PDF resume",
          }}
          secondaryAction={{
            href: `mailto:${profile.email}`,
            label: "Email me",
          }}
          tertiaryAction={
            profile.linkedinHref
              ? {
                  href: profile.linkedinHref,
                  label: "LinkedIn",
                }
              : undefined
          }
        />
      </section>
    </SiteShell>
  )
}
