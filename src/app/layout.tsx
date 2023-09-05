import './globals.css'
import type { Metadata } from 'next'
import { Navbar } from '@src/components'
import {Footer} from '@src/components'


export const metadata: Metadata = {
  title: 'Go Cars - Best Cars, Reviews, and More',
  description: 'Discover the best cars in the world and stay updated with the latest automotive news, reviews, and buying guides.',
  keywords: ['cars', 'best cars', 'automotive', 'car reviews', 'buying guides', 'automobiles', 'top cars', 'auto news', 'rent cars']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
