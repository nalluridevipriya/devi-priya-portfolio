"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

const navigation = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/#about" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/#contact" },
] as const

function isNavItemActive(
  label: (typeof navigation)[number]["label"],
  pathname: string,
  homeSection: string | null
) {
  switch (label) {
    case "Work":
      return pathname.startsWith("/work")
    case "Resume":
      return pathname.startsWith("/resume")
    case "About":
      return pathname === "/" && homeSection === "about"
    case "Contact":
      return pathname === "/" && homeSection === "contact"
    default:
      return false
  }
}

export function SiteNav() {
  const pathname = usePathname()
  const [homeSection, setHomeSection] = useState<string | null>(null)

  useEffect(() => {
    if (pathname !== "/") {
      setHomeSection(null)
      return
    }

    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "")
      if (hash === "about" || hash === "contact") {
        setHomeSection(hash)
      }
    }

    syncFromHash()
    window.addEventListener("hashchange", syncFromHash)

    const aboutEl = document.getElementById("about")
    const contactEl = document.getElementById("contact")
    const sectionElements = [aboutEl, contactEl].filter(Boolean) as HTMLElement[]

    if (sectionElements.length === 0) {
      return () => window.removeEventListener("hashchange", syncFromHash)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          setHomeSection(visible[0].target.id)
        }
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0, 0.2, 0.4, 0.6, 0.8, 1] }
    )

    sectionElements.forEach((element) => observer.observe(element))

    return () => {
      window.removeEventListener("hashchange", syncFromHash)
      observer.disconnect()
    }
  }, [pathname])

  return (
    <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-x-7 lg:gap-x-8">
      {navigation.map((item) => {
        const isActive = isNavItemActive(item.label, pathname, homeSection)

        return (
          <Link
            key={item.label}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "text-[0.8125rem] font-medium tracking-[0.01em] transition-colors duration-300 sm:text-sm",
              isActive
                ? "text-foreground"
                : "text-foreground/65 hover:text-foreground"
            )}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
