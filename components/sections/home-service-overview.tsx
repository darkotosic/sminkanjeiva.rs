import Image from 'next/image';
import { portfolioOverview } from '@/data/portfolio-content';

export function HomeServiceOverview() {
  return (
    <section className="section section-bordered" aria-labelledby="services-overview-heading">
      <div className="container">
        <div className="home-service-grid">
          {portfolioOverview.map((item) => (
            <article key={item.title} className="home-service-card">
              <a href={item.href} aria-label={`Saznaj više: ${item.title}`}>
                <Image src={item.image} alt={item.alt} width={720} height={520} className="home-service-card-image" unoptimized />
                <div className="home-service-card-body">
                  <h2 id={item.title === 'Glam šminka' ? 'services-overview-heading' : undefined}>{item.title}</h2>
                  <p>{item.description}</p>
                  <span>Saznaj više →</span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
