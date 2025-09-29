import Image from "next/image";
import Link from "next/link";

// Desktop-only fixed mosaic layout component
// Hardcoded content as per provided screenshot reference

interface TileProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  image: string;
  className?: string;
  titleClassName?: string;
  overlayPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  href?: string;
  /** Optional override for next/image quality (default 85) */
  quality?: number;
  /** Optional override for sizes attribute passed to next/image */
  sizes?: string;
  /** Pass priority for above-the-fold / LCP images */
  priority?: boolean;
}

const Tile = ({
  title,
  subtitle,
  badge,
  image,
  className = "",
  titleClassName = "",
  overlayPosition = "top-left",
  href = "#",
  quality = 85,
  sizes,
  priority = false,
}: TileProps) => {
  const renderWithBreaks = (
    text?: string,
    wrapper: "h3" | "p" = "h3",
    extraClass = "",
  ) => {
    if (!text) return null;
    const parts = text.split(/\\n/); // split on literal "\\n" sequence
    const Tag: React.ElementType = wrapper;
    return (
      <Tag className={extraClass}>
        {parts.map((part: string, i: number) => (
          <span key={i} className="block">
            {part}
          </span>
        ))}
      </Tag>
    );
  };
  return (
    <Link
      href={href}
      className={`group bg-secondary relative block overflow-hidden ${className}`}
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title || "Tile image"}
          fill
          quality={quality}
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/10 to-transparent opacity-90 mix-blend-multiply" />
      </div>
      <div
        className={`text-primary pointer-events-none absolute p-6 ${
          overlayPosition === "top-left" && "top-0 left-0"
        } ${overlayPosition === "top-right" && "top-0 right-0 text-right"} ${
          overlayPosition === "bottom-left" && "bottom-0 left-0"
        } ${
          overlayPosition === "bottom-right" && "right-0 bottom-0 text-right"
        }`}
      >
        {badge && (
          <span className="bg-tertiary text-primary mb-4 inline-block px-3 py-1 text-xs font-semibold tracking-wide">
            {badge}
          </span>
        )}
        {renderWithBreaks(
          title,
          "h3",
          `font-rox-reg text-3xl leading-snug md:text-4xl ${titleClassName}`,
        )}
        {renderWithBreaks(
          subtitle,
          "p",
          "mt-4 font-rox-reg text-lg leading-tight text-primary/90 md:text-xl",
        )}
      </div>
    </Link>
  );
};

export default function Mossaic() {
  return (
    <section
      className="mx-auto hidden max-w-7xl gap-4 pb-12 md:grid"
      style={{ gridTemplateColumns: "repeat(12, minmax(0, 1fr))" }}
    >
      {/* Left column - top large article */}
      <div className="col-span-7 grid grid-rows-[1fr_auto] gap-4">
        <Tile
          image="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1400&q=85&dpr=2"
          title={"Czym jest energia\\nKundalini?"}
          overlayPosition="top-left"
          className="h-[300px] md:h-[360px]"
          titleClassName="whitespace-pre-line"
          sizes="(max-width: 1024px) 100vw, (min-width:1024px) 58.33vw"
          priority
        />
        {/* Below left smaller wide tile */}
        <Tile
          image="https://images.unsplash.com/photo-1610289982320-3891f7c9fd6d?auto=format&fit=crop&w=1200&q=80&dpr=2"
          title={"Skąd moda na kobiece\\nwyjazdy?"}
          badge="WYWIAD"
          overlayPosition="top-left"
          className="h-[200px] md:h-[180px]"
          titleClassName="whitespace-pre-line text-3xl md:text-3xl"
          sizes="(max-width: 1024px) 100vw, (min-width:1024px) 58.33vw"
        />
      </div>

      {/* Right top tall event tile */}
      <div className="col-span-5">
        <Tile
          image="https://images.unsplash.com/photo-1758274538093-b594c78bf2d5?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title={"Podlaskie Kobiece Kręgi"}
          subtitle={"12-14 lipa 2025\\nPodlasie z Anną Korcz!"}
          overlayPosition="top-left"
          className="h-[560px]"
          titleClassName="text-4xl md:text-4xl"
          sizes="(max-width: 1024px) 100vw, (min-width:1024px) 41.67vw"
          priority
        />
      </div>

      {/* Full width bottom large event promo */}
      <div className="col-span-12">
        <Tile
          image="https://images.unsplash.com/photo-1619968747465-f56008f0da50?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title={"Izerski weekend\\nz misami tybetańskimi"}
          subtitle={"12-14 lipa 2025\\nGóry Izerskie"}
          overlayPosition="bottom-right"
          className="h-[300px] md:h-[340px]"
          titleClassName="whitespace-pre-line text-4xl md:text-5xl"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
