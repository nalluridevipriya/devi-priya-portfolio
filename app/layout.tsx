import type { Metadata } from "next"
import { Caveat, Fraunces, Manrope } from "next/font/google"

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

const fontScript = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-script",
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : new URL("http://localhost:3000")

const siteTitle = "Devi Priya Nalluri | UX Portfolio"
const siteDescription =
  "Portfolio of Devi Priya — UX Designer creating user-centered experiences through research, strategy, interaction design, and prototyping."

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: siteTitle,
    template: "%s",
  },
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Devi Priya Nalluri",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Devi Priya Nalluri UX portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/opengraph-image"],
  },
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
      className={cn(
        "scroll-smooth antialiased",
        fontBody.variable,
        fontHeading.variable,
        fontScript.variable
      )}
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
