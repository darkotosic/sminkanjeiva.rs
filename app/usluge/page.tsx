import { PageHero } from '@/components/sections/page-hero';
import { ServicesGrid } from '@/components/sections/services-grid';
import { Button } from '@/components/ui/button';
import { getMetadata } from '@/lib/seo';

export const metadata = getMetadata('/usluge');

export default function UslugePage() {
  return (
    <>
      <PageHero title="Usluge" intro="Jasan pregled usluga sa fokusom na rezultat, trajnost i individualno prilagođavanje." />
      <section className="section"><div className="container"><ServicesGrid /></div></section>
      <section className="section" style={{ paddingTop: 0 }}><div className="container card"><h2>Kako izgleda proces</h2><p>Upit → preporuka usluge → potvrda termina → priprema → realizacija.</p><h3>Price logic</h3><p>Početna cena zavisi od tipa usluge, lokacije i eventualnog paketa.</p><Button href="/kontakt">Pošalji upit</Button></div></section>
    </>
  );
}
