import Link from 'next/link'

const description = [
  'This is one of the initial suite of buildings, designed in the office of the Government Architect, W.L. Vernon, possibly by George Oakeshott, and completed, according to the date on the facade, in 1895.',
  'The building is U-shaped in plan, the double-storeyed facade pile being almost symmetrical and the single-storeyed rear wings projecting to the north-east to enclose a north-east courtyard, from which trachyte stairs with brick balustrading descend to the roadway. The roof has a centrally-placed timber-framed tapered fleche with a chevron pattern of rolled joints and louvred ventilators, capped by a square cupola.',
  'Its fine face brickwork is tuckpointed, the external walls being laid in stretcher bond, suggesting that they are cavity work. There is considerable decorative detailing in sandstone, including bands, friezes, window mullions, arcade piers, a moulded pediment over the front entrance and carved scrollwork to the front pier caps. On each side of the single-storeyed entrance there is a single-storeyed loggia with arches of moulded red brick voussoirs. Above the loggias are open balconies with pier caps having a scrolled motif which matches those of the main entrance gateway of the complex in Taralga Road.',
  'The grassed courtyard is framed by single-storey verandahs on three sides, with cast iron columns and a slate roof. On the other side is a brick balustrade wall.',
  'The walling damp course is a triple layer of slate and the thresholds are slate slabs. The roof is hipped and covered in slate, with terra cotta ridging and terminals and metal hips.',
  'The interiors include a central ground floor Hall with pressed metal ceiling, encaustic tile floor, a large curved bay window, leaded decorative glass, fine joinery including an impressive doorcase and a very fine large fireplace of face brick, stone, marble and tiles. Four freestanding columns in the hall support the floor structure of the main Conference Room at first floor level, and above this there is an arrangement of timber queen post trusses that support the roof and the fleche overhead. At each end of the front pile there is a polished timber staircase with carved balusters and newels; the stair landings occupy projecting semi-octagonal bays with coloured panes in the window glazing and these stair halls have ripple-iron ceilings.',
]

export default function AdministrationBlockPage() {
  return <main className="site-shell detail-page">
    <header className="site-header"><div className="brand-mark"><span>KC</span><div><strong>Kenmore</strong><small>Can Be More</small></div></div><Link className="back-link" href="/">← National Trust Listings</Link></header>
    <article className="record">
      <p className="eyebrow">National Trust Register · Record 01</p>
      <h1>Administration<br /><em>Block</em></h1>
      <div className="record-meta"><span>Community Research</span><span>Last modified 21 November 2023</span></div>
      <div className="record-layout"><div className="record-main">
        <p className="lead">The following Description, Reason for Listing and Photo are sourced directly from the National Trust Register records, reproduced here for reference and accessibility.</p>
        <section><h2>Description</h2>{description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>
        <section><h2>Reason for Listing</h2><p>Part of a significant Federation period institutional complex of fine buildings and landscape. An outstanding example of Free Style architecture by the first Government Architect.</p></section>
        <section><h2>Photos</h2><p>National Trust Register record sighted.</p></section>
      </div><aside className="attachments"><p className="side-label">Record files</p><div className="attachment"><span className="file-icon">JPG</span><div><strong>Kenmore admin.jpg</strong><small>Image / reference photograph</small></div></div><div className="attachment"><span className="file-icon">PDF</span><div><strong>Kenmore Hospital 3 — admin block</strong><small>National Trust record</small></div></div></aside></div>
      <div className="source-note"><strong>Source</strong><span>National Trust Register — Record sighted.</span></div>
    </article><footer><span>Kenmore Can Be More</span><span>Community Research Archive · 2023</span></footer>
  </main>
}
