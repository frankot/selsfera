import {
  recommendedEvents,
  recommendedPlaces,
} from "@/app/data/recommendationsData";
import { getAllPosts } from "@/lib/markdown";
import {
  EventOfTheMonthFromData,
  PlaceOfTheMonthFromData,
} from "./components/EventOfTheMonth";
import FeaturedArticles from "./components/FeaturedArticles";
import Hero from "./components/Hero";
import Mossaic from "./components/Mossaic";
import Recommendations from "./components/Recommendations";

export default async function Home() {
  const posts = await getAllPosts();
  const featuredItems = posts
    .filter(p => Boolean(p.coverImage))
    .slice(0, 4)
    .map(p => ({
      image: p.coverImage as string,
      imageAlt: p.coverImageAlt || p.title,
      title: p.title,
      description: p.description,
      href: `/blog/${p.slug}`,
    }));

  return (
    <>
      <Hero />
      <Mossaic />

      <EventOfTheMonthFromData />
      <Recommendations
        className="pb-32"
        title="Polecane wydarzenia"
        items={recommendedEvents}
      />

      <PlaceOfTheMonthFromData />

      <Recommendations
        title="Polecane miejsca"
        items={recommendedPlaces}
        className="pb-44"
      />

      <FeaturedArticles items={featuredItems} className="pb-20" />
    </>
  );
}
