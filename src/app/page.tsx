import Link from "next/link";
import styles from "./page.module.css";

const Arrow = ({ direction = "right" }: { direction?: "right" | "down" }) => (
  <svg
    aria-hidden="true"
    className={direction === "down" ? styles.arrowDown : styles.arrow}
    viewBox="0 0 28 28"
  >
    <path d="M4 14h18M16 7l7 7-7 7" />
  </svg>
);

const LevelDiagram = ({
  number,
  label,
  color,
  shape,
}: {
  number: string;
  label: string;
  color: string;
  shape: "single" | "pair" | "row" | "system";
}) => {
  const blocks = {
    single: [[56, 62]],
    pair: [
      [35, 62],
      [77, 62],
    ],
    row: [
      [18, 62],
      [60, 62],
      [102, 62],
    ],
    system: [
      [18, 62],
      [60, 62],
      [102, 62],
      [39, 30],
      [81, 30],
    ],
  }[shape];

  return (
    <article className={styles.level}>
      <div className={styles.levelTop}>
        <span className={styles.levelNumber}>{number}</span>
        <span className={styles.levelLabel}>{label}</span>
      </div>
      <svg aria-hidden="true" viewBox="0 0 160 112">
        {blocks.map(([x, y], index) => (
          <g key={`${x}-${y}`} style={{ "--delay": `${index * 90}ms` } as React.CSSProperties}>
            <rect x={x} y={y} width="38" height="25" rx="2" fill={color} />
            <rect x={x} y={y + 18} width="38" height="7" rx="1" fill="rgba(0,0,0,.18)" />
            <circle cx={x + 11} cy={y} r="4" fill={color} stroke="#121212" strokeWidth="2" />
            <circle cx={x + 27} cy={y} r="4" fill={color} stroke="#121212" strokeWidth="2" />
          </g>
        ))}
        {shape === "system" && (
          <path d="M30 98h100M80 18v80" stroke="#121212" strokeDasharray="3 4" />
        )}
      </svg>
    </article>
  );
};

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.brand} href="#top" aria-label="Mcd79 home">
          <span>Mcd</span>
          <strong>79</strong>
        </Link>
        <nav className={styles.nav} aria-label="Primary navigation">
          <Link href="/thoughts">New writing</Link>
          <Link href="/blog">Legacy blog</Link>
          <Link href="/speaking">Speaking</Link>
          <Link href="/sheep-herding">Sheep herding</Link>
          <Link href="#framework">Framework</Link>
          <Link href="/about">About</Link>
        </nav>
        <Link
          className={styles.headerAction}
          href="/thoughts/2026/08/12/welcome-to-the-new-mcd79"
        >
          Start reading <Arrow />
        </Link>
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.heroCopy}>
          <h1>Make AI useful. Then make it stick.</h1>
          <p className={styles.lede}>
            Practical notes from Kevin McDonnell on evaluating AI tools, building
            better habits, and moving productive practice from one person to a
            whole organisation.
          </p>
          <div className={styles.heroActions}>
            <Link
              className={styles.primaryAction}
              href="/thoughts/2026/08/12/welcome-to-the-new-mcd79"
            >
              Read the latest writing <Arrow />
            </Link>
            <Link className={styles.textAction} href="#writing">
              Browse the writing
            </Link>
          </div>
        </div>

        <div className={styles.writingBoard} id="writing">
          <Link
            className={styles.latestBlock}
            href="/thoughts/2026/08/12/welcome-to-the-new-mcd79"
          >
            <span className={styles.blockIndex}>A</span>
            <div>
              <h2>Welcome to the new Mcd79</h2>
              <p>
                A new home for practical lessons about Copilot, agents, and
                useful AI adoption.
              </p>
            </div>
            <span className={styles.blockMeta}>AUG 2026 · LATEST WRITING</span>
            <Arrow />
          </Link>
          <Link
            className={styles.writingBlock}
            href="/thoughts/2026/08/12/the-value-of-copilot-is-in-the-work"
          >
            <span className={styles.blockIndex}>B</span>
            <h3>The value of Copilot is in the work</h3>
            <span className={styles.blockMeta}>COPILOT · VALUE</span>
            <Arrow />
          </Link>
          <Link
            className={`${styles.writingBlock} ${styles.writingBlockRed}`}
            href="/thoughts/2026/08/12/a-practical-map-of-copilot-agents"
          >
            <span className={styles.blockIndex}>C</span>
            <h3>A practical map of agents in the Copilot space</h3>
            <span className={styles.blockMeta}>COPILOT · AGENTS</span>
            <Arrow />
          </Link>
          <Link
            className={`${styles.writingBlock} ${styles.writingBlockYellow}`}
            href="/thoughts/2026/08/12/why-ai-productivity-needs-a-framework"
          >
            <span className={styles.blockIndex}>D</span>
            <h3>Why AI productivity needs a framework</h3>
            <span className={styles.blockMeta}>ADOPTION · FRAMEWORK</span>
            <Arrow />
          </Link>
        </div>
      </section>

      <section className={styles.frameworkPreview} id="framework">
        <div className={styles.frameworkPreviewCopy}>
          <h2>Build at the level where change happens.</h2>
          <p>
            The AI Productivity Framework separates four different adoption
            problems, from personal practice to organisational change.
          </p>
          <Link
            className={styles.textAction}
            href="/thoughts/2026/08/12/why-ai-productivity-needs-a-framework"
          >
            Why the framework matters
          </Link>
        </div>

        <div className={styles.heroBuild} aria-label="Four-stage AI productivity model">
          <div className={styles.buildHeader}>
            <span>BUILD SEQUENCE</span>
            <span>4 LEVELS / 1 PRACTICE</span>
          </div>
          <div className={styles.exploded}>
            <div className={styles.axisLabel}>Broader context</div>
            <LevelDiagram number="4" label="Organisation" color="#1769ff" shape="system" />
            <LevelDiagram number="3" label="Department" color="#f05540" shape="row" />
            <LevelDiagram number="2" label="Team" color="#ffd51f" shape="pair" />
            <LevelDiagram number="1" label="Personal" color="#33a86b" shape="single" />
            <div className={styles.axisLine}>
              <Arrow direction="down" />
              <span>Begin with the work</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.library} id="library">
        <div className={styles.libraryTitle}>
          <h2>The parts library</h2>
          <p>Different formats. One body of practical knowledge.</p>
        </div>
        <div className={styles.libraryRows}>
          <Link href="/thoughts">
            <span className={styles.partCode}>W-01</span>
            <strong>Current writing</strong>
            <span>Published notes and developing AI ideas</span>
            <Arrow />
          </Link>
          <Link href="/blog">
            <span className={styles.partCode}>L-79</span>
            <strong>Legacy blog</strong>
            <span>The modern workplace archive</span>
            <Arrow />
          </Link>
          <Link href="/speaking">
            <span className={styles.partCode}>S-24</span>
            <strong>Speaking</strong>
            <span>Engagements, workshops, and current sessions</span>
            <Arrow />
          </Link>
          <Link href="#framework">
            <span className={styles.partCode}>F-04</span>
            <strong>AI Productivity Framework</strong>
            <span>Personal to organisation</span>
            <Arrow />
          </Link>
          <Link href="/about">
            <span className={styles.partCode}>K-79</span>
            <strong>About Kevin</strong>
            <span>Career, community, and current work</span>
            <Arrow />
          </Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <Link className={styles.brand} href="#top"><span>Mcd</span><strong>79</strong></Link>
        <p>Knowledge for making technology useful.</p>
        <Link href="#top">Back to top ↑</Link>
      </footer>
    </main>
  );
}
