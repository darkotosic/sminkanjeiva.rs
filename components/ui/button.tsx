import Link from 'next/link';

export function Button({ href, children, variant = 'primary' }: { href: string; children: React.ReactNode; variant?: 'primary' | 'secondary' | 'ghost' }) {
  const styles = {
    primary: { background: 'var(--accent)', color: '#fff', border: '1px solid var(--accent)' },
    secondary: { background: '#fff', color: 'var(--foreground)', border: '1px solid var(--border)' },
    ghost: { background: 'transparent', color: 'var(--foreground)', border: '1px solid transparent' },
  }[variant];

  return (
    <Link href={href} style={{ ...styles, padding: '0.75rem 1rem', borderRadius: 999, display: 'inline-block', fontWeight: 600 }}>
      {children}
    </Link>
  );
}
