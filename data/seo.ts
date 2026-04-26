export const seoByRoute: Record<string, { title: string; description: string; canonical: string }> = {
  '/': {
    title: 'Profesionalna šminka u Rumi | teren Beograd i Novi Sad',
    description: 'Premium makeup studio sa centralnom lokacijom u Rumi i radom na terenu u Beogradu i Novom Sadu. Zakažite termin brzo i jednostavno.',
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
