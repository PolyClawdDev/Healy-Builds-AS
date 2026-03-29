import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingCTA from '@/components/layout/FloatingCTA'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

export const metadata: Metadata = {
  title: 'Healy Builds AS – Premium Painting & Carpentry | Oslo, Bærum, Asker',
  description: 'Top-rated construction company specialising in painting, carpentry, flooring, renovation, and kitchen installation across Oslo, Bærum, Asker and Drammen. 15+ years experience. 4.8★ rated.',
  keywords: 'maler oslo, snekker oslo, oppussing bærum, gulvlegging asker, kjøkkenmontasje drammen, healy builds, renovation oslo, painter carpenter norway',
  openGraph: {
    title: 'Healy Builds AS – Precision Craftsmanship',
    description: 'Premium painting, carpentry & renovation services across Oslo and surrounding areas.',
    type: 'website',
    locale: 'nb_NO',
    siteName: 'Healy Builds AS',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no">
      <body className={geist.variable}>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingCTA />
        </LanguageProvider>
      </body>
    </html>
  )
}
