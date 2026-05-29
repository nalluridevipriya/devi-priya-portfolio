import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { BeforeAfterPanel } from "@/components/portfolio/before-after-panel"
import { CtaRow } from "@/components/portfolio/cta-row"
import { EditorialCard } from "@/components/portfolio/editorial-card"
import { KeyDecisionsGrid } from "@/components/portfolio/key-decisions-grid"
import { OutcomesGrid } from "@/components/portfolio/outcomes-grid"
import { OverviewHighlightsGrid } from "@/components/portfolio/overview-highlights-grid"
import { ProcessStepList } from "@/components/portfolio/process-step-list"
import { ProjectHero } from "@/components/portfolio/project-hero"
import { ProjectNav } from "@/components/portfolio/project-nav"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { SiteShell } from "@/components/portfolio/site-shell"
import {
  caseStudies,
  getAdjacentCaseStudies,
  getCaseStudyBySlug,
  profile,
} from "@/lib/content/portfolio"

type CaseStudyPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }))
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = getCaseStudyBySlug(slug)

  if (!caseStudy) {
    return {
      title: "Case study not found",
    }
  }

  return {
    title: `${caseStudy.title} | ${profile.name}`,
    description: caseStudy.summary,
  }
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const caseStudy = getCaseStudyBySlug(slug)

  if (!caseStudy) {
    notFound()
  }

  const { previous, next } = getAdjacentCaseStudies(slug)

  return (
    <SiteShell>
      <ProjectHero caseStudy={caseStudy} centered />

      <section className="space-y-5">
        <div className="flex flex-col gap-5">
          <SectionHeading
            eyebrow="Overview"
            title="Role and context"
            description={caseStudy.context}
            centered
          />
          <EditorialCard
            title="Problem statement"
            description={caseStudy.problem}
          />
        </div>

        <OverviewHighlightsGrid items={caseStudy.overviewHighlights} />
      </section>

      <section className="space-y-5">
        <div className="flex flex-col gap-10 lg:gap-12">
          <SectionHeading
            eyebrow="Process"
            title={
              caseStudy.processTitle ??
              "From early research questions to an actionable interaction direction."
            }
            description={
              caseStudy.processDescription ??
              "Each step below is written in a way that can stay useful now and still be replaced with stronger proof points once final project artifacts are ready."
            }
            centered
          />
          <ProcessStepList steps={caseStudy.processSteps} />
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex flex-col gap-10 lg:gap-12">
          <SectionHeading
            eyebrow="Key decisions"
            title={
              caseStudy.keyDecisionsTitle ?? "The choices that shaped the concept."
            }
            description={
              caseStudy.keyDecisionsDescription ??
              "This is where the case study makes judgment visible, not just outputs."
            }
            centered
          />
          <KeyDecisionsGrid decisions={caseStudy.keyDecisions} />
        </div>
      </section>

      {caseStudy.outcomeComparisons?.length ? (
        <section className="space-y-5">
          <div className="flex flex-col gap-10 lg:gap-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-primary">Before & after</p>
            </div>
            <div className="flex w-full flex-col gap-10 lg:gap-12">
              {caseStudy.outcomeComparisons.map((comparison) => (
                <EditorialCard
                  key={comparison.title}
                  className="w-full"
                  title={comparison.title}
                  chip={
                    comparison.figmaHref
                      ? { href: comparison.figmaHref, label: "Figma" }
                      : undefined
                  }
                >
                  <BeforeAfterPanel
                    {...comparison.beforeAfter}
                    pageTitle={comparison.title}
                    showTopDivider={false}
                  />
                </EditorialCard>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="space-y-5">
        <div className="flex flex-col gap-10 lg:gap-12">
          <SectionHeading
            eyebrow="Outcome"
            title={caseStudy.outcomesTitle ?? "What the work produced"}
            description={
              caseStudy.outcomesDescription ??
              "The outcomes are phrased carefully to stay credible without pretending the draft already has production metrics."
            }
            centered
          />
          <OutcomesGrid outcomes={caseStudy.outcomes} />
        </div>
      </section>

      <section>
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Reflection"
            title={caseStudy.reflectionTitle ?? "What I would strengthen next"}
            description={caseStudy.reflection}
          />
          {caseStudy.reflectionNextSteps?.length ? (
            <div className="space-y-3">
              <p className="text-base leading-8 text-muted-foreground">I would also explore:</p>
              <ul className="space-y-2 text-base leading-8 text-muted-foreground">
                {caseStudy.reflectionNextSteps.map((step) => (
                  <li key={step} className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>

      <ProjectNav previous={previous} next={next} />

      <section id="contact">
        <CtaRow
          title="Let's Connect!"
          description="I would love to hear from you whether it is about design or new opportunities. Always excited to connect and share ideas."
          primaryAction={{
            href: profile.linkedinHref ?? profile.resumeHref,
            label: "LinkedIn",
          }}
          secondaryAction={{
            href: `mailto:${profile.email}`,
            label: "Email Me",
          }}
        />
      </section>
    </SiteShell>
  )
}
