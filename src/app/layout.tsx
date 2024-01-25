import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import NotificationBar from './components/NotificationBar'
import Header from './components/Header'
import Footer from './components/Footer'

import './globals.scss'

const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '700', '900'] });

export const metadata: Metadata = {
  title: 'SP-Resturant',
  description: 'Resturant food delivery',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NotificationBar /> 
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
