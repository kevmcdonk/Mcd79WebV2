import type { Metadata } from "next";
import Link from "next/link";
import { getPostHref, getPosts, getTagHref } from "@/lib/posts";
import { ReadingFooter, ReadingHeader } from "../_components/ReadingChrome";
import styles from "../reading.module.css";

export const metadata: Metadata = {
  title: "New writing | Mcd79",
  description:
    "Kevin McDonnell's current writing on Copilot, agents, and the AI Productivity Framework.",
};

const blockClasses = [
  styles.currentLead,
  styles.currentBlue,
  styles.currentRed,
  styles.currentYellow,
];

export default function ThoughtsIndex() {
  const currentPosts = getPosts("current");

  return (
    <div className={styles.readingPage}>
      <ReadingHeader />
      <main className={styles.currentIndex}>
        <section className={styles.currentIntro}>
          <div>
            <h1>Notes for making AI useful.</h1>
            <p>
              Current writing from Kevin McDonnell on Copilot, agents, and the
              practices that turn promising technology into better work.
            </p>
          </div>
          <span>NEW MCD79 / 2026</span>
        </section>

        <section className={styles.currentBlocks} aria-label="Current articles">
          {currentPosts.map((post, index) => (
            <article
              className={`${styles.currentBlock} ${blockClasses[index]}`}
              key={post.slug}
            >
              <Link
                className={styles.cardMainLink}
                href={getPostHref("current", post)}
                aria-label={`Read ${post.title}`}
              />
              <span className={styles.readingIndex}>
                {String.fromCharCode(65 + index)}
              </span>
              <div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
              </div>
              <span className={styles.readingMeta}>{post.date}</span>
              <div className={styles.indexTagList} aria-label="Article topics">
                {post.tags.map((tag) => (
                  <Link href={getTagHref(tag)} key={tag}>
                    {tag}
                  </Link>
                ))}
              </div>
              <span className={styles.blockArrow}>→</span>
            </article>
          ))}
        </section>

        <section className={styles.archiveBridge}>
          <h2>The thinking did not start with AI.</h2>
          <p>
            Ten preserved articles carry forward lessons about employee
            experience, change, Microsoft 365, community, and making technology
            useful.
          </p>
          <Link href="/blog">Enter the legacy archive →</Link>
        </section>
      </main>
      <ReadingFooter />
    </div>
  );
}
