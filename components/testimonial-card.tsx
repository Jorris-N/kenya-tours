import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Testimonial {
  id: number
  name: string
  location: string
  image: string
  rating: number
  text: string
  tourName: string
}

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image
              src={
                testimonial.image ||
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
              }
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold">{testimonial.name}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.location}</p>
          </div>
        </div>
        <div className="mb-4 flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < testimonial.rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700"
              }`}
            />
          ))}
        </div>
        <p className="mb-4 text-gray-600 dark:text-gray-400">{testimonial.text}</p>
        <p className="text-sm font-medium text-green-600 dark:text-green-400">Tour: {testimonial.tourName}</p>
      </CardContent>
    </Card>
  )
}
