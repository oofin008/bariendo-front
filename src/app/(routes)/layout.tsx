import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { IBM_Plex_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })
// const inter = IBM_Plex_Sans({ weight: ['400', '500', '700'], subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Bariendo Frontend',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}