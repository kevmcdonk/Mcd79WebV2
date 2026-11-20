import Link from "next/link";
import styles from "../reading.module.css";

type ReadingSection =
  | "thoughts"
  | "blog"
  | "about"
  | "framework"
  | "speaking"
  | "sheep-herding";

export function ReadingHeader({ current }: { current?: ReadingSection }) {
  return (
    <header className={styles.readingHeader}>
      <Link className={styles.readingBrand} href="/">
        <span>Mcd</span>
        <strong>79</strong>
      </Link>
      <nav aria-label="Reading navigation">
        <Link href="/thoughts" aria-current={current === "thoughts" ? "page" : undefined}>
          New writing
        </Link>
        <Link href="/blog" aria-current={current === "blog" ? "page" : undefined}>
          Legacy blog
        </Link>
        <Link href="/about" aria-current={current === "about" ? "page" : undefined}>
          About
        </Link>
        <Link href="/#framework" aria-current={current === "framework" ? "page" : undefined}>
          Framework
        </Link>
        <Link href="/speaking" aria-current={current === "speaking" ? "page" : undefined}>
          Speaking
        </Link>
        <Link
          href="/sheep-herding"
          aria-current={current === "sheep-herding" ? "page" : undefined}
        >
          Sheep herding
        </Link>
      </nav>
      <Link className={styles.homeLink} href="/">
        Home
      </Link>
    </header>
  );
}

export function ReadingFooter() {
  return (
    <footer className={styles.readingFooter}>
      <Link className={styles.readingBrand} href="/">
        <span>Mcd</span>
        <strong>79</strong>
      </Link>
      <p>Knowledge for making technology useful.</p>
      <div>
        <a href="https://www.linkedin.com/in/kevmcdonnell/">LinkedIn</a>
        <a href="https://bsky.app/profile/kevmcdonk.com">Bluesky</a>
        <a href="https://github.com/kevmcdonk">GitHub</a>
      </div>
    </footer>
  );
}
