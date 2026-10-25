const workstreams = [
  {
    number: "01",
    title: "Learning journey",
    description: "Versioned lessons, clear objectives, and mastery-based progression.",
    status: "Planned",
  },
  {
    number: "02",
    title: "Chess practice",
    description: "Legal moves and validated puzzles powered by a deterministic rules engine.",
    status: "Planned",
  },
  {
    number: "03",
    title: "Progress for families",
    description: "Persisted learning evidence and guardian-authorized summaries.",
    status: "Planned",
  },
];

export default function App() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="Little Knights home">
          <span className="brand-mark" aria-hidden="true">♞</span>
          <span>
            <strong>Little Knights</strong>
            <small>Kids Chess Academy</small>
          </span>
        </a>
        <span className="environment-badge">Foundation preview · Not production</span>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow">A thoughtful first move</p>
        <h1 id="hero-title">Every young mind can learn to think like a chess player.</h1>
        <p className="hero-copy">
          A mastery-based chess learning experience for ages 5–13, designed for web and Android.
          The learning experience is being built in small, testable steps.
        </p>
        <div className="hero-meta">
          <span>♟ Ages 5–13</span>
          <span>✦ 114-hour curriculum target</span>
          <span>◎ Web + Android</span>
        </div>
      </section>

      <section className="section" aria-labelledby="workstreams-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Foundation phase</p>
            <h2 id="workstreams-title">What we are building</h2>
          </div>
          <span className="status-pill">Phase 1</span>
        </div>
        <div className="workstream-grid">
          {workstreams.map((item) => (
            <article className="workstream-card" key={item.number}>
              <span className="card-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="card-status">{item.status}</span>
            </article>
          ))}
        </div>
      </section>

      <aside className="notice" aria-label="Prototype limitations">
        <strong>Transparent preview</strong>
        <p>
          This is the initial application shell. It does not yet provide accounts, saved progress,
          legal chess play, live AI coaching, voice features, or production integrations. No learner
          data is collected by this screen.
        </p>
      </aside>

      <footer className="footer">
        <span>Little Knights · Built around learning, not rushing.</span>
        <span>Foundation build 0.1.0</span>
      </footer>
    </main>
  );
}
