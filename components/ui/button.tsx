import Link from 'next/link';

export function Button({ href, children, variant = 'primary' }: { href: string; children: React.ReactNode; variant?: 'primary' | 'secondary' | 'ghost' }) {
  const variantClass = {
    primary: 'button-primary',
    secondary: 'button-secondary',
    ghost: 'button-ghost',
  }[variant];

  return (
    <Link href={href} className={`button ${variantClass}`}>
      {children}
    </Link>
  );
}
