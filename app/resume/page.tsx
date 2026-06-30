import {
  RiFilePdfLine,
  RiMailLine,
  RiMapPin2Line,
  RiPhoneLine,
} from "@remixicon/react"

import { CtaRow } from "@/components/portfolio/cta-row"
import { EditorialCard } from "@/components/portfolio/editorial-card"
import { ResumeSummarySection } from "@/components/portfolio/resume-summary-section"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { SiteShell } from "@/components/portfolio/site-shell"
import { Button } from "@/components/ui/button"
import { profile } from "@/lib/content/portfolio"

const contactChipClass =
  "inline-flex max-w-full min-w-0 items-center gap-2 rounded-full border border-border/80 bg-background/80 px-4 py-2 transition-colors hover:border-primary/40 hover:text-primary"

export default function ResumePage() {
  return (
    <SiteShell>
      <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <SectionHeading
          eyebrow="Resume"
          title={profile.title}
          description={profile.resumeSummary}
          headingLevel="h1"
        />

        <EditorialCard className="min-h-40 space-y-6">
          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            {profile.location ? (
              <span className={contactChipClass}>
                <RiMapPin2Line className="size-4 shrink-0" />
                <span className="min-w-0">{profile.location}</span>
              </span>
            ) : null}
            {profile.phone ? (
              <a
                href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`}
                className={contactChipClass}
              >
                <RiPhoneLine className="size-4 shrink-0" />
                <span className="min-w-0">{profile.phone}</span>
              </a>
            ) : null}
            <a href={`mailto:${profile.email}`} className={contactChipClass}>
              <RiMailLine className="size-4 shrink-0" />
              <span className="min-w-0 break-all">{profile.email}</span>
            </a>
          </div>

          {profile.resumePdfHref ? (
            <Button asChild size="lg" className="my-[15px] h-10 w-full sm:w-40">
              <a href={profile.resumePdfHref} target="_blank" rel="noreferrer">
                Open Resume PDF
                <RiFilePdfLine className="size-4" aria-hidden="true" />
              </a>
            </Button>
          ) : null}
        </EditorialCard>
      </section>

      <ResumeSummarySection />

      <section id="contact">
        <CtaRow
          title="Let's connect"
          description="Reach out about internships, UX roles, or collaboration. You can also open the PDF resume for sharing or printing."
          primaryAction={{
            href: profile.resumePdfHref ?? `mailto:${profile.email}`,
            label: "Open Resume PDF",
          }}
          secondaryAction={{
            href: `mailto:${profile.email}`,
            label: "Email Devi",
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
