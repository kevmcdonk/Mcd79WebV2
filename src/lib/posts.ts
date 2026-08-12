import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export type PostCollection = "current" | "legacy";

export type PostSummary = {
  slug: string;
  title: string;
  date: string;
  published: string;
  order: number;
  excerpt: string;
  tags: string[];
  sourceUrl?: string;
};

export type Post = PostSummary & {
  bodyHtml: string;
};

export type TaggedPost = PostSummary & {
  collection: PostCollection;
};

export type PostDateParts = {
  year: string;
  month: string;
  day: string;
};

const contentRoot = path.join(process.cwd(), "content");
const collectionDirectories: Record<PostCollection, string> = {
  current: "thoughts",
  legacy: "blog",
};

function listMarkdownFiles(directory: string): string[] {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      return listMarkdownFiles(entryPath);
    }

    return entry.isFile() && entry.name.endsWith(".md") ? [entryPath] : [];
  });
}

function requireString(
  value: unknown,
  field: string,
  filePath: string,
): string {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`Missing required "${field}" frontmatter in ${filePath}`);
  }

  return value;
}

function readCollection(collection: PostCollection): Post[] {
  const directory = path.join(contentRoot, collectionDirectories[collection]);

  if (!fs.existsSync(directory)) {
    throw new Error(`Missing content directory: ${directory}`);
  }

  return listMarkdownFiles(directory)
    .map((filePath) => {
      const fileName = path.basename(filePath);
      const source = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(source);
      const tags = data.tags;
      const order = data.order;

      if (
        !Array.isArray(tags) ||
        tags.some((tag) => typeof tag !== "string")
      ) {
        throw new Error(`Invalid "tags" frontmatter in ${filePath}`);
      }

      if (typeof order !== "number") {
        throw new Error(`Invalid "order" frontmatter in ${filePath}`);
      }

      const published = requireString(data.published, "published", filePath);

      if (!/^\d{4}-\d{2}-\d{2}$/.test(published)) {
        throw new Error(`Invalid "published" frontmatter in ${filePath}`);
      }

      const datedPath = path
        .relative(directory, filePath)
        .split(path.sep)
        .join("/");
      const expectedPath = `${published.replaceAll("-", "/")}/${fileName}`;

      if (datedPath !== expectedPath) {
        throw new Error(
          `Content path must match its published date: expected ${expectedPath}, found ${datedPath}`,
        );
      }

      return {
        slug: fileName.replace(/\.md$/, ""),
        title: requireString(data.title, "title", filePath),
        date: requireString(data.date, "date", filePath),
        published,
        order,
        excerpt: requireString(data.excerpt, "excerpt", filePath),
        tags,
        sourceUrl:
          data.sourceUrl === undefined
            ? undefined
            : requireString(data.sourceUrl, "sourceUrl", filePath),
        bodyHtml: marked.parse(content, { async: false }) as string,
      };
    })
    .sort((a, b) => a.order - b.order);
}

export const getPosts = (collection: PostCollection) =>
  readCollection(collection);

export const getPost = (collection: PostCollection, slug: string) =>
  readCollection(collection).find((post) => post.slug === slug);

export function getPostDateParts(post: PostSummary): PostDateParts {
  const [year, month, day] = post.published.split("-");
  return { year, month, day };
}

export function getPostHref(
  collection: PostCollection,
  post: PostSummary,
): string {
  const { year, month, day } = getPostDateParts(post);
  const root = collection === "current" ? "thoughts" : "blog";

  return `/${root}/${year}/${month}/${day}/${post.slug}`;
}

export function getTagSlug(tag: string): string {
  return tag
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const getTagHref = (tag: string) => `/tags/${getTagSlug(tag)}`;

export function getTags(): Array<{ name: string; slug: string; count: number }> {
  const tags = new Map<string, { name: string; count: number }>();

  for (const post of [
    ...readCollection("current"),
    ...readCollection("legacy"),
  ]) {
    for (const name of post.tags) {
      const slug = getTagSlug(name);
      const existing = tags.get(slug);

      if (existing && existing.name !== name) {
        throw new Error(`Tag slug collision: "${existing.name}" and "${name}"`);
      }

      tags.set(slug, { name, count: (existing?.count ?? 0) + 1 });
    }
  }

  return [...tags.entries()]
    .map(([slug, tag]) => ({ slug, ...tag }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getPostsByTag(
  tagSlug: string,
): { name: string; posts: TaggedPost[] } | undefined {
  const tag = getTags().find(({ slug }) => slug === tagSlug);

  if (!tag) {
    return undefined;
  }

  const posts: TaggedPost[] = (
    [
      ...readCollection("current").map((post) => ({
        ...post,
        collection: "current" as const,
      })),
      ...readCollection("legacy").map((post) => ({
        ...post,
        collection: "legacy" as const,
      })),
    ]
  )
    .filter((post) => post.tags.some((name) => getTagSlug(name) === tagSlug))
    .sort((a, b) => b.published.localeCompare(a.published));

  return { name: tag.name, posts };
}

export function getPostAtPath(
  collection: PostCollection,
  parts: PostDateParts & { slug: string },
): Post | undefined {
  const post = getPost(collection, parts.slug);

  if (!post) {
    return undefined;
  }

  const date = getPostDateParts(post);
  return date.year === parts.year &&
    date.month === parts.month &&
    date.day === parts.day
    ? post
    : undefined;
}

export function getAdjacentPosts(
  collection: PostCollection,
  slug: string,
): {
  previousPost?: PostSummary;
  nextPost?: PostSummary;
} {
  const posts = readCollection(collection);
  const index = posts.findIndex((post) => post.slug === slug);

  if (index === -1) {
    return {};
  }

  return {
    previousPost: posts[index - 1],
    nextPost: posts[index + 1],
  };
}
