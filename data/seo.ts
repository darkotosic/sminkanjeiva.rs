export const seoByRoute: Record<string, { title: string; description: string; canonical: string }> = {
  '/': {
    title: 'Profesionalna šminka u Novom Sadu',
    description: 'Premium makeup studio za venčanja, događaje i posebne prilike. Zakažite termin brzo i jednostavno.',
    canonical: '/',
  },
  '/o-nama': {
    title: 'O nama',
    description: 'Upoznajte pristup, iskustvo i profesionalne standarde Atelje Iva beauty studija.',
    canonical: '/o-nama',
  },
  '/usluge': {
    title: 'Usluge šminkanja',
    description: 'Pregled bridal, svečanih, maturalnih i studijskih makeup usluga sa jasnom CTA logikom.',
    canonical: '/usluge',
  },
  '/kontakt': {
    title: 'Kontakt i zakazivanje',
    description: 'Pošaljite upit za dostupnost termina, cenu i preporuku usluge.',
    canonical: '/kontakt',
  },
};
