export const seoByRoute: Record<string, { title: string; description: string; canonical: string; keywords: string[] }> = {
  '/': {
    title: 'Profesionalna šminka u Rumi | teren Beograd i Novi Sad',
    description:
      'Premium makeup studio sa centralnom lokacijom u Rumi i radom na terenu u Beogradu i Novom Sadu. Zakažite termin brzo i jednostavno.',
    canonical: '/',
    keywords: ['sminkanje ruma', 'sminkanje beograd', 'sminkanje novi sad', 'sminka za vencanje', 'svecana sminka'],
  },
  '/o-nama': {
    title: 'O nama',
    description: 'Upoznajte pristup, iskustvo i profesionalne standarde Atelje Iva beauty studija.',
    canonical: '/o-nama',
    keywords: ['profesionalni sminker', 'makeup studio ruma', 'atelje iva'],
  },
  '/usluge': {
    title: 'Usluge šminkanja',
    description: 'Pregled bridal, svečanih, maturalnih i studijskih makeup usluga sa jasnom CTA logikom.',
    canonical: '/usluge',
    keywords: ['sminkanje za vencanje', 'svecana sminka', 'maturalna sminka'],
  },
  '/kontakt': {
    title: 'Kontakt i zakazivanje',
    description: 'Pošaljite upit za dostupnost termina, cenu i preporuku usluge.',
    canonical: '/kontakt',
    keywords: ['zakazivanje sminkanja', 'kontakt sminker', 'sminkanje ruma telefon'],
  },
};
