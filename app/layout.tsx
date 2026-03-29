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
  title: 'Healy Builds AS – Maling, Snekker & Renovering | Oslo, Bærum, Asker',
  description: 'Toppvurdert håndverkerfirma med over 15 års erfaring innen maling, snekkerarbeid, gulvlegging, renovering og kjøkkenmontasje i Oslo, Bærum, Asker og Drammen. 4.8★ på 79 anmeldelser. Gratis befaring.',
  keywords: 'maler oslo, snekker oslo, oppussing bærum, gulvlegging asker, kjøkkenmontasje drammen, healy builds, renovering oslo, maling og snekker norge, parkett, laminat, terrasse, mikrocement',
  openGraph: {
    title: 'Healy Builds AS – Presisjon og Håndverk',
    description: 'Førsteklasses maling, snekkerarbeid og renovering i Oslo-området. 15+ års erfaring. 4.8★ vurdert av 79 kunder. Kontakt oss for gratis befaring.',
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
