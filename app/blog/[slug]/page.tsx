import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Tag, ArrowLeft, Share2, Bookmark } from "lucide-react"
import BlogCommentSection from "@/components/blog-comment-section"
import PageBanner from "@/components/page-banner"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // In a real app, you would fetch this data from a headless CMS
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center md:px-6">
        <h1 className="text-3xl font-bold">Blog Post Not Found</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400">The blog post you are looking for does not exist.</p>
        <Link href="/blog">
          <Button className="mt-6">View All Posts</Button>
        </Link>
      </div>
    )
  }

  return (
    <>
      <PageBanner
        title={post.title}
        subtitle={post.excerpt}
        backgroundImage={post.image || "/placeholder.svg?height=600&width=1200"}
      />

      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-primary hover:text-primary/90">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <article>
              <div className="mb-6">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <Badge className="bg-primary hover:bg-primary/90">{post.category}</Badge>
                  <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="mr-1 h-4 w-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <User className="mr-1 h-4 w-4" />
                    {post.author}
                  </span>
                </div>
              </div>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                {/* In a real app, this would be rich text content from a CMS */}
                <p>
                  The Great Migration is one of nature's most spectacular events, involving over 1.5 million wildebeest
                  and hundreds of thousands of events, involving over 1.5 million wildebeest and hundreds of thousands
                  of zebras and gazelles. This annual movement of wildlife between the Serengeti in Tanzania and the
                  Masai Mara in Kenya is driven by the search for fresh grazing and water.
                </p>

                <h2>When to See the Great Migration</h2>
                <p>
                  While the Great Migration is a year-round event as the herds move in a circular pattern across the
                  ecosystem, certain times of year offer more dramatic sightings:
                </p>
                <ul>
                  <li>
                    <strong>July to October:</strong> The herds are typically in the Masai Mara, and this is when the
                    famous river crossings occur.
                  </li>
                  <li>
                    <strong>December to March:</strong> The herds are in the southern Serengeti for calving season.
                  </li>
                  <li>
                    <strong>April to June:</strong> The herds begin their journey northward through the western and
                    central Serengeti.
                  </li>
                </ul>

                <h2>The River Crossings</h2>
                <p>
                  Perhaps the most dramatic part of the migration is when the herds cross the Mara River. These
                  crossings are fraught with danger as crocodiles lie in wait, and the steep riverbanks and strong
                  currents pose additional hazards. Yet, driven by instinct and the need to find fresh grazing, the
                  wildebeest plunge into the waters in their thousands.
                </p>

                <div className="my-8 overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1547970827-3b12de766bb4?q=80&w=2070&auto=format&fit=crop"
                    alt="Wildebeest crossing the Mara River"
                    width={800}
                    height={400}
                    className="h-auto w-full object-cover"
                  />
                  <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
                    Wildebeest crossing the Mara River during the Great Migration
                  </p>
                </div>

                <h2>Planning Your Migration Safari</h2>
                <p>
                  If witnessing the Great Migration is on your bucket list, here are some tips to help you plan your
                  safari:
                </p>
                <ol>
                  <li>
                    <strong>Book well in advance:</strong> Accommodations in prime viewing areas fill up quickly, often
                    a year or more ahead.
                  </li>
                  <li>
                    <strong>Be flexible:</strong> Nature doesn't follow a strict schedule, and the timing of the
                    migration can vary based on rainfall patterns.
                  </li>
                  <li>
                    <strong>Stay multiple days:</strong> River crossings don't happen every day, so plan to stay at
                    least 3-4 days to increase your chances.
                  </li>
                  <li>
                    <strong>Choose the right location:</strong> Work with experienced safari operators who know the best
                    locations for viewing based on the time of year.
                  </li>
                </ol>

                <h2>Conservation Challenges</h2>
                <p>
                  The Great Migration faces numerous threats, including habitat loss due to human population growth,
                  climate change affecting rainfall patterns, and infrastructure development that disrupts migration
                  routes. Supporting responsible tourism and conservation efforts is crucial to ensuring this
                  spectacular natural phenomenon continues for generations to come.
                </p>

                <h2>Experience the Migration with Safari Explorers</h2>
                <p>
                  At Safari Explorers, we offer specialized Great Migration safaris led by expert guides who understand
                  the patterns and behaviors of the migrating herds. Our camps and lodges are strategically located to
                  maximize your chances of witnessing this incredible spectacle while ensuring your comfort and safety.
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-b py-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Share:</span>
                  <button className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Save:</span>
                  <button className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <Bookmark className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="mb-4 text-2xl font-bold">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Link key={index} href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}>
                      <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                        <Tag className="mr-1 h-3 w-3" />
                        {tag}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <h2 className="mb-6 text-2xl font-bold">About the Author</h2>
                <div className="flex items-start gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src={
                        post.authorImage ||
                        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                      }
                      alt={post.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{post.author}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {post.authorBio ||
                        "Wildlife expert and safari guide with over 10 years of experience in the Masai Mara."}
                    </p>
                  </div>
                </div>
              </div>

              <BlogCommentSection postId={post.id} />
            </article>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-8">
              <div className="rounded-xl bg-gray-50 p-6 dark:bg-gray-900">
                <h2 className="mb-4 text-xl font-bold">Related Posts</h2>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="flex gap-3 group">
                      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                        <Image
                          src={
                            relatedPost.image ||
                            "https://images.unsplash.com/photo-1547970827-3b12de766bb4?q=80&w=2070&auto=format&fit=crop"
                          }
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-110"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium group-hover:text-primary">{relatedPost.title}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          <Calendar className="mr-1 inline-block h-3 w-3" />
                          {relatedPost.date}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

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
              </div>

              <div className="rounded-xl bg-green-50 p-6 dark:bg-green-900/20">
                <h2 className="mb-4 text-xl font-bold">Experience the Migration</h2>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  Ready to witness the Great Migration in person? Book our specialized safari package for the best
                  viewing opportunities.
                </p>
                <Link href="/tours/masai-mara-safari">
                  <Button className="w-full bg-primary hover:bg-primary/90">View Safari Package</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// Sample data - in a real app, this would come from a headless CMS
const blogPosts = [
  {
    id: 1,
    title: "The Great Migration: Nature's Most Spectacular Show",
    slug: "great-migration",
    excerpt:
      "Witness the incredible journey of millions of wildebeest, zebras, and gazelles as they traverse the Serengeti-Mara ecosystem in search of fresh grazing.",
    content: "Full content would be here...",
    date: "June 15, 2023",
    category: "Wildlife",
    image: "/placeholder.svg?height=500&width=900",
    author: "James Kimani",
    authorImage: "/placeholder.svg?height=100&width=100",
    authorBio: "Wildlife expert and safari guide with over 15 years of experience in the Masai Mara.",
    tags: ["Wildlife", "Great Migration", "Masai Mara", "Safari", "Conservation"],
  },
]

const relatedPosts = [
  {
    id: 2,
    title: "The Big Five: Where to Find Them",
    slug: "big-five-locations",
    date: "May 10, 2023",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    title: "Best Time to Visit the Masai Mara",
    slug: "best-time-masai-mara",
    date: "April 22, 2023",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    title: "Wildlife Photography Tips for Beginners",
    slug: "wildlife-photography-beginners",
    date: "March 15, 2023",
    image: "/placeholder.svg?height=100&width=100",
  },
]

const categories = [
  { id: 1, name: "Wildlife", slug: "wildlife" },
  { id: 2, name: "Travel Tips", slug: "travel-tips" },
  { id: 3, name: "Conservation", slug: "conservation" },
  { id: 4, name: "Culture", slug: "culture" },
  { id: 5, name: "Photography", slug: "photography" },
  { id: 6, name: "Adventure", slug: "adventure" },
]
