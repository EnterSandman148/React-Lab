import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'All About Elephants',
  description: 'Everything Elephant, from small to big.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-800`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
