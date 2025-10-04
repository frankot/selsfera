import { featuredArticles } from "@/app/data/articlesData";
import {
  recommendedEvents,
  recommendedPlaces,
} from "@/app/data/recommendationsData";
import {
  EventOfTheMonthFromData,
  PlaceOfTheMonthFromData,
} from "./components/EventOfTheMonth";
import FeaturedArticles from "./components/FeaturedArticles";
import Hero from "./components/Hero";
import Mossaic from "./components/Mossaic";
import Recommendations from "./components/Recommendations";

export default function Home() {
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

      <FeaturedArticles items={featuredArticles} className="pb-20" />
    </>
  );
}
