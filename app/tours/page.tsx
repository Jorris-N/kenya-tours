"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Slider } from "@/components/ui/slider"
import { Star, Calendar, Clock, Users, Search, ArrowRight } from "lucide-react"
import PageBanner from "@/components/page-banner"

export default function ToursPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 3000])
  const [duration, setDuration] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)

  // Filter tours based on search and filters
  const filteredTours = tours
    .filter(
      (tour) =>
        tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tour.description.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .filter((tour) => category === "all" || tour.category === category)
    .filter((tour) => tour.price >= priceRange[0] && tour.price <= priceRange[1])
    .filter((tour) => {
      if (duration === "all") return true
      const days = Number.parseInt(tour.duration.split(" ")[0])
      if (duration === "1-3" && days >= 1 && days <= 3) return true
      if (duration === "4-7" && days >= 4 && days <= 7) return true
      if (duration === "8+" && days >= 8) return true
      return false
    })

  // Pagination
  const toursPerPage = 6
  const indexOfLastTour = currentPage * toursPerPage
  const indexOfFirstTour = indexOfLastTour - toursPerPage
  const currentTours = filteredTours.slice(indexOfFirstTour, indexOfLastTour)
  const totalPages = Math.ceil(filteredTours.length / toursPerPage)

  return (
    <>
      <PageBanner
        title="Explore Our Tours"
        subtitle="Discover the best safari experiences and adventures in Kenya"
        backgroundImage="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="container mx-auto px-4 py-12 md:px-6">
        {/* Search and Filters */}
        <div className="mb-8 rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input
                type="text"
                placeholder="Search tours..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Wildlife Safari">Wildlife Safari</SelectItem>
                  <SelectItem value="Adventure">Adventure</SelectItem>
                  <SelectItem value="Beach Holiday">Beach Holiday</SelectItem>
                  <SelectItem value="Cultural Tour">Cultural Tour</SelectItem>
                </SelectContent>
              </Select>
              <Select value={duration} onValueChange={setDuration}>
                <SelectTrigger>
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Durations</SelectItem>
                  <SelectItem value="1-3">1-3 Days</SelectItem>
                  <SelectItem value="4-7">4-7 Days</SelectItem>
                  <SelectItem value="8+">8+ Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium">
              Price Range: ${priceRange[0]} - ${priceRange[1]}
            </span>
          </div>
          <Slider
            defaultValue={[0, 3000]}
            max={3000}
            step={100}
            value={priceRange}
            onValueChange={setPriceRange}
            className="py-4"
          />
        </div>

        {/* Results */}
        <div className="mb-8">
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Showing {currentTours.length} of {filteredTours.length} tours
          </p>
          {currentTours.length === 0 ? (
            <div className="rounded-lg border border-dashed p-8 text-center">
              <h3 className="mb-2 text-xl font-bold">No tours found</h3>
              <p className="text-gray-600 dark:text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {currentTours.map((tour) => (
                <Card key={tour.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-64">
                    <Image
                      src={
                        tour.image ||
                        "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2072&auto=format&fit=crop"
                      }
                      alt={tour.title}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium text-primary">{tour.category}</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-sm font-medium">{tour.rating}</span>
                      </div>
                    </div>
                    <h3 className="mb-2 text-xl font-bold">{tour.title}</h3>
                    <p className="mb-4 text-gray-600 dark:text-gray-400">{tour.description.substring(0, 100)}...</p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="mr-1 h-4 w-4" />
                        {tour.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Users className="mr-1 h-4 w-4" />
                        {tour.groupSize}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="mr-1 h-4 w-4" />
                        {tour.difficulty}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">${tour.price}</span>
                      <Link href={`/tours/${tour.slug}`}>
                        <Button variant="outline" className="gap-1">
                          View Details
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    if (currentPage > 1) setCurrentPage(currentPage - 1)
                  }}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }).map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      setCurrentPage(index + 1)
                    }}
                    isActive={currentPage === index + 1}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
                  }}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </>
  )
}

