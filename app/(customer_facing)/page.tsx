import { EventOfTheMonthFromData } from "./components/EventOfTheMonth";
import Hero from "./components/Hero";
import Mossaic from "./components/Mossaic";

export default function Home() {
  return (
    <>
      <Hero />
      <Mossaic />

      <EventOfTheMonthFromData />

    </>
  );
}
