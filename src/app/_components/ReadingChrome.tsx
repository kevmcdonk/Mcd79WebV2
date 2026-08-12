import Link from "next/link";
import styles from "../reading.module.css";

export function ReadingHeader() {
  return (
    <header className={styles.readingHeader}>
      <Link className={styles.readingBrand} href="/">
        <span>Mcd</span>
        <strong>79</strong>
      </Link>
      <nav aria-label="Reading navigation">
        <Link href="/thoughts">New writing</Link>
        <Link href="/blog">Legacy blog</Link>
        <Link href="/#framework">Framework</Link>
        <a
          href="https://sessionize.com/kevin-mcdonnell"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sessions
        </a>
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
