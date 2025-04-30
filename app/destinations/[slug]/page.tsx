import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, ArrowRight, Star } from "lucide-react"

interface DestinationPageProps {
  params: {
    slug: string
  }
}

export default function DestinationPage({ params }: DestinationPageProps) {
  // In a real app, you would fetch this data from a headless CMS
  const destination = destinations.find((d) => d.slug === params.slug)

  if (!destination) {
    return (
      <div className="container mx-auto px-4 py-12 text-center md:px-6">
        <h1 className="text-3xl font-bold">Destination Not Found</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400">The destination you are looking for does not exist.</p>
        <Link href="/destinations">
          <Button className="mt-6">View All Destinations</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h1 className="mb-2 text-3xl font-bold md:text-4xl">{destination.name}</h1>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-gray-600 dark:text-gray-400">{destination.region}, Kenya</span>
            </div>
          </div>

          <div className="mb-8 overflow-hidden rounded-xl">
            <Image
              src={
                destination.image ||
                "https://images.unsplash.com/photo-1547970827-3b12de766bb4?q=80&w=2070&auto=format&fit=crop"
              }
              alt={destination.name}
              width={900}
              height={500}
              className="h-auto w-full object-cover"
            />
          </div>

          <Tabs defaultValue="overview" className="mb-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="attractions">Attractions</TabsTrigger>
              <TabsTrigger value="when-to-visit">When to Visit</TabsTrigger>
              <TabsTrigger value="tips">Travel Tips</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">About {destination.name}</h2>
                <p className="text-gray-700 dark:text-gray-300">{destination.description}</p>
                <p className="text-gray-700 dark:text-gray-300">{destination.longDescription}</p>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                    <div className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Best Time to Visit</div>
                    <div className="font-medium">{destination.bestTimeToVisit}</div>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                    <div className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Known For</div>
                    <div className="font-medium">{destination.knownFor}</div>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                    <div className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Ideal Duration</div>
                    <div className="font-medium">{destination.idealDuration}</div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="attractions" className="mt-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Top Attractions in {destination.name}</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {destination.attractions.map((attraction, index) => (
                    <div key={index} className="rounded-lg border p-4">
                      <h3 className="mb-2 text-lg font-bold">{attraction.name}</h3>
                      <p className="mb-4 text-gray-600 dark:text-gray-400">{attraction.description}</p>
                      {attraction.image && (
                        <div className="overflow-hidden rounded-lg">
                          <Image
                            src={
                              attraction.image ||
                              "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2072&auto=format&fit=crop"
                            }
                            alt={attraction.name}
                            width={400}
                            height={250}
                            className="h-48 w-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="when-to-visit" className="mt-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">When to Visit {destination.name}</h2>
                <p className="text-gray-700 dark:text-gray-300">{destination.whenToVisitDescription}</p>

                <div className="mt-4 space-y-4">
                  {destination.seasons.map((season, index) => (
                    <div key={index} className="rounded-lg border p-4">
                      <h3 className="mb-2 text-lg font-bold">{season.name}</h3>
                      <p className="mb-2 text-gray-600 dark:text-gray-400">{season.months}</p>
                      <p className="text-gray-700 dark:text-gray-300">{season.description}</p>
                      <div className="mt-2">
                        <Badge
                          variant={season.recommended ? "default" : "outline"}
                          className={season.recommended ? "bg-green-600" : ""}
                        >
                          {season.recommended ? "Recommended" : "Consider alternatives"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="tips" className="mt-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Travel Tips for {destination.name}</h2>
                <ul className="space-y-2">
                  {destination.travelTips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400">
                        {index + 1}
                      </span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-20 space-y-6">
            <div className="rounded-lg border p-6">
              <h2 className="mb-4 text-xl font-bold">Available Tours</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                Explore our selection of tours featuring {destination.name}:
              </p>
              <div className="space-y-4">
                {destination.tours.map((tour) => (
                  <div key={tour.id} className="rounded-lg border p-4">
                    <h3 className="mb-2 font-bold">{tour.title}</h3>
                    <div className="mb-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="mr-1 h-4 w-4" />
                      {tour.duration}
                    </div>
                    <div className="mb-2 flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm">{tour.rating}</span>
                    </div>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-bold text-primary">${tour.price}</span>
                      <Link href={`/tours/${tour.slug}`}>
                        <Button variant="outline" size="sm">
                          View Tour
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <Link href={`/tours?destination=${destination.slug}`} className="mt-4 block">
                <Button className="w-full bg-primary hover:bg-primary/90">View All Tours</Button>
              </Link>
            </div>

            <div className="rounded-lg border p-6">
              <h2 className="mb-4 text-xl font-bold">Weather</h2>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-400">Current conditions in {destination.name}:</p>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3 dark:bg-gray-900">
                  <div className="flex items-center">
                    <Image
                      src="https://images.unsplash.com/photo-1561484930-998b6a7b22e8?q=80&w=1974&auto=format&fit=crop"
                      alt="Weather Icon"
                      width={50}
                      height={50}
                      className="mr-3"
                    />
                    <div>
                      <div className="text-2xl font-bold">24°C</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Partly Cloudy</div>
                    </div>
                  </div>
                  <div className="text-right text-sm">
                    <div>H: 28°C</div>
                    <div>L: 18°C</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-green-50 p-6 dark:bg-green-900/20">
              <h2 className="mb-4 text-xl font-bold">Need Help Planning?</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Our travel experts can help you create the perfect itinerary for your visit to {destination.name}.
              </p>
              <Link href="/contact">
                <Button className="w-full bg-primary hover:bg-primary/90">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">You Might Also Like</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {relatedDestinations.map((relatedDest) => (
            <Card key={relatedDest.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={
                    relatedDest.image ||
                    "https://images.unsplash.com/photo-1547970827-3b12de766bb4?q=80&w=2070&auto=format&fit=crop"
                  }
                  alt={relatedDest.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="mb-1 text-lg font-bold">{relatedDest.name}</h3>
                <div className="mb-2 flex items-center">
                  <MapPin className="mr-1 h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">{relatedDest.region}</span>
                </div>
                <Link href={`/destinations/${relatedDest.slug}`}>
                  <Button variant="outline" size="sm" className="w-full">
                    Explore
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

// Sample data - in a real app, this would come from a headless CMS
const destinations = [
  {
    id: 1,
    name: "Masai Mara National Reserve",
    slug: "masai-mara",
    region: "Rift Valley",
    image: "https://images.unsplash.com/photo-1547970827-3b12de766bb4?q=80&w=2070&auto=format&fit=crop",
    description:
      "Home to the Great Migration and abundant wildlife, the Masai Mara is Kenya's most famous safari destination.",
    longDescription:
      "The Masai Mara National Reserve is one of Africa's most magnificent game reserves. Bordering Tanzania, the Mara is the northern extension of the Serengeti and forms a wildlife corridor between the two countries. It's named after the statuesque, red-cloaked Maasai people who live in the park and graze their animals there as they have done for centuries. In their language, Mara means 'spotted' and refers to the many short bushy trees that dot the landscape.",
    bestTimeToVisit: "July to October",
    knownFor: "Great Migration, Big Five",
    idealDuration: "3-4 days",
    whenToVisitDescription:
      "The Masai Mara has a temperate climate year-round, but certain seasons offer different wildlife viewing experiences. The most popular time to visit is during the Great Migration.",
    seasons: [
      {
        name: "Migration Season",
        months: "July to October",
        description:
          "The best time to witness the Great Migration, when millions of wildebeest and zebra cross from Tanzania into Kenya. River crossings typically occur during this period.",
        recommended: true,
      },
      {
        name: "Green Season",
        months: "November to February",
        description:
          "Short rains followed by a dry period. Fewer tourists, lush landscapes, and excellent for bird watching. Many animals give birth during this time.",
        recommended: true,
      },
      {
        name: "Long Rains",
        months: "March to May",
        description:
          "Heavy rainfall can make some roads impassable and wildlife more dispersed. However, prices are lower and the reserve is less crowded.",
        recommended: false,
      },
      {
        name: "Dry Season",
        months: "June",
        description:
          "The beginning of the dry season before the migration arrives. Good wildlife viewing as animals concentrate around water sources.",
        recommended: true,
      },
    ],
    attractions: [
      {
        name: "Mara River",
        description:
          "Famous for dramatic wildebeest crossings during the Great Migration, where crocodiles lie in wait.",
        image: "https://images.unsplash.com/photo-1547970827-3b12de766bb4?q=80&w=2070&auto=format&fit=crop",
      },
      {
        name: "Maasai Villages",
        description:
          "Visit authentic Maasai communities to learn about their traditional way of life and cultural practices.",
        image: "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?q=80&w=2070&auto=format&fit=crop",
      },
      {
        name: "Hot Air Balloon Safaris",
        description:
          "Experience the breathtaking beauty of the Mara from above with a dawn balloon flight followed by a champagne breakfast.",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop",
      },
      {
        name: "Big Five Viewing",
        description:
          "One of the best places in Africa to spot lion, leopard, elephant, buffalo, and rhino in their natural habitat.",
        image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2072&auto=format&fit=crop",
      },
    ],
    travelTips: [
      "Book accommodations well in advance, especially during migration season (July-October).",
      "Pack neutral-colored clothing (khaki, beige, olive) for game drives.",
      "Bring a good camera with a telephoto lens for wildlife photography.",
      "Don't forget binoculars, sun protection, and insect repellent.",
      "Respect wildlife by maintaining a safe distance and following your guide's instructions.",
      "Support local communities by purchasing authentic Maasai crafts.",
      "Consider adding a hot air balloon safari to your itinerary for a unique perspective.",
    ],
    tours: [
      {
        id: 1,
        title: "Masai Mara Safari Adventure",
        slug: "masai-mara-safari",
        duration: "5 Days",
        rating: 4.9,
        price: 1299,
      },
      {
        id: 2,
        title: "Great Migration Special",
        slug: "great-migration-special",
        duration: "7 Days",
        rating: 4.8,
        price: 1899,
      },
      {
        id: 3,
        title: "Masai Mara & Lake Nakuru Combo",
        slug: "masai-mara-lake-nakuru",
        duration: "6 Days",
        rating: 4.7,
        price: 1599,
      },
    ],
  },
]

const relatedDestinations = [
  {
    id: 2,
    name: "Amboseli National Park",
    slug: "amboseli",
    region: "Southern Kenya",
    image: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?q=80&w=2067&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Lake Nakuru",
    slug: "lake-nakuru",
    region: "Rift Valley",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Samburu National Reserve",
    slug: "samburu",
    region: "Northern Kenya",
    image: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?q=80&w=1999&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Tsavo National Parks",
    slug: "tsavo",
    region: "Southern Kenya",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2072&auto=format&fit=crop",
  },
]
