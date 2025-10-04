// Placeholder data for PlaceOfTheMonth section
// Keep shape compatible with EventOfTheMonth component props

export interface PlaceOfTheMonthData {
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}

export const placeOfTheMonth: PlaceOfTheMonthData = {
  image:
    "https://images.unsplash.com/photo-1721816954619-7ba938863075?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  imageAlt: "Górskie siedlisko na łonie natury",
  title: "Miejsce miesiąca",
  subtitle: "Siedlisko Izerskie – cisza, sauna, rzeka",
  body: `Sielskie siedlisko w Górach Izerskich – kameralne, otulone lasem i szumem rzeki. Idealne dla kręgów, medytacji i małych retreatów.

Klimatyczne pokoje, sala warsztatowa z drewnianą podłogą, sauna i dostęp do dzikiej natury tuż za progiem. Miejsce tworzone z sercem, które wspiera spokój i skupienie.

Gospodarze dbają o detale: zdrową, sezonową kuchnię, przyjazną przestrzeń do bycia razem i zakątki do samotnej refleksji. To miejsce, do którego chce się wracać – by zwolnić, usłyszeć siebie i napełnić się spokojem.`,
  ctaLabel: "Zobacz szczegóły",
  ctaHref: "/miejsca/izerskie-siedlisko",
};
