"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  ['National Trust Register', '/national-trust-listings'],
  ['Kenmore Advocacy', '/kenmore-advocacy'],
  ['Media Articles', '/media-articles'],
  ['History of Kenmore', '/kenmore-history'],
  ['Research', '/research'],
  ['About the project', '/#about'],
] as const

export function GlobalNavigation() {
  const pathname = usePathname()

  return <nav aria-label="Global navigation">{links.map(([label, href]) => {
    const targetPath = href.split('#')[0] || '/'
    const active = targetPath === '/' ? pathname === '/' : pathname === targetPath || pathname.startsWith(`${targetPath}/`)
    return <Link href={href} aria-current={active ? 'page' : undefined} key={href}>{label}</Link>
  })}</nav>
}
