import { eventOfTheMonth } from "@/app/data/eventOfTheMonthData";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface EventOfTheMonthProps {
  image: string;
  imageAlt?: string;
  title: string;
  subtitle?: string;
  body?: string | ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

/**
 * EventOfTheMonth component
 * Layout: image (50%) on left (md+) and textual content on right.
 * Mobile: image stacked on top.
 */
export default function EventOfTheMonth({
  image,
  imageAlt = "Event photo",
  title,
  subtitle,
  body,
  ctaLabel = "Więcej informacji",
  ctaHref = "#",
  className = "",
}: EventOfTheMonthProps) {
  const imageBlock = (
    <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-auto md:w-2/5">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        quality={85}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 40vw"
      />
    </div>
  );

  const contentBlock = (
    <div className="flex w-full flex-col justify-center px-2 py-8 md:w-3/5 md:px-12 md:py-16 lg:px-20">
      <h2 className="font-rox-reg text-foreground1 mb-6 text-4xl leading-tight md:text-5xl lg:text-6xl ">
        {title}
      </h2>
      {subtitle && (
        <h3 className="text-foreground2 uppercase mb-8 text-base tracking-wide md:text-lg lg:text-xl">
          {subtitle}
        </h3>
      )}
      {body && (
        <div className="text-foreground1/80 mb-12 max-w-prose text-base leading-relaxed md:text-lg">
          {typeof body === "string"
            ? body.split(/\n\n/).map((p, i) => (
                <p key={i} className="mb-5 last:mb-0">
                  {p}
                </p>
              ))
            : body}
        </div>
      )}
      {ctaLabel && (
        <div>
          <Link
            href={ctaHref}
            className="bg-tertiary text-primary hover:bg-foreground1 hover:text-primary inline-block px-12 py-4 text-lg font-semibold transition-colors duration-200 md:px-16 md:text-xl"
          >
            {ctaLabel}
          </Link>
        </div>
      )}
    </div>
  );

  return (
    <section
      className={`w-full px-4 py-12 md:py-20 ${className}`}
      aria-labelledby="event-of-the-month-heading"
    >
      <div className="mx-auto flex max-w-7xl flex-col-reverse gap-10 md:flex-row md:items-stretch md:gap-0">
        {contentBlock}
        {imageBlock}
      </div>
    </section>
  );
}

// Data-wired convenience component (can be imported directly)
export const EventOfTheMonthFromData = () => (
  <EventOfTheMonth
    image={eventOfTheMonth.image}
    imageAlt={eventOfTheMonth.imageAlt}
    title={eventOfTheMonth.title}
    subtitle={eventOfTheMonth.subtitle}
    body={eventOfTheMonth.body}
    ctaLabel={eventOfTheMonth.ctaLabel}
    ctaHref={eventOfTheMonth.ctaHref}
  />
);
