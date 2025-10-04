// Placeholder data for EventOfTheMonth component
// Adjust content later to pull from CMS or API.

export interface EventOfTheMonthData {
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  body: string; // double newlines will split into paragraphs
  ctaLabel: string;
  ctaHref: string;
}

export const eventOfTheMonth: EventOfTheMonthData = {
  image:
    "https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  imageAlt: "Warsztaty kobiece na łonie natury",
  title: "Wydarzenie miesiąca",
  subtitle: "Warsztaty kobiece z duchem Podlasia",
  body: `Zapraszamy na wyjątkowe spotkanie kobiet w duchu uważności, łagodności i wzajemnego wsparcia. Weekendowe warsztaty to czas na oddech, ruch, dźwięk i rozmowę w bezpiecznej, serdecznej atmosferze – z dala od zgiełku, blisko natury.

Pod okiem doświadczonej prowadzącej zanurzysz się w praktykach otwierających ciało i głos, w kręgach dzielenia oraz w kojących ceremoniach dźwięku. Program jest przyjazny dla osób początkujących i elastyczny – tak, aby każdy mógł znaleźć swój rytm i przestrzeń.

Dbamy o proste, sezonowe, roślinne posiłki i wygodne zakwaterowanie w przytulnym miejscu sprzyjającym regeneracji. Wrócisz z lekkością w ciele, klarownością w głowie i poczuciem, że masz do czego wracać – do siebie.`,
  ctaLabel: "Więcej informacji",
  ctaHref: "/wydarzenia/podlasie",
};
