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
  getPosts("current").map((post) => ({
    ...getPostDateParts(post),
    slug: post.slug,
  }));

export async function generateMetadata({
  params,
}: PageProps<"/thoughts/[year]/[month]/[day]/[slug]">): Promise<Metadata> {
  const articleParams = await params;
  const post = getPostAtPath("current", articleParams);

  return post
    ? { title: `${post.title} | Mcd79`, description: post.excerpt }
    : {};
}

export default async function CurrentArticle({
  params,
}: PageProps<"/thoughts/[year]/[month]/[day]/[slug]">) {
  const articleParams = await params;
  const post = getPostAtPath("current", articleParams);

  if (!post) {
    notFound();
  }

  const { previousPost, nextPost } = getAdjacentPosts("current", post.slug);

  return (
    <ArticlePage
      post={post}
      kind="current"
      previousPost={previousPost}
      nextPost={nextPost}
    />
  );
}
