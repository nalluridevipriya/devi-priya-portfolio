import { WebsiteShowcaseFrame } from "@/components/portfolio/website-showcase-frame"
import type { WebsiteShowcasePage } from "@/lib/content/portfolio"

type WebsiteShowcaseGridProps = {
  pages: WebsiteShowcasePage[]
}

export function WebsiteShowcaseGrid({ pages }: WebsiteShowcaseGridProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
      {pages.map((page) => (
        <WebsiteShowcaseFrame key={page.title} {...page} />
      ))}
    </div>
  )
}
