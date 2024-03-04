import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import AuthProvider from './components/AuthProvider'
import NotificationBar from './components/NotificationBar'
import Header from './components/Header'
import Footer from './components/Footer'
import QueryProvider from './components/QueryProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
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
        {/* - AuthProvider is a SessionProvider for next auth - */}
        <AuthProvider>
          {/* - QueryProvider is a QueryClientProvider for react query - */}
          <QueryProvider>
            <NotificationBar /> 
            <Header />
            {children}
            <Footer />
            <ToastContainer position='bottom-right' theme='dark' autoClose={3000}/>
          </QueryProvider>          
        </AuthProvider>
      </body>
    </html>
  )
}
