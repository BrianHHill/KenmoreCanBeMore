import Link from 'next/link'

export default function HomePage() {
  return <main className="site-shell home-page">
    <header className="site-header">
      <Link className="brand-mark" href="/"><span>KC</span><div><strong>Kenmore</strong><small>Can Be More</small></div></Link>
      <nav aria-label="Primary navigation"><Link href="/national-trust-listings">National Trust Register</Link><Link href="/kenmore-advocacy">Kenmore Advocacy</Link><a href="#about">About the project</a></nav>
    </header>
    <section className="hero home-hero">
      <p className="eyebrow">Community research archive · Goulburn, NSW</p>
      <h1>Can Kenmore<br /><em>Be More?</em></h1>
      <p className="hero-copy">Exploring the history, architecture and possibilities of the old Kenmore Hospital site.</p>
      <div className="hero-actions"><Link className="primary-link" href="/national-trust-listings">Explore the National Trust records <span>↗</span></Link><a className="text-link" href="#about">Read the story ↓</a></div>
    </section>
    <section className="home-content" id="about">
      <div className="section-intro"><p className="eyebrow">Why this archive exists</p><h2>A remarkable place, and a community story still unfolding.</h2></div>
      <div className="story-copy"><p>As an Occupational Therapist and enthusiast for Australian architectural history, the old Kenmore Hospital is a fascination. As an institution, it&apos;s touched a great many lives and seen so much community interaction with Goulburn over the years.</p><p>I&apos;ve started exploring in more depth through Council and the Goulburn community to better understand some of the stories of the Kenmore site. This online presence is a container for that activity: gathering media articles and stories, assessing community sentiment, and expressing hopes, dreams and possibilities for the site.</p><p>There is interesting academic research documenting the evolution of clinical care at Kenmore, but institutions like this are far more than that. Sporting events were held, skills were learnt and time was spent on the grounds. The site&apos;s clinical and community heritage deserves careful attention as its future is considered.</p></div>
    </section>
    <section className="home-callout"><p className="eyebrow">The invitation</p><h2>Help me to help others see and realise the possibility that <em>KenmoreCanBeMore.</em></h2><p>Do you have a personal or professional history of the site? I welcome your stories and contributions to this growing community archive.</p><p className="signature">Brian Hill<br /><small>CEO · Laughing Mind P/L</small></p></section>
    <footer><span>Kenmore Can Be More</span><span>Community Research Archive · 2023</span></footer>
  </main>
}
