import { AboutSection } from "@/components/portfolio/about-section"
import { CtaRow } from "@/components/portfolio/cta-row"
import { HomeHero } from "@/components/portfolio/home-hero"
import { ProcessTimeline } from "@/components/portfolio/process-timeline"
import { SectionDivider } from "@/components/portfolio/section-divider"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { SiteShell } from "@/components/portfolio/site-shell"
import { WorkShowcaseGrid } from "@/components/portfolio/work-showcase-grid"

import { aboutSection, caseStudies, heroPhotos, profile, workingProcess } from "@/lib/content/portfolio"

export default function Page() {
  return (
    <SiteShell>
      <section className="flex flex-col gap-12 overflow-visible lg:gap-14">
        <HomeHero profile={profile} photos={heroPhotos} />
      </section>

      <SectionDivider />

      <section id="work" className="space-y-8">
        <p className="text-[13px] font-medium uppercase tracking-[0.32em] text-primary">Projects</p>

        <WorkShowcaseGrid caseStudies={caseStudies} />
      </section>

      <SectionDivider />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="How I work"
          title="A research-first based process that turns uncertainity into factual based next steps."
          description="Define the problem, map the journey, prototype, test and refine"
        />
        <ProcessTimeline items={workingProcess} />
      </section>

      <SectionDivider />

      <AboutSection content={aboutSection} resumeHref={profile.resumeHref} />

      <SectionDivider />

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
