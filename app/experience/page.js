'use client'

import { motion } from 'framer-motion'
import { Navigation as NavIcon, Clock, Smartphone, Coffee, Gauge, CheckCircle, Zap } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const ExperiencePage = () => {
  const features = [
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Mobile Order Ahead',
      description: 'Place your order from anywhere. Your coffee starts brewing as you hit the road.'
    },
    {
      icon: <NavIcon className="w-12 h-12" />,
      title: 'GPS Navigation',
      description: 'Seamless directions to our drive-in lane. Never miss your exit.'
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: 'Under 2 Minutes',
      description: 'From arrival to departure in under 120 seconds. Faster than a pit stop.'
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: 'Quality Guaranteed',
      description: 'Speed without compromise. Every cup meets championship standards.'
    },
  ]

  const howItWorks = [
    {
      step: '01',
      title: 'Order & Navigate',
      description: 'Use our app to place your order. GPS guides you to our drive-in lane.'
    },
    {
      step: '02',
      title: 'Arrival Detected',
      description: 'Our system detects your arrival. Your order goes into production immediately.'
    },
    {
      step: '03',
      title: 'Quick Pickup',
      description: 'Drive up to the window. Your coffee is ready. No waiting.'
    },
    {
      step: '04',
      title: 'Back on the Road',
      description: 'Smooth exit. Resume your journey with premium fuel in hand.'
    },
  ]

  return (
    <div className="min-h-screen bg-araba-beige">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-araba-olive text-araba-cream overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,100 Q400,50 800,100 T1600,100" stroke="#F7F3ED" strokeWidth="3" fill="none" strokeDasharray="20,10"/>
            <path d="M0,200 Q400,150 800,200 T1600,200" stroke="#F7F3ED" strokeWidth="3" fill="none" strokeDasharray="20,10"/>
            <path d="M0,300 Q400,250 800,300 T1600,300" stroke="#F7F3ED" strokeWidth="3" fill="none" strokeDasharray="20,10"/>
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
              <Zap className="w-10 h-10 text-araba-copper" />
              <span className="text-araba-copper font-semibold text-lg tracking-widest uppercase">Fast Lane Service</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">Drive-In
              <br />
              <span className="text-araba-copper">Coffee Experience</span>
            </h1>
            <p className="text-xl text-araba-beige leading-relaxed mb-8">
              The perfect pit stop for drivers on the move. Premium coffee with Formula 1 speed.
            </p>
            <Button size="lg" className="bg-araba-copper hover:bg-araba-cream hover:text-araba-olive text-white text-lg px-10 py-7 rounded-full">
              <Smartphone className="mr-2" />
              Download App
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-araba-cream">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-araba-olive mb-4">Why ARABA Drive-In?</h2>
            <p className="text-lg text-araba-charcoal max-w-2xl mx-auto">
              Engineered for the modern driver who refuses to compromise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 text-center border-none shadow-lg hover:shadow-xl smooth-transition bg-white group h-full">
                  <div className="text-araba-copper mb-4 flex justify-center group-hover:scale-110 smooth-transition">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-araba-olive mb-3">{feature.title}</h3>
                  <p className="text-araba-charcoal">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-araba-beige">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Gauge className="w-8 h-8 text-araba-copper" />
              <span className="text-araba-copper font-semibold text-sm tracking-widest uppercase">The Process</span>
            </div>
            <h2 className="text-5xl font-bold text-araba-olive mb-4">How It Works</h2>
            <p className="text-lg text-araba-charcoal max-w-2xl mx-auto">
              Four simple steps to the perfect drive-in experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <Card className="p-8 border-none shadow-lg hover:shadow-xl smooth-transition bg-white relative overflow-hidden group">
                  <div className="text-8xl font-bold text-araba-copper/10 absolute -top-4 -right-4 group-hover:scale-110 smooth-transition">
                    {step.step}
                  </div>
                  <div className="relative z-10">
                    <div className="text-3xl font-bold text-araba-copper mb-3">{step.step}</div>
                    <h3 className="text-xl font-bold text-araba-olive mb-3">{step.title}</h3>
                    <p className="text-araba-charcoal">{step.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speedometer CTA */}
      <section className="py-24 bg-gradient-to-br from-araba-olive to-araba-charcoal text-araba-cream">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold mb-6">Ready to Hit
                <br />
                <span className="text-araba-copper">The Fast Lane?</span>
              </h2>
              <p className="text-lg leading-relaxed mb-8 text-araba-beige">
                Download the ARABA app today and experience coffee service at championship speed. Your morning commute just got a whole lot smoother.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-araba-copper hover:bg-araba-cream hover:text-araba-olive text-white">
                  <Smartphone className="mr-2" />
                  Download Now
                </Button>
                <Button size="lg" variant="outline" className="border-araba-cream text-araba-cream hover:bg-araba-cream hover:text-araba-olive">
                  <Coffee className="mr-2" />
                  View Menu
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-araba-copper/20 rounded-full blur-3xl"></div>
                <svg viewBox="0 0 240 240" className="w-full h-full relative z-10">
                  <circle cx="120" cy="120" r="110" stroke="#F7F3ED" strokeWidth="2" fill="none" opacity="0.3" />
                  {[...Array(12)].map((_, i) => {
                    const angle = (i * 30 - 90) * (Math.PI / 180)
                    const x1 = 120 + 100 * Math.cos(angle)
                    const y1 = 120 + 100 * Math.sin(angle)
                    const x2 = 120 + 90 * Math.cos(angle)
                    const y2 = 120 + 90 * Math.sin(angle)
                    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#B57A4B" strokeWidth="3" />
                  })}
                  <circle cx="120" cy="120" r="85" stroke="#B57A4B" strokeWidth="8" fill="none" strokeDasharray="530" strokeDashoffset="130" className="transform -rotate-90 origin-center" strokeLinecap="round" />
                  <circle cx="120" cy="120" r="60" fill="#F7F3ED" opacity="0.95" />
                  <text x="120" y="110" textAnchor="middle" className="text-3xl font-bold fill-araba-olive">ARABA</text>
                  <text x="120" y="135" textAnchor="middle" className="text-sm fill-araba-copper font-semibold">DRIVE-IN</text>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ExperiencePage