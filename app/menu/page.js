'use client'

import { motion } from 'framer-motion'
import { Gauge, Fuel, Coffee, Zap } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import SiteShell from '@/components/layout/SiteShell'

const MenuPage = () => {
  const menuCategories = [
    {
      category: 'Turbo Series',
      icon: <Zap className="w-8 h-8" />,
      description: 'High-octane espresso-based performance drinks',
      items: [
        { name: 'Turbo Espresso', description: 'Single origin, maximum acceleration', price: '$4.50', hp: '200 HP', image: '/images/espresso.jpg' },
        { name: 'Double Turbo Shot', description: 'Double the power, double the precision', price: '$6.00', hp: '400 HP', image: '/images/espresso.jpg' },
        { name: 'Turbo Americano', description: 'Extended range for the long haul', price: '$5.00', hp: '250 HP', image: '/images/espresso.jpg' },
      ]
    },
    {
      category: 'Luxury Cruiser Line',
      icon: <Gauge className="w-8 h-8" />,
      description: 'Smooth, refined milk-based masterpieces',
      items: [
        { name: 'Velvet Cappuccino', description: 'Smooth as a luxury ride', price: '$5.50', hp: '150 HP', image: '/images/latte-art.jpg' },
        { name: 'ARABA Signature Latte', description: 'Our flagship blend', price: '$5.00', hp: '180 HP', image: '/images/cappuccino.jpg' },
        { name: 'Caramel Macchiato GT', description: 'Sweet power for grand touring', price: '$6.00', hp: '200 HP', image: '/images/latte-art.jpg' },
        { name: 'Mocha Supercharged', description: 'Chocolate boost for extra power', price: '$6.50', hp: '220 HP', image: '/images/cappuccino.jpg' },
      ]
    },
    {
      category: 'Cold Press Highway',
      icon: <Coffee className="w-8 h-8" />,
      description: 'Refreshing cold brews for the open road',
      items: [
        { name: 'Cold Brew Cruiser', description: 'Smooth, cold-pressed energy', price: '$6.00', hp: '220 HP', image: '/images/cold-brew.jpg' },
        { name: 'Nitro Cold Brew', description: 'Nitrogen-injected performance', price: '$7.00', hp: '300 HP', image: '/images/cold-brew.jpg' },
        { name: 'Iced Latte Roadster', description: 'Convertible top-down refreshment', price: '$5.50', hp: '180 HP', image: '/images/cold-brew.jpg' },
      ]
    },
    {
      category: 'Specialty Pit Stops',
      icon: <Fuel className="w-8 h-8" />,
      description: 'Unique blends for the adventurous driver',
      items: [
        { name: 'Affogato Racing Edition', description: 'Espresso meets gelato on the track', price: '$7.50', hp: '250 HP', image: '/images/espresso.jpg' },
        { name: 'Cortado Compact', description: 'Small but mighty performance', price: '$4.00', hp: '160 HP', image: '/images/espresso.jpg' },
        { name: 'Flat White Formula', description: 'Australian precision engineering', price: '$5.50', hp: '190 HP', image: '/images/latte-art.jpg' },
      ]
    },
  ]

  return (
    <SiteShell className="bg-araba-beige">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-araba-copper to-araba-olive text-araba-cream overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="road-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="1"/>
                <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#road-grid)" />
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
              <Gauge className="w-10 h-10 text-araba-cream" />
              <span className="text-araba-cream font-semibold text-lg tracking-widest uppercase">Performance Lineup</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">Our Menu
              <br />
              <span className="text-araba-beige">Engineered for Performance</span>
            </h1>
            <p className="text-xl text-araba-beige leading-relaxed">
              Every drink calibrated for maximum flavor and energy output. Choose your fuel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Categories */}
      {menuCategories.map((category, catIndex) => (
        <section key={catIndex} className={`py-20 ${catIndex % 2 === 0 ? 'bg-araba-cream' : 'bg-araba-beige'}`}>
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-3 mb-4 text-araba-copper">
                {category.icon}
                <h2 className="text-4xl font-bold text-araba-olive">{category.category}</h2>
              </div>
              <p className="text-lg text-araba-charcoal max-w-2xl mx-auto">{category.description}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, index) => (
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
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-araba-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 smooth-transition"></div>
                      <div className="absolute top-4 right-4 bg-araba-copper text-white px-4 py-2 rounded-full font-bold shadow-lg">
                        {item.price}
                      </div>
                      <div className="absolute bottom-4 left-4 bg-araba-olive text-araba-cream px-3 py-1 rounded-lg text-sm font-bold flex items-center gap-2 opacity-0 group-hover:opacity-100 smooth-transition">
                        <Gauge className="w-4 h-4" />
                        {item.hp}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-araba-olive mb-2 group-hover:text-araba-copper smooth-transition">{item.name}</h3>
                      <p className="text-araba-charcoal mb-4 text-sm">{item.description}</p>
                      <Button className="w-full bg-araba-olive hover:bg-araba-copper smooth-transition">
                        <Fuel className="mr-2 w-4 h-4" />
                        Add to Order
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

    </SiteShell>
  )
}

export default MenuPage
