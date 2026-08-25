import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'National Trust Listings | Kenmore Can Be More',
  description: 'Community research archive documenting the National Trust Register buildings at Kenmore Hospital.',
  generator: 'Kenmore Can Be More',
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f4f1e9' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-[#f4f1e9]"><body>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
