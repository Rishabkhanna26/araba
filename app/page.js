'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { Coffee, ChevronRight, Gauge, Fuel, Navigation as NavIcon, Star, Quote, MapPin, Clock, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import SiteShell from '@/components/layout/SiteShell'

const App = () => {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  const coffeeMenu = [
    {
      name: 'Turbo Espresso',
      description: 'High-octane single shot. Precision-engineered for maximum acceleration.',
      price: '₹4.50',
      image: '/images/espresso.jpg',
      power: '200 HP'
    },
    {
      name: 'Velvet Cappuccino',
      description: 'Smooth as a luxury ride. Microfoam tuned to perfection.',
      price: '₹5.50',
      image: '/images/latte-art.jpg',
      power: '150 HP'
    },
    {
      name: 'ARABA Signature Latte',
      description: 'Our flagship blend. Caramel undertones for the long drive.',
      price: '₹5.00',
      image: '/images/cappuccino.jpg',
      power: '180 HP'
    },
    {
      name: 'Cold Brew Cruiser',
      description: 'Smooth, cold-pressed energy. Perfect for highway cruising.',
      price: '₹6.00',
      image: '/images/cold-brew.jpg',
      power: '220 HP'
    },
  ]

  const galleryImages = [
    '/images/cafe-interior.jpg',
    '/images/barista-work.jpg',
    '/images/premium-seating.jpg',
    '/images/latte-art.jpg',
    '/images/espresso.jpg',
    '/images/cappuccino.jpg',
  ]

  const testimonials = [
    {
      name: 'Marcus Rodriguez',
      role: 'Car Enthusiast',
      text: 'ARABA Coffee understands the art of precision. Every cup feels like shifting into the perfect gear.',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      role: 'Daily Commuter',
      text: 'The drive-in experience is seamless. My morning fuel stop before hitting the road. Absolutely top-tier.',
      rating: 5
    },
    {
      name: 'David Thompson',
      role: 'Coffee Connoisseur',
      text: 'Engineering excellence in every espresso. This is what happens when passion for coffee meets automotive precision.',
      rating: 5
    },
  ]

  return (
    <SiteShell className="bg-araba-beige overflow-hidden">

      {/* Hero Section */}
      <motion.section
        style={{ opacity, scale }}
        className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 sm:pt-28 md:pt-32"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-araba-charcoal/90 via-araba-charcoal/65 to-araba-olive/55 z-10"></div>
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-araba-charcoal/35 via-transparent to-araba-copper/10" />
          <img
            src="/images/premium-seating.jpg"
            alt="Premium Cafe Interior"
            className="w-full h-full object-cover"
          />
          {/* Floating Light Trails */}
          <div className="light-streak" style={{ animationDelay: '0s', top: '20%' }}></div>
          <div className="light-streak" style={{ animationDelay: '1.5s', top: '50%' }}></div>
          <div className="light-streak" style={{ animationDelay: '3s', top: '70%' }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 z-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-araba-copper/40 bg-araba-charcoal/70 px-4 py-2">
                <Gauge className="h-4 w-4 text-araba-copper" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-araba-beige">Cafe Culture x Car Culture</span>
              </div>

              <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-araba-cream sm:text-5xl md:text-7xl lg:text-8xl">
                Handcrafted Coffee
                <br />
                <span className="accent-italic text-araba-copper">Built With Performance Soul.</span>
              </h1>
              <p className="mb-9 max-w-2xl text-base leading-relaxed text-araba-beige sm:text-lg md:text-xl">
                A premium pit stop for people who love clean brews, clean machines, and clean design.
                Every cup is tuned with precision and served with cafe elegance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:items-center rounded-2xl bg-araba-charcoal/60 p-3 w-fit">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                  <Button asChild size="lg" className="bg-araba-copper hover:bg-araba-olive text-white text-base sm:text-lg px-7 sm:px-10 py-6 sm:py-7 rounded-full smooth-transition shadow-2xl w-56 sm:w-auto">
                    <Link href="/menu">
                      <Coffee className="mr-2" />
                      Explore Menu
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                  <Button asChild size="lg" variant="outline" className="bg-araba-cream/95 border-2 border-araba-cream text-araba-olive hover:bg-araba-cream hover:text-araba-charcoal text-base sm:text-lg px-7 sm:px-10 py-6 sm:py-7 rounded-full smooth-transition shadow-2xl w-56 sm:w-auto">
                    <Link href="/experience">
                      <NavIcon className="mr-2" />
                      Drive-In Flow
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="lg:justify-self-end"
            >
              <div className="grid grid-cols-2 gap-4 rounded-2xl border border-araba-cream/20 bg-araba-charcoal/65 p-4 max-w-md ml-auto">
                <div className="rounded-xl bg-araba-cream/95 p-4">
                  <p className="text-xs uppercase tracking-[0.12em] text-araba-charcoal/70">Signature</p>
                  <p className="mt-2 text-xl font-bold text-araba-olive">Turbo Espresso</p>
                </div>
                <div className="rounded-xl bg-araba-copper p-4">
                  <p className="text-xs uppercase tracking-[0.12em] text-white/85">Service Time</p>
                  <p className="mt-2 text-xl font-bold text-white">~2 mins</p>
                </div>
                <div className="col-span-2 rounded-xl border border-araba-copper/30 bg-araba-charcoal/55 p-4">
                  <p className="text-xs uppercase tracking-[0.12em] text-araba-beige/80">Owner's Note</p>
                  <p className="mt-2 text-sm leading-relaxed text-araba-cream/90">
                    Designed for coffee lovers who appreciate the same details they look for in a great car.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Curved Divider */}
        <div className="curve-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-araba-beige"></path>
          </svg>
        </div>
      </motion.section>

      {/* About/Story Section */}
      <section id="about" className="py-16 sm:py-20 md:py-24 bg-araba-beige relative">
        {/* Top Curved Divider */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-araba-beige"></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Fuel className="w-8 h-8 text-araba-copper" />
                <span className="text-araba-copper font-semibold text-sm tracking-widest uppercase">Fuel Your Journey</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-araba-olive mb-6">
                Engineered with
                <br />
                <span className="text-araba-copper">Precision & Passion</span>
              </h2>
              <p className="text-lg text-araba-charcoal leading-relaxed mb-6">
                Born from a passion for both premium coffee and automotive excellence, 
                ARABA Coffee represents the perfect fusion of two worlds. Every cup is 
                crafted with the same precision and attention to detail as a finely-tuned performance engine.
              </p>
              <p className="text-lg text-araba-charcoal leading-relaxed mb-8">
                Our master baristas approach each brew like automotive engineers-calibrating 
                extraction times, monitoring pressure gauges, and ensuring every pour is executed 
                with mechanical precision. This is coffee at peak performance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-araba-copper mb-2">10+</div>
                  <div className="text-sm text-araba-charcoal">Years on Track</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-araba-copper mb-2">50K+</div>
                  <div className="text-sm text-araba-charcoal">Miles Driven</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-araba-copper mb-2">100%</div>
                  <div className="text-sm text-araba-charcoal">Premium Grade</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/images/cafe-interior.jpg"
                alt="Cafe Ambiance"
                className="rounded-3xl shadow-2xl"
              />
              {/* Speedometer-inspired Circle Overlay */}
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-araba-cream rounded-full shadow-2xl p-4">
                <svg viewBox="0 0 160 160" className="transform -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="#E8DFD4"
                    strokeWidth="10"
                    fill="none"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="#B57A4B"
                    strokeWidth="10"
                    fill="none"
                    className="gauge-circle"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <Gauge className="w-8 h-8 text-araba-olive mb-1" />
                  <span className="text-xs text-araba-charcoal font-bold">TOP SPEED</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coffee Menu Section */}
      <section id="menu" className="py-16 sm:py-20 md:py-24 bg-araba-cream relative overflow-hidden">
        {/* Road Lines Background */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="road-lines" x="0" y="0" width="200" height="100" patternUnits="userSpaceOnUse">
                <line x1="0" y1="50" x2="200" y2="50" stroke="#4B6535" strokeWidth="4" strokeDasharray="20,10"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#road-lines)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Gauge className="w-8 h-8 text-araba-copper" />
              <span className="text-araba-copper font-semibold text-sm tracking-widest uppercase">Performance Lineup</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-araba-olive mb-4">Our Signature Blends</h2>
            <p className="text-lg text-araba-charcoal max-w-2xl mx-auto">
              Each blend engineered for maximum performance and unforgettable flavor
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coffeeMenu.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl smooth-transition bg-white">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-araba-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 smooth-transition"></div>
                    <div className="absolute top-4 right-4 bg-araba-copper text-white px-4 py-2 rounded-full font-bold shadow-lg">
                      {item.price}
                    </div>
                    {/* Horsepower Badge */}
                    <div className="absolute bottom-4 left-4 bg-araba-olive text-araba-cream px-3 py-1 rounded-lg text-sm font-bold flex items-center gap-2 opacity-0 group-hover:opacity-100 smooth-transition">
                      <Gauge className="w-4 h-4" />
                      {item.power}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-araba-olive mb-2 group-hover:text-araba-copper smooth-transition">{item.name}</h3>
                    <p className="text-araba-charcoal mb-4">{item.description}</p>
                    <Button className="w-full bg-araba-olive hover:bg-araba-copper smooth-transition group-hover:shadow-lg">
                      <Fuel className="mr-2 w-4 h-4" />
                      Fuel Up Now
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Drive-In Experience Section */}
      <section id="experience" className="py-16 sm:py-20 md:py-24 bg-araba-olive text-araba-cream relative overflow-hidden">
        {/* Road Line Graphics */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,100 Q400,50 800,100 T1600,100" stroke="#F7F3ED" strokeWidth="3" fill="none" strokeDasharray="20,10"/>
            <path d="M0,200 Q400,150 800,200 T1600,200" stroke="#F7F3ED" strokeWidth="3" fill="none" strokeDasharray="20,10"/>
            <path d="M0,300 Q400,250 800,300 T1600,300" stroke="#F7F3ED" strokeWidth="3" fill="none" strokeDasharray="20,10"/>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <NavIcon className="w-8 h-8 text-araba-copper" />
                <span className="text-araba-copper font-semibold text-sm tracking-widest uppercase">Fast Lane Service</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Drive-In Coffee
                <br />
                <span className="text-araba-copper">Experience</span>
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The perfect pit stop for coffee enthusiasts on the move. Our drive-in 
                service delivers premium coffee with the speed and efficiency of a 
                Formula 1 pit crew-without compromising on quality.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Order ahead, drive through, and experience seamless service. Your coffee 
                journey starts at full throttle.
              </p>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center gap-4 bg-araba-cream/10 p-4 rounded-xl backdrop-blur-sm"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-14 h-14 rounded-full bg-araba-copper flex items-center justify-center flex-shrink-0">
                    <Coffee className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-lg font-bold block">Quick Order</span>
                    <span className="text-sm text-araba-beige">Place order in 30 seconds</span>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-4 bg-araba-cream/10 p-4 rounded-xl backdrop-blur-sm"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-14 h-14 rounded-full bg-araba-copper flex items-center justify-center flex-shrink-0">
                    <Gauge className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-lg font-bold block">Precision Timing</span>
                    <span className="text-sm text-araba-beige">Ready in under 2 minutes</span>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-4 bg-araba-cream/10 p-4 rounded-xl backdrop-blur-sm"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-14 h-14 rounded-full bg-araba-copper flex items-center justify-center flex-shrink-0">
                    <ChevronRight className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-lg font-bold block">Smooth Exit</span>
                    <span className="text-sm text-araba-beige">Drive off with perfection</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Enhanced Speedometer Graphic */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-araba-cream/20 rounded-full blur-3xl"></div>
                <svg viewBox="0 0 240 240" className="w-full h-full relative z-10">
                  {/* Outer Ring */}
                  <circle
                    cx="120"
                    cy="120"
                    r="110"
                    stroke="#F7F3ED"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.3"
                  />
                  {/* Speed Marks */}
                  {[...Array(12)].map((_, i) => {
                    const angle = (i * 30 - 90) * (Math.PI / 180)
                    const x1 = 120 + 100 * Math.cos(angle)
                    const y1 = 120 + 100 * Math.sin(angle)
                    const x2 = 120 + 90 * Math.cos(angle)
                    const y2 = 120 + 90 * Math.sin(angle)
                    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#B57A4B" strokeWidth="3" />
                  })}
                  {/* Active Arc */}
                  <circle
                    cx="120"
                    cy="120"
                    r="85"
                    stroke="#B57A4B"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray="530"
                    strokeDashoffset="130"
                    className="transform -rotate-90 origin-center"
                    strokeLinecap="round"
                  />
                  {/* Center Circle */}
                  <circle
                    cx="120"
                    cy="120"
                    r="60"
                    fill="#F7F3ED"
                    opacity="0.95"
                  />
                  <text
                    x="120"
                    y="110"
                    textAnchor="middle"
                    className="text-3xl font-bold fill-araba-olive"
                  >
                    ARABA
                  </text>
                  <text
                    x="120"
                    y="135"
                    textAnchor="middle"
                    className="text-base fill-araba-copper font-semibold"
                  >
                    DRIVE-IN
                  </text>
                </svg>
                {/* Floating Icons */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-10 right-10 w-16 h-16 bg-araba-copper rounded-full flex items-center justify-center shadow-2xl"
                >
                  <Fuel className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-araba-beige">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Coffee className="w-8 h-8 text-araba-copper" />
              <span className="text-araba-copper font-semibold text-sm tracking-widest uppercase">Visual Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-araba-olive mb-4">Gallery</h2>
            <p className="text-lg text-araba-charcoal max-w-2xl mx-auto">
              Take a visual drive through our Cafe experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px] sm:auto-rows-[240px]">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className={`relative overflow-hidden rounded-2xl shadow-lg cursor-pointer ${
                  index === 0 ? 'sm:col-span-2 md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className={`w-full object-cover smooth-transition ${
                    index === 0 ? 'h-full min-h-[320px] sm:min-h-[420px]' : 'h-full'
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-araba-charcoal/70 to-transparent opacity-0 hover:opacity-100 smooth-transition flex items-end p-6">
                  <span className="text-white font-semibold text-lg">ARABA Collection</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-araba-cream">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Star className="w-8 h-8 text-araba-copper fill-araba-copper" />
              <span className="text-araba-copper font-semibold text-sm tracking-widest uppercase">Driver Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-araba-olive mb-4">What Our Drivers Say</h2>
            <p className="text-lg text-araba-charcoal max-w-2xl mx-auto">
              Real feedback from coffee enthusiasts on the fast lane
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 border-none shadow-lg hover:shadow-xl smooth-transition bg-white relative">
                  <Quote className="w-12 h-12 text-araba-copper/20 absolute top-6 right-6" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-araba-copper fill-araba-copper" />
                    ))}
                  </div>
                  <p className="text-araba-charcoal mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-araba-olive flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-araba-olive">{testimonial.name}</div>
                      <div className="text-sm text-araba-charcoal/70">{testimonial.role}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 md:py-24 bg-araba-beige">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <MapPin className="w-8 h-8 text-araba-copper" />
              <span className="text-araba-copper font-semibold text-sm tracking-widest uppercase">Find Your Pit Stop</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-araba-olive mb-4">Visit Our Station</h2>
            <p className="text-lg text-araba-charcoal max-w-2xl mx-auto">
              Navigate to ARABA Coffee and experience the drive
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-8 text-center border-none shadow-lg hover:shadow-xl smooth-transition bg-white group">
                <div className="w-20 h-20 rounded-full bg-araba-olive flex items-center justify-center mx-auto mb-6 group-hover:scale-110 smooth-transition">
                  <MapPin className="w-10 h-10 text-araba-cream" />
                </div>
                <h3 className="text-xl font-bold text-araba-olive mb-3">Our Location</h3>
                <p className="text-araba-charcoal leading-relaxed">123 Premium Boulevard<br />Coffee District, CD 10001<br />Near Automotive Plaza</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-8 text-center border-none shadow-lg hover:shadow-xl smooth-transition bg-white group">
                <div className="w-20 h-20 rounded-full bg-araba-copper flex items-center justify-center mx-auto mb-6 group-hover:scale-110 smooth-transition">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-araba-olive mb-3">Operating Hours</h3>
                <p className="text-araba-charcoal leading-relaxed">Mon - Fri: 7AM - 8PM<br />Sat - Sun: 8AM - 9PM<br />Drive-In: Always Open</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-8 text-center border-none shadow-lg hover:shadow-xl smooth-transition bg-white group">
                <div className="w-20 h-20 rounded-full bg-araba-olive flex items-center justify-center mx-auto mb-6 group-hover:scale-110 smooth-transition">
                  <Phone className="w-10 h-10 text-araba-cream" />
                </div>
                <h3 className="text-xl font-bold text-araba-olive mb-3">Contact Us</h3>
                <p className="text-araba-charcoal leading-relaxed">+1 (555) 123-4567<br />hello@arabacoffee.com<br />@arabacoffee</p>
              </Card>
            </motion.div>
          </div>

          {/* Embedded Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl h-[22rem] sm:h-96 bg-araba-cream relative"
          >
            {/* Map Placeholder with Road Pattern */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-araba-beige to-araba-cream">
              <div className="text-center">
                <MapPin className="w-20 h-20 text-araba-olive mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-araba-olive mb-2">Find Us Here</h3>
                <p className="text-araba-charcoal mb-6">123 Premium Boulevard, Coffee District</p>
                <Button className="bg-araba-copper hover:bg-araba-olive text-white">
                  <NavIcon className="mr-2" />
                  Get Directions
                </Button>
              </div>
              {/* Road line decoration */}
              <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="map-roads" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="50" x2="100" y2="50" stroke="#4B6535" strokeWidth="2"/>
                    <line x1="50" y1="0" x2="50" y2="100" stroke="#4B6535" strokeWidth="2"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#map-roads)" />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

    </SiteShell>
  )
}

export default App


