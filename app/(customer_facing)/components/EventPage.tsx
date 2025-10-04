"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

// Hardcoded event data (design prototype only)
const EVENT = {
  title: "Podlaskie Kobiece Kręgi – Weekend Odrodzenia",
  subtitle: "Krąg, natura, dźwięk, oddech",
  location: "Folwark Nad Rzeką, Podlasie",
  country: "Polska",
  startDate: "2025-07-12",
  endDate: "2025-07-14",
  price: 1290,
  currency: "PLN",
  priceIncludes: [
    "Noclegi 2 noce",
    "Pełne wyżywienie vege",
    "Warsztaty i kręgi",
    "Ceremonia dźwięku",
  ],
  spotsTotal: 28,
  spotsLeft: 7,
  difficulty: "Otwarte dla wszystkich",
  host: {
    name: "Anna Korcz",
    avatar:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=300&q=60",
    bio: "Facylitatorka pracy z ciałem i głosem. 10+ lat doświadczenia w prowadzeniu kręgów kobiet i warsztatów oddechowych.",
  },
  heroImages: [
    {
      src: "https://images.unsplash.com/photo-1528712306091-ed0763094c98?auto=format&fit=crop&w=1400&q=80",
      alt: "Ceremonial circle at dusk",
    },
    {
      src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
      alt: "Forest yoga practice",
    },
    {
      src: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Healthy retreat meal",
    },
    {
      src: "https://images.unsplash.com/photo-1758797315487-b3b225dff7d8?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Healthy exercise",
    },
  ],
  tags: ["KRĄG", "ODDECH", "DŹWIĘK", "NATURA"],
  rating: 4.9,
  reviewsCount: 37,
  body: `Zanurz się w letnim doświadczeniu głębokiej regeneracji wśród podlaskich łąk i lasów. Ten weekend jest zaproszeniem do spotkania z własnym rytmem poprzez pracę z oddechem, dźwiękiem, ruchem i kobiecą wspólnotą.\n\nKażdy dzień to struktura warsztatowa łącząca poranne otwieranie ciała i głosu, kręgi dzielenia, oddech transformatywny oraz wieczorne ceremonie z misami i bębnami. Przestrzeń tworzymy w duchu szacunku, uważności i łagodności. Nie potrzebujesz wcześniejszego doświadczenia.\n\nPosiłki są roślinne, sezonowe, oparte o lokalne produkty. Zakwaterowanie w przytulnych pokojach 2-3 osobowych w zabytkowym folwarku położonym nad rzeką.`,
  schedule: [
    {
      time: "Dzień 1 (sobota)",
      items: [
        "Przyjazd i zakwaterowanie od 10:00",
        "Powitalny krąg i lunch",
        "Warsztat oddechu i głosu",
        "Kolacja",
        "Ceremonia dźwięku przy ognisku",
      ],
    },
    {
      time: "Dzień 2 (niedziela)",
      items: [
        "Poranna praktyka ruch + oddech",
        "Śniadanie",
        "Krąg tematyczny: Odwaga w wyrażaniu",
        "Lunch",
        "Czas w naturze / sauna",
        "Kolacja",
        "Wieczorna integracja",
      ],
    },
    {
      time: "Dzień 3 (poniedziałek)",
      items: [
        "Poranna medytacja w ciszy",
        "Śniadanie",
        "Krąg zamknięcia",
        "Lunch i wyjazdy (do 14:00)",
      ],
    },
  ],
  map: {
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.577307692102!2d19.94497987716411!3d52.22967597975737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc6699b9e6d1%3A0x2c40f7d02bbebf7!2sPoland!5e0!3m2!1sen!2spl!4v1700000000000!5m2!1sen!2spl",
  },
};

const formatDateRange = (start: string, end: string) => {
  const s = new Date(start);
  const e = new Date(end);
  const intl = new Intl.DateTimeFormat("pl-PL", {
    day: "2-digit",
    month: "short",
  });
  return `${intl.format(s)} – ${intl.format(e)} 2025`;
};

