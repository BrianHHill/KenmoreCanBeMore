import Link from 'next/link'

const entries = [
  '16 Nov 2023 — Email sent to ACT Housing Ministers Berry and Vassarotti, given the extent of ACT commuters shifting to Goulburn for a new estate.',
  '13 Oct 2023 — Interview with John Thistleton, Regional Media.',
  '11 Oct 2023 — Email sent to the Department of Planning and Environment, copied to Bob Kirk, Leone Morgan and Wendy Tuckerman MP.',
  'October 2023 — Ongoing liaison with Bob Kirk and Leone Morgan to document site history.',
  '11 Sept 2023 — Email sent to Wendy Tuckerman, Member for Goulburn, NSW Parliament.',
]

export default function BrianHillAdvocacyPage() { return <main className="site-shell detail-page"><header className="site-header"><Link className="brand-mark" href="/"><span>KC</span><div><strong>Kenmore</strong><small>Can Be More</small></div></Link><Link className="back-link" href="/kenmore-advocacy">← Kenmore Advocacy</Link></header><article className="record"><p className="eyebrow">Kenmore Advocacy · 2023</p><h1>Brian<br /><em>Hill</em></h1><div className="record-meta"><span>Community Research</span><span>Last modified 16 November 2023</span></div><div className="record-layout"><div className="record-main"><p className="lead">A chronological record of advocacy activity undertaken during 2023.</p><section><h2>2023</h2>{entries.map((entry) => <p key={entry}>{entry}</p>)}</section></div><aside className="attachments"><p className="side-label">Archive path</p><p className="side-note">Community Research<br />→ Kenmore Advocacy<br />→ 2023</p></aside></div><div className="source-note"><strong>Source</strong><span>Community Research : 2023 Advocacy - Brian Hill</span></div></article><footer><span>Kenmore Can Be More</span><span>Community Research Archive · Advocacy</span></footer></main> }
