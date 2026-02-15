import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'ARABA Coffee - Premium Coffee Experience',
  description: 'Experience the perfect blend of luxury café atmosphere and automotive elegance. Premium artisanal coffee crafted with precision.',
  keywords: 'premium coffee, artisanal café, ARABA Coffee, luxury coffee experience',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
