export function PageHero({ title, intro }: { title: string; intro: string }) {
  return (
    <section className="section" style={{ paddingBottom: '1rem' }}>
      <div className="container">
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '2.2rem', marginBottom: '0.5rem' }}>{title}</h1>
        <p style={{ color: 'var(--muted)' }}>{intro}</p>
      </div>
    </section>
  );
}
