import matter from "gray-matter";
import fs from "node:fs";
import path from "node:path";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export type PostFrontmatter = {
  slug: string;
  title: string;
  description?: string;
  category?: string;
  publishDate?: string; // YYYY-MM-DD
  coverImage?: string;
  coverImageAlt?: string;
  authors?: { name: string; role?: string }[];
};

export type Post = PostFrontmatter & {
  content: string; // raw markdown
  html: string; // rendered html
};

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

export function getPostSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter(f => f.endsWith(".md"))
    .map(f => f.replace(/\.md$/, ""));
}

export function getPostFilePath(slug: string): string {
  return path.join(CONTENT_DIR, `${slug}.md`);
}

export async function parseMarkdownToHtml(markdown: string): Promise<string> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    // Convert md -> mdast -> hast -> html
    .use(remarkRehype)
    .use(rehypeSlug)
    // Skip autolinking: provide a behavior function that returns false
    .use(rehypeStringify)
    .process(markdown);

  return String(file);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = getPostFilePath(slug);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const fm = data as PostFrontmatter;
  const html = await parseMarkdownToHtml(content);
  return { ...fm, content, html, slug: fm.slug || slug };
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = getPostSlugs();
  const posts = await Promise.all(slugs.map(s => getPostBySlug(s)));
  return posts
    .filter((p): p is Post => Boolean(p))
    .sort((a, b) => (b.publishDate || "").localeCompare(a.publishDate || ""));
}
