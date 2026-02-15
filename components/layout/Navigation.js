'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import BrandLogo from '@/components/brand/BrandLogo'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/menu', label: 'Menu' },
    { href: '/experience', label: 'Drive-In' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <motion.div whileHover={{ scale: 1.05 }}>
          <BrandLogo
            textClassName="hidden sm:inline"
            imageClassName="h-9 w-9 sm:h-11 sm:w-11"
          />
        </motion.div>

        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="text-araba-charcoal hover:text-araba-olive smooth-transition font-medium">
              {item.label}
            </Link>
          ))}
          <Button className="bg-araba-olive hover:bg-araba-copper text-araba-cream smooth-transition">
            Order Now
          </Button>
        </div>

        <button
          className="md:hidden rounded-lg p-2 text-araba-olive ring-1 ring-araba-olive/20"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-0 right-0 top-full md:hidden border-t border-araba-olive/20 bg-araba-cream/95 backdrop-blur-sm shadow-xl"
        >
          <div className="container mx-auto flex flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md px-2 py-2 text-araba-charcoal smooth-transition hover:bg-araba-olive/10 hover:text-araba-olive"
              >
                {item.label}
              </Link>
            ))}
            <Button
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full bg-araba-olive text-araba-cream smooth-transition hover:bg-araba-copper"
            >
              Order Now
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navigation
