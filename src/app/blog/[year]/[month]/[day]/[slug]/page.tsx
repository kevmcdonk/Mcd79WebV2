import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/app/_components/ArticlePage";
import {
  getAdjacentPosts,
  getPostAtPath,
  getPostDateParts,
  getPosts,
} from "@/lib/posts";

type ArticleParams = {
  year: string;
  month: string;
  day: string;
  slug: string;
};

export const generateStaticParams = (): ArticleParams[] =>
  getPosts("legacy").map((post) => ({
    ...getPostDateParts(post),
    slug: post.slug,
  }));

export async function generateMetadata({
  params,
}: PageProps<"/blog/[year]/[month]/[day]/[slug]">): Promise<Metadata> {
  const articleParams = await params;
  const post = getPostAtPath("legacy", articleParams);

  return post
    ? { title: `${post.title} | Mcd79 archive`, description: post.excerpt }
    : {};
}

export default async function LegacyArticle({
  params,
}: PageProps<"/blog/[year]/[month]/[day]/[slug]">) {
  const articleParams = await params;
  const post = getPostAtPath("legacy", articleParams);

  if (!post) {
    notFound();
  }

  const { previousPost, nextPost } = getAdjacentPosts("legacy", post.slug);

  return (
    <ArticlePage
      post={post}
      kind="legacy"
      previousPost={previousPost}
      nextPost={nextPost}
    />
  );
}
