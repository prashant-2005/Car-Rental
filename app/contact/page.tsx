"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Phone, Clock, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message Sent!",
      description: "We will get back to you as soon as possible.",
    })

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Contact us background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-4 text-5xl font-bold tracking-tight">Contact Us</h1>
          <p className="max-w-2xl text-xl">We're here to help you plan your perfect journey</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <MapPin className="h-8 w-8 text-orange-500" />
                <div>
                  <CardTitle>Our Location</CardTitle>
                  <CardDescription>Visit our office</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Raj Bussiness Park-3 Minal Residency
                  <br />
                  Bhopal, Madhya Pradesh 462041
                  <br />
                  India
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Phone className="h-8 w-8 text-orange-500" />
                <div>
                  <CardTitle>Phone & Email</CardTitle>
                  <CardDescription>Reach out directly</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">
                  <strong>Phone:</strong> +91 73899 00704
                </p>
                <p className="text-muted-foreground">
                  <strong>Email:</strong> info@cvtravels.com
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Clock className="h-8 w-8 text-orange-500" />
                <div>
                  <CardTitle>Business Hours</CardTitle>
                  <CardDescription>When we're available</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">
                  <strong>Monday-Friday:</strong> 10:00 AM - 7:00 PM
                </p>
                <p className="text-muted-foreground">
                  <strong>Saturday:</strong> 10:00 AM - 4:00 PM
                </p>
                <p className="text-muted-foreground">
                  <strong>Sunday:</strong> Closed
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91  555-123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Vacation Planning"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your travel plans..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>Processing...</>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="flex flex-col space-y-6">
              <h3 className="text-2xl font-bold">Our Location</h3>
              <div className="h-[400px] overflow-hidden rounded-lg">

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d735.5758091107027!2d77.46155737880237!3d23.27441970328459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c6b5622f87449%3A0x7f9fb1f3f0b4e80b!2sCV%20TOUR%20%26%20TRAVELS!5e1!3m2!1sen!2sin!4v1747202458409!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CV Tour & Travels Office Location"></iframe>

              </div>
              <div className="rounded-lg bg-background p-6 shadow-sm">
                <h4 className="mb-4 text-xl font-semibold">Getting Here</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      1
                    </span>
                    <span>20 minutes travel from Railway Station</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      2
                    </span>
                    <span>Ample parking available outside the building </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      3
                    </span>
                    <span>Located in the main commercial complex, 1st floor</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
          <div className="mx-auto grid max-w-3xl gap-6">
            {[
              {
                question: "How do I book a trip with CV Tour & Travels?",
                answer:
                  "You can book a trip by contacting us through our website, calling our office, or visiting us in person. Our travel consultants will guide you through the entire process.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major credit cards, bank transfers, and digital payment methods like PayPal and Google Pay. We also offer installment payment options for certain packages.",
              },
              {
                question: "Can I customize my travel package?",
                answer:
                  "We specialize in creating customized travel experiences. Just let us know your preferences, and our experts will tailor a package that meets your specific needs.",
              },
              {
                question: "What is your cancellation policy?",
                answer:
                  "Our cancellation policy varies depending on the type of booking and the time of cancellation. Generally, cancellations made 30 days or more before departure may be eligible for a full refund minus administrative fees.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
