import Image from "next/image"

import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <div className="absolute inset-0">
          <Image
            src="/about.jpg?height=800&width=1920"
            alt="About us background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-4 text-5xl font-bold tracking-tight">About Us</h1>
          <p className="max-w-2xl text-xl">Learn about our journey, mission, and the people behind CV Tour & Travels</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight">Our Story</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Founded in 2020, CV Tour & Travels began with a simple mission: to make travel accessible, enjoyable, and
              memorable for everyone. What started as a small office with just three employees has now grown into one of
              the most trusted travel agencies in the region.
            </p>
            <p className="text-lg text-muted-foreground">
              Over the years, we've helped thousands of travelers explore new destinations, experience different
              cultures, and create lasting memories. Our commitment to excellence and customer satisfaction has been the
              cornerstone of our success.
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Founder & CEO */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="relative h-[400px] overflow-hidden rounded-lg md:h-auto">
              <Image src="/placeholder.svg?height=600&width=600" alt="Founder & CEO" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight">Meet Our Founder & CEO</h2>
              <h3 className="mb-4 text-xl font-semibold">Suraj Prakash</h3>
              <p className="mb-6 text-muted-foreground">
                With over 8 years of experience in the travel industry, Suraj Prakash founded CV Tour & Travels with a
                vision to transform how people experience travel. His passion for exploring new cultures and
                destinations has been the driving force behind the company's innovative approach to travel planning.
              </p>
              <p className="text-muted-foreground">
                "Travel is more than just visiting new places; it's about creating experiences that enrich your life and
                broaden your perspective. At CV Tour & Travels, we're committed to making every journey special." -
                Suraj Prakash
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Our Values */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">Our Values</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Customer First",
                description:
                  "We prioritize our customers' needs and preferences, ensuring that every travel plan is tailored to provide the best experience.",
              },
              {
                title: "Excellence",
                description:
                  "We strive for excellence in everything we do, from planning the perfect itinerary to providing exceptional customer service.",
              },
              {
                title: "Integrity",
                description:
                  "We operate with honesty and transparency, building trust with our clients through clear communication and fair pricing.",
              },
            ].map((value, index) => (
              <div key={index} className="rounded-lg bg-background p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">Our Team</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Sumitra Awadhiya",
                position: "Operations Manager",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Amit Kumar",
                position: "Head of Customer Service",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Pooja Sharma",
                position: "Senior Travel Consultant",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Pawan Deo Yadav",
                position: "Marketing Director",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 relative h-48 w-48 overflow-hidden rounded-full">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
                <p className="text-muted-foreground">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
