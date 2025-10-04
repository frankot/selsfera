import Link from "next/link";
import ArticleCard, { ArticleCardProps } from "./ArticleCard";

interface FeaturedArticlesProps {
  items: ReadonlyArray<ArticleCardProps>;
  className?: string;
  title?: string;
  ctaHref?: string;
  ctaLabel?: string;
}

export default function FeaturedArticles({
  items,
  className = "",
  title = "Aktualności",
  ctaHref = "/artykuly",
  ctaLabel = "Zobacz wszystkie",
}: FeaturedArticlesProps) {
  return (
    <section className={`w-full px-4 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h2 className="font-rox-reg text-foreground1 text-3xl md:text-4xl">
            {title}
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {items.map(item => (
            <ArticleCard key={item.href} {...item} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href={ctaHref}
            className="bg-tertiary text-primary hover:bg-foreground1 hover:text-primary px-10 py-3 text-sm font-semibold tracking-wide transition-colors duration-200"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
