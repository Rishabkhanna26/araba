'use client'

import { motion } from 'framer-motion'
import { Coffee, CupSoda, Leaf, Sandwich } from 'lucide-react'
import SiteShell from '@/components/layout/SiteShell'

const foodColumns = [
  {
    title: 'Matcha',
    priceMode: 'single',
    items: [
      { name: 'Iced Matcha', p1: '220' },
      { name: 'Strawberry Iced Matcha', p1: '240' },
      { name: 'Mango Iced Matcha', p1: '240' },
      { name: 'Vanilla Iced Matcha', p1: '240' },
    ],
  },
  {
    title: 'Frappe',
    priceMode: 'single',
    items: [
      { name: 'Daily Frappe', p1: '180' },
      { name: 'Araba Spl', p1: '220' },
      { name: 'Dark Choco Mocha', p1: '220' },
      { name: 'Caramel', p1: '220' },
    ],
  },
  {
    title: 'Burgers',
    priceMode: 'dual',
    items: [
      { name: 'Aloo Masala Burger', p1: '150' },
      { name: 'Achari Punch', p1: '160', p2: '180' },
      { name: 'Smoky Kebab Burger', p2: '200' },
      { name: 'Jamaican Fire Burger', p1: '180', p2: '200' },
      { name: 'Chicken Masala Burger', p2: '260' },
      { name: 'Charcoal Grill Burger', p1: '240', p2: '260' },
      { name: 'Mushroom Burger' },
    ],
  },
  {
    title: 'Bakery',
    priceMode: 'single',
    items: [
      { name: 'Marble Cake', p1: '165' },
      { name: 'Carrot Cake', p1: '165' },
      { name: 'Tres-Leches', p1: '200' },
      { name: 'Blueberry Muffin', p1: '150' },
      { name: 'Chocolate Muffin', p1: '150' },
      { name: 'Japanese Cotton Cheesecake', p1: '200' },
      { name: 'Baked New York Cheesecake', p1: '200' },
      { name: 'Baked Chocolate Cheesecake', p1: '200' },
    ],
  },
  {
    title: 'Healthy',
    priceMode: 'dual',
    items: [
      { name: 'Charcoal Grill Chicken / Paneer with Sauteed Vegetables', p1: '320', p2: '340' },
      { name: 'Grilled Paneer / Chicken Salad with Honey Mustard Dressing', p1: '320', p2: '340' },
      { name: 'Egg Bliss', p2: '280' },
      { name: 'Chicken / Paneer Fajita Bowl', p1: '320', p2: '340' },
    ],
  },
  {
    title: 'Fries & Fillers',
    priceMode: 'dual',
    items: [
      { name: 'Classic Salted Fries', p1: '180' },
      { name: 'Peri Peri Fries', p1: '220' },
      { name: 'Mexican Masala Fries', p1: '220' },
      { name: 'Sour Cream & Onion Fries', p1: '250' },
      { name: 'Mozzarella Cheese Sticks', p1: '250' },
      { name: 'Crispy Chicken Fries', p1: '280' },
      { name: 'Veg Nuggets', p1: '240' },
      { name: 'Korean BBQ Chicken Wings', p1: '260' },
    ],
  },
]

const beverageColumns = [
  {
    title: 'Coffee Is Kaafi (Hot / Iced)',
    items: [
      { name: 'Espresso', p1: '120' },
      { name: 'Americano', p1: '140' },
      { name: 'Macchiato', p1: '140' },
      { name: 'Cortado', p1: '150' },
      { name: 'Cappuccino', p1: '160' },
      { name: 'Latte', p1: '180' },
      { name: 'Mocha', p1: '200' },
      { name: 'Midnight Mocha', p1: '220' },
    ],
  },
  {
    title: 'Shakes - Classics',
    items: [
      { name: 'Blueberry', p1: '200' },
      { name: 'Rasmalai', p1: '200' },
      { name: 'Tuti Fruti', p1: '200' },
      { name: 'Rose Elaichi Mango', p1: '200' },
      { name: 'Butter Scotch', p1: '200' },
    ],
  },
  {
    title: 'Iced Tea',
    items: [
      { name: 'Yuzu Zest', p1: '180' },
      { name: 'Peach Meadow', p1: '180' },
      { name: 'Lemon Lift', p1: '200' },
      { name: 'Melon Mist', p1: '200' },
    ],
  },
  {
    title: 'Shakes - Chocolate Indulgence',
    items: [
      { name: 'Oreo', p1: '180' },
      { name: 'KitKat', p1: '180' },
      { name: 'Choco Peanut', p1: '200' },
      { name: 'Choco Hazelnut', p1: '200' },
    ],
  },
  {
    title: 'Smoothies',
    items: [
      { name: 'Mango Smoothie', p1: '180' },
      { name: 'Mix Berry Smoothie', p1: '200' },
    ],
  },
  {
    title: 'Mojito',
    items: [
      { name: 'Lemon Fresh', p1: '200' },
      { name: 'Guava Glow', p1: '200' },
      { name: 'Tropical Trio', p1: '200' },
      { name: 'Citrus Zen', p1: '200' },
    ],
  },
  {
    title: 'Hot Chocolate',
    items: [
      { name: 'Single Chocolate', p1: '180' },
      { name: 'Belgian', p1: '200' },
      { name: 'Hazelnut', p1: '200' },
    ],
  },
]

