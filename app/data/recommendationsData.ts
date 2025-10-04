// Placeholder recommendations data for homepage sections
// Keep this file data-only (no component imports)

export const recommendedEvents = [
  {
    kind: "event",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Poranny oddech nad jeziorem",
    title: "Poranny oddech nad jeziorem",
    subtitle: "Praktyka oddechu i ciszy",
    badge: "Oddech",
    date: "25–27 lipca",
    location: "Mazury",
    price: "od 890 PLN",
    href: "/wydarzenia/poranny-oddech",
  },
  {
    kind: "event",
    image:
      "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0",
    imageAlt: "Weekend z jogą i dźwiękiem",
    title: "Weekend z jogą i dźwiękiem",
    subtitle: "Ruch, oddech i misy",
    badge: "Joga",
    date: "2–4 sierpnia",
    location: "Beskidy",
    price: "od 990 PLN",
    href: "/wydarzenia/joga-dzwiek",
  },
  {
    kind: "event",
    image:
      "https://images.unsplash.com/photo-1566221850848-2e3711a4e0c3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Ceremonia kakao i krąg",
    title: "Ceremonia kakao i krąg",
    subtitle: "Spotkanie w sercu miasta",
    badge: "Ceremonia",
    date: "14 lipca",
    location: "Warszawa",
    href: "/wydarzenia/ceremonia-kakao",
  },
] as const;

export const recommendedPlaces = [
  {
    kind: "place",
    image:
      "https://images.unsplash.com/photo-1584098731526-e3924fad98db?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Górskie schronienie wśród lasów",
    title: "Schronienie Izerskie",
    subtitle: "Cisza i sauna nad rzeką",
    badge: "Siedlisko",
    beds: 5,
    baths: 3,
    area: 180,
    location: "Góry Izerskie",
    href: "/miejsca/schronienie-izerskie",
  },
  {
    kind: "place",
    image:
      "https://images.unsplash.com/photo-1523743762411-b39bfe6ea000?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Rustykalna stodoła eventowa",
    title: "Stodoła pod Lipami",
    subtitle: "Sala drewniana • ognisko",
    badge: "Stodoła",
    beds: 8,
    baths: 4,
    area: 320,
    location: "Kaszuby",
    href: "/miejsca/stodola-lipy",
  },
  {
    kind: "place",
    image:
      "https://images.unsplash.com/photo-1758745019085-00d5aa01298a?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Leśny domek na uboczu",
    title: "Dom w Lesie",
    subtitle: "Przestrzeń na małe kręgi",
    badge: "Domek",
    beds: 3,
    baths: 2,
    area: "120",
    location: "Podlasie",
    href: "/miejsca/dom-w-lesie",
  },
] as const;
