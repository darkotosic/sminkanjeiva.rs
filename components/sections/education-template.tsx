import { PageHero } from '@/components/sections/page-hero';
import { Button } from '@/components/ui/button';

export function EducationTemplate({ title, intro }: { title: string; intro: string }) {
  return (
    <>
      <PageHero title={title} intro={intro} />
      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container grid grid-2">
          <div className="card"><h2>Komu je namenjeno</h2><p>Placeholder za idealan profil polaznice i ulazni nivo znanja.</p></div>
          <div className="card"><h2>Curriculum</h2><p>Placeholder za module, trajanje, praksu i materijale.</p></div>
          <div className="card"><h2>Benefiti</h2><p>Placeholder za poslovne i tehničke ishode obuke.</p></div>
          <div className="card"><h2>FAQ</h2><p>Placeholder za pitanja o terminu, ceni i sertifikatu.</p></div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}><div className="container card"><h2>Prijava / upit za edukaciju</h2><p>Pošaljite upit i dobijte sledeći slobodan termin.</p><Button href="/kontakt">Pošalji upit</Button></div></section>
    </>
  );
}