export default function EventPage() {
  const dateRange = useMemo(
    () => formatDateRange(EVENT.startDate, EVENT.endDate),
    []
  );

  return (
    <main className="w-full px-4 pt-6 pb-24 md:pt-10">
      {/* Narrow Horizontal Montage Bar */}
      <section className="mx-auto mb-14 max-w-7xl">
        <div className="relative h-48 w-full overflow-hidden rounded-sm md:h-56 lg:h-64">
          {/* Edge gradients for visual depth */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent opacity-60 mix-blend-multiply" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent opacity-60 mix-blend-multiply" />
          <div className="flex h-full w-[140%] -translate-x-[15%] items-stretch gap-2 md:w-full md:translate-x-0 md:gap-3">
            {EVENT.heroImages.map((img, i) => {
              // Weight logic: first image bigger, last smaller, middle medium
              const weights = [
                "basis-[32%]",
                "basis-[20%]",
                "basis-[28%]",
                "basis-[20%]",
              ]; // fallback if >4 could map differently
              const basis = weights[i] || "basis-[20%]";
              return (
                <div
                  key={img.src}
                  className={`group relative flex-1 ${basis} overflow-hidden rounded-[4px]`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    priority={i === 0}
                    sizes="(max-width:768px) 40vw, (min-width:1024px) 25vw"
                    className="object-cover brightness-105 transition-all duration-[1600ms] group-hover:scale-[1.05] group-hover:brightness-110"
                  />
                  {/* Overlay subtle */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/10 opacity-70 mix-blend-multiply" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Title + Meta */}
      <section className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
        <h1 className="font-rox-reg text-foreground1 mb-6 text-4xl leading-tight md:text-5xl lg:text-6xl">
          {EVENT.title}
        </h1>
        <p className="text-foreground2 mb-6 text-lg tracking-wide md:text-xl">
          {EVENT.subtitle}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {EVENT.tags.map(t => (
            <span
              key={t}
              className="bg-tertiary text-primary rounded-sm px-3 py-1 text-xs font-semibold tracking-wide"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Main 2-column layout */}
      <section className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
        {/* Content column */}
        <div className="lg:col-span-8 lg:pr-8">
          {/* Meta bar */}
          <div className="text-foreground1/70 mb-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm">
            <div>
              <strong className="text-foreground1">Data:</strong> {dateRange}
            </div>
            <div>
              <strong className="text-foreground1">Miejsce:</strong>{" "}
              {EVENT.location}
            </div>
            <div>
              <strong className="text-foreground1">Liczba miejsc:</strong>{" "}
              {EVENT.spotsTotal} (wolnych {EVENT.spotsLeft})
            </div>
            <div>
              <strong className="text-foreground1">Poziom:</strong>{" "}
              {EVENT.difficulty}
            </div>
            <div>
              <strong className="text-foreground1">Ocena:</strong> ⭐{" "}
              {EVENT.rating} ({EVENT.reviewsCount})
            </div>
          </div>

          {/* Body text */}
          <article className="prose prose-neutral dark:prose-invert max-w-none">
            {EVENT.body.split(/\n\n/).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </article>

          {/* Schedule */}
          <div className="mt-16">
            <h2 className="font-rox-reg text-foreground1 mb-6 text-3xl md:text-4xl">
              Plan weekendu
            </h2>
            <div className="space-y-8">
              {EVENT.schedule.map(block => (
                <div
                  key={block.time}
                  className="rounded-sm border border-black/5 p-5 shadow-sm"
                >
                  <h3 className="text-foreground1 mb-3 text-lg font-semibold tracking-wide">
                    {block.time}
                  </h3>
                  <ul className="list-disc space-y-1 pl-6 text-sm md:text-base">
                    {block.items.map(it => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Facilitator */}
          <div className="mt-20">
            <h2 className="font-rox-reg text-foreground1 mb-6 text-3xl md:text-4xl">
              Prowadząca
            </h2>
            <div className="flex flex-col gap-6 rounded-sm border border-black/5 p-6 shadow-sm md:flex-row md:items-start">
              <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-full">
                <Image
                  src={EVENT.host.avatar}
                  alt={EVENT.host.name}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-foreground1 mb-1 text-xl font-semibold">
                  {EVENT.host.name}
                </h3>
                <p className="text-foreground1/80 text-sm leading-relaxed md:text-base">
                  {EVENT.host.bio}
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-20">
            <h2 className="font-rox-reg text-foreground1 mb-6 text-3xl md:text-4xl">
              Mapa lokacji
            </h2>
            <div className="overflow-hidden rounded-sm border border-black/5 shadow-sm">
              <div className="relative aspect-[16/9] w-full">
                <iframe
                  src={EVENT.map.embedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full"
                  aria-label="Mapa lokalizacji wydarzenia"
                />
              </div>
            </div>
          </div>

          {/* Secondary CTA */}
          <div className="mt-24 flex flex-col items-center gap-4">
            <p className="text-foreground1/70 text-sm tracking-wide uppercase">
              Masz pytania?
            </p>
            <Link
              href="#kontakt"
              className="bg-tertiary text-primary hover:bg-foreground1 hover:text-primary px-12 py-4 text-base font-semibold tracking-wide transition-colors duration-200"
            >
              Skontaktuj się z nami
            </Link>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 lg:pl-4">
          <div className="lg:sticky lg:top-28">
            <div className="rounded-sm border border-black/5 p-6 shadow-sm">
              <div className="mb-6 flex items-end justify-between">
                <div>
                  <span className="text-foreground1 text-3xl font-semibold">
                    {EVENT.price}
                  </span>
                  <span className="text-foreground1/70 ml-1 text-sm font-medium">
                    {EVENT.currency}
                  </span>
                </div>
                <span className="text-foreground2 text-xs font-semibold tracking-wide">
                  {EVENT.spotsLeft} miejsc wolnych
                </span>
              </div>
              <button className="bg-tertiary text-primary hover:bg-foreground1 hover:text-primary mb-6 w-full px-6 py-4 text-base font-semibold tracking-wide transition-colors duration-200">
                Zarezerwuj miejsce
              </button>
              <ul className="text-foreground1/80 mb-6 space-y-2 text-sm">
                {EVENT.priceIncludes.map(it => (
                  <li key={it} className="flex gap-2">
                    <span className="text-tertiary">•</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <div className="text-foreground1/70 mb-6 border-t border-black/5 pt-4 text-sm">
                <p>
                  Rezerwacja wymaga zaliczki 400 PLN. Szczegóły płatności
                  otrzymasz w mailu potwierdzającym.
                </p>
              </div>
              <div className="text-foreground1/80 flex items-center gap-3 text-sm">
                <span>⭐</span>
                <span>
                  {EVENT.rating} / 5 ({EVENT.reviewsCount} opinii)
                </span>
              </div>
            </div>

            <div className="mt-8 rounded-sm border border-black/5 p-6 shadow-sm">
              <h4 className="text-foreground1 mb-4 text-sm font-semibold tracking-wide uppercase">
                Informacje
              </h4>
              <dl className="text-foreground1/80 space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-foreground1/60">Data</dt>
                  <dd>{dateRange}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-foreground1/60">Miejsce</dt>
                  <dd className="text-right">{EVENT.location}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-foreground1/60">Kraj</dt>
                  <dd>{EVENT.country}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-foreground1/60">Miejsca</dt>
                  <dd>
                    {EVENT.spotsTotal} / {EVENT.spotsLeft} wolnych
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-foreground1/60">Poziom</dt>
                  <dd>{EVENT.difficulty}</dd>
                </div>
              </dl>
            </div>

            <div className="mt-8 rounded-sm border border-black/5 p-6 shadow-sm">
              <h4 className="text-foreground1 mb-4 text-sm font-semibold tracking-wide uppercase">
                Udostępnij
              </h4>
              <div className="flex gap-3 text-sm">
                <button className="bg-tertiary text-primary hover:bg-foreground1 hover:text-primary rounded-sm px-4 py-2 font-semibold transition-colors duration-200">
                  Link
                </button>
                <button className="bg-tertiary text-primary hover:bg-foreground1 hover:text-primary rounded-sm px-4 py-2 font-semibold transition-colors duration-200">
                  FB
                </button>
                <button className="bg-tertiary text-primary hover:bg-foreground1 hover:text-primary rounded-sm px-4 py-2 font-semibold transition-colors duration-200">
                  IG
                </button>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
