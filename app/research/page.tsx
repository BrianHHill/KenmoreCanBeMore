import Link from 'next/link'

export default function ResearchPage() {
  return <main className="site-shell detail-page">
    <header className="site-header">
      <Link className="brand-mark" href="/"><span>KC</span><div><strong>Kenmore</strong><small>Can Be More</small></div></Link>
      <nav aria-label="Primary navigation"><Link href="/">Home</Link><Link href="/national-trust-listings">National Trust Register</Link><Link href="/kenmore-advocacy">Kenmore Advocacy</Link><Link href="/media-articles">Media Articles</Link></nav>
    </header>
    <article className="record">
      <p className="eyebrow">Community research archive</p>
      <h1>Research</h1>
      <div className="record-layout">
        <div className="record-main">
          <section><h2>PhD Research thesis by Dr Doris Kordes</h2><p>Kordes, D.  2009 <a className="external-link" href="https://openresearch-repository.anu.edu.au/server/api/core/bitstreams/9064fa54-0299-44bd-be18-e82ab3685afe/content" target="_blank" rel="noreferrer">The arts of care in an asylum and a community 1925-2004: Kenmore Hospital, New South Wales and Canberra, the Australian Capital Territory</a>, Australian National University</p><p><strong>Abstract Summary:</strong> Doris Kordes examines changing approaches to mental health care in twentieth-century Australia, comparing Kenmore Hospital in New South Wales with community care in the Australian Capital Territory. The thesis identifies three care regimes—custodial “Herd Care,” the “Therapeutic Community,” and “Community Care”—and explores how landscapes, institutions, families, communities, and care relationships shaped the lives and freedoms of those receiving care.</p></section>
          <section><h2>PhD Research Thesis by John Raftery</h2><p>Raftery, John. 2000. &apos;<a className="external-link" href="https://digital.library.adelaide.edu.au/items/7b8eb4d8-de80-4299-af03-909785de2162" target="_blank" rel="noreferrer">Nothing new to medical science</a>&apos; : the construction of war neurosis and the life course outcomes of WW2 veterans, University of Adelaide</p><p><strong>Abstract:</strong> Documents and evaluates the experiences and life outcomes of a sample of WW2 veterans against a background of ideas about the neuroses of war, thereby examining the history of medical ideas about the psychological casualties of war, and the history of the lives of participants of war. The medical framework and social context that underpin the construction of war experience is critically examined in this thesis.</p></section>
          <section><h2>Wikipedia Entry</h2><p><a className="external-link" href="https://en.wikipedia.org/wiki/Kenmore_Hospital" target="_blank" rel="noreferrer">Kenmore Asylum</a></p></section>
        </div>
        <aside><p className="side-label">Research archive</p><p className="side-note">Academic research and reference material relating to Kenmore Hospital.</p></aside>
      </div>
    </article>
    <footer><span>Kenmore Can Be More</span><span>Community Research Archive · Research</span></footer>
  </main>
}
