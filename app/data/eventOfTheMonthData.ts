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
  body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum, lacus a dignissim consectetur, libero arcu vulputate mi, sed facilisis nibh nibh et sapien. Integer ac arcu vitae magna sagittis luctus. Cras vitae tellus sed nisl porta ultrices. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.

Donec sit amet ipsum eros. Proin bibendum mollis neque, at dapibus ipsum volutpat quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed rhoncus nulla sed mi faucibus, vitae euismod elit pharetra. Fusce sodales, turpis nec lobortis efficitur, nibh est viverra justo, non placerat odio risus et nisl.
`,
  ctaLabel: "Więcej informacji",
  ctaHref: "/wydarzenia/podlasie",
};
