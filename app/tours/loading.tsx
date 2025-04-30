// Update the loading component to use the new LoadingSpinner
import { LoadingSpinner } from "@/components/loading-spinner"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 flex justify-center items-center min-h-[60vh]">
      <LoadingSpinner />
    </div>
  )
}
