import Link from "next/link"
import { RiDownloadLine } from "@remixicon/react"

import { SiteShell } from "@/components/portfolio/site-shell"
import { Button } from "@/components/ui/button"
import { profile } from "@/lib/content/portfolio"

const resumePdfSrc = "/api/resume-pdf"

export const metadata = {
  title: `Resume PDF | ${profile.name}`,
}

export default function ResumePdfPage() {
  return (
    <SiteShell>
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="font-heading text-2xl font-light text-foreground">
              Resume PDF
            </h1>
            <p className="text-sm text-muted-foreground">
              If the preview does not appear, use download to open the file in
              your PDF app.
            </p>
          </div>
          <Button asChild variant="outline">
            <a href={resumePdfSrc} download="devi-priya-nalluri-resume.pdf">
              Download PDF
              <RiDownloadLine className="size-4" aria-hidden="true" />
            </a>
          </Button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border/70 bg-muted/30">
          <iframe
            src={resumePdfSrc}
            title="Devi Priya Nalluri resume PDF"
            className="h-[min(85vh,1100px)] w-full bg-white"
          />
        </div>

        <p className="text-center text-sm text-muted-foreground">
          <Link href="/resume" className="text-primary underline-offset-4 hover:underline">
            Back to resume page
          </Link>
        </p>
      </div>
    </SiteShell>
  )
}
