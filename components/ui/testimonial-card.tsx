export function TestimonialCard({ item }: { item: { name: string; service: string; quote: string; source?: string } }) {
  return (
    <article className="card">
      <p>“{item.quote}”</p>
      <p><strong>{item.name}</strong> — {item.service}</p>
      {item.source ? <small style={{ color: 'var(--muted)' }}>Izvor: {item.source}</small> : null}
    </article>
  );
}
