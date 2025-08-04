import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import NavBar from '../components/NavBar'   // ← relative import
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Pejman Hamidi – Portfolio',
  description: 'Pejman Hamidi | Quantitative Trading, Economics & Publications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={geistSans.variable}>
      <body className="bg-gray-100 text-gray-900 font-sans antialiased">
        <NavBar />
        <main className="max-w-screen-lg mx-auto px-6 py-8 space-y-16">
          {children}
        </main>
      </body>
    </html>
  )
}
