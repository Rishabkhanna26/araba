'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BadgeIndianRupee, Building2, CheckCircle2, MapPin, Phone, User } from 'lucide-react'
import SiteShell from '@/components/layout/SiteShell'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const benefits = [
  'Strong ARABA brand and cafe identity',
  'Menu, sourcing, and staff training support',
  'Store launch and marketing assistance',
  'Operations playbook and quality standards',
]

const FranchisePage = () => {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <SiteShell className="bg-araba-cream">
      <main className="pt-24 pb-16">
        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="overflow-hidden rounded-2xl border border-araba-olive/20 bg-gradient-to-br from-araba-olive to-araba-charcoal"
          >
            <div className="grid gap-8 p-7 text-araba-cream md:grid-cols-2 md:p-10">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-araba-beige/85">ARABA Franchise</p>
                <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Own an ARABA Coffee Outlet</h1>
                <p className="mt-4 max-w-xl text-araba-beige/95">
                  Start your franchise journey with a premium coffee brand. Share your details and our franchise team will contact you with investment and location options.
                </p>

                <div className="mt-7 space-y-3">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-araba-copper" />
                      <p>{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-araba-copper/40 bg-araba-cream/95 p-5 text-araba-charcoal sm:p-6">
                {submitted ? (
                  <div className="rounded-lg border border-araba-olive/20 bg-araba-beige p-5">
                    <h2 className="text-2xl font-bold text-araba-olive">Request Sent</h2>
                    <p className="mt-2 text-sm">
                      Thanks for your interest. Our franchise team will contact you soon.
                    </p>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={onSubmit}>
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="flex items-center gap-2"><User className="h-4 w-4" />Full Name</Label>
                      <Input id="fullName" placeholder="Enter your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2"><Phone className="h-4 w-4" />Phone Number</Label>
                      <Input id="phone" placeholder="+91" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city" className="flex items-center gap-2"><MapPin className="h-4 w-4" />Preferred City</Label>
                      <Input id="city" placeholder="City / Area" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget" className="flex items-center gap-2"><BadgeIndianRupee className="h-4 w-4" />Estimated Investment</Label>
                      <Input id="budget" placeholder="Example: 25-35 Lakhs" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience" className="flex items-center gap-2"><Building2 className="h-4 w-4" />Business Background</Label>
                      <Textarea id="experience" rows={4} placeholder="Tell us about your background and preferred franchise model" />
                    </div>
                    <Button type="submit" className="w-full bg-araba-olive text-araba-cream hover:bg-araba-copper">
                      Submit Franchise Request
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </SiteShell>
  )
}

export default FranchisePage
