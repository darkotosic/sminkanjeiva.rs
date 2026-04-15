export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header style={{ marginBottom: '1.25rem' }}>
      <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', margin: 0 }}>{title}</h2>
      {subtitle ? <p style={{ color: 'var(--muted)', marginTop: '0.5rem' }}>{subtitle}</p> : null}
    </header>
  );
}
