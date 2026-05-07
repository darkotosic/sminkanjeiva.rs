import { PageHero } from '@/components/sections/page-hero';
import { Button } from '@/components/ui/button';
import { getMetadata } from '@/lib/seo';

export const metadata = getMetadata('/o-nama');

export default function ONamaPage() {
  return (
    <>
      <PageHero title="O meni" intro="Profesionalni šminker iz Rume za glam šminku, oslikavanje lica i specijalne efekte." />
      <section className="section">
        <div className="container grid grid-2">
          <div className="card">
            <h2>Ja sam Iva</h2>
            <p>Ja sam Iva, profesionalni šminker iz Rume.</p>
            <p>Bavim se glam šminkom, oslikavanjem lica i specijalnim efektima.</p>
          </div>
          <div className="card">
            <h2>Pristup radu</h2>
            <p>Volim da svaki makeup prilagodim osobi, bilo da je u pitanju elegantna šminka ili potpuna transformacija.</p>
            <p>Radim u studiju i na terenu, za različite prilike i projekte.</p>
          </div>
        </div>
        <div className="container" style={{ marginTop: '1rem' }}><Button href="/usluge">Pogledaj usluge</Button></div>
      </section>
    </>
  );
}
