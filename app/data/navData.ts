import { navLinks, type NavLink } from "./navLinks";

export interface NavData {
  logo: {
    text: string;
    href: string;
  };
  links: ReadonlyArray<NavLink>;
}

export const navData: NavData = {
  logo: {
    text: "SELF SFERA",
    href: "/",
  },
  links: navLinks,
};
