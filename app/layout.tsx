import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Book Tracker',
  description: 'Keep track of the books you wish and already read',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="mx-5 my-10 md:mx-40 md:my-20" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
