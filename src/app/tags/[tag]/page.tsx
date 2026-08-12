import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ReadingFooter, ReadingHeader } from "@/app/_components/ReadingChrome";
import {
  getPostHref,
  getPostsByTag,
  getTags,
} from "@/lib/posts";
import styles from "../../reading.module.css";

export const generateStaticParams = () =>
  getTags().map(({ slug }) => ({ tag: slug }));

export async function generateMetadata({
  params,
}: PageProps<"/tags/[tag]">): Promise<Metadata> {
  const { tag } = await params;
  const result = getPostsByTag(tag);

  return result
    ? {
        title: `${result.name} articles | Mcd79`,
        description: `Current and legacy Mcd79 writing tagged ${result.name}.`,
      }
    : {};
}

export default async function TagPage({
  params,
}: PageProps<"/tags/[tag]">) {
  const { tag } = await params;
  const result = getPostsByTag(tag);

  if (!result) {
    notFound();
  }

  return (
    <div className={styles.readingPage}>
      <ReadingHeader />
      <main className={styles.legacyIndex}>
        <section className={styles.legacyIntro}>
          <h1>{result.name}.</h1>
          <div>
            <p>
              Every current thought and preserved archive article filed under
              this topic.
            </p>
            <span>
              {result.posts.length} {result.posts.length === 1 ? "ARTICLE" : "ARTICLES"}
            </span>
          </div>
        </section>

        <section className={styles.archiveRows} aria-label={`${result.name} articles`}>
          {result.posts.map((post, index) => (
            <article className={styles.archiveRow} key={`${post.collection}-${post.slug}`}>
              <Link
                className={styles.cardMainLink}
                href={getPostHref(post.collection, post)}
                aria-label={`Read ${post.title}`}
              />
              <span className={styles.archiveNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={styles.archiveDate}>{post.date}</span>
              <div>
                <span className={styles.collectionLabel}>
                  {post.collection === "current" ? "New writing" : "Legacy blog"}
                </span>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
              </div>
              <span className={styles.blockArrow}>→</span>
            </article>
          ))}
        </section>
      </main>
      <ReadingFooter />
    </div>
  );
}
