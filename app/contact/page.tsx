"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import PageBanner from "@/components/page-banner"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setName("")
      setEmail("")
      setSubject("")
      setMessage("")
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you shortly.",
      })
    }, 1500)
  }

  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="We'd love to hear from you. Get in touch with our team."
        backgroundImage="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">Get In Touch</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Have questions about our tours, need help planning your trip, or want to make a booking? Fill out the
                form and our team will get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Full Name
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium">
                  Subject
                </label>
                <Select value={subject} onValueChange={setSubject} required>
                  <SelectTrigger id="subject">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="booking">Booking Information</SelectItem>
                    <SelectItem value="custom">Custom Tour Request</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your message"
                  className="min-h-[150px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          <div>
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="mr-3 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      123 Safari Road, Karen
                      <br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="mr-3 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600 dark:text-gray-400">+254 123 456 789</p>
                    <p className="text-gray-600 dark:text-gray-400">+254 987 654 321</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="mr-3 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600 dark:text-gray-400">info@safariexplorers.com</p>
                    <p className="text-gray-600 dark:text-gray-400">bookings@safariexplorers.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="mr-3 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Office Hours</p>
                    <p className="text-gray-600 dark:text-gray-400">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 dark:text-gray-400">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-600 dark:text-gray-400">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8 overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1547970827-3b12de766bb4?q=80&w=2070&auto=format&fit=crop"
                alt="Map"
                width={600}
                height={400}
                className="h-[400px] w-full object-cover"
              />
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold">What is the best time to visit Kenya for a safari?</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    The best time for wildlife viewing is during the dry seasons (June to October and January to
                    February) when animals gather around water sources.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold">Do I need a visa to visit Kenya?</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Most visitors require a visa to enter Kenya. You can apply online through the e-visa portal or get
                    one on arrival at major entry points.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold">What vaccinations do I need for Kenya?</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Yellow fever vaccination is required for travelers coming from countries with risk of yellow fever
                    transmission. Other recommended vaccinations include hepatitis A and B, typhoid, and rabies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
