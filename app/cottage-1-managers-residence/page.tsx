import Link from 'next/link'

export default function CottageOnePage() {
  return <main className="site-shell detail-page">
    <header className="site-header"><div className="brand-mark"><span>KC</span><div><strong>Kenmore</strong><small>Can Be More</small></div></div><Link className="back-link" href="/">← National Trust Listings</Link></header>
    <article className="record">
      <p className="eyebrow">National Trust Register · Record 02</p>
      <h1>Cottage 1 —<br /><em>Managers Residence</em></h1>
      <div className="record-meta"><span>Community Research</span><span>Last modified 21 November 2023</span></div>
      <div className="record-layout"><div className="record-main"><p className="lead">The following Description, Reason for Listing and Photo are sourced directly from the National Trust Register records, reproduced here for reference and accessibility.</p><section><h2>Description</h2><p>A two-storeyed residence of T-shaped plan, with roofs of terracotta tiles having tile-hung gables, two-storey timber verandah with timber balustrading brick walls and terracotta chimney pots. It is believed to have been erected in 1894-1895 as part of the original suite of buildings at Kenmore.</p><p>There is no garden fence but a small flight of masonry steps leads from the lower part of the site to the path leading to the front door. The garden includes many mature deciduous and evergreen trees.</p></section><section><h2>Reason for Listing</h2><p>Part of a significant Federation period institutional complex of fine buildings and landscape. A very good example of Queen Anne domestic architecture by the first Government Architect.</p></section></div><aside className="attachments"><p className="side-label">Record files</p><div className="attachment"><span className="file-icon">JPG</span><div><strong>Kenmore-Cottage1-NatTrust.jpg</strong><small>Image / reference photograph</small></div></div><a className="attachment" href="#pdf"><span className="file-icon">PDF</span><div><strong>Kenmore Hospital 32 — cottage 1</strong><small>National Trust record</small></div><span>↗</span></a></aside></div>
      <div className="source-note"><strong>Source</strong><span>National Trust Register — Record sighted.</span></div>
    </article><footer><span>Kenmore Can Be More</span><span>Community Research Archive · 2023</span></footer>
  </main>
}
