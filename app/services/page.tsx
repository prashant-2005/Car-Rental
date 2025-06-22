import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Plane, Hotel, Car, Umbrella, Map, Globe, Briefcase, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// service page 
export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Services background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-4 text-5xl font-bold tracking-tight">Our Services</h1>
          <p className="max-w-2xl text-xl">Comprehensive travel solutions tailored to your needs</p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">What We Offer</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Flight Bookings",
                description: "Domestic and international flight bookings at competitive prices",
                icon: <Plane className="h-10 w-10 text-orange-500" />,
              },
              {
                title: "Hotel Reservations",
                description: "Handpicked accommodations ranging from budget to luxury",
                icon: <Hotel className="h-10 w-10 text-orange-500" />,
              },
              {
                title: "Car Rentals",
                description: "Reliable car rental services worldwide with 24/7 support",
                icon: <Car className="h-10 w-10 text-orange-500" />,
              },
              {
                title: "Vacation Packages",
                description: "All-inclusive vacation packages to popular destinations",
                icon: <Umbrella className="h-10 w-10 text-orange-500" />,
              },
              {
                title: "Guided Tours",
                description: "Expert-led tours to help you explore destinations like a local",
                icon: <Map className="h-10 w-10 text-orange-500" />,
              },
              {
                title: "Visa Assistance",
                description: "Comprehensive visa application support for hassle-free travel",
                icon: <Globe className="h-10 w-10 text-orange-500" />,
              },
            ].map((service, index) => (
              <Card key={index} className="border-t-4 border-t-orange-500">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button asChild variant="ghost" className="p-0 hover:bg-transparent hover:text-orange-500">
                    <Link href="/contact">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">Specialized Travel Services</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Business Travel"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-orange-500" />
                  <CardTitle>Business Travel</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Our corporate travel solutions are designed to meet the unique needs of business travelers. We offer:
                </p>
                <ul className="list-inside list-disc space-y-2">
                  <li>Dedicated corporate travel managers</li>
                  <li>Expense management solutions</li>
                  <li>Priority booking and 24/7 support</li>
                  <li>Corporate rates with airlines and hotels</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link href="/contact">Inquire Now</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=600&width=800" alt="Group Travel" fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-orange-500" />
                  <CardTitle>Group Travel</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Planning a trip for a large group? Our group travel services make it easy and affordable:
                </p>
                <ul className="list-inside list-disc space-y-2">
                  <li>Special group rates for flights and accommodations</li>
                  <li>Customized itineraries for groups of all sizes</li>
                  <li>Coordination of activities and transportation</li>
                  <li>Dedicated group coordinator</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link href="/contact">Inquire Now</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">Our Service Process</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We discuss your travel preferences, budget, and expectations",
              },
              {
                step: "02",
                title: "Planning",
                description: "Our experts create a customized travel plan tailored to your needs",
              },
              {
                step: "03",
                title: "Booking",
                description: "We handle all bookings and reservations for a seamless experience",
              },
              {
                step: "04",
                title: "Support",
                description: "Enjoy your trip with our 24/7 support throughout your journey",
              },
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-2xl font-bold text-white">
                  {process.step}
                </div>
                <h3 className="mb-2 text-xl font-bold">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
                {index < 3 && (
                  <div className="absolute right-0 top-8 hidden h-[2px] w-1/2 bg-orange-500 md:block"></div>
                )}
                {index > 0 && <div className="absolute left-0 top-8 hidden h-[2px] w-1/2 bg-orange-500 md:block"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 py-16 text-white">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight">Ready to Plan Your Next Adventure?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Contact our team today to discuss your travel needs and let us create the perfect itinerary for you.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-orange-600"
          >
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
