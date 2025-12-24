"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { trackGoogleAdsConversion } from "@/components/google-ads"

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)

    // Track Google Ads conversion
    trackGoogleAdsConversion()

    // Reset form
    setFormData({ name: "", email: "", company: "", message: "" })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto bg-card border rounded-lg p-8 shadow-lg">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 mx-auto max-w-md lg:max-w-none"
          >
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">Send us a Message</h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project..."
                  rows={6}
                />
              </div>

              <Button type="submit" size="lg" className="w-full md:w-auto">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 md:space-y-8 mx-auto max-w-md lg:max-w-none"
          >
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">Contact Information</h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Prefer to reach out directly? Here are our contact details.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">📧</div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-sm md:text-base text-muted-foreground">hello@techstart.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-2xl">📞</div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-sm md:text-base text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-2xl">📍</div>
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    123 Innovation Drive<br />
                    Tech City, TC 12345<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-2xl">🕒</div>
                <div>
                  <h3 className="font-semibold">Business Hours</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold mb-3 md:mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {["🐦", "💼", "🐙", "🎥"].map((icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-muted rounded-full flex items-center justify-center cursor-pointer hover:bg-accent transition-colors"
                  >
                    {icon}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}