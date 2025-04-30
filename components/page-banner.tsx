import Image from "next/image"

interface PageBannerProps {
  title: string
  subtitle?: string
  backgroundImage: string
}

export default function PageBanner({ title, subtitle, backgroundImage }: PageBannerProps) {
  return (
    <div className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image src={backgroundImage || "/placeholder.svg"} alt={title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl max-w-3xl mx-auto">{subtitle}</p>}
      </div>
    </div>
  )
}
