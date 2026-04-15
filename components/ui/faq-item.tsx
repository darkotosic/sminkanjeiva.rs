export function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="card">
      <summary style={{ fontWeight: 600 }}>{question}</summary>
      <p style={{ color: 'var(--muted)' }}>{answer}</p>
    </details>
  );
}
