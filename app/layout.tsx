import type { Metadata } from 'next'
import './globals.css'

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

export const metadata: Metadata = {
  title: 'API MMCM',
  description: 'API MMCM\'s Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-beige-50 text-black-50">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
