// Placeholder featured articles for the homepage bottom row

export const featuredArticles = [
  {
    image:
      "https://images.unsplash.com/photo-1641737885878-78e076b4cf1c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Kundalini energia",
    title: "Czym jest energia Kundalini?",
    description:
      "Poznaj podstawy pracy z energią i jak bezpiecznie rozpocząć praktykę.",
    href: "/artykuly/energia-kundalini",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504194921103-f8b80cadd5e4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Wyjazdy rozwojowe",
    title: "Moda na wyjazdy rozwojowe – skąd się wzięła i dlaczego warto?",
    description:
      "Dlaczego retreaty i warsztaty dla kobiet rosną w siłę i co za nimi stoi.",
    href: "/blog/moda-na-wyjazdy-rozwojowe",
  },
  {
    image:
      "https://images.unsplash.com/photo-1601909977949-94b1582edc47?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Oddech jako narzędzie",
    title: "Oddech: narzędzie zmiany stanu",
    description: "Proste techniki, które uspokoją układ nerwowy w 5 minut.",
    href: "/artykuly/oddech-zmiana-stanu",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504194921103-f8b80cadd5e4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Kręgi kobiet",
    title: "Dlaczego kręgi kobiet są ważne?",
    description: "Wspólnota, uważność, przestrzeń na głos i emocje.",
    href: "/artykuly/kregi-kobiet",
  },
  {
    image:
      "https://images.unsplash.com/photo-1619968747465-f56008f0da50?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Dźwięk mis tybetańskich",
    title: "Misy tybetańskie: co warto wiedzieć",
    description: "Jak działają, skąd pochodzą i kiedy z nich korzystać?",
    href: "/artykuly/misy-tybetanskie",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1470&auto=format&fit=crop",
    imageAlt: "Poranna mgła w lesie",
    title: "7 nietypowych sposobów na odpoczynek",
    description:
      "Cisza, krąg kobiet, joga nidra i inne formy odpoczynku z duszą.",
    href: "/blog/7-nietypowych-sposobow-na-odpoczynek",
  },
] as const;

// --- Blog listing helpers/types ---

export type ArticleCategory =
  | "Wyjazdy"
  | "Wydarzenia"
  | "Kręgi kobiet"
  | "Oddech i medytacja"
  | "Dźwięk i wibracje"
  | "Rozwój osobisty";

export const ARTICLE_CATEGORIES: ArticleCategory[] = [
  "Wyjazdy",
  "Wydarzenia",
  "Kręgi kobiet",
  "Oddech i medytacja",
  "Dźwięk i wibracje",
  "Rozwój osobisty",
];

export interface Article {
  id: string;
  title: string;
  description?: string;
  image: string;
  imageAlt?: string;
  href: string;
  category: ArticleCategory;
  publishDate: string; // ISO date string
}

// Derive a few full Article entries from featuredArticles and pad with extras
type FeaturedItem = {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  href: string;
};
const derived: Article[] = (featuredArticles as readonly FeaturedItem[]).map(
  (a, idx) => {
    const cat = ARTICLE_CATEGORIES[idx % ARTICLE_CATEGORIES.length];
    const slugFromHref =
      a.href.split("/").filter(Boolean).pop() || `artykul-${idx + 1}`;
    return {
      id: slugFromHref,
      title: a.title,
      description: a.description,
      image: a.image,
      imageAlt: a.imageAlt || a.title,
      href: a.href,
      category: cat,
      // recent dates spaced by a few days
      publishDate: new Date(Date.now() - idx * 1000 * 60 * 60 * 24 * 3)
        .toISOString()
        .slice(0, 10),
    } satisfies Article;
  }
);

const extra: Article[] = [

  {
    id: "medytacja-poranna",
    title: "Medytacja poranna: 7 minut spokoju",
    description:
      "Krótka praktyka, która pomoże Ci zacząć dzień z energią i uważnością.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=799",
    imageAlt: "Medytacja o poranku",
    href: "/artykuly/medytacja-poranna",
    category: "Oddech i medytacja",
    publishDate: "2025-09-05",
  },
  {
    id: "prawo-oddechu",
    title: "Prawo oddechu: nauka i praktyka",
    description:
      "Jak poprawna praca z oddechem wpływa na ciało i układ nerwowy.",
    image:
      "https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1470&auto=format&fit=crop",
    imageAlt: "Ćwiczenia oddechowe",
    href: "/artykuly/prawo-oddechu",
    category: "Oddech i medytacja",
    publishDate: "2025-07-21",
  },
  {
    id: "cyfrowy-detoks",
    title: "Cyfrowy detoks: jak zacząć?",
    description:
      "Proste kroki, które zmniejszą przebodźcowanie i poprawią sen.",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1470&auto=format&fit=crop",
    imageAlt: "Cyfrowy detoks",
    href: "/artykuly/cyfrowy-detoks",
    category: "Rozwój osobisty",
    publishDate: "2025-08-12",
  },
  {
    id: "inwestycja-w-siebie",
    title: "Inwestycja w siebie: od czego zacząć?",
    description:
      "Najlepszy zwrot daje konsekwencja – oto plan na pierwsze 30 dni.",
    image:
      "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=1470&auto=format&fit=crop",
    imageAlt: "Planowanie rozwoju",
    href: "/artykuly/inwestycja-w-siebie",
    category: "Rozwój osobisty",
    publishDate: "2025-06-10",
  },
];

export const allArticles: Article[] = [...derived, ...extra];
