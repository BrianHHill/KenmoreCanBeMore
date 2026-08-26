import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'National Trust Listings | Kenmore Can Be More',
  description: 'Community research archive documenting the National Trust Register buildings at Kenmore Hospital.',
  generator: 'Kenmore Can Be More',
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f4f1e9' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-[#f4f1e9]"><body><header className="global-site-header"><Link className="brand-mark" href="/"><span>KC</span><div><strong>Kenmore</strong><small>Can Be More</small></div></Link><nav aria-label="Global navigation"><Link href="/national-trust-listings">National Trust Register</Link><Link href="/kenmore-advocacy">Kenmore Advocacy</Link><Link href="/media-articles">Media Articles</Link><Link href="/kenmore-history">History of Kenmore</Link><Link href="/research">Research</Link><Link href="/#about">About the project</Link></nav></header>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
