'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Mail, Send, Navigation as NavIcon } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import SiteShell from '@/components/layout/SiteShell'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <SiteShell className="bg-araba-beige">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-araba-olive to-araba-copper text-araba-cream overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="location-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="2" fill="none"/>
                <circle cx="50" cy="50" r="3" fill="white"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#location-pattern)" />
          </svg>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <MapPin className="w-10 h-10 text-araba-cream" />
              <span className="text-araba-cream font-semibold text-lg tracking-widest uppercase">Find Your Pit Stop</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">Get in Touch
              <br />
              <span className="text-araba-beige">Navigate to ARABA</span>
            </h1>
            <p className="text-xl text-araba-beige leading-relaxed">
              Whether you're looking for directions or have questions, we're here to help you on your journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 bg-araba-beige">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-8 text-center border-none shadow-lg hover:shadow-xl smooth-transition bg-white group h-full">
                <div className="w-20 h-20 rounded-full bg-araba-olive flex items-center justify-center mx-auto mb-6 group-hover:scale-110 smooth-transition">
                  <MapPin className="w-10 h-10 text-araba-cream" />
                </div>
                <h3 className="text-xl font-bold text-araba-olive mb-3">Our Station</h3>
                <p className="text-araba-charcoal leading-relaxed mb-4">
                  123 Premium Boulevard<br />
                  Coffee District, CD 10001<br />
                  Near Automotive Plaza
                </p>
                <Button className="bg-araba-copper hover:bg-araba-olive text-white">
                  <NavIcon className="mr-2 w-4 h-4" />
                  Get Directions
                </Button>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-8 text-center border-none shadow-lg hover:shadow-xl smooth-transition bg-white group h-full">
                <div className="w-20 h-20 rounded-full bg-araba-copper flex items-center justify-center mx-auto mb-6 group-hover:scale-110 smooth-transition">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-araba-olive mb-3">Operating Hours</h3>
                <p className="text-araba-charcoal leading-relaxed mb-2">
                  <strong>Monday - Friday</strong><br />
                  7:00 AM - 8:00 PM
                </p>
                <p className="text-araba-charcoal leading-relaxed mb-2">
                  <strong>Saturday - Sunday</strong><br />
                  8:00 AM - 9:00 PM
                </p>
                <p className="text-araba-copper font-bold mt-4">
                  Drive-In: 24/7 Service
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-8 text-center border-none shadow-lg hover:shadow-xl smooth-transition bg-white group h-full">
                <div className="w-20 h-20 rounded-full bg-araba-olive flex items-center justify-center mx-auto mb-6 group-hover:scale-110 smooth-transition">
                  <Phone className="w-10 h-10 text-araba-cream" />
                </div>
                <h3 className="text-xl font-bold text-araba-olive mb-3">Contact Us</h3>
                <p className="text-araba-charcoal leading-relaxed mb-2">
                  <strong>Phone</strong><br />
                  +1 (555) 123-4567
                </p>
                <p className="text-araba-charcoal leading-relaxed mb-2">
                  <strong>Email</strong><br />
                  hello@arabacoffee.com
                </p>
                <p className="text-araba-charcoal leading-relaxed">
                  <strong>Social</strong><br />
                  @arabacoffee
                </p>
              </Card>
            </motion.div>
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 border-none shadow-xl bg-white">
                <h3 className="text-3xl font-bold text-araba-olive mb-2">Send Us a Message</h3>
                <p className="text-araba-charcoal mb-6">Have questions? We're here to help fuel your journey.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold text-araba-olive mb-2 block">Name</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-araba-olive mb-2 block">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-araba-olive mb-2 block">Phone</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-araba-olive mb-2 block">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      rows={5}
                      className="w-full"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-araba-olive hover:bg-araba-copper text-white text-lg py-6">
                    <Send className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl h-full min-h-[600px] bg-araba-cream relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-araba-beige to-araba-cream">
                  <div className="text-center p-8">
                    <MapPin className="w-24 h-24 text-araba-olive mx-auto mb-6" />
                    <h3 className="text-3xl font-bold text-araba-olive mb-4">Find Us Here</h3>
                    <p className="text-araba-charcoal text-lg mb-6">123 Premium Boulevard<br />Coffee District, CD 10001</p>
                    <Button className="bg-araba-copper hover:bg-araba-olive text-white text-lg">
                      <NavIcon className="mr-2" />
                      Open in Maps
                    </Button>
                  </div>
                  {/* Road grid decoration */}
                  <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="map-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <line x1="0" y1="50" x2="100" y2="50" stroke="#4B6535" strokeWidth="2"/>
                        <line x1="50" y1="0" x2="50" y2="100" stroke="#4B6535" strokeWidth="2"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#map-grid)" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </SiteShell>
  )
}

export default ContactPage
