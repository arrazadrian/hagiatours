import './globals.css'
import type { Metadata } from 'next'
import { Aleo } from 'next/font/google'

const aleo = Aleo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hagia Tours',
  description: 'Travel every corner',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={aleo.className}>{children}</body>
    </html>
  )
}
