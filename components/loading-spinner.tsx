export function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className={`animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary ${className}`}>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}
