import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold">Safari Explorers</h3>
            <p className="mb-4 text-muted-foreground">
              Discover the magic of Kenya with our expertly guided tours. Experience wildlife, landscapes, and culture
              like never before.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/tours" className="text-muted-foreground hover:text-primary">
                  Tours
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-muted-foreground hover:text-primary">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold">Popular Tours</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tours/masai-mara-safari" className="text-muted-foreground hover:text-primary">
                  Masai Mara Safari
                </Link>
              </li>
              <li>
                <Link href="/tours/amboseli-national-park" className="text-muted-foreground hover:text-primary">
                  Amboseli National Park
                </Link>
              </li>
              <li>
                <Link href="/tours/tsavo-east-west" className="text-muted-foreground hover:text-primary">
                  Tsavo East & West
                </Link>
              </li>
              <li>
                <Link href="/tours/lake-nakuru" className="text-muted-foreground hover:text-primary">
                  Lake Nakuru
                </Link>
              </li>
              <li>
                <Link href="/tours/diani-beach" className="text-muted-foreground hover:text-primary">
                  Diani Beach Getaway
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">123 Safari Road, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">+254 123 456 789</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">info@safariexplorers.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-muted-foreground">
            &copy; {new Date().getFullYear()} Safari Explorers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
