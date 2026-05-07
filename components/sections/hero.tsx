import { site } from '@/data/site';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="hero-landing" aria-labelledby="hero-heading">
      <div className="hero-landing-bg" aria-hidden="true" />
      <div className="container hero-landing-content">
        <p className="eyebrow">Studio za profesionalnu šminku</p>
        <h1 id="hero-heading">{site.heroHeadline}</h1>
        <p className="hero-lead">{site.heroText}</p>
        <p className="hero-services">Glam šminka • Oslikavanje lica • Specijalni efekti</p>
        <div className="hero-actions">
          <Button href={site.bookingUrl}>Zakaži termin</Button>
          <Button href="/portfolio" variant="secondary">Pogledaj portfolio</Button>
        </div>
      </div>
    </section>
  );
}
