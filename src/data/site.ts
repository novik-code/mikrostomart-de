// Markenkonfiguration — mikrostomart.de
// FILAR DE: Zahnarzt in Polen / Opole für DACH-Patienten

export const site = {
  url: 'https://mikrostomart.de',
  title: 'Zahnarzt in Polen — Zahnimplantate & Zahnersatz | Mikrostomart Opole',
  shortTitle: 'Mikrostomart — Zahnarzt Polen',
  description:
    'Deutschsprachiger Zahnarzt in Polen (Opole) — Zahnimplantate, All-on-4, Zahnersatz zu polnischen Preisen, westliche Qualität. Behandlung bei lek. dent. Marcin Nowosielski, M.Sc. RWTH Aachen. Bis zu 60% sparen, nur ~1,5 Std. von der deutschen Grenze.',
  ogImage: '/og-default.svg',
  locale: 'de-DE',
  // Autor / behandelnder Zahnarzt — Marcin Nowosielski (kanonische ID auf nowosielski.pl)
  author: {
    name: 'Marcin Nowosielski',
    honorificPrefix: 'lek. dent.',
    honorificSuffix: 'M.Sc.',
    canonicalUrl: 'https://nowosielski.pl',
    canonicalId: 'https://nowosielski.pl/#person',
    jobTitle: 'Zahnarzt, Implantologe, M.Sc. RWTH Aachen',
    image: '/dr-marcin.webp',
    email: 'gabinet@mikrostomart.pl',
  },
  // Praxis / Behandlungsort
  clinic: {
    name: 'Mikrostomart',
    legalName: 'Mikrostomart — Premium-Zahnklinik Opole',
    url: 'https://mikrostomart.pl',
    bookingUrl: 'https://mikrostomart.pl/rezerwacja',
    contactUrl: 'https://mikrostomart.pl/kontakt',
    phone: '+48 570 270 470',
    phoneAlt: '+48 570 810 800',
    phoneHref: 'tel:+48570270470',
    email: 'gabinet@mikrostomart.pl',
    address: {
      street: 'ul. Centralna 33a',
      city: 'Opole',
      region: 'Woiwodschaft Opole',
      postalCode: '45-940',
      country: 'PL',
    },
    geo: {
      latitude: 50.6751,
      longitude: 17.9213,
    },
    openingHours: [
      { day: 'Monday', opens: '09:00', closes: '20:00' },
      { day: 'Tuesday', opens: '09:00', closes: '20:00' },
      { day: 'Wednesday', opens: '09:00', closes: '20:00' },
      { day: 'Thursday', opens: '09:00', closes: '20:00' },
      { day: 'Friday', opens: '09:00', closes: '16:00' },
    ],
    gbpUrl: 'https://share.google/uqFxAL4vtBaH3ATbg',
    gbpMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Mikrostomart+Opole+Centralna+33a',
    sameAs: [
      'https://share.google/uqFxAL4vtBaH3ATbg',
      'https://www.znanylekarz.pl/placowki/gabinet-mikrostomart-2',
      'https://www.facebook.com/mikrostomart',
      'https://www.instagram.com/mikrostomart_opole/',
    ],
  },
  // Wichtigste Keywords (DE)
  keywords: [
    'Zahnarzt Polen',
    'Zahnimplantate Polen',
    'Zahnersatz Polen Kosten',
    'All-on-4 Polen',
    'Zahnbehandlung Ausland',
    'Zahntourismus Polen',
    'Zahnarzt Opole',
    'Implantate Polen Preise',
  ],
  // Sprachversionen (hreflang)
  alternates: {
    de: 'https://mikrostomart.de',
    en: 'https://mikrostomart.com',
    pl: 'https://mikrostomart.pl',
  },
  lang: 'de',
};

export const nav = [
  { label: 'Zahnimplantate', href: '/zahnimplantate-polen' },
  { label: 'All-on-4', href: '/all-on-4-polen' },
  { label: 'Kosten', href: '/zahnersatz-kosten-polen' },
  { label: 'Anreise & Ablauf', href: '/zahntourismus-opole' },
  { label: 'Blog', href: '/blog' },
  { label: 'Über uns', href: '/ueber-uns' },
];
