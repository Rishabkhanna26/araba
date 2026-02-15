'use client'

import { motion } from 'framer-motion'
import { Fuel, Gauge, Award, Users, TrendingUp, Coffee } from 'lucide-react'
import { Card } from '@/components/ui/card'
import SiteShell from '@/components/layout/SiteShell'

const AboutPage = () => {
  const team = [
    {
      name: 'Alex Rivera',
      role: 'Master Engineer / Head Barista',
      description: 'Former automotive engineer turned coffee craftsman. 15 years of precision tuning.'
    },
    {
      name: 'Sarah Mitchell',
      role: 'Chief Experience Officer',
      description: 'Designing customer journeys as smooth as a luxury drive.'
    },
    {
      name: 'Marcus Chen',
      role: 'Quality Control Specialist',
      description: 'Ensures every cup meets peak performance standards.'
    },
  ]

  const values = [
    {
      icon: <Gauge className="w-12 h-12" />,
      title: 'Precision Engineering',
      description: 'Every cup calibrated to perfection with automotive precision.'
    },
    {
      icon: <Fuel className="w-12 h-12" />,
      title: 'High-Performance Fuel',
      description: 'Premium beans sourced globally for maximum energy output.'
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Continuous Innovation',
      description: 'Always pushing boundaries, like a supercar on the track.'
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Excellence Standard',
      description: 'Zero compromise on quality - championship-level coffee.'
    },
  ]

  return (
    <SiteShell className="bg-araba-beige">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-araba-olive to-araba-charcoal text-araba-cream overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="road-pattern" x="0" y="0" width="100" height="50" patternUnits="userSpaceOnUse">
                <line x1="0" y1="25" x2="100" y2="25" stroke="white" strokeWidth="2" strokeDasharray="10,5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#road-pattern)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Fuel className="w-10 h-10 text-araba-copper" />
              <span className="text-araba-copper font-semibold text-lg tracking-widest uppercase">Our Journey</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">Where Coffee
              <br />
              <span className="text-araba-copper">Meets Engineering</span>
            </h1>
            <p className="text-xl text-araba-beige leading-relaxed">
              Born from a passion for precision and a love for the open road, ARABA Coffee represents the perfect fusion of automotive excellence and artisan coffee craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-araba-cream">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/images/barista-work.jpg"
                alt="Coffee Preparation"
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-araba-olive mb-6">Our Origin Story</h2>
              <p className="text-lg text-araba-charcoal leading-relaxed mb-6">
                It started in a small garage workshop in 2015. Alex Rivera, a automotive engineer by day and coffee enthusiast by night, noticed something: the same precision required to tune a high-performance engine could elevate coffee to championship levels.
              </p>
              <p className="text-lg text-araba-charcoal leading-relaxed mb-6">
                Every extraction time, every pressure gauge reading, every temperature control-it all mattered. Just like in racing, milliseconds make the difference between good and extraordinary.
              </p>
              <p className="text-lg text-araba-charcoal leading-relaxed">
                Today, ARABA Coffee serves thousands of drivers daily, each cup engineered with the same obsessive attention to detail that goes into a finely-tuned race car.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-araba-beige">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-araba-olive mb-4">Our Core Values</h2>
            <p className="text-lg text-araba-charcoal max-w-2xl mx-auto">
              The principles that drive us forward, every single day
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 text-center border-none shadow-lg hover:shadow-xl smooth-transition bg-white group">
                  <div className="text-araba-copper mb-4 flex justify-center group-hover:scale-110 smooth-transition">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-araba-olive mb-3">{value.title}</h3>
                  <p className="text-araba-charcoal">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-araba-cream">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-8 h-8 text-araba-copper" />
              <span className="text-araba-copper font-semibold text-sm tracking-widest uppercase">Meet The Crew</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-araba-olive mb-4">Our Pit Crew</h2>
            <p className="text-lg text-araba-charcoal max-w-2xl mx-auto">
              The talented individuals who keep ARABA running at peak performance
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 text-center border-none shadow-lg hover:shadow-xl smooth-transition bg-white">
                  <div className="w-24 h-24 rounded-full bg-araba-olive flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-2xl font-bold text-araba-olive mb-2">{member.name}</h3>
                  <p className="text-araba-copper font-semibold mb-3">{member.role}</p>
                  <p className="text-araba-charcoal">{member.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-araba-olive text-araba-cream">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-araba-copper mb-2">10+</div>
              <div className="text-lg text-araba-beige">Years on the Track</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-araba-copper mb-2">50K+</div>
              <div className="text-lg text-araba-beige">Miles Driven with Us</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-araba-copper mb-2">100%</div>
              <div className="text-lg text-araba-beige">Premium Grade Beans</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-araba-copper mb-2">24/7</div>
              <div className="text-lg text-araba-beige">Drive-In Service</div>
            </motion.div>
          </div>
        </div>
      </section>

    </SiteShell>
  )
}

export default AboutPage
