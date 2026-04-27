import { site } from '@/data/site';
import { Button } from '@/components/ui/button';

export function MobileStickyCta() {
  return (
    <div className="mobile-cta" aria-label="Brza mobilna rezervacija">
      <div className="mobile-cta-inner">
        <Button href={site.bookingUrl}>Zakaži termin</Button>
      </div>
    </div>
  );
}
