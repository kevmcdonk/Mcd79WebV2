import type { Metadata } from "next";
import Link from "next/link";
import { getPostHref, getPosts, getTagHref } from "@/lib/posts";
import { ReadingFooter, ReadingHeader } from "../_components/ReadingChrome";
import styles from "../reading.module.css";

export const metadata: Metadata = {
  title: "Legacy blog | Mcd79",
  description:
    "The preserved Mcd79 modern workplace archive, migrated from the original site.",
};

export default function LegacyBlogIndex() {
  const legacyPosts = getPosts("legacy");

  return (
    <div className={styles.readingPage}>
      <ReadingHeader />
      <main className={styles.legacyIndex}>
        <section className={styles.legacyIntro}>
          <h1>The modern workplace archive.</h1>
          <div>
            <p>
              Ten articles preserved from the original Mcd79 site, ordered from
              the most recent. Their dates, context, and source links remain
              visible.
            </p>
            <span>2023—2021 / MIGRATION 01</span>
          </div>
        </section>

        <section className={styles.archiveRows} aria-label="Legacy articles">
          {legacyPosts.map((post, index) => (
            <article className={styles.archiveRow} key={post.slug}>
              <Link
                className={styles.cardMainLink}
                href={getPostHref("legacy", post)}
                aria-label={`Read ${post.title}`}
              />
              <span className={styles.archiveNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={styles.archiveDate}>{post.date}</span>
              <div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <div className={styles.indexTagList} aria-label="Article topics">
                  {post.tags.map((tag) => (
                    <Link href={getTagHref(tag)} key={tag}>
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
              <span className={styles.blockArrow}>→</span>
            </article>
          ))}
        </section>

        <section className={styles.currentBridge}>
          <h2>Continue with the new writing.</h2>
          <Link href="/thoughts">Copilot, agents, and AI productivity →</Link>
        </section>
      </main>
      <ReadingFooter />
    </div>
  );
}
