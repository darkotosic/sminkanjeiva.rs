# SminkanjeIva.rs — conversion-first beauty website

Next.js App Router + TypeScript struktura za premium makeup studio sajt optimizovan za zakazivanje i upite.

## Ključne isporuke
- Tačan sitemap i route arhitektura u `data/sitemap.ts`.
- Homepage conversion wireframe sa redosledom sekcija:
  Hero → Trust strip → Usluge → Diferencijatori → Portfolio → Recenzije → Booking CTA → FAQ → Kontakt.
- Reusable content model (`data/site.ts`, `data/services.ts`, `data/testimonials.ts`, `data/faq.ts`, `data/portfolio.ts`, `data/seo.ts`).
- Top-level stranice, detaljne service stranice i education-ready template.
- Netlify-safe inquiry forma sa honeypot zaštitom na `/kontakt`.
- `netlify.toml` sa canonical redirect pravilom i Next plugin podešavanjem.

## Pokretanje
```bash
npm install
npm run dev
```
