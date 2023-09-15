import './globals.css'
import type { Metadata } from 'next'
import { Navbar } from '@src/components'
import {Footer} from '@src/components'
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";


export const metadata: Metadata = {
  title:{
    default:'DoDo Cars',
    template : '%s | DoDo Cars'
  },
  description: 'Explore the finest selection of pre-owned and new cars, get expert reviews, and easily connect with sellers. Stay updated with the latest automotive news and buying guides.',
  keywords: ['pre-owned cars', 'buy used cars', 'car reviews', 'automotive news', 'car buying guides', 'resell cars', 'car marketplace', 'used automobiles', 'auto enthusiasts'],
  robots:{
    googleBot:{
      index: true,
    }
  },
  manifest: '/manifest.json',
  icons: {apple:'/logo.svg'},
  themeColor:'#fff',
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
