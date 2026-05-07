import { Button } from '@/components/ui/button';
import { site } from '@/data/site';

export function MobileStickyCta() {
  return (
    <div className="mobile-cta" aria-label="Brz poziv za termin">
      <div className="mobile-cta-inner">
        <Button href={`tel:${site.phone}`}>POZOVITE</Button>
      </div>
    </div>
  );
}
