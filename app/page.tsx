import { AboutSection } from "@/components/portfolio/about-section"
import { CtaRow } from "@/components/portfolio/cta-row"
import { HomeHero } from "@/components/portfolio/home-hero"
import { OtherWorksGrid } from "@/components/portfolio/other-works-grid"
import { SectionDivider } from "@/components/portfolio/section-divider"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { SiteShell } from "@/components/portfolio/site-shell"
import { WorkShowcaseGrid } from "@/components/portfolio/work-showcase-grid"

import { aboutSection, caseStudies, otherWorkGroups, profile } from "@/lib/content/portfolio"

export default function Page() {
  return (
    <SiteShell>
      <section className="flex flex-col gap-12 overflow-visible lg:gap-14">
        <HomeHero profile={profile} />
      </section>

      <SectionDivider />

      <section id="work" className="space-y-8">
        <p className="text-[13px] font-medium uppercase tracking-[0.32em] text-primary">Projects</p>

        <WorkShowcaseGrid caseStudies={caseStudies} />
      </section>

      <SectionDivider />

      <section id="other-works" className="space-y-8">
        <SectionHeading
          eyebrow="Other works"
          title="Interior design projects from my earlier spatial design practice."
        />

        <OtherWorksGrid groups={otherWorkGroups} />
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
