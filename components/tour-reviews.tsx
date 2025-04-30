"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

interface TourReviewsProps {
  tourId: number
}

export default function TourReviews({ tourId }: TourReviewsProps) {
  const [rating, setRating] = useState("5")
  const [review, setReview] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setReview("")
      setRating("5")
      toast({
        title: "Review Submitted",
        description: "Thank you for sharing your experience!",
      })
    }, 1000)
  }

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Customer Reviews</h2>

      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-6">
            <div className="mb-2 flex items-center gap-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image src={review.avatar || "/placeholder.svg"} alt={review.name} fill className="object-cover" />
              </div>
              <div>
                <h4 className="font-bold">{review.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{review.date}</p>
              </div>
            </div>
            <div className="mb-2 flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < review.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700"
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-700 dark:text-gray-300">{review.text}</p>
          </div>
        ))}
      </div>

      <div className="rounded-lg border p-6">
        <h3 className="mb-4 text-xl font-bold">Write a Review</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="rating" className="block text-sm font-medium">
              Rating
            </label>
            <Select value={rating} onValueChange={setRating}>
              <SelectTrigger id="rating">
                <SelectValue placeholder="Select rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5 Stars - Excellent</SelectItem>
                <SelectItem value="4">4 Stars - Very Good</SelectItem>
                <SelectItem value="3">3 Stars - Good</SelectItem>
                <SelectItem value="2">2 Stars - Fair</SelectItem>
                <SelectItem value="1">1 Star - Poor</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label htmlFor="review" className="block text-sm font-medium">
              Your Review
            </label>
            <Textarea
              id="review"
              placeholder="Share your experience with this tour..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
              className="min-h-[120px]"
            />
          </div>
          <Button type="submit" className="bg-primary hover:bg-primary/90" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Review"}
          </Button>
        </form>
      </div>
    </div>
  )
}

// Sample data
const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    date: "March 15, 2023",
    text: "Our safari experience was absolutely incredible! The guides were knowledgeable and friendly, and we saw all of the Big Five. Accommodations were luxurious and the food was amazing. Highly recommend!",
  },
  {
    id: 2,
    name: "David Chen",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
    date: "February 22, 2023",
    text: "Great experience overall. The game drives were excellent and our guide was very informative. The only reason I'm not giving 5 stars is because one of the accommodations wasn't as nice as expected. Still, I would recommend this tour to anyone interested in seeing Kenya's wildlife.",
  },
  {
    id: 3,
    name: "Emma Williams",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    date: "January 10, 2023",
    text: "This was a trip of a lifetime! We saw so many animals including lions, elephants, giraffes, and even a leopard. The hot air balloon safari was worth every penny for the incredible views. The staff were attentive and made sure we were comfortable throughout the journey.",
  },
]
