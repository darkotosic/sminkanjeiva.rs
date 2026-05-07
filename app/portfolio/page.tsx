import { PageHero } from '@/components/sections/page-hero';
import { PortfolioGrid } from '@/components/sections/portfolio-grid';
import { Button } from '@/components/ui/button';
import { getPortfolioItems, getPortfolioItemsByFolders } from '@/lib/portfolio';
import { glamStyles, portfolioTexts } from '@/data/portfolio-content';

export default async function PortfolioPage() {
  const portfolioItems = await getPortfolioItems();
  const glamItems = await getPortfolioItemsByFolders(['glam_makeup', 'natural_glam_makeup', 'bridal_makeup', 'colorful_makeup']);
  const facePaintItems = await getPortfolioItemsByFolders(['face_paint']);
  const sfxItems = await getPortfolioItemsByFolders(['film_sfx_makeup']);

  return (
    <>
      <PageHero title="Portfolio" intro="Tri pravca rada — glam šminka, oslikavanje lica i specijalni efekti — sa stilovima, pričom i galerijama za svaki portfolio." />

      <section className="section portfolio-story" id="glam-sminka">
        <div className="container">
          <div className="card portfolio-intro-card">
            <p className="eyebrow">Prvi portfolio</p>
            <h2>Glam šminka</h2>
            <p>{portfolioTexts.glam}</p>
            <p>Ovaj portfolio je podeljen u 4 stila, kako bi svaki izgled imao svoj karakter i priču:</p>
          </div>
          <div className="grid grid-4 portfolio-style-grid">
            {glamStyles.map((style) => (
              <article key={style.title} className="card portfolio-style-card">
                <h3>{style.title}</h3>
                <p>{style.description}</p>
              </article>
            ))}
          </div>
          <PortfolioGrid items={glamItems} />
        </div>
      </section>

      <section className="section portfolio-story section-soft" id="oslikavanje-lica">
        <div className="container">
          <div className="card portfolio-intro-card">
            <p className="eyebrow">Drugi portfolio</p>
            <h2>Oslikavanje lica</h2>
            <p>{portfolioTexts.facePaint}</p>
          </div>
          <PortfolioGrid items={facePaintItems} />
        </div>
      </section>

      <section className="section portfolio-story" id="specijalni-efekti">
        <div className="container">
          <div className="card portfolio-intro-card">
            <p className="eyebrow">Treći portfolio</p>
            <h2>Specijalni efekti</h2>
            <p>{portfolioTexts.sfx}</p>
            <p><strong>{portfolioTexts.sfxProjects}</strong></p>
          </div>
          <PortfolioGrid items={sfxItems} />
          <div style={{ marginTop: '1rem' }}><Button href="/kontakt">Pošalji upit</Button></div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <details className="card">
            <summary style={{ cursor: 'pointer', fontWeight: 700 }}>Prikaži sve fotografije zajedno</summary>
            <div style={{ marginTop: '1.5rem' }}>
              <PortfolioGrid items={portfolioItems} />
            </div>
          </details>
        </div>
      </section>
    </>
  );
}
