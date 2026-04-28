import { AnimatedNumberText } from '@/components/ui/animated-number-text';

export function TrustItem({ label }: { label: string }) {
  return <div className="card" style={{ textAlign: 'center', fontWeight: 600 }}><AnimatedNumberText text={label} /></div>;
}
