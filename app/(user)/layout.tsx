import Hero from '@/pages/Hero'
import { Signika } from 'next/font/google'
import '../globals.css'

const signika = Signika({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})
export const metadata = {
  title: 'Sweet Crumbs',
  description: 'We make ca .Get your cake in lusaka from us.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={signika.className}>
      <body>
        <Hero />
        {children}
      </body>
    </html>
  )
}
