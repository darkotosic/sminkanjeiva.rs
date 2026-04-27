export function PageHero({ title, intro }: { title: string; intro: string }) {
  return (
    <section className="section" style={{ paddingBottom: '1rem' }}>
      <div className="container">
        <h1>{title}</h1>
        <p style={{ color: 'var(--muted)', maxWidth: 760 }}>{intro}</p>
      </div>
    </section>
  );
}
