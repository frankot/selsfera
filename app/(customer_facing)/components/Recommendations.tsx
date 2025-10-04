import Card, { CardProps } from "./EventCard";

interface RecommendationsProps {
  title: string;
  items: ReadonlyArray<CardProps>;
  className?: string;
}

export default function Recommendations({
  title,
  items,
  className = "",
}: RecommendationsProps) {
  return (
    <section className={`w-full px-4 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-rox-reg text-foreground1 text-3xl md:text-4xl">
            {title}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map(item => (
            <Card key={`${item.kind}-${item.href}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
