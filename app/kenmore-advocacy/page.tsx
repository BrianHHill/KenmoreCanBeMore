import Link from 'next/link'

const records = [
  { title: 'Kenmore AntiPatterns', href: '/kenmore-advocacy/kenmore-anti-patterns', note: 'Recurring patterns affecting the Kenmore gardens site' },
  { title: '2023 Advocacy — Brian Hill', href: '/kenmore-advocacy/2023-brian-hill', note: 'Correspondence, media and liaison activity' },
  { title: '2023 Advocacy — Leone Morgan', href: '/kenmore-advocacy/2023-leone-morgan', note: 'Letters and responses concerning the site history' },
]

export default function KenmoreAdvocacyPage() {
  return <main className="site-shell">
    <header className="site-header"><Link className="brand-mark" href="/"><span>KC</span><div><strong>Kenmore</strong><small>Can Be More</small></div></Link><nav aria-label="Primary navigation"><Link href="/">Home</Link><Link href="/national-trust-listings">National Trust Register</Link></nav></header>
    <section className="hero"><p className="eyebrow">Community research · Advocacy archive</p><h1>Kenmore<br /><em>Advocacy</em></h1><p className="hero-copy">A record of correspondence, conversations and community action supporting a thoughtful future for the Kenmore site.</p></section>
    <div className="content-grid"><aside className="sidebar"><p className="side-label">In this archive</p><p className="side-count">02 <span>records</span></p><div className="rule" /><p className="side-note">Explore the 2023 advocacy records and the people who helped document Kenmore&apos;s history.</p></aside><section className="listing-panel"><div className="section-intro"><p className="eyebrow">The records</p><h2>2023 advocacy</h2><p>These pages preserve activity recorded under the Kenmore Advocacy section of the Community Research space.</p></div><div className="listing-list">{records.map((record, index) => <Link className="listing featured" href={record.href} key={record.href}><span className="listing-number">{String(index + 1).padStart(2, '0')}</span><span><strong>{record.title}</strong><small className="listing-note">{record.note}</small></span><span className="arrow">↗</span></Link>)}</div></section></div>
    <footer><span>Kenmore Can Be More</span><span>Community Research Archive · Advocacy</span></footer>
  </main>
}
