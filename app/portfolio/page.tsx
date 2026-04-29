import { PageHero } from '@/components/sections/page-hero';
import { PortfolioGrid } from '@/components/sections/portfolio-grid';
import { Button } from '@/components/ui/button';

export default function PortfolioPage() {
  return (
    <>
      <PageHero title="Portfolio" intro="Galerija je automatski povezana sa folderima: bridal_makeup, colorful_makeup, face_paint, film_sfx_makeup, glam_makeup i natural_glam_makeup." />
      <section className="section"><div className="container"><PortfolioGrid /></div><div className="container" style={{ marginTop: '1rem' }}><Button href="/kontakt">Pošalji upit</Button></div></section>
    </>
  );
}
