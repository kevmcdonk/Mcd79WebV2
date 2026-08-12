import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ReadingFooter, ReadingHeader } from "../_components/ReadingChrome";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Kevin McDonnell | Mcd79",
  description:
    "Kevin McDonnell is a Senior Director and Avanade's UK Copilot and Agent Lead, a Microsoft MVP, international speaker, and co-host of The Copilot Connection.",
};

const expertise = [
  {
    title: "Copilot and agents",
    body: "Strategy, adoption, extensibility, governance, and responsible use of Microsoft Copilot and agentic AI.",
  },
  {
    title: "Microsoft 365",
    body: "Experience as a product owner, developer, architect, administrator, user, and technology leader.",
  },
  {
    title: "Employee experience",
    body: "Connecting Microsoft Viva, collaboration tools, and organisational change to the needs of employees.",
  },
  {
    title: "Leadership",
    body: "Leading global teams, major budgets, pre-sales engagements, and senior client conversations.",
  },
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <ReadingHeader />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <h1>Technology matters when it meets the work.</h1>
            <p>
              Kevin McDonnell brings together what Microsoft technology can
              offer and the real challenges people and organisations need to
              solve.
            </p>
            <div className={styles.heroActions}>
              <Link href="/speaking/">
                Explore speaking sessions →
              </Link>
              <a
                href="https://www.linkedin.com/in/kevmcdonnell/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn ↗
              </a>
            </div>
          </div>
          <figure className={styles.heroImage}>
            <Image
              src="/about/kevin-speaking.jpg"
              alt="Kevin McDonnell speaking at Experts Live Europe"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
            />
            <figcaption>Kevin McDonnell / speaker / practitioner</figcaption>
          </figure>
        </section>

        <section className={styles.present}>
          <div className={styles.presentTitle}>
            <span>Current assignment</span>
            <h2>Leading Copilot and agent work at Avanade.</h2>
          </div>
          <div className={styles.presentCopy}>
            <p>
              Kevin is a Senior Director in Modern Workplace and the UK Copilot
              and Agent Lead at Avanade. He works with organisations to turn
              Copilot and agent capabilities into responsible, useful change.
            </p>
            <dl>
              <div>
                <dt>Organisation</dt>
                <dd>Avanade</dd>
              </div>
              <div>
                <dt>Role</dt>
                <dd>Senior Director / UK Copilot and Agent Lead</dd>
              </div>
              <div>
                <dt>Community</dt>
                <dd>Microsoft MVP — Microsoft 365</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className={styles.connection}>
          <div className={styles.connectionMark}>
            <span>CC</span>
            <div />
          </div>
          <div className={styles.connectionCopy}>
            <h2>The Copilot Connection.</h2>
            <p>
              Kevin co-hosts The Copilot Connection, a regular conversation
              about the news, people, practical uses, and harder questions
              emerging across the Microsoft Copilot ecosystem.
            </p>
            <a
              href="https://www.youtube.com/channel/UCcXsqvaQz5_OPAo6btCR0ng"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch The Copilot Connection ↗
            </a>
          </div>
        </section>

        <section className={styles.expertise}>
          <header>
            <h2>Work across the whole system.</h2>
            <p>
              Kevin has worked from code to strategy, and from individual
              solutions to programmes spanning teams and global regions.
            </p>
          </header>
          <div className={styles.expertiseRows}>
            {expertise.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.background}>
          <div>
            <h2>A career built from both sides of the brief.</h2>
          </div>
          <div className={styles.backgroundCopy}>
            <p>
              Kevin began in financial services, delivering Microsoft
              technology that helped colleagues collaborate and work more
              productively. Across thirteen years he moved through development,
              project management, SharePoint ownership, architecture, and
              business analysis before moving into consulting.
            </p>
            <p>
              That range still shapes his approach: understand the work first,
              connect technical possibility to human need, and share what
              proves useful. He contributes through international speaking,
              open-source work, videos, podcasts, and writing at Mcd79.
            </p>
          </div>
        </section>

        <section className={styles.recognition}>
          <div className={styles.recognitionCopy}>
            <h2>Recognised for sharing the work.</h2>
            <p>
              Kevin received the UK Modern Workplace Evangelist award at the
              2025 UK Tech Community Awards. He is also a Microsoft MVP in
              Microsoft 365 and a founding member of the Viva Explorers.
            </p>
          </div>
          <figure>
            <Image
              src="/about/kevin-award.jpg"
              alt="Kevin McDonnell receiving the 2025 UK Modern Workplace Evangelist award"
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
            />
          </figure>
        </section>

        <section className={styles.connect}>
          <h2>Follow the next useful connection.</h2>
          <div>
            <Link href="/thoughts/">Read current thinking →</Link>
            <Link href="/speaking/">
              Browse sessions →
            </Link>
            <a
              href="https://github.com/kevmcdonk"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub ↗
            </a>
            <a
              href="https://bsky.app/profile/kevmcdonk.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow on Bluesky ↗
            </a>
          </div>
        </section>
      </main>
      <ReadingFooter />
    </div>
  );
}
