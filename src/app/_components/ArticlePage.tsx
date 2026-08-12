import Link from "next/link";
import {
  getPostHref,
  getTagHref,
  type Post,
  type PostSummary,
} from "@/lib/posts";
import { ReadingFooter, ReadingHeader } from "./ReadingChrome";
import styles from "../reading.module.css";

export function ArticlePage({
  post,
  kind,
  previousPost,
  nextPost,
}: {
  post: Post;
  kind: "current" | "legacy";
  previousPost?: PostSummary;
  nextPost?: PostSummary;
}) {
  const indexHref = kind === "current" ? "/thoughts" : "/blog";
  const indexLabel = kind === "current" ? "New writing" : "Legacy archive";

  return (
    <div className={styles.readingPage}>
      <ReadingHeader />
      <main className={styles.articlePage}>
        <header
          className={
            kind === "current"
              ? styles.currentArticleHero
              : styles.legacyArticleHero
          }
        >
          <Link href={indexHref}>← {indexLabel}</Link>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <div className={styles.articleDetails}>
            <span>{post.date}</span>
            <span>Kevin McDonnell</span>
            <span>{kind === "current" ? "Current writing" : "Preserved archive"}</span>
          </div>
          <div className={styles.tagList} aria-label="Article topics">
            {post.tags.map((tag) => (
              <Link href={getTagHref(tag)} key={tag}>
                {tag}
              </Link>
            ))}
          </div>
        </header>

        <div className={styles.articleFrame}>
          <aside>
            <span>{kind === "current" ? "NEW" : post.published.slice(0, 4)}</span>
            <p>
              {kind === "current"
                ? "Practical thinking for useful AI adoption."
                : "Migrated from the original Mcd79 modern workplace blog."}
            </p>
            {post.sourceUrl && (
              <a href={post.sourceUrl} target="_blank" rel="noopener noreferrer">
                View original ↗
              </a>
            )}
          </aside>
          <article
            className={styles.articleBody}
            dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
          />
        </div>

        <nav className={styles.articlePagination} aria-label="Previous and next articles">
          {previousPost ? (
            <Link href={getPostHref(kind, previousPost)}>
              <span>← Previous</span>
              <strong>{previousPost.title}</strong>
            </Link>
          ) : (
            <span />
          )}
          <Link className={styles.allPostsLink} href={indexHref}>
            All {indexLabel.toLowerCase()}
          </Link>
          {nextPost ? (
            <Link href={getPostHref(kind, nextPost)}>
              <span>Next →</span>
              <strong>{nextPost.title}</strong>
            </Link>
          ) : (
            <span />
          )}
        </nav>

        <nav className={styles.articleClose} aria-label="Explore Mcd79">
          <strong>Continue exploring</strong>
          <Link href="/thoughts">New writing →</Link>
          <Link href="/blog">Legacy archive →</Link>
          <Link href="/#framework">AI Productivity Framework →</Link>
        </nav>
      </main>
      <ReadingFooter />
    </div>
  );
}
