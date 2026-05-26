import Image from "next/image"
import Link from "next/link"
import { RiArrowRightUpLine } from "@remixicon/react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { AboutSectionContent, AboutTextSegment } from "@/lib/content/portfolio"

type AboutSectionProps = {
  content: AboutSectionContent
  resumeHref: string
  className?: string
}

function AboutParagraph({ segments }: { segments: AboutTextSegment[] }) {
  return (
    <p className="text-base leading-8 text-muted-foreground sm:text-lg sm:leading-8">
      {segments.map((segment, index) => {
        if (segment.bold && segment.italic) {
          return (
            <strong key={index} className="font-semibold italic text-foreground">
              {segment.text}
            </strong>
          )
        }

        if (segment.italic) {
          return (
            <em key={index} className="italic text-foreground">
              {segment.text}
            </em>
          )
        }

        if (segment.bold) {
          return (
            <strong key={index} className="font-semibold text-foreground">
              {segment.text}
            </strong>
          )
        }

        return <span key={index}>{segment.text}</span>
      })}
    </p>
  )
}

export function AboutSection({ content, resumeHref, className }: AboutSectionProps) {
  return (
    <section
      id="about"
      className={cn("grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14", className)}
    >
      <div className="space-y-8">
        <p className="text-xs uppercase tracking-[0.32em] text-primary">
          + {content.eyebrow}
        </p>

        <div className="space-y-6">
          {content.paragraphs.map((paragraph, index) => (
            <AboutParagraph key={index} segments={paragraph} />
          ))}
        </div>

        <Button asChild size="lg" className="w-fit px-6">
          <Link href={resumeHref}>
            Open resume
            <RiArrowRightUpLine className="size-4" />
          </Link>
        </Button>
      </div>

      <div className="mx-auto w-full max-w-sm sm:max-w-md lg:mx-0 lg:ml-auto lg:max-w-[21rem]">
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {content.photos.map((photo) => (
            <div
              key={photo.alt}
              className="group relative aspect-[4/5] overflow-hidden rounded-[1.25rem] border border-border/70 shadow-[0_18px_50px_-35px_rgba(74,56,40,0.3)] sm:rounded-[1.5rem]"
            >
              {photo.src ? (
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 200px, 168px"
                />
              ) : (
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0",
                    photo.gradient
                  )}
                  aria-label={photo.alt}
                />
              )}
              <div className="pointer-events-none absolute inset-0 bg-foreground/0 transition duration-500 group-hover:bg-foreground/5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
