import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"
import NewsletterForm from "@/components/newsletter-form"
import PageBanner from "@/components/page-banner"

export default function BlogPage() {
  return (
    <>
      <PageBanner
        title="Safari Explorers Blog"
        subtitle="Travel tips, wildlife stories, and insights from our expert guides"
        backgroundImage="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="mb-12 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <div className="relative h-[400px] overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1547970827-3b12de766bb4?q=80&w=2070&auto=format&fit=crop"
                alt="Featured Blog Post"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <div className="mb-2 flex items-center gap-2">
                  <Badge className="bg-primary hover:bg-primary/90">Wildlife</Badge>
                  <span className="text-sm">
                    <Calendar className="mr-1 inline-block h-4 w-4" />
                    June 15, 2023
                  </span>
                </div>
                <h2 className="mb-2 text-2xl font-bold sm:text-3xl">
                  The Great Migration: Nature's Most Spectacular Show
                </h2>
                <p className="mb-4 max-w-2xl">
                  Witness the incredible journey of millions of wildebeest, zebras, and gazelles as they traverse the
                  Serengeti-Mara ecosystem in search of fresh grazing.
                </p>
                <Link href="/blog/great-migration">
                  <Button className="bg-primary hover:bg-primary/90">Read More</Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="rounded-xl bg-gray-50 p-6 dark:bg-gray-900">
              <h2 className="mb-4 text-xl font-bold">Categories</h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Link key={category.id} href={`/blog/category/${category.slug}`}>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                      {category.name}
                    </Badge>
                  </Link>
                ))}
              </div>
              <h2 className="mb-4 mt-8 text-xl font-bold">Popular Posts</h2>
              <div className="space-y-4">
                {popularPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="flex gap-3 group">
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium group-hover:text-primary">{post.title}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        <Calendar className="mr-1 inline-block h-3 w-3" />
                        {post.date}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Latest Articles</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={
                      post.image ||
                      "https://images.unsplash.com/photo-1547970827-3b12de766bb4?q=80&w=2070&auto=format&fit=crop"
                    }
                    alt={post.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <Badge variant="outline">{post.category}</Badge>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      <Calendar className="mr-1 inline-block h-3 w-3" />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{post.title}</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="relative mr-2 h-8 w-8 overflow-hidden rounded-full">
                        <Image
                          src={post.authorImage || "/placeholder.svg"}
                          alt={post.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-sm font-medium">{post.author}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>

        <div className="mt-16 rounded-lg bg-primary/10 dark:bg-primary/5 p-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold">Subscribe to Our Newsletter</h2>
            <p className="mb-6 text-muted-foreground">
              Get the latest travel tips, wildlife stories, and exclusive offers delivered to your inbox.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>
    </>
  )
}

// Sample data
const categories = [
  { id: 1, name: "Wildlife", slug: "wildlife" },
  { id: 2, name: "Travel Tips", slug: "travel-tips" },
  { id: 3, name: "Conservation", slug: "conservation" },
  { id: 4, name: "Culture", slug: "culture" },
  { id: 5, name: "Photography", slug: "photography" },
  { id: 6, name: "Adventure", slug: "adventure" },
]

const popularPosts = [
  {
    id: 1,
    title: "Top 10 Wildlife Photography Tips",
    slug: "wildlife-photography-tips",
    date: "May 20, 2023",
    image: "https://images.unsplash.com/photo-1520808663317-647b476a81b9?q=80&w=2073&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "What to Pack for Your Kenyan Safari",
    slug: "what-to-pack-safari",
    date: "April 15, 2023",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "The Big Five: Where to Find Them",
    slug: "big-five-locations",
    date: "March 8, 2023",
    image: "https://images.unsplash.com/photo-1547970827-3b12de766bb4?q=80&w=2070&auto=format&fit=crop",
  },
]

const blogPosts = [
  {
    id: 1,
    title: "The Great Migration: Nature's Most Spectacular Show",
    slug: "great-migration",
    excerpt:
      "Witness the incredible journey of millions of wildebeest, zebras, and gazelles as they traverse the Serengeti-Mara ecosystem.",
    date: "June 15, 2023",
    category: "Wildlife",
    image: "https://images.unsplash.com/photo-1547970827-3b12de766bb4?q=80&w=2070&auto=format&fit=crop",
    author: "James Kimani",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Essential Gear for Wildlife Photography in Kenya",
    slug: "wildlife-photography-gear",
    excerpt:
      "From cameras to lenses, learn what equipment you need to capture stunning wildlife photos on your Kenyan safari.",
    date: "June 10, 2023",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1520808663317-647b476a81b9?q=80&w=2073&auto=format&fit=crop",
    author: "Grace Wanjiku",
    authorImage: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Maasai Culture: Traditions and Modern Life",
    slug: "maasai-culture",
    excerpt:
      "Explore the rich cultural heritage of the Maasai people and how they balance tradition with contemporary challenges.",
    date: "June 5, 2023",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?q=80&w=2070&auto=format&fit=crop",
    author: "Daniel Mwangi",
    authorImage: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Kenya's Conservation Success Stories",
    slug: "conservation-success",
    excerpt:
      "Learn about the innovative conservation projects that are helping to protect Kenya's wildlife for future generations.",
    date: "May 28, 2023",
    category: "Conservation",
    image: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?q=80&w=2067&auto=format&fit=crop",
    author: "Aisha Omondi",
    authorImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Best Time to Visit Different Kenyan Parks",
    slug: "best-time-visit-parks",
    excerpt: "A seasonal guide to Kenya's national parks and reserves to help you plan the perfect safari experience.",
    date: "May 22, 2023",
    category: "Travel Tips",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2072&auto=format&fit=crop",
    author: "James Kimani",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Hiking Mount Kenya: Routes and Preparation",
    slug: "hiking-mount-kenya",
    excerpt:
      "Everything you need to know about climbing Africa's second-highest peak, from choosing a route to training and gear.",
    date: "May 15, 2023",
    category: "Adventure",
    image: "https://images.unsplash.com/photo-1573690706484-86f444f0b940?q=80&w=1974&auto=format&fit=crop",
    author: "Daniel Mwangi",
    authorImage: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1974&auto=format&fit=crop",
  },
]
