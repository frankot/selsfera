export interface NavLink {
  id: string;
  label: string;
  href: string;
  external?: boolean;
}

export interface NavData {
  logo: {
    text: string;
    href: string;
  };
  links: NavLink[];
}

export const navData: NavData = {
  logo: {
    text: "SELF SFERA",
    href: "/",
  },
  links: [
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
  ],
};
