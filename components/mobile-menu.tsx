"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Tours", href: "/tours" },
  { name: "Destinations", href: "/destinations" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)

  // Handle opening the menu with animation
  const openMenu = () => {
    setIsOpen(true)
    // Small delay to ensure DOM is ready before animation starts
    setTimeout(() => {
      setIsAnimating(true)
    }, 10)
  }

  // Handle closing the menu with animation
  const closeMenu = () => {
    setIsAnimating(false)
    // Wait for animation to complete before removing from DOM
    setTimeout(() => {
      setIsOpen(false)
    }, 300) // Match this with the CSS transition duration
  }

  // Close menu when route changes
  useEffect(() => {
    if (isOpen) {
      closeMenu()
    }
  }, [pathname])

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={isOpen ? closeMenu : openMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div
          className={cn(
            "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity duration-300",
            isAnimating ? "opacity-100" : "opacity-0",
          )}
          onClick={closeMenu}
        >
          <div
            ref={menuRef}
            className={cn(
              "fixed inset-y-0 right-0 w-full max-w-xs bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out",
              isAnimating ? "translate-x-0" : "translate-x-full",
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <p className="text-lg font-semibold">Menu</p>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <Button variant="ghost" size="icon" onClick={closeMenu} aria-label="Close menu">
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </div>

            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary",
                    pathname === item.href ? "text-primary" : "text-foreground/80",
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="mt-4 w-full bg-primary hover:bg-primary/90">Book Now</Button>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}
