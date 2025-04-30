"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

interface BlogCommentSectionProps {
  postId: number
}

export default function BlogCommentSection({ postId }: BlogCommentSectionProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setName("")
      setEmail("")
      setComment("")
      toast({
        title: "Comment Submitted",
        description: "Your comment has been submitted and is awaiting moderation.",
      })
    }, 1000)
  }

  return (
    <div className="mt-12">
      <h2 className="mb-6 text-2xl font-bold">Comments ({comments.length})</h2>

      {comments.length > 0 ? (
        <div className="mb-8 space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="border-b pb-6">
              <div className="mb-2 flex items-start gap-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={
                      comment.avatar ||
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
                    }
                    alt={comment.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold">{comment.name}</h4>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{comment.date}</span>
                  </div>
                  <p className="mt-1 text-gray-700 dark:text-gray-300">{comment.text}</p>
                </div>
              </div>
              {comment.replies && comment.replies.length > 0 && (
                <div className="ml-12 mt-4 space-y-4">
                  {comment.replies.map((reply, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="relative h-8 w-8 overflow-hidden rounded-full">
                        <Image
                          src={
                            reply.avatar ||
                            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                          }
                          alt={reply.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold">{reply.name}</h4>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{reply.date}</span>
                        </div>
                        <p className="mt-1 text-gray-700 dark:text-gray-300">{reply.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="mb-6 text-gray-600 dark:text-gray-400">Be the first to comment on this post!</p>
      )}

      <div className="rounded-lg border p-6">
        <h3 className="mb-4 text-xl font-bold">Leave a Comment</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
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
                placeholder="Your email"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="comment" className="block text-sm font-medium">
              Comment
            </label>
            <Textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your comment here..."
              className="min-h-[120px]"
              required
            />
          </div>
          <Button type="submit" className="bg-primary hover:bg-primary/90" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Post Comment"}
          </Button>
        </form>
      </div>
    </div>
  )
}

// Sample data
const comments = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=100&width=100",
    date: "June 18, 2023",
    text: "This is such an informative article! I'm planning my first safari to Kenya next year and the Great Migration is definitely on my bucket list. Thanks for the tips on the best time to visit.",
    replies: [
      {
        name: "James Kimani",
        avatar: "/placeholder.svg?height=100&width=100",
        date: "June 18, 2023",
        text: "Thank you, Sarah! Feel free to reach out if you have any specific questions about planning your safari. We'd be happy to help make your experience unforgettable.",
      },
    ],
  },
  {
    id: 2,
    name: "David Chen",
    avatar: "/placeholder.svg?height=100&width=100",
    date: "June 17, 2023",
    text: "I witnessed the river crossing last year and it was absolutely breathtaking. Your article captures the experience perfectly. One tip I'd add is to bring a good zoom lens if you're into photography - it makes a huge difference!",
    replies: [],
  },
]
