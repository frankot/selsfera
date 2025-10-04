import Image from "next/image";
import Link from "next/link";

type BaseProps = {
  image: string;
  imageAlt?: string;
  title: string;
  subtitle?: string; // optional small caption below title
  href: string;
  className?: string;
  badge?: string; // small label rendered on image (bottom-left)
};

export type EventCardProps = BaseProps & {
  kind: "event";
  date: string; // e.g., "25–27 lipca"
  location: string; // e.g., "Mazury"
  price?: string; // e.g., "od 890 PLN"
};

export type PlaceCardProps = BaseProps & {
  kind: "place";
  location?: string; // optional city/region
  beds?: number;
  baths?: number;
  area?: number | string; // m² value
};

export type CardProps = EventCardProps | PlaceCardProps;

// Clean, minimal card matching existing typography and spacing
export default function Card(props: CardProps) {
  const { image, imageAlt = "", title, subtitle, href, className = "" } = props;
  return (
    <Link
      href={href}
      className={`group border-tertiary/5 block overflow-hidden rounded-sm border transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md ${className}`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={image}
          alt={imageAlt || title}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {props.badge && (
          <span className="bg-tertiary text-primary absolute bottom-2 left-2 rounded-[3px] px-2.5 py-1 text-xs font-semibold tracking-wide shadow-sm">
            {props.badge}
          </span>
        )}
      </div>
      <div className="px-4 py-5">
        <h3 className="font-rox-reg text-foreground1 borde-b mb-1 text-2xl leading-snug">
          {title}
        </h3>
        {subtitle && (
          <p className="text-foreground2 mb-2 text-sm tracking-wide">
            {subtitle}
          </p>
        )}

        {props.kind === "event" ? (
          <div className="text-foreground1/70 text-sm">
            <p>
              <span>{props.date}</span>
              <span className="mx-2">•</span>
              <span>{props.location}</span>
            </p>
            {props.price && (
              <p className="text-foreground1/80 mt-1">{props.price}</p>
            )}
          </div>
        ) : (
          <div className="text-foreground1/70 text-sm">
            <p className="flex flex-wrap gap-x-3 gap-y-1">
              {typeof props.beds === "number" && (
                <span>
                  {props.beds} łóżk
                  {props.beds === 1 ? "o" : props.beds < 5 ? "a" : ""}
                </span>
              )}
              {typeof props.baths === "number" && (
                <span>
                  {props.baths} łazienk
                  {props.baths === 1 ? "a" : props.baths < 5 ? "i" : ""}
                </span>
              )}
              {props.area && (
                <span>
                  {typeof props.area === "number"
                    ? `${props.area} m²`
                    : props.area}
                </span>
              )}
              {props.location && <span>• {props.location}</span>}
            </p>
          </div>
        )}

        <div className="mt-4 text-sm font-semibold tracking-wide">
          <span className="text-foreground1 group-hover:text-foreground2 transition-colors">
            Zobacz
          </span>
          <span aria-hidden className="text-foreground2">
            {" "}
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