// Sample data
const tours = [
  {
    id: 1,
    title: "Masai Mara Safari Adventure",
    slug: "masai-mara-safari",
    description:
      "Experience the thrill of the Great Migration and witness the Big Five in their natural habitat. Our expert guides will take you to the best spots for wildlife viewing.",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2072&auto=format&fit=crop",
    price: 1299,
    duration: "5 Days",
    groupSize: "Max 8",
    difficulty: "Easy",
    category: "Wildlife Safari",
    rating: 4.9,
  },
  {
    id: 2,
    title: "Mount Kenya Trekking Expedition",
    slug: "mount-kenya-trekking",
    description:
      "Conquer Africa's second-highest peak with our expert guides and enjoy breathtaking views. This challenging trek will take you through diverse ecosystems and stunning landscapes.",
    image: "https://images.unsplash.com/photo-1518737743670-3f217c4def4a?q=80&w=2070&auto=format&fit=crop",
    price: 899,
    duration: "7 Days",
    groupSize: "Max 12",
    difficulty: "Challenging",
    category: "Adventure",
    rating: 4.7,
  },
  {
    id: 3,
    title: "Diani Beach Getaway",
    slug: "diani-beach-getaway",
    description:
      "Relax on the pristine white sands of Diani Beach and enjoy water sports in the Indian Ocean. This beach holiday is perfect for those looking to unwind and enjoy the sun.",
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=2069&auto=format&fit=crop",
    price: 799,
    duration: "4 Days",
    groupSize: "Max 10",
    difficulty: "Easy",
    category: "Beach Holiday",
    rating: 4.8,
  },
  {
    id: 4,
    title: "Amboseli National Park Safari",
    slug: "amboseli-national-park",
    description:
      "Enjoy spectacular views of Mount Kilimanjaro while spotting elephants and other wildlife in Amboseli National Park. This safari offers amazing photography opportunities.",
    image: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?q=80&w=2067&auto=format&fit=crop",
    price: 1099,
    duration: "4 Days",
    groupSize: "Max 6",
    difficulty: "Easy",
    category: "Wildlife Safari",
    rating: 4.9,
  },
  {
    id: 5,
    title: "Lake Nakuru Flamingo Tour",
    slug: "lake-nakuru",
    description:
      "Witness the spectacular sight of thousands of flamingos at Lake Nakuru, along with rhinos, lions, and other wildlife. This tour is a bird lover's paradise.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop",
    price: 699,
    duration: "3 Days",
    groupSize: "Max 8",
    difficulty: "Easy",
    category: "Wildlife Safari",
    rating: 4.6,
  },
  {
    id: 6,
    title: "Tsavo East and West Safari",
    slug: "tsavo-east-west",
    description:
      "Explore Kenya's largest national park, home to the famous 'red elephants' and diverse wildlife. This safari takes you through varied landscapes and ecosystems.",
    image: "https://images.unsplash.com/photo-1547970827-3b12de766bb4?q=80&w=2070&auto=format&fit=crop",
    price: 1199,
    duration: "6 Days",
    groupSize: "Max 8",
    difficulty: "Moderate",
    category: "Wildlife Safari",
    rating: 4.8,
  },
  {
    id: 7,
    title: "Lamu Cultural Experience",
    slug: "lamu-cultural",
    description:
      "Immerse yourself in the rich Swahili culture of Lamu Island, a UNESCO World Heritage site. Explore ancient architecture, traditional crafts, and local cuisine.",
    image: "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?q=80&w=2070&auto=format&fit=crop",
    price: 899,
    duration: "5 Days",
    groupSize: "Max 10",
    difficulty: "Easy",
    category: "Cultural Tour",
    rating: 4.7,
  },
  {
    id: 8,
    title: "Hell's Gate Biking Adventure",
    slug: "hells-gate-biking",
    description:
      "Cycle through Hell's Gate National Park, surrounded by stunning cliffs and wildlife. This unique adventure allows you to get close to zebras, giraffes, and gazelles.",
    image: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?q=80&w=1999&auto=format&fit=crop",
    price: 499,
    duration: "2 Days",
    groupSize: "Max 12",
    difficulty: "Moderate",
    category: "Adventure",
    rating: 4.5,
  },
  {
    id: 9,
    title: "Mombasa Beach and City Tour",
    slug: "mombasa-beach-city",
    description:
      "Combine relaxation on Mombasa's beautiful beaches with exploration of the historic Old Town. This tour offers the perfect blend of culture and leisure.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2070&auto=format&fit=crop",
    price: 699,
    duration: "4 Days",
    groupSize: "Max 12",
    difficulty: "Easy",
    category: "Beach Holiday",
    rating: 4.6,
  },
  {
    id: 10,
    title: "Samburu National Reserve Safari",
    slug: "samburu-safari",
    description:
      "Discover unique wildlife species in the arid landscapes of Samburu National Reserve. This off-the-beaten-path safari offers authentic wilderness experiences.",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2072&auto=format&fit=crop",
    price: 1299,
    duration: "5 Days",
    groupSize: "Max 6",
    difficulty: "Moderate",
    category: "Wildlife Safari",
    rating: 4.8,
  },
  {
    id: 11,
    title: "Mount Longonot Hiking Day Trip",
    slug: "mount-longonot",
    description:
      "Hike to the rim of Mount Longonot, an extinct volcano with breathtaking views of the Great Rift Valley. This day trip is perfect for adventure enthusiasts.",
    image: "https://images.unsplash.com/photo-1573690706484-86f444f0b940?q=80&w=1974&auto=format&fit=crop",
    price: 149,
    duration: "1 Day",
    groupSize: "Max 15",
    difficulty: "Moderate",
    category: "Adventure",
    rating: 4.4,
  },
  {
    id: 12,
    title: "Maasai Cultural Immersion",
    slug: "maasai-cultural",
    description:
      "Live with the Maasai people and learn about their traditions, customs, and way of life. This authentic cultural experience will give you a new perspective.",
    image: "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?q=80&w=2070&auto=format&fit=crop",
    price: 599,
    duration: "3 Days",
    groupSize: "Max 8",
    difficulty: "Easy",
    category: "Cultural Tour",
    rating: 4.9,
  },
]
