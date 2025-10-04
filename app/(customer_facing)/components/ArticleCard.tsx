import Image from "next/image";
import Link from "next/link";

export interface ArticleCardProps {
  image: string;
  imageAlt?: string;
  title: string;
  description?: string;
  href: string;
  className?: string;
}

export default function ArticleCard({
  image,
  imageAlt = "",
  title,
  description,
  href,
  className = "",
}: ArticleCardProps) {
  return (
    <Link
      href={href}
      className={`group block overflow-hidden rounded-sm border border-black/5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md ${className}`}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={image}
          alt={imageAlt || title}
          fill
          sizes="(max-width:768px) 100vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="px-3 py-4">
        <h3 className="text-foreground1 mb-1 line-clamp-2 text-lg font-semibold leading-snug">
          {title}
        </h3>
        {description && (
          <p className="text-foreground1/70 line-clamp-2 text-sm leading-relaxed">
            {description}
          </p>
        )}
        <div className="mt-3 text-xs font-semibold tracking-wide text-foreground2">
          Czytaj →
        </div>
      </div>
    </Link>
  );
}
