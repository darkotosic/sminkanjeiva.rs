export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header style={{ marginBottom: '1.25rem', maxWidth: 760 }}>
      <h2>{title}</h2>
      {subtitle ? <p style={{ color: 'var(--muted)', marginTop: '0.5rem' }}>{subtitle}</p> : null}
    </header>
  );
}
