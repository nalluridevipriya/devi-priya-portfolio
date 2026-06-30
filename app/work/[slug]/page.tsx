import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { RiArrowRightUpLine } from "@remixicon/react"

import { BeforeAfterPanel } from "@/components/portfolio/before-after-panel"
import { CtaRow } from "@/components/portfolio/cta-row"
import { EditorialCard } from "@/components/portfolio/editorial-card"
import { KeyDecisionsGrid } from "@/components/portfolio/key-decisions-grid"
import { OutcomesGrid } from "@/components/portfolio/outcomes-grid"
import { OverviewHighlightsGrid } from "@/components/portfolio/overview-highlights-grid"
import { ProcessStepList } from "@/components/portfolio/process-step-list"
import { ProjectHero } from "@/components/portfolio/project-hero"
import { ProjectNav } from "@/components/portfolio/project-nav"
import { QuantitativeResearchSection } from "@/components/portfolio/quantitative-research-section"
import { ScreenDesignFlow } from "@/components/portfolio/screen-design-flow"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { SiteShell } from "@/components/portfolio/site-shell"
import { Button } from "@/components/ui/button"
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
      title: "Case Study Unavailable",
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
          />
          <EditorialCard
            title="Problem statement"
            description={caseStudy.problem}
          />
        </div>

        <OverviewHighlightsGrid items={caseStudy.overviewHighlights} />
      </section>

      {caseStudy.quantitativeResearch ? (
        <section className="space-y-5">
          <QuantitativeResearchSection
            research={caseStudy.quantitativeResearch}
          />
        </section>
      ) : null}

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
          />
          <ProcessStepList steps={caseStudy.processSteps} />
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex flex-col gap-10 lg:gap-12">
          <SectionHeading
            eyebrow="Key decisions"
            title={
              caseStudy.keyDecisionsTitle ??
              "The choices that shaped the concept."
            }
            description={
              caseStudy.keyDecisionsDescription ??
              "This section shows the reasoning behind key design moves."
            }
          />
          <KeyDecisionsGrid decisions={caseStudy.keyDecisions} />
        </div>
      </section>

      {caseStudy.screenDesigns?.length ? (
        <section className="space-y-5">
          <div className="flex flex-col gap-10 lg:gap-12">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <SectionHeading
                eyebrow="Screen designs"
                title={
                  caseStudy.screenDesignsTitle ?? "Moderation review sequence"
                }
                description={caseStudy.screenDesignsDescription}
              />
              {caseStudy.screenDesignsFigmaHref ? (
                <Link
                  href={caseStudy.screenDesignsFigmaHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={
                    caseStudy.screenDesignsFigmaLabel ?? "Open Figma Prototype"
                  }
                  className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-primary bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[0_14px_30px_-18px_rgb(89_62_95_/_0.85)] transition-colors duration-300 hover:bg-primary/90"
                >
                  <Image
                    src="/skills/figma.svg"
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden="true"
                    className="h-4 w-auto"
                  />
                  <span>
                    {caseStudy.screenDesignsFigmaLabel ??
                      "Open Figma Prototype"}
                  </span>
                  <RiArrowRightUpLine className="size-4" aria-hidden="true" />
                </Link>
              ) : null}
            </div>
            <ScreenDesignFlow
              screens={caseStudy.screenDesigns}
              layout={caseStudy.screenDesignsLayout}
            />
            {caseStudy.screenDesignsLinks?.length ? (
              <div className="flex flex-wrap justify-end gap-3">
                {caseStudy.screenDesignsLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-primary bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[0_14px_30px_-18px_rgb(89_62_95_/_0.85)] transition-colors duration-300 hover:bg-primary/90"
                  >
                    <Image
                      src="/skills/figma.svg"
                      alt=""
                      width={16}
                      height={16}
                      aria-hidden="true"
                      className="h-4 w-auto"
                    />
                    <span>{link.label}</span>
                    <RiArrowRightUpLine className="size-4" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            ) : null}
            {caseStudy.screenDesignsSupportingImages?.length ? (
              <div className="space-y-4">
                {caseStudy.screenDesignsSupportingImages.map((image) => (
                  <figure key={image.src} className="space-y-3">
                    {image.title ? (
                      <h3 className="font-heading text-2xl leading-tight font-light text-foreground">
                        {image.title}
                      </h3>
                    ) : null}
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      sizes="100vw"
                      className="mx-auto h-auto w-full max-w-[86rem]"
                    />
                    {image.label ? (
                      <figcaption className="text-center text-[11px] font-semibold tracking-[0.26em] text-primary uppercase">
                        {image.label}
                      </figcaption>
                    ) : null}
                  </figure>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {caseStudy.outcomeComparisons?.length ? (
        <section className="space-y-5">
          <div className="flex flex-col gap-10 lg:gap-12">
            <p className="text-[13px] font-semibold tracking-[0.32em] text-primary uppercase">
              Before & after
            </p>
            <div className="flex w-full flex-col gap-10 lg:gap-12">
              {caseStudy.outcomeComparisons.map((comparison) => (
                <EditorialCard
                  key={comparison.title}
                  className="w-full"
                  title={comparison.title}
                >
                  <BeforeAfterPanel
                    {...comparison.beforeAfter}
                    showTopDivider={false}
                    figmaHref={comparison.figmaHref}
                    figmaLabel={comparison.figmaLabel}
                    websiteHref={comparison.websiteHref}
                    websiteLabel={comparison.websiteLabel}
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
              "The outcomes focus on observable improvements, prototype behavior, and credible next steps."
            }
          />
          <OutcomesGrid outcomes={caseStudy.outcomes} />
        </div>
      </section>

      {caseStudy.reportPdfHref ? (
        <section className="flex justify-start">
          <Button asChild size="lg" className="px-6">
            <a href={caseStudy.reportPdfHref} target="_blank" rel="noreferrer">
              Open Report PDF
              <RiArrowRightUpLine className="size-4" aria-hidden="true" />
            </a>
          </Button>
        </section>
      ) : null}

      <section>
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Reflection"
            title={caseStudy.reflectionTitle ?? "What I Would Strengthen Next"}
            description={caseStudy.reflection}
          />
          {caseStudy.reflectionNextSteps?.length ? (
            <div className="space-y-3">
              <p className="text-base leading-8 text-muted-foreground">
                I would also explore:
              </p>
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
          title="Let's Connect"
          description="I would love to hear from you whether it is about design or new opportunities. Always excited to connect and share ideas."
          primaryAction={{
            href: profile.linkedinHref ?? profile.resumeHref,
            label: "LinkedIn",
          }}
          secondaryAction={{
            href: `mailto:${profile.email}`,
            label: "Email Devi",
          }}
        />
      </section>
    </SiteShell>
  )
}
