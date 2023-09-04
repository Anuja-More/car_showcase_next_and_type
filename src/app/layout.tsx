import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export const metadata: Metadata = {
  title: 'Go Cars',
  description: 'Discover the best cars in the world',
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
