import { getAllPosts, getPostBySlug } from "@/lib/markdown";
import type { Metadata } from "next";
import Link from "next/link";
import styles from "./post.module.css";

export const dynamic = "force-static";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(p => ({ slug: p.slug }));
}


export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.coverImage ? [{ url: post.coverImage }] : undefined,
      type: "article",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-2xl">Nie znaleziono artykułu</h1>
        <p className="mt-2 text-gray-600">Sprawdź adres URL.</p>
      </main>
    );
  }

  return (
    <main className="bg-white">
      <article className="mx-auto max-w-3xl px-4 py-10 md:py-16">
        {/* Back */}
        <div className="mb-6">
          <Link
            href="/blog"
            className="text-foreground2 text-sm hover:underline"
          >
            ← Wróć
          </Link>
        </div>

        {/* Header */}
        <header className="mb-6 md:mb-8">
          <div className="text-foreground2 text-xs tracking-wider uppercase">
            {post.category}
          </div>
          <h1 className="font-rox-reg text-foreground1 mt-2 text-4xl leading-tight md:text-5xl">
            {post.title}
          </h1>
          <div className="text-foreground2/80 mt-2 text-xs">
            {post.publishDate}
          </div>
        </header>

        {/* Cover image */}
        {post.coverImage && (
          <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-sm border border-black/5 shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.coverImage}
              alt={post.coverImageAlt || post.title}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div
          className={styles.prose}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        {/* Authors */}
        {post.authors?.length ? (
          <div className="border-foreground2/20 text-foreground2 mt-10 border-t pt-6 text-sm">
            Autorzy: {post.authors.map(a => a.name).join(", ")}
          </div>
        ) : null}
      </article>
    </main>
  );
}
