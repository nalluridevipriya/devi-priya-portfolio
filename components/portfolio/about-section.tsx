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

function AboutParagraph({
  segments,
  variant = "default",
  isGreeting = false,
}: {
  segments: AboutTextSegment[]
  variant?: "default" | "note"
  isGreeting?: boolean
}) {
  const emphasisClass = variant === "note" ? undefined : "text-foreground"

  return (
    <p
      className={cn(
        variant === "note"
          ? isGreeting
            ? "about-sticky-note-text about-sticky-note-greeting"
            : "about-sticky-note-text"
          : "text-base leading-8 text-muted-foreground sm:text-lg sm:leading-8"
      )}
    >
      {segments.map((segment, index) => {
        if (segment.bold && segment.italic) {
          return (
            <strong key={index} className={cn("font-semibold italic", emphasisClass)}>
              {segment.text}
            </strong>
          )
        }

        if (segment.italic) {
          return (
            <em key={index} className={cn("italic", emphasisClass)}>
              {segment.text}
            </em>
          )
        }

        if (segment.bold) {
          return (
            <strong key={index} className={cn("font-semibold", emphasisClass)}>
              {segment.text}
            </strong>
          )
        }

        return <span key={index}>{segment.text}</span>
      })}
    </p>
  )
}

function AboutPolaroid({
  photo,
  className,
  tiltClassName,
  animationClassName,
}: {
  photo: AboutSectionContent["photos"][number]
  className?: string
  tiltClassName?: string
  animationClassName?: string
}) {
  return (
    <div className={cn("about-polaroid", animationClassName, className)}>
      <div className={cn("about-polaroid-frame", tiltClassName)}>
        <div className="about-polaroid-photo">
          {photo.src ? (
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 160px, (max-width: 1024px) 200px, 168px"
            />
          ) : (
            <div
              className={cn("absolute inset-0 bg-gradient-to-br", photo.gradient)}
              aria-label={photo.alt}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export function AboutSection({ content, resumeHref, className }: AboutSectionProps) {
  const [topLeftPhoto, bottomRightPhoto] = content.photos

  return (
    <section
      id="about"
      className={cn(
        "grid gap-10 overflow-visible lg:grid-cols-[1.35fr_0.65fr] lg:items-center lg:gap-14",
        className
      )}
    >
      <div className="space-y-8 overflow-visible">
        <p className="text-xs font-bold uppercase tracking-[0.32em] text-primary">
          + {content.eyebrow}
        </p>

        <div className="about-sticky-note-wrap">
          <article className="about-sticky-note bg-[#ede4f2]">
            <span className="about-sticky-note-tape" aria-hidden="true" />
            <div className="about-sticky-note-body">
              {content.paragraphs.map((paragraph, index) => (
                <AboutParagraph
                  key={index}
                  segments={paragraph}
                  variant="note"
                  isGreeting={index === 0}
                />
              ))}
            </div>
          </article>
        </div>

        <Button asChild size="lg" className="w-fit px-6">
          <Link href={resumeHref}>
            Open resume
            <RiArrowRightUpLine className="size-4" />
          </Link>
        </Button>
      </div>

      <div className="mx-auto w-full max-w-sm overflow-visible sm:max-w-md lg:mx-0 lg:ml-auto lg:max-w-[21rem]">
        <div className="grid grid-cols-2 grid-rows-2 gap-3 overflow-visible sm:gap-4">
          {topLeftPhoto ? (
            <AboutPolaroid
              photo={topLeftPhoto}
              className="col-start-1 row-start-1"
              tiltClassName="-rotate-[5deg]"
              animationClassName="about-polaroid-float"
            />
          ) : null}
          {bottomRightPhoto ? (
            <AboutPolaroid
              photo={bottomRightPhoto}
              className="col-start-2 row-start-2"
              tiltClassName="rotate-[4deg]"
              animationClassName="about-polaroid-float-alt"
            />
          ) : null}
        </div>
      </div>
    </section>
  )
}
