'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Camera, Coffee } from 'lucide-react'
import SiteShell from '@/components/layout/SiteShell'

const galleryImages = [
  { url: '/images/cafe-interior.jpg', title: 'Luxury Cafe Interior', category: 'Ambiance', featured: true },
  { url: '/images/barista-work.jpg', title: 'Barista at Work', category: 'Craftsmanship' },
  { url: '/images/premium-seating.jpg', title: 'Premium Seating', category: 'Ambiance' },
  { url: '/images/latte-art.jpg', title: 'Perfect Latte Art', category: 'Coffee' },
  { url: '/images/espresso.jpg', title: 'Signature Espresso', category: 'Coffee' },
  { url: '/images/cappuccino.jpg', title: 'Artisan Cappuccino', category: 'Coffee' },
  { url: '/images/cold-brew.jpg', title: 'Cold Brew Special', category: 'Coffee' },
]

const GalleryPage = () => {
  const featured = galleryImages.find((img) => img.featured)
  const secondary = galleryImages.filter((img) => !img.featured)

  return (
    <SiteShell className="bg-araba-beige">
      <section className="relative overflow-hidden bg-gradient-to-br from-araba-charcoal to-araba-olive pb-16 pt-32 text-araba-cream">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="camera-pattern" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
                <circle cx="75" cy="75" r="2" fill="white" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#camera-pattern)" />
          </svg>
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-6 flex items-center justify-center gap-3">
              <Camera className="h-10 w-10 text-araba-copper" />
              <span className="text-lg font-semibold tracking-widest text-araba-copper uppercase">Visual Journey</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl md:text-7xl">
              Gallery
              <br />
              <span className="text-araba-copper accent-italic">Capturing the Drive</span>
            </h1>
            <p className="text-lg leading-relaxed text-araba-beige md:text-xl">
              A new curated showcase of ARABA moments, now optimized for mobile and powered by local assets.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-araba-beige py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-12">
            <motion.article
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl bg-araba-charcoal lg:col-span-8"
            >
              <div className="relative aspect-[16/10] w-full">
                <Image src={featured.url} alt={featured.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-araba-charcoal/85 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span className="mb-2 inline-block rounded-full bg-araba-copper px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase">
                  {featured.category}
                </span>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">{featured.title}</h2>
              </div>
            </motion.article>

            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
              {secondary.slice(0, 2).map((image, index) => (
                <motion.article
                  key={image.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group overflow-hidden rounded-3xl bg-white shadow-lg"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image src={image.url} alt={image.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 1024px) 50vw, 33vw" />
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-semibold tracking-wide text-araba-copper uppercase">{image.category}</p>
                    <p className="mt-1 text-lg font-semibold text-araba-olive">{image.title}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="mt-6 columns-1 gap-6 sm:columns-2 lg:columns-3">
            {secondary.slice(2).map((image, index) => (
              <motion.figure
                key={image.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="group mb-6 break-inside-avoid overflow-hidden rounded-2xl bg-white shadow-md"
              >
                <div className="relative h-64 w-full">
                  <Image src={image.url} alt={image.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" />
                </div>
                <figcaption className="p-4">
                  <p className="text-xs font-semibold tracking-wide text-araba-copper uppercase">{image.category}</p>
                  <p className="mt-1 font-semibold text-araba-olive">{image.title}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-araba-cream py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 text-center md:grid-cols-3">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Coffee className="mx-auto mb-4 h-16 w-16 text-araba-copper" />
              <h3 className="mb-3 text-2xl font-bold text-araba-olive">Coffee Art</h3>
              <p className="text-araba-charcoal">Every cup is a masterpiece. Precision-crafted with artistic flair.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <Camera className="mx-auto mb-4 h-16 w-16 text-araba-copper" />
              <h3 className="mb-3 text-2xl font-bold text-araba-olive">Ambiance</h3>
              <p className="text-araba-charcoal">Designed for comfort and inspiration, from sunrise commutes to evening stops.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <Coffee className="mx-auto mb-4 h-16 w-16 text-araba-copper" />
              <h3 className="mb-3 text-2xl font-bold text-araba-olive">Craftsmanship</h3>
              <p className="text-araba-charcoal">Behind every drink is a barista team tuned for consistent quality and speed.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}

export default GalleryPage
