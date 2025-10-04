export type NavLink = {
  id: string;
  label: string;
  href: string;
  external?: boolean;
};

export const navLinks: ReadonlyArray<NavLink> = [
  {
    id: "oferta",
    label: "Oferta",
    href: "/oferta",
  },
  {
    id: "o-nas",
    label: "O nas",
    href: "/o-nas",
  },
  {
    id: "wydarzenia",
    label: "Wydarzenia",
    href: "/wydarzenia",
  },
  {
    id: "blog",
    label: "Blog",
    href: "/blog",
  },
  {
    id: "kontakt",
    label: "Kontakt",
    href: "/kontakt",
  },
];
