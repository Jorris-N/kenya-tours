import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/scroll-to-top"
import AccessibilityWidget from "@/components/accessibility-widget"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

// Add metadata for better SEO
export const metadata = {
  title: "Safari Explorers | Discover Kenya's Beauty",
  description:
    "Experience the magic of Kenya with our expertly guided tours. Discover wildlife, landscapes, and culture with Safari Explorers.",
  keywords: "Kenya, safari, wildlife, travel, tours, Masai Mara, Amboseli, Mount Kenya, African safari",
  openGraph: {
    title: "Safari Explorers | Discover Kenya's Beauty",
    description: "Experience the magic of Kenya with our expertly guided tours.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2072&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Safari Explorers",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <ScrollToTop />
            <AccessibilityWidget />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
