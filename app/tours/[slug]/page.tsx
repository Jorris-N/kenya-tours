import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Star, Calendar, Clock, Users, MapPin, Check, X } from "lucide-react"
import BookingForm from "@/components/booking-form"
import TourReviews from "@/components/tour-reviews"

interface TourPageProps {
  params: {
    slug: string
  }
}

export default function TourPage({ params }: TourPageProps) {
  // In a real app, you would fetch this data from an API or CMS
  const tour = tours.find((t) => t.slug === params.slug)

  if (!tour) {
    return (
      <div className="container mx-auto px-4 py-12 text-center md:px-6">
        <h1 className="text-3xl font-bold">Tour Not Found</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400">The tour you are looking for does not exist.</p>
        <Link href="/tours">
          <Button className="mt-6">View All Tours</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h1 className="mb-2 text-3xl font-bold md:text-4xl">{tour.title}</h1>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 font-medium">{tour.rating}</span>
                <span className="ml-1 text-gray-600 dark:text-gray-400">({tour.reviewCount} reviews)</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-gray-500" />
                <span className="ml-1 text-gray-600 dark:text-gray-400">{tour.location}</span>
              </div>
            </div>
          </div>

          <div className="mb-8 overflow-hidden rounded-xl">
            <Image
              src={
                tour.image ||
                "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2072&auto=format&fit=crop"
              }
              alt={tour.title}
              width={900}
              height={500}
              className="h-auto w-full object-cover"
            />
          </div>

          <Tabs defaultValue="overview" className="mb-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
              <TabsTrigger value="inclusions">Inclusions</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Tour Overview</h2>
                <p className="text-gray-700 dark:text-gray-300">{tour.description}</p>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                    <div className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Duration</div>
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-5 w-5 text-primary" />
                      <span className="font-medium">{tour.duration}</span>
                    </div>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                    <div className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Group Size</div>
                    <div className="flex items-center">
                      <Users className="mr-2 h-5 w-5 text-primary" />
                      <span className="font-medium">{tour.groupSize}</span>
                    </div>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                    <div className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Difficulty</div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-5 w-5 text-primary" />
                      <span className="font-medium">{tour.difficulty}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold">Highlights</h3>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {tour.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="itinerary" className="mt-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Tour Itinerary</h2>
                <Accordion type="single" collapsible className="w-full">
                  {tour.itinerary.map((day, index) => (
                    <AccordionItem key={index} value={`day-${index + 1}`}>
                      <AccordionTrigger className="text-left font-medium">
                        Day {index + 1}: {day.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-700 dark:text-gray-300">{day.description}</p>
                        {day.activities && (
                          <div className="mt-4">
                            <h4 className="mb-2 font-medium">Activities:</h4>
                            <ul className="list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
                              {day.activities.map((activity, actIndex) => (
                                <li key={actIndex}>{activity}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {day.meals && (
                          <div className="mt-4">
                            <h4 className="mb-2 font-medium">Meals:</h4>
                            <p className="text-gray-700 dark:text-gray-300">{day.meals}</p>
                          </div>
                        )}
                        {day.accommodation && (
                          <div className="mt-4">
                            <h4 className="mb-2 font-medium">Accommodation:</h4>
                            <p className="text-gray-700 dark:text-gray-300">{day.accommodation}</p>
                          </div>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>
            <TabsContent value="inclusions" className="mt-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">What's Included</h2>
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="mb-4 text-xl font-bold text-primary">Included</h3>
                    <ul className="space-y-2">
                      {tour.included.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="mr-2 h-5 w-5 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-4 text-xl font-bold text-red-700 dark:text-red-500">Not Included</h3>
                    <ul className="space-y-2">
                      {tour.notIncluded.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <X className="mr-2 h-5 w-5 text-red-600 dark:text-red-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <TourReviews tourId={tour.id} />
            </TabsContent>
          </Tabs>

          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-bold">Location</h2>
            <div className="overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-800">
              <Image
                src="https://images.unsplash.com/photo-1547970827-3b12de766bb4?q=80&w=2070&auto=format&fit=crop"
                alt="Map"
                width={800}
                height={400}
                className="h-[400px] w-full object-cover"
              />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-bold">Related Tours</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {relatedTours.map((relatedTour) => (
                <Card key={relatedTour.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={
                        relatedTour.image ||
                        "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2072&auto=format&fit=crop"
                      }
                      alt={relatedTour.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="mb-2 text-lg font-bold">{relatedTour.title}</h3>
                    <div className="mb-2 flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm">{relatedTour.rating}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-primary">${relatedTour.price}</span>
                      <Link href={`/tours/${relatedTour.slug}`}>
                        <Button variant="outline" size="sm">
                          View Tour
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-20">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-3xl font-bold text-primary">${tour.price}</span>
                  <span className="text-gray-600 dark:text-gray-400">per person</span>
                </div>
                <BookingForm tourId={tour.id} tourName={tour.title} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

// Sample data
const tours = [
  {
    id: 1,
    title: "Masai Mara Safari Adventure",
    slug: "masai-mara-safari",
    description:
      "Experience the thrill of the Great Migration and witness the Big Five in their natural habitat. Our expert guides will take you to the best spots for wildlife viewing in the world-famous Masai Mara National Reserve. Enjoy comfortable accommodations, delicious meals, and unforgettable game drives during this 5-day safari adventure.",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2072&auto=format&fit=crop",
    price: 1299,
    duration: "5 Days / 4 Nights",
    groupSize: "Max 8 people",
    difficulty: "Easy",
    category: "Wildlife Safari",
    rating: 4.9,
    reviewCount: 124,
    location: "Masai Mara National Reserve, Kenya",
    highlights: [
      "Witness the Great Migration (seasonal)",
      "Spot the Big Five: lion, leopard, elephant, buffalo, and rhino",
      "Visit authentic Maasai villages and learn about their culture",
      "Enjoy sunrise and sunset game drives",
      "Stay in comfortable safari lodges and tented camps",
      "Professional wildlife guides and photographers",
    ],
    itinerary: [
      {
        title: "Nairobi to Masai Mara",
        description:
          "After breakfast, depart from Nairobi and drive to the Masai Mara National Reserve. Enjoy lunch at your lodge followed by an afternoon game drive.",
        activities: [
          "Morning departure from Nairobi",
          "Scenic drive through the Great Rift Valley",
          "Afternoon game drive",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Safari Lodge or Luxury Tented Camp",
      },
      {
        title: "Full Day in Masai Mara",
        description:
          "Spend a full day exploring the Masai Mara with morning and afternoon game drives. Look for the Big Five and other wildlife.",
        activities: ["Early morning game drive", "Mid-day rest at the lodge", "Afternoon game drive until sunset"],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Safari Lodge or Luxury Tented Camp",
      },
      {
        title: "Masai Mara and Cultural Visit",
        description:
          "Continue wildlife viewing in the Masai Mara. In the afternoon, visit a local Maasai village to learn about their traditions and way of life.",
        activities: ["Morning game drive", "Maasai village cultural visit", "Evening game drive"],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Safari Lodge or Luxury Tented Camp",
      },
      {
        title: "Balloon Safari (Optional) and Game Drives",
        description:
          "Optional early morning hot air balloon safari followed by a champagne breakfast (additional cost). Continue with game drives throughout the day.",
        activities: ["Optional hot air balloon safari", "Extended game drives", "Sundowner at a scenic spot"],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Safari Lodge or Luxury Tented Camp",
      },
      {
        title: "Masai Mara to Nairobi",
        description: "Final morning game drive, then depart for Nairobi after lunch, arriving in the evening.",
        activities: ["Morning game drive", "Return journey to Nairobi", "Drop-off at your hotel or airport"],
        meals: "Breakfast, Lunch",
        accommodation: "Not included (end of tour)",
      },
    ],
    included: [
      "All transportation in a 4x4 safari vehicle",
      "Professional English-speaking safari guide",
      "4 nights accommodation in safari lodges or luxury tented camps",
      "All meals as specified in the itinerary",
      "All game drives and activities mentioned",
      "Park entrance fees",
      "Bottled water during game drives",
      "Maasai village visit and cultural experience",
    ],
    notIncluded: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Hot air balloon safari (optional, $450 per person)",
      "Alcoholic and soft drinks",
      "Gratuities for guide and camp staff",
      "Personal expenses and souvenirs",
      "Any activities not mentioned in the itinerary",
    ],
  },
]

const relatedTours = [
  {
    id: 2,
    title: "Amboseli National Park Safari",
    slug: "amboseli-national-park",
    image: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?q=80&w=2067&auto=format&fit=crop",
    price: 1099,
    rating: 4.8,
  },
  {
    id: 3,
    title: "Lake Nakuru Flamingo Tour",
    slug: "lake-nakuru",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop",
    price: 699,
    rating: 4.6,
  },
]
