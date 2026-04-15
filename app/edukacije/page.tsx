import { PageHero } from '@/components/sections/page-hero';
import { Button } from '@/components/ui/button';

export default function EdukacijePage() {
  return (
    <>
      <PageHero title="Edukacije" intro="Future-ready edukacioni hub za individualne obuke, kurs i masterclass format." />
      <section className="section"><div className="container grid grid-2"><div className="card"><h2>Individualna obuka</h2><p>1:1 format fokusiran na brz napredak.</p><Button href="/edukacije/individualna-obuka" variant="secondary">Detalji</Button></div><div className="card"><h2>Kurs šminkanja</h2><p>Strukturisani program sa modulima.</p><Button href="/edukacije/kurs-sminkanja" variant="secondary">Detalji</Button></div><div className="card"><h2>Masterclass</h2><p>Napredne tehnike i editorial pristup.</p><Button href="/edukacije/masterclass" variant="secondary">Detalji</Button></div><div className="card"><h2>Online kurs</h2><p>Digitalni format sa podrškom.</p><Button href="/edukacije/online-kurs" variant="secondary">Detalji</Button></div></div></section>
    </>
  );
}
