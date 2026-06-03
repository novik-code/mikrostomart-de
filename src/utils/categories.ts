export type Category =
  | 'zahnimplantate'
  | 'all-on-x'
  | 'kosten'
  | 'zahntourismus'
  | 'behandlungen'
  | 'ratgeber';

export const categoryMeta: Record<Category, {
  label: string;
  shortDescription: string;
  description: string;
}> = {
  'zahnimplantate': {
    label: 'Zahnimplantate',
    shortDescription: 'Implantate in Polen',
    description: 'Zahnimplantate in Polen — Straumann und Nobel Biocare, Einzelimplantate, Sofortimplantation, Knochenaufbau. Premium-Qualität zu polnischen Preisen.',
  },
  'all-on-x': {
    label: 'All-on-4 / All-on-6',
    shortDescription: 'Feste Zähne an einem Tag',
    description: 'Festsitzender Zahnersatz auf Implantaten — All-on-4, All-on-6, Sofortbelastung. Für Patienten mit Zahnlosigkeit oder nicht erhaltungswürdigen Zähnen.',
  },
  'kosten': {
    label: 'Kosten & Preise',
    shortDescription: 'Preise & Ersparnis',
    description: 'Was kostet eine Zahnbehandlung in Polen? Preisvergleich Deutschland vs. Polen, Kostenbeispiele für Implantate, All-on-4, Kronen. Bis zu 60% Ersparnis.',
  },
  'zahntourismus': {
    label: 'Zahntourismus & Anreise',
    shortDescription: 'Anreise & Ablauf',
    description: 'Zahnbehandlung im Ausland organisieren — Anreise nach Opole, Ablauf, Termine, Garantie, Nachsorge in Deutschland. Praktischer Leitfaden für DACH-Patienten.',
  },
  'behandlungen': {
    label: 'Behandlungen',
    shortDescription: 'Leistungen der Praxis',
    description: 'Behandlungen in der Praxis Mikrostomart Opole — Mikroskopische Wurzelbehandlung, Prothetik, Ästhetik, Knochenaufbau, Sinuslift.',
  },
  'ratgeber': {
    label: 'Patienten-Ratgeber',
    shortDescription: 'Wissen für Patienten',
    description: 'Patientenwissen rund um Zahnersatz und Behandlung im Ausland — Vor- und Nachteile, häufige Fragen, worauf Sie bei der Wahl der Praxis achten sollten.',
  },
};

export const allCategories = Object.keys(categoryMeta) as Category[];

export function readingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' });
}
