import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Calendar, Clock, Users, ArrowRight } from "lucide-react"
import TestimonialCard from "@/components/testimonial-card"
import NewsletterForm from "@/components/newsletter-form"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2072&auto=format&fit=crop"
            alt="Kenyan Safari"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white md:px-6">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Discover the Magic of <span className="text-primary">Kenya</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg md:text-xl">
            Experience breathtaking wildlife, stunning landscapes, and rich cultural heritage with our expertly guided
            tours.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Explore Tours
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Featured Tours</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Explore our most popular safari experiences and adventures
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredTours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="relative h-64">
                  <Image src={tour.image || "/placeholder.svg"} alt={tour.title} fill className="object-cover" />
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
                  <p className="mb-4 text-gray-600 dark:text-gray-400">{tour.description}</p>
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
          <div className="mt-12 text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              View All Tours
            </Button>
          </div>
        </div>
      </section>

      {/* Destinations Highlight */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Popular Destinations</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Explore Kenya's most breathtaking locations</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {destinations.map((destination) => (
              <Link
                key={destination.id}
                href={`/destinations/${destination.slug}`}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-square relative overflow-hidden rounded-lg">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-xl font-bold text-white">{destination.name}</h3>
                    <p className="text-sm text-gray-200">{destination.tourCount} tours</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/destinations">
              <Button variant="outline" size="lg">
                Explore All Destinations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Read testimonials from our satisfied customers
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary/10 dark:bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Subscribe to Our Newsletter</h2>
            <p className="mb-8 text-muted-foreground">
              Get the latest updates on new tours, special offers, and travel tips.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const featuredTours = [
  {
    id: 1,
    title: "Masai Mara Safari Adventure",
    slug: "masai-mara-safari",
    description: "Experience the thrill of the Great Migration and witness the Big Five in their natural habitat.",
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
    description: "Conquer Africa's second-highest peak with our expert guides and enjoy breathtaking views.",
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
    description: "Relax on the pristine white sands of Diani Beach and enjoy water sports in the Indian Ocean.",
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=2069&auto=format&fit=crop",
    price: 799,
    duration: "4 Days",
    groupSize: "Max 10",
    difficulty: "Easy",
    category: "Beach Holiday",
    rating: 4.8,
  },
]

const destinations = [
  {
    id: 1,
    name: "Masai Mara",
    slug: "masai-mara",
    image: "https://images.unsplash.com/photo-1547970827-3b12de766bb4?q=80&w=2070&auto=format&fit=crop",
    tourCount: 12,
  },
  {
    id: 2,
    name: "Amboseli",
    slug: "amboseli",
    image: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?q=80&w=2067&auto=format&fit=crop",
    tourCount: 8,
  },
  {
    id: 3,
    name: "Diani Beach",
    slug: "diani-beach",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2070&auto=format&fit=crop",
    tourCount: 6,
  },
  {
    id: 4,
    name: "Mount Kenya",
    slug: "mount-kenya",
    image: "https://images.unsplash.com/photo-1573690706484-86f444f0b940?q=80&w=1974&auto=format&fit=crop",
    tourCount: 5,
  },
]

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "United States",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    rating: 5,
    text: "Our safari experience with Safari Explorers was absolutely incredible! The guides were knowledgeable and friendly, and we saw all of the Big Five. Accommodations were luxurious and the food was amazing. Highly recommend!",
    tourName: "Masai Mara Safari",
  },
  {
    id: 2,
    name: "David Chen",
    location: "Canada",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    rating: 5,
    text: "The Mount Kenya trek was challenging but so rewarding. Our guide ensured we were safe and comfortable throughout the journey. The views from the summit were breathtaking. A once-in-a-lifetime experience!",
    tourName: "Mount Kenya Expedition",
  },
  {
    id: 3,
    name: "Emma Williams",
    location: "United Kingdom",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    rating: 4,
    text: "Diani Beach was paradise! The tour was well-organized, and we had plenty of free time to relax and enjoy the beautiful beaches. The snorkeling excursion was a highlight. Would book with Safari Explorers again.",
    tourName: "Diani Beach Getaway",
  },
]
