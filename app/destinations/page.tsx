import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import PageBanner from "@/components/page-banner"

export default function DestinationsPage() {
  return (
    <>
      <PageBanner
        title="Explore Kenya's Destinations"
        subtitle="Discover the diverse landscapes and wildlife of Kenya"
        backgroundImage="https://images.unsplash.com/photo-1547970827-3b12de766bb4?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={
                    destination.image ||
                    "https://images.unsplash.com/photo-1547970827-3b12de766bb4?q=80&w=2070&auto=format&fit=crop"
                  }
                  alt={destination.name}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-2 flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-primary" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">{destination.region}</span>
                </div>
                <h3 className="mb-2 text-xl font-bold">{destination.name}</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">{destination.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">{destination.tourCount} tours available</span>
                  <Link href={`/destinations/${destination.slug}`}>
                    <Button variant="outline">Explore</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 rounded-lg bg-green-50 p-8 dark:bg-green-900/20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold">Can't Decide Where to Go?</h2>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Our travel experts can help you plan the perfect Kenyan adventure based on your interests, budget, and
              time.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Expert Advice
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

// Sample data
const destinations = [
  {
    id: 1,
    name: "Masai Mara National Reserve",
    slug: "masai-mara",
    region: "Rift Valley",
    image: "https://images.unsplash.com/photo-1547970827-3b12de766bb4?q=80&w=2070&auto=format&fit=crop",
    description:
      "Home to the Great Migration and abundant wildlife, the Masai Mara is Kenya's most famous safari destination.",
    tourCount: 12,
  },
  {
    id: 2,
    name: "Amboseli National Park",
    slug: "amboseli",
    region: "Southern Kenya",
    image: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?q=80&w=2067&auto=format&fit=crop",
    description:
      "Known for its large elephant herds and spectacular views of Mount Kilimanjaro across the border in Tanzania.",
    tourCount: 8,
  },
  {
    id: 3,
    name: "Diani Beach",
    slug: "diani-beach",
    region: "Coast",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2070&auto=format&fit=crop",
    description:
      "A tropical paradise with pristine white sands, crystal-clear waters, and vibrant marine life perfect for diving and snorkeling.",
    tourCount: 6,
  },
  {
    id: 4,
    name: "Mount Kenya",
    slug: "mount-kenya",
    region: "Central Kenya",
    image: "https://images.unsplash.com/photo-1573690706484-86f444f0b940?q=80&w=1974&auto=format&fit=crop",
    description:
      "Africa's second-highest mountain offers challenging climbs and beautiful hiking trails through diverse ecosystems.",
    tourCount: 5,
  },
  {
    id: 5,
    name: "Lake Nakuru National Park",
    slug: "lake-nakuru",
    region: "Rift Valley",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop",
    description:
      "Famous for its flamingos and rhino sanctuary, Lake Nakuru is a bird lover's paradise and conservation success story.",
    tourCount: 7,
  },
  {
    id: 6,
    name: "Tsavo National Parks",
    slug: "tsavo",
    region: "Southern Kenya",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2072&auto=format&fit=crop",
    description:
      "Kenya's largest national park is divided into Tsavo East and West, home to the famous 'red elephants' and diverse landscapes.",
    tourCount: 9,
  },
  {
    id: 7,
    name: "Lamu Island",
    slug: "lamu-island",
    region: "Coast",
    image: "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?q=80&w=2070&auto=format&fit=crop",
    description:
      "A UNESCO World Heritage site with well-preserved Swahili architecture, traditional dhows, and a car-free old town.",
    tourCount: 4,
  },
  {
    id: 8,
    name: "Samburu National Reserve",
    slug: "samburu",
    region: "Northern Kenya",
    image: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?q=80&w=1999&auto=format&fit=crop",
    description: "A remote, arid wilderness home to unique wildlife species known as the 'Samburu Special Five'.",
    tourCount: 5,
  },
  {
    id: 9,
    name: "Hell's Gate National Park",
    slug: "hells-gate",
    region: "Rift Valley",
    image: "https://images.unsplash.com/photo-1518737743670-3f217c4def4a?q=80&w=2070&auto=format&fit=crop",
    description:
      "One of the few parks where you can walk or cycle among wildlife, with impressive gorges and geothermal features.",
    tourCount: 3,
  },
]
