export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  fullIntro: string;
  whoItIsFor: string;
  includes: string[];
  duration: string;
  priceLabel: string;
  prepNotes: string[];
  faq: { question: string; answer: string }[];
  heroImage: string;
  featured: boolean;
  active: boolean;
};

export const services: Service[] = [
  {
    slug: 'sminka-za-mlade',
    title: 'Šminka za mlade',
    shortDescription:
      'Pouzdana, dugotrajna i elegantna bridal šminka koja izgleda besprekorno uživo i na fotografijama tokom celog dana.',
    fullIntro: 'Bridal usluga sa detaljnom pripremom tena i fokusom na camera-ready finish.',
    whoItIsFor: 'Za mlade koje žele siguran rezultat bez stresa na dan venčanja.',
    includes: ['Konsultacija', 'Priprema kože', 'Fiksiranje dugotrajnih slojeva'],
    duration: '90 minuta',
    priceLabel: 'od 120€',
    prepNotes: ['Dođite bez jake SPF zaštite.', 'Poželjno je uraditi probni termin.'],
    faq: [{ question: 'Da li je probna šminka obavezna?', answer: 'Nije obavezna, ali je preporučena.' }],
    heroImage: '/images/service-bridal.jpg',
    featured: true,
    active: true,
  },
  {
    slug: 'svecana-sminka',
    title: 'Svečana šminka',
    shortDescription:
      'Makeup za proslave, rođendane, gala događaje i posebne prilike, prilagođen vašem stilu i tipu lica.',
    fullIntro: 'Elegantni look-ovi planirani prema garderobi, osvetljenju i trajanju događaja.',
    whoItIsFor: 'Za klijentkinje koje žele sofisticiran i postojan izgled.',
    includes: ['Analiza lica', 'Korekcije i konture', 'Završno fiksiranje'],
    duration: '75 minuta',
    priceLabel: 'od 70€',
    prepNotes: ['Ponesite referentnu fotografiju haljine.', 'Poželjno je doći 10 minuta ranije.'],
    faq: [{ question: 'Da li radite rane jutarnje termine?', answer: 'Da, uz prethodnu rezervaciju.' }],
    heroImage: '/images/service-event.jpg',
    featured: true,
    active: true,
  },
  {
    slug: 'matura-i-proslava',
    title: 'Matura i proslave',
    shortDescription:
      'Moderni i postojani look-ovi za maturu, apsolventsko veče i sve trenutke kada želite siguran i sređen finalni izgled.',
    fullIntro: 'Savremen makeup sa balansom između trendova i prirodne harmonije lica.',
    whoItIsFor: 'Za maturantkinje i klijentkinje koje žele dugotrajnu svečanu šminku.',
    includes: ['Definisanje željenog stila', 'Personalizovana tehnika', 'Final check'],
    duration: '60 minuta',
    priceLabel: 'od 55€',
    prepNotes: ['Nega kože noć pre termina.', 'Izbegavati nove tretmane 48h pre termina.'],
    faq: [{ question: 'Da li je moguće grupno zakazivanje?', answer: 'Da, uz raniju rezervaciju.' }],
    heroImage: '/images/service-prom.jpg',
    featured: true,
    active: true,
  },
  {
    slug: 'studijska-sminka',
    title: 'Studijska šminka',
    shortDescription:
      'Precizno izvedena šminka za fotografisanja, kampanje, snimanja i sadržaj koji traži čist i profesionalan finish.',
    fullIntro: 'Tehnički precizna usluga za foto/video produkciju i kampanje.',
    whoItIsFor: 'Za brendove, kreatore sadržaja i privatne klijentkinje pred snimanje.',
    includes: ['Produkcijski brief', 'Foto-video prilagođavanje', 'Set-ready završnica'],
    duration: '90 minuta',
    priceLabel: 'cena na upit',
    prepNotes: ['Pošaljite moodboard unapred.', 'Potvrda termina 24h ranije.'],
    faq: [{ question: 'Da li ste dostupni na lokaciji snimanja?', answer: 'Da, uz dogovor i plan produkcije.' }],
    heroImage: '/images/service-studio.jpg',
    featured: true,
    active: true,
  },
  { slug: 'frizura', title: 'Frizura', shortDescription: 'Kreiranje svečanih i bridal frizura.', fullIntro: 'Usluga po dogovoru.', whoItIsFor: 'Za klijentkinje koje žele kompletan look.', includes: ['Stilizovanje'], duration: '60 minuta', priceLabel: 'na upit', prepNotes: ['Dovesti čistu kosu.'], faq: [], heroImage: '/images/service-hair.jpg', featured: false, active: false },
  { slug: 'obrve', title: 'Obrve', shortDescription: 'Oblikovanje i bojenje obrva.', fullIntro: 'Usluga po dostupnosti.', whoItIsFor: 'Za klijentkinje kojima treba precizna korekcija.', includes: ['Korekcija'], duration: '30 minuta', priceLabel: 'na upit', prepNotes: ['Bez agresivnih tretmana kože pre termina.'], faq: [], heroImage: '/images/service-brows.jpg', featured: false, active: false },
  { slug: 'trepavice', title: 'Trepavice', shortDescription: 'Lash stilizovanje za događaje.', fullIntro: 'Usluga po dostupnosti.', whoItIsFor: 'Za dodatni efekat pogleda.', includes: ['Aplikacija trepavica'], duration: '30 minuta', priceLabel: 'na upit', prepNotes: ['Bez uljanih proizvoda oko oka.'], faq: [], heroImage: '/images/service-lashes.jpg', featured: false, active: false },
];
