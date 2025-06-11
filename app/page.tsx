import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <div className="absolute inset-0">
          <Image
            src="/homePage.jpg?height=1080&width=1920"
            alt="Travel background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">CV Tour & Travels</h1>
          <p className="mb-8 max-w-2xl text-xl">
            Explore the world with comfort and luxury. Your journey begins with us.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Link href="/services">
                Explore Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white bg-transparent text-white hover:bg-white/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">Popular Destinations</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Maldives",
                description: "Crystal clear waters and white sandy beaches",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Switzerland",
                description: "Breathtaking mountains and scenic landscapes",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Thailand",
                description: "Rich culture and tropical paradise",
                image: "/placeholder.svg?height=400&width=600",
              },
            ].map((destination, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="mb-2 text-xl font-bold">{destination.title}</h3>
                  <p className="text-muted-foreground">{destination.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Why Choose CV Tour & Travels
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Expert Guidance",
                description: "Our travel experts ensure a seamless experience",
              },
              {
                title: "Best Prices",
                description: "Competitive pricing with no hidden charges",
              },
              {
                title: "Personalized Service",
                description: "Tailored travel plans to suit your preferences",
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock assistance throughout your journey",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-none">
                <CardContent className="p-6 text-center">
                  <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">What Our Clients Say</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                testimonial:
                  "CV Tour & Travels made our honeymoon absolutely perfect. Every detail was taken care of, and we could just relax and enjoy.",
              },
              {
                name: "Michael Chen",
                testimonial:
                  "I've been using their services for business travel for years. Their professionalism and attention to detail is unmatched.",
              },
              {
                name: "Priya Sharma",
                testimonial:
                  "Our family vacation was a dream come true. The itinerary was perfectly planned, and the accommodations were excellent.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-t-4 border-t-orange-500">
                <CardContent className="p-6">
                  <p className="mb-4 italic">"{testimonial.testimonial}"</p>
                  <p className="font-semibold">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 py-16 text-white">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Ready to Start Your Journey?</h2>
          <p className="mb-8 mx-auto max-w-2xl text-lg">
            Contact us today to plan your perfect getaway. Our travel experts are waiting to help you create memories
            that last a lifetime.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white bg-transparent text-white hover:bg-white hover:text-orange-600"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
