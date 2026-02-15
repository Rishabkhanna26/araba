'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Coffee, Fuel, Navigation as NavIcon, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react'
import BrandLogo from '@/components/brand/BrandLogo'

const Footer = () => {
  return (
    <footer className="bg-araba-charcoal text-araba-cream py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#F7F3ED" strokeWidth="2" strokeDasharray="20,10"/>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="mb-4">
              <BrandLogo textClassName="text-araba-copper" imageClassName="ring-araba-copper/70" />
            </div>
            <p className="text-araba-beige leading-relaxed mb-6">
              Where premium coffee meets automotive precision. Engineering excellence in every cup.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-araba-olive flex items-center justify-center hover:bg-araba-copper smooth-transition"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-araba-olive flex items-center justify-center hover:bg-araba-copper smooth-transition"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-araba-olive flex items-center justify-center hover:bg-araba-copper smooth-transition"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-araba-olive flex items-center justify-center hover:bg-araba-copper smooth-transition"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-araba-copper flex items-center gap-2">
              <NavIcon className="w-5 h-5" />
              Quick Nav
            </h4>
            <ul className="space-y-3 text-araba-beige">
              <li><Link href="/about" className="hover:text-araba-copper smooth-transition hover:pl-2 block">Our Story</Link></li>
              <li><Link href="/menu" className="hover:text-araba-copper smooth-transition hover:pl-2 block">Performance Menu</Link></li>
              <li><Link href="/experience" className="hover:text-araba-copper smooth-transition hover:pl-2 block">Drive-In Experience</Link></li>
              <li><Link href="/contact" className="hover:text-araba-copper smooth-transition hover:pl-2 block">Contact Station</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-araba-copper flex items-center gap-2">
              <Fuel className="w-5 h-5" />
              Services
            </h4>
            <ul className="space-y-3 text-araba-beige">
              <li><a href="#" className="hover:text-araba-copper smooth-transition hover:pl-2 block">Drive-In Coffee</a></li>
              <li><a href="#" className="hover:text-araba-copper smooth-transition hover:pl-2 block">Quick Orders</a></li>
              <li><a href="#" className="hover:text-araba-copper smooth-transition hover:pl-2 block">Corporate Catering</a></li>
              <li><a href="#" className="hover:text-araba-copper smooth-transition hover:pl-2 block">Gift Cards</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-araba-copper flex items-center gap-2">
              <Coffee className="w-5 h-5" />
              Connect
            </h4>
            <ul className="space-y-3 text-araba-beige">
              <li><a href="#" className="hover:text-araba-copper smooth-transition hover:pl-2 block">Careers</a></li>
              <li><Link href="/franchise" className="hover:text-araba-copper smooth-transition hover:pl-2 block">Franchise</Link></li>
              <li><a href="#" className="hover:text-araba-copper smooth-transition hover:pl-2 block">Press Kit</a></li>
              <li><a href="#" className="hover:text-araba-copper smooth-transition hover:pl-2 block">Newsletter</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-araba-copper/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-araba-beige text-sm">
              &copy; 2026 ARABA Coffee. All rights reserved. Crafted with precision & passion.
            </p>
            <div className="flex gap-6 text-sm text-araba-beige">
              <a href="#" className="hover:text-araba-copper smooth-transition">Privacy Policy</a>
              <a href="#" className="hover:text-araba-copper smooth-transition">Terms of Service</a>
              <a href="#" className="hover:text-araba-copper smooth-transition">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
