"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { format } from "date-fns"
import { CalendarIcon, Heart } from "lucide-react"
import { cn } from "@/lib/utils"
import { toast } from "@/components/ui/use-toast"

interface BookingFormProps {
  tourId: number
  tourName: string
}

export default function BookingForm({ tourId, tourName }: BookingFormProps) {
  const [date, setDate] = useState<Date>()
  const [adults, setAdults] = useState("2")
  const [children, setChildren] = useState("0")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!date) {
      toast({
        title: "Date Required",
        description: "Please select a tour date to continue.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Booking Request Submitted",
        description: `Your booking request for ${tourName} has been received. We'll contact you shortly to confirm your reservation.`,
      })
    }, 1500)
  }

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    toast({
      title: isWishlisted ? "Removed from Wishlist" : "Added to Wishlist",
      description: isWishlisted
        ? `${tourName} has been removed from your wishlist.`
        : `${tourName} has been added to your wishlist.`,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="date" className="block text-sm font-medium">
          Tour Date
        </label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : "Select date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              disabled={(date) => date < new Date()}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="adults" className="block text-sm font-medium">
            Adults
          </label>
          <Select value={adults} onValueChange={setAdults}>
            <SelectTrigger id="adults">
              <SelectValue placeholder="Adults" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label htmlFor="children" className="block text-sm font-medium">
            Children
          </label>
          <Select value={children} onValueChange={setChildren}>
            <SelectTrigger id="children">
              <SelectValue placeholder="Children" />
            </SelectTrigger>
            <SelectContent>
              {[0, 1, 2, 3, 4, 5, 6].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium">
          Full Name
        </label>
        <Input id="name" placeholder="Enter your full name" required />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <Input id="email" type="email" placeholder="Enter your email" required />
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="block text-sm font-medium">
          Phone Number
        </label>
        <Input id="phone" placeholder="Enter your phone number" required />
      </div>

      <div className="space-y-2">
        <label htmlFor="special-requests" className="block text-sm font-medium">
          Special Requests (Optional)
        </label>
        <textarea
          id="special-requests"
          className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Any special requirements or requests?"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
          {isSubmitting ? "Processing..." : "Book Now"}
        </Button>
        <Button type="button" variant="outline" className="w-full" onClick={handleWishlist}>
          <Heart className={cn("mr-2 h-4 w-4", isWishlisted && "fill-red-500 text-red-500")} />
          {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
        </Button>
      </div>
    </form>
  )
}
