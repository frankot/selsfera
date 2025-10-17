"use client";

import { allArticles, ARTICLE_CATEGORIES } from "@/app/data/articlesData";
import { useMemo, useState } from "react";
import ArticleCard from "../components/ArticleCard";

type SortBy = "newest" | "oldest" | "title";

const CATEGORIES: ("Wszystkie" | (typeof ARTICLE_CATEGORIES)[number])[] = [
  "Wszystkie",
  ...ARTICLE_CATEGORIES,
];

const SORT_OPTIONS: { value: SortBy; label: string }[] = [
  { value: "newest", label: "Najnowsze" },
  { value: "oldest", label: "Najstarsze" },
  { value: "title", label: "Alfabetycznie" },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof CATEGORIES)[number]>("Wszystkie");
  const [sortBy, setSortBy] = useState<SortBy>("newest");

  const filteredAndSorted = useMemo(() => {
    const filtered = allArticles.filter(a =>
      selectedCategory === "Wszystkie" ? true : a.category === selectedCategory
    );

    const sorted = filtered.slice().sort((a, b) => {
      switch (sortBy) {
        case "oldest":
          return a.publishDate.localeCompare(b.publishDate);
        case "title":
          return a.title.localeCompare(b.title);
        case "newest":
        default:
          return b.publishDate.localeCompare(a.publishDate);
      }
    });
    return sorted;
  }, [selectedCategory, sortBy]);

  return (
    <main className="relative min-h-screen bg-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 md:py-20">
        {/* Header */}
        <header className="mb-12 text-center md:mb-16">
          <h1 className="font-rox-reg text-foreground1 text-4xl leading-tight md:text-5xl lg:text-6xl">
            Artykuły i inspiracje
          </h1>
          <p className="text-foreground1/70 mx-auto mt-4 max-w-2xl text-sm md:text-base">
            Wyjazdy i wydarzenia rozwojowe, kręgi kobiet, oddech i medytacja,
            dźwięk i wibracje – wiedza i praktyka w jednym miejscu.
          </p>
        </header>

        {/* Filters and Sorting */}
        <div className="mb-10 flex flex-col gap-6 md:mb-12 lg:flex-row lg:items-center lg:justify-between">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? "bg-tertiary text-primary"
                    : "bg-nav-bg text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-700">Sortuj:</span>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as SortBy)}
              className="focus:border-tertiary focus:ring-tertiary border border-gray-300 bg-white px-3 py-2 text-sm focus:ring-1 focus:outline-none"
            >
              {SORT_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-8">
          <p className="text-sm text-gray-600">
            Znaleziono {filteredAndSorted.length} artykułów
          </p>
        </div>

        {/* Articles */}
        {filteredAndSorted.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredAndSorted.map(article => (
              <ArticleCard
                key={article.id}
                image={article.image}
                imageAlt={article.imageAlt}
                title={article.title}
                description={article.description}
                href={article.href}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-md border border-gray-200 bg-white p-12 text-center">
            <div className="text-tertiary mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
              Ø
            </div>
            <h3 className="mb-2 text-2xl font-light text-gray-900">
              Brak wyników filtrowania
            </h3>
            <p className="mb-4 max-w-md text-sm text-gray-600">
              Żaden artykuł nie pasuje do wybranej kategorii. Zmień filtr aby
              zobaczyć inne treści.
            </p>
            <div className="flex gap-3">
              {selectedCategory !== "Wszystkie" && (
                <button
                  onClick={() => setSelectedCategory("Wszystkie")}
                  className="rounded bg-gray-800 px-4 py-2 text-xs font-medium text-white hover:bg-gray-700"
                >
                  Wyczyść filtr
                </button>
              )}
            </div>
          </div>
        )}

        {/* Load more (placeholder) */}
        <div className="mt-16 text-center">
          <button className="group text-tertiary mx-auto flex items-center justify-center font-medium tracking-wide transition-all duration-200 hover:opacity-80">
            Załaduj więcej artykułów
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
}
