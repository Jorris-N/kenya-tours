"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-destructive">Something went wrong!</h1>
      <p className="mt-4 text-lg text-muted-foreground max-w-md">
        We apologize for the inconvenience. Please try again or contact our support team if the problem persists.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Button onClick={reset} className="bg-primary hover:bg-primary/90">
          Try Again
        </Button>
        <Button asChild variant="outline">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  )
}