function PriceHead({ dual = false, dark = false }) {
  const diamondClass = `inline-flex h-7 w-7 sm:h-8 sm:w-8 rotate-45 items-center justify-center border ${
    dark ? 'border-araba-cream/70 bg-araba-cream text-araba-olive' : 'border-araba-olive/50 bg-araba-olive text-araba-cream'
  }`

  return (
    <div className="flex shrink-0 items-center justify-end gap-4 sm:gap-8 uppercase">
      <span className={diamondClass}>
        <span className="-rotate-45 text-[8px] sm:text-[9px] leading-none tracking-[0.08em] whitespace-nowrap">Price</span>
      </span>
      {dual && (
        <span className={diamondClass}>
          <span className="-rotate-45 text-[6.5px] sm:text-[7px] leading-none tracking-[0.02em] whitespace-nowrap">N-Veg</span>
        </span>
      )}
    </div>
  )
}

function MenuBlock({ title, items, dual = false, dark = false }) {
  return (
    <div>
      <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
        <h3 className={`text-2xl sm:text-3xl font-bold uppercase leading-tight ${dark ? 'text-araba-cream' : 'text-araba-olive'}`}>
          {title}
        </h3>
        <PriceHead dual={dual} dark={dark} />
      </div>
      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item.name}
            className={`grid gap-2 text-sm sm:text-base ${dual ? 'grid-cols-[minmax(0,1fr)_48px_48px] sm:grid-cols-[minmax(0,1fr)_56px_56px]' : 'grid-cols-[minmax(0,1fr)_48px] sm:grid-cols-[minmax(0,1fr)_56px]'} ${dark ? 'text-araba-cream/95' : 'text-araba-charcoal'}`}
          >
            <p className="min-w-0 pr-2 sm:pr-3 leading-snug break-words">{item.name}</p>
            <p className="text-right">{item.p1 ?? ''}</p>
            {dual && <p className="text-right">{item.p2 ?? ''}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

const MenuPage = () => {
  return (
    <SiteShell className="bg-araba-charcoal">
      <main className="pt-24 pb-16">
        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="overflow-hidden rounded-2xl border border-araba-olive/30 bg-araba-beige"
          >
            <div className="border-b border-araba-olive/20 px-6 py-6 text-center">
              <p className="text-xs uppercase tracking-[0.24em] text-araba-olive/70">ARABA Coffee</p>
              <h1 className="mt-2 text-5xl font-bold text-araba-olive sm:text-6xl">Food Menu</h1>
            </div>

            <div className="grid gap-10 px-6 py-8 md:grid-cols-2">
              <MenuBlock title={foodColumns[0].title} items={foodColumns[0].items} />
              <MenuBlock title={foodColumns[1].title} items={foodColumns[1].items} />
              <MenuBlock title={foodColumns[2].title} items={foodColumns[2].items} dual />
              <MenuBlock title={foodColumns[3].title} items={foodColumns[3].items} />
            </div>

            <div className="grid items-start gap-10 border-t border-araba-olive/20 px-6 py-8 md:grid-cols-2">
              <div>
                <MenuBlock title={foodColumns[4].title} items={foodColumns[4].items} dual />
                <div className="mt-6 flex items-center gap-3 text-araba-olive/70">
                  <Leaf className="h-6 w-6" />
                  <p className="text-sm">Veg and non-veg columns follow the poster style.</p>
                </div>
              </div>
              <div>
                <MenuBlock title={foodColumns[5].title} items={foodColumns[5].items} dual />
                <div className="mt-8 rounded-xl border border-araba-olive/20 bg-araba-cream/70 p-6 text-araba-olive">
                  <div className="mb-3 flex items-center gap-3">
                    <Sandwich className="h-7 w-7" />
                    <p className="text-lg font-semibold">Chef Signature Burgers</p>
                  </div>
                  <p className="text-sm leading-relaxed">
                    Fresh patties, toasted buns, and in-house sauces made daily for the same handcrafted feel shown in your poster.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="overflow-hidden rounded-2xl border border-araba-cream/20 bg-araba-olive"
          >
            <div className="border-b border-araba-cream/20 px-6 py-6 text-center">
              <h2 className="text-5xl font-bold text-araba-cream sm:text-6xl">Beverages</h2>
            </div>

            <div className="grid gap-10 px-6 py-8 md:grid-cols-2">
              <MenuBlock title={beverageColumns[0].title} items={beverageColumns[0].items} dark />
              <MenuBlock title={beverageColumns[1].title} items={beverageColumns[1].items} dark />
              <MenuBlock title={beverageColumns[2].title} items={beverageColumns[2].items} dark />
              <MenuBlock title={beverageColumns[3].title} items={beverageColumns[3].items} dark />
              <MenuBlock title={beverageColumns[6].title} items={beverageColumns[6].items} dark />
              <div className="space-y-8">
                <MenuBlock title={beverageColumns[4].title} items={beverageColumns[4].items} dark />
                <MenuBlock title={beverageColumns[5].title} items={beverageColumns[5].items} dark />
                <div className="flex items-center gap-4 rounded-xl border border-araba-cream/25 bg-araba-cream/10 p-4 text-araba-cream/90">
                  <Coffee className="h-8 w-8 shrink-0" />
                  <CupSoda className="h-8 w-8 shrink-0" />
                  <p className="text-sm">Built to match your beverage poster look with deep olive background and cream typography.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </SiteShell>
  )
}

export default MenuPage
