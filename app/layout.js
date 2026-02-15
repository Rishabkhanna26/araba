import './globals.css'
import { manrope, playfair } from '@/lib/fonts'

export const metadata = {
  title: 'ARABA Coffee - Premium Coffee Experience',
  description: 'Experience the perfect blend of luxury cafe atmosphere and automotive elegance. Premium artisanal coffee crafted with precision.',
  keywords: 'premium coffee, artisanal cafe, ARABA Coffee, luxury coffee experience',
  icons: {
    icon: '/580649185_17850873852585947_4178974893598830815_n.webp',
    shortcut: '/580649185_17850873852585947_4178974893598830815_n.webp',
    apple: '/580649185_17850873852585947_4178974893598830815_n.webp',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
