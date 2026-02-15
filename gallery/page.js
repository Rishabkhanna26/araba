'use client'

import { motion } from 'framer-motion'
import { Camera, Coffee } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const GalleryPage = () => {
  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1636928837218-f2b56d5a7861', title: 'Luxury Café Interior', category: 'Ambiance' },
    { url: 'https://images.unsplash.com/photo-1746040891289-68931e9ec409', title: 'Barista at Work', category: 'Craftsmanship' },
    { url: 'https://images.unsplash.com/photo-1680946496238-5272d3c407fc', title: 'Premium Seating', category: 'Ambiance' },
    { url: 'https://images.unsplash.com/photo-1770349694645-c0bcaf544740', title: 'Perfect Latte Art', category: 'Coffee' },
    { url: 'https://images.unsplash.com/photo-1765180850178-8912d7688395', title: 'Signature Espresso', category: 'Coffee' },
    { url: 'https://images.unsplash.com/photo-1760687510983-68b5e2525bd4', title: 'Artisan Cappuccino', category: 'Coffee' },
    { url: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7', title: 'Cold Brew Special', category: 'Coffee' },
    { url: 'https://images.unsplash.com/photo-1636928837218-f2b56d5a7861', title: 'Cozy Corner', category: 'Ambiance' },
    { url: 'https://images.unsplash.com/photo-1746040891289-68931e9ec409', title: 'Coffee Roasting', category: 'Craftsmanship' },
  ]

  return (
    <div className="min-h-screen bg-araba-beige">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-araba-charcoal to-araba-olive text-araba-cream overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="camera-pattern" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
                <circle cx="75" cy="75" r="2" fill="white" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#camera-pattern)" />
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
              <Camera className="w-10 h-10 text-araba-copper" />
              <span className="text-araba-copper font-semibold text-lg tracking-widest uppercase">Visual Journey</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">Gallery
              <br />
              <span className="text-araba-copper">Capturing the Drive</span>
            </h1>
            <p className="text-xl text-araba-beige leading-relaxed">
              Take a visual tour through ARABA Coffee. Every moment engineered for perfection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-araba-beige">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className={`relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group ${
                  index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className={`w-full object-cover smooth-transition group-hover:scale-110 ${
                    index === 0 ? 'h-full min-h-[500px]' : 'h-80'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-araba-charcoal via-araba-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 smooth-transition flex flex-col justify-end p-6">
                  <span className="text-araba-copper text-sm font-semibold mb-1">{image.category}</span>
                  <span className="text-white font-bold text-xl">{image.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Info */}
      <section className="py-24 bg-araba-cream">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Coffee className="w-16 h-16 text-araba-copper mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-araba-olive mb-3">Coffee Art</h3>
              <p className="text-araba-charcoal">Every cup is a masterpiece. Precision-crafted with artistic flair.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Camera className="w-16 h-16 text-araba-copper mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-araba-olive mb-3">Ambiance</h3>
              <p className="text-araba-charcoal">Our space designed for comfort and inspiration. Where drivers relax.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Coffee className="w-16 h-16 text-araba-copper mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-araba-olive mb-3">Craftsmanship</h3>
              <p className="text-araba-charcoal">Behind every drink is a master barista engineering perfection.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default GalleryPage