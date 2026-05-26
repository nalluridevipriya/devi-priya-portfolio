import type { Metadata } from "next"
import { Fraunces, Manrope } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const fontBody = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
})

const fontHeading = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: {
    default: "Devi Priya Nalluri | UX Portfolio",
    template: "%s",
  },
  description:
    "A warm, editorial UX portfolio for entry-level and internship opportunities, with case studies, resume highlights, and honest draft project storytelling.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("scroll-smooth antialiased", fontBody.variable, fontHeading.variable)}
    >
      <body>
        <ThemeProvider>
          {/* Stacks above body::before grid (z-0) so the translucent grid stays visible */}
          <div className="relative z-[1]">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
