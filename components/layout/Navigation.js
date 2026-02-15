'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import BrandLogo from '@/components/brand/BrandLogo'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
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
      className="fixed top-0 z-50 w-full px-3 py-3 sm:px-6"
    >
      <div
        className={`container mx-auto flex items-center justify-between rounded-2xl border px-4 py-3 shadow-xl backdrop-blur-md transition-all duration-300 ${
          isScrolled
            ? 'border-araba-copper/35 bg-araba-cream/92'
            : 'border-araba-cream/25 bg-araba-charcoal/45'
        }`}
      >
        <motion.div whileHover={{ scale: 1.05 }}>
          <BrandLogo
            textClassName="hidden sm:inline"
            imageClassName="h-9 w-9 sm:h-11 sm:w-11"
          />
        </motion.div>

        <div className="hidden md:flex items-center gap-2 rounded-xl bg-araba-cream/70 px-2 py-1">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-3 py-2 text-sm font-semibold smooth-transition ${
                pathname === item.href
                  ? 'bg-araba-olive text-araba-cream shadow'
                  : 'text-araba-charcoal hover:bg-araba-olive/10 hover:text-araba-olive'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button className="ml-1 bg-araba-copper text-white smooth-transition hover:bg-araba-olive">
            Order Now
          </Button>
        </div>

        <button
          className={`md:hidden rounded-lg p-2 ring-1 transition ${
            isScrolled
              ? 'text-araba-olive ring-araba-olive/20'
              : 'text-araba-cream ring-araba-cream/35'
          }`}
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
          className="absolute left-3 right-3 top-[calc(100%-2px)] md:hidden"
        >
          <div className="container mx-auto mt-2 flex flex-col gap-1 rounded-2xl border border-araba-copper/25 bg-araba-cream/95 px-4 py-4 shadow-xl backdrop-blur-sm sm:px-6">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-md px-2 py-2 smooth-transition ${
                  pathname === item.href
                    ? 'bg-araba-olive text-araba-cream'
                    : 'text-araba-charcoal hover:bg-araba-olive/10 hover:text-araba-olive'
                }`}
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
