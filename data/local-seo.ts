export type CityLandingData = {
  slug: 'sminkanje-ruma' | 'sminkanje-beograd' | 'sminkanje-novi-sad';
  city: 'Ruma' | 'Beograd' | 'Novi Sad';
  nearby: string[];
  title: string;
  intro: string;
  keywordVariants: string[];
  neighborhoods: string[];
};

export const cityLandings: CityLandingData[] = [
  {
    slug: 'sminkanje-ruma',
    city: 'Ruma',
    nearby: ['Sremska Mitrovica', 'Inđija', 'Šabac'],
    title: 'Šminkanje Ruma — profesionalni makeup studio za venčanja i proslave',
    intro:
      'Atelje Iva pruža profesionalno šminkanje u Rumi sa preciznom pripremom kože, postojanim proizvodima i jasnim planom termina.',
    keywordVariants: ['sminkanje ruma', 'sminjkanje ruma', 'sminker ruma'],
    neighborhoods: ['Centar', 'Breg', 'Pavlovci'],
  },
  {
    slug: 'sminkanje-beograd',
    city: 'Beograd',
    nearby: ['Novi Beograd', 'Zemun', 'Voždovac'],
    title: 'Šminkanje Beograd — teren za svadbe, evente i profesionalna snimanja',
    intro:
      'Radimo šminkanje na terenu u Beogradu za mlade, kume, gošće i klijentkinje kojima je važna tačnost i dugotrajnost look-a.',
    keywordVariants: ['sminkanje beograd', 'profesionalni sminker beograd', 'sminkanje za vencanje beograd'],
    neighborhoods: ['Vračar', 'Stari grad', 'Novi Beograd'],
  },
  {
    slug: 'sminkanje-novi-sad',
    city: 'Novi Sad',
    nearby: ['Petrovaradin', 'Veternik', 'Sremski Karlovci'],
    title: 'Šminkanje Novi Sad — bridal i svečani makeup sa dolaskom na lokaciju',
    intro:
      'Za Novi Sad nudimo organizovan dolazak na lokaciju, profesionalnu higijenu i makeup koji ostaje stabilan tokom celog događaja.',
    keywordVariants: ['sminkanje novi sad', 'sminker novi sad', 'sminkanje za vencanje novi sad'],
    neighborhoods: ['Centar', 'Grbavica', 'Liman'],
  },
];

export const intentLandings = [
  {
    slug: 'sminkanje-za-vencanje',
    title: 'Šminkanje za venčanje — mlada, kuma i uža porodica',
    description:
      'Stranica optimizovana za upite “šminkanje za venčanje” sa ponudom za Rumu, Beograd i Novi Sad, uključujući probu i plan dana venčanja.',
    keywordVariants: ['sminkanje za vencanje', 'svadbena sminka', 'sminka za mlade'],
  },
  {
    slug: 'sminkanje-za-decije-rodjendane',
    title: 'Šminkanje za dečije rođendane i porodične proslave',
    description:
      'Profesionalno, nežno i foto-prilagođeno šminkanje za mame i gošće na dečijim rođendanima i porodičnim događajima.',
    keywordVariants: ['sminkanje za decije rodjendane', 'smiknkanje za decije rodjendane', 'svecana sminka za rodjendan'],
  },
] as const;
