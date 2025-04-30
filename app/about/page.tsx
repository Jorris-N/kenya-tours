import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageBanner from "@/components/page-banner"

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Safari Explorers"
        subtitle="Your trusted partner for authentic Kenyan safari experiences"
        backgroundImage="https://images.unsplash.com/photo-1504432842672-1a79f78e4084?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="mb-16 grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Our Story</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Founded in 2005 by a team of passionate Kenyan wildlife experts and tourism professionals, Safari
              Explorers was born out of a deep love for Kenya's natural beauty and a desire to share it with the world.
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              What began as a small operation with just two safari vehicles and a handful of dedicated guides has grown
              into one of Kenya's most respected tour operators, known for our commitment to authentic experiences,
              sustainable tourism practices, and exceptional customer service.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Today, we proudly serve thousands of visitors each year, helping them create unforgettable memories while
              ensuring that Kenya's wildlife and communities thrive for generations to come.
            </p>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop"
              alt="Safari Explorers Team"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold">Our Mission & Values</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">What drives us every day</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
              <h3 className="mb-4 text-xl font-bold text-primary">Authentic Experiences</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We believe in showcasing the real Kenya, beyond the typical tourist routes. Our tours are designed to
                provide immersive, authentic experiences that connect visitors with the land, wildlife, and people of
                Kenya.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
              <h3 className="mb-4 text-xl font-bold text-primary">Sustainable Tourism</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We are committed to environmentally responsible practices that minimize our ecological footprint and
                contribute to conservation efforts. We work closely with national parks, wildlife reserves, and local
                communities to ensure our operations support rather than harm Kenya's natural heritage.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
              <h3 className="mb-4 text-xl font-bold text-primary">Community Empowerment</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We believe tourism should benefit local communities. We hire locally, support community-based tourism
                initiatives, and contribute a portion of our profits to education and healthcare projects in the areas
                where we operate.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold">Meet Our Team</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              The passionate experts behind your unforgettable experiences
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center">
                <div className="mb-4 aspect-square overflow-hidden rounded-full">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="mb-2 text-primary">{member.role}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold">Our Certifications & Partnerships</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">We're proud to be recognized by these organizations</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {certifications.map((cert) => (
              <div key={cert.id} className="text-center">
                <div className="mb-2 h-20 w-40">
                  <Image
                    src={cert.logo || "/placeholder.svg"}
                    alt={cert.name}
                    width={160}
                    height={80}
                    className="h-full w-full object-contain"
                  />
                </div>
                <p className="text-sm font-medium">{cert.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-green-50 p-8 dark:bg-green-900/20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold">Ready to Explore Kenya with Us?</h2>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Join us for an unforgettable adventure through Kenya's most breathtaking landscapes and encounter
              incredible wildlife up close.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/tours">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Browse Our Tours
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// Sample data
const teamMembers = [
  {
    id: 1,
    name: "James Kimani",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
    bio: "Wildlife biologist turned entrepreneur with over 20 years of experience in Kenyan tourism.",
  },
  {
    id: 2,
    name: "Aisha Omondi",
    role: "Head Safari Guide",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop",
    bio: "Certified guide with expert knowledge of Kenya's wildlife and ecosystems.",
  },
  {
    id: 3,
    name: "Daniel Mwangi",
    role: "Operations Manager",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1974&auto=format&fit=crop",
    bio: "Ensures every safari runs smoothly from start to finish with meticulous attention to detail.",
  },
  {
    id: 4,
    name: "Grace Wanjiku",
    role: "Customer Experience Director",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=2070&auto=format&fit=crop",
    bio: "Dedicated to creating personalized, memorable experiences for every client.",
  },
]

const certifications = [
  {
    id: 1,
    name: "Kenya Tourism Board",
    logo: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2072&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Eco Tourism Kenya",
    logo: "https://images.unsplash.com/photo-1547970827-3b12de766bb4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Kenya Association of Tour Operators",
    logo: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?q=80&w=2067&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Kenya Wildlife Service Partner",
    logo: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop",
  },
]
