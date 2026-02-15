'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-bold text-araba-olive tracking-wider cursor-pointer"
          >
            ARABA
          </motion.div>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/about" className="text-araba-charcoal hover:text-araba-olive smooth-transition font-medium">About</Link>
          <Link href="/menu" className="text-araba-charcoal hover:text-araba-olive smooth-transition font-medium">Menu</Link>
          <Link href="/experience" className="text-araba-charcoal hover:text-araba-olive smooth-transition font-medium">Drive-In</Link>
          <Link href="/gallery" className="text-araba-charcoal hover:text-araba-olive smooth-transition font-medium">Gallery</Link>
          <Link href="/contact" className="text-araba-charcoal hover:text-araba-olive smooth-transition font-medium">Contact</Link>
          <Button className="bg-araba-olive hover:bg-araba-copper text-araba-cream smooth-transition">
            Order Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-araba-olive"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-araba-cream border-t border-araba-olive/20"
        >
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            <Link href="/about" className="text-araba-charcoal hover:text-araba-olive smooth-transition font-medium py-2">About</Link>
            <Link href="/menu" className="text-araba-charcoal hover:text-araba-olive smooth-transition font-medium py-2">Menu</Link>
            <Link href="/experience" className="text-araba-charcoal hover:text-araba-olive smooth-transition font-medium py-2">Drive-In</Link>
            <Link href="/gallery" className="text-araba-charcoal hover:text-araba-olive smooth-transition font-medium py-2">Gallery</Link>
            <Link href="/contact" className="text-araba-charcoal hover:text-araba-olive smooth-transition font-medium py-2">Contact</Link>
            <Button className="bg-araba-olive hover:bg-araba-copper text-araba-cream smooth-transition w-full">
              Order Now
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navigation