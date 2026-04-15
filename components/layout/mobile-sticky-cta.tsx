import { site } from '@/data/site';
import { Button } from '@/components/ui/button';

export function MobileStickyCta() {
  return (
    <div style={{ position: 'fixed', bottom: 10, left: 10, right: 10, zIndex: 30, display: 'flex', justifyContent: 'center' }}>
      <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 999, padding: '0.25rem' }}>
        <Button href={site.bookingUrl}>Zakaži termin</Button>
      </div>
    </div>
  );
}
