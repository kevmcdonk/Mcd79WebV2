import type { Metadata } from "next";
import Link from "next/link";
import { ReadingFooter, ReadingHeader } from "../_components/ReadingChrome";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Speaking engagements | Kevin McDonnell",
  description:
    "Kevin McDonnell's speaking engagements, workshops, community events, and current sessions on Copilot, agents, Microsoft 365, and AI adoption.",
};

const recentEngagements = [
  {
    date: "25 JUN 2026",
    event: "Commsverse 2026",
    location: "Weybridge, UK",
    title: "Sheep herding with Agent 365",
    format: "Conference session",
    href: "https://events.justattend.com/events/conference-session/c96fe0e1/796de8f3",
    source: "JustAttend",
  },
  {
    date: "24 JUN 2026",
    event: "Commsverse 2026",
    location: "Weybridge, UK",
    title: "The reality of delivering agentic solutions within healthcare",
    format: "Conference session",
    href: "https://events.justattend.com/events/conference-session/c96fe0e1/3ca73664",
    source: "JustAttend",
  },
  {
    date: "14 APR 2026",
    event: "Copilot Community Conference Europe",
    location: "Online",
    title: "Positioning yourself for the future of Copilot",
    format: "Keynote with Zoe Wilson",
    href: "https://www.youtube.com/watch?v=MWBJTKXmuYQ",
    source: "Conference recording",
  },
  {
    date: "17 OCT 2025",
    event: "South Coast Summit",
    location: "Southampton, UK",
    title: "Transform your SharePoint with Content AI and Agents",
    format: "Full-day workshop",
    href: "https://kevmcdonk.github.io/SCS25-SharePoint-AI-Workshop/",
    source: "Workshop materials",
  },
];

const currentSessions = [
  {
    title: "Agentageddon and how to prevent it",
    description:
      "A practical workshop for building, testing, governing, and responsibly deploying agents.",
    href: "https://sessionize.com/s/kevin-mcdonnell/agentageddon-and-how-to-prevent-it/170080",
  },
  {
    title: "Building an AI strategy with Microsoft Copilot",
    description:
      "Connecting Copilot choices, governance, adoption, extension, and value into one organisational strategy.",
    href: "https://sessionize.com/s/kevin-mcdonnell/building-an-ai-strategy-with-microsoft-copilot/170079",
  },
  {
    title: "How can Copilot and agents change the way I work?",
    description:
      "A demonstration-led look at changing everyday habits with Copilot, agents, actions, and multi-agent workflows.",
    href: "https://sessionize.com/s/kevin-mcdonnell/how-can-copilot-and-agents-change-the-way-i-work/170077",
  },
  {
    title: "The anatomy of an agent",
    description:
      "Breaking an AI agent into its building blocks so teams can choose the right design, technology, and controls.",
    href: "https://sessionize.com/s/kevin-mcdonnell/the-anatomy-of-an-agent/170071",
  },
  {
    title: "Skilling up with Skills",
    description:
      "How reusable AI Skills work, where they fit, and how they differ from agents across Microsoft tools.",
    href: "https://sessionize.com/s/kevin-mcdonnell/skilling-up-with-skills-how-skills-can-transform-y/170073",
  },
];

export default function SpeakingPage() {
  return (
    <div className={styles.page}>
      <ReadingHeader />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroStatement}>
            <h1>Make the complicated useful in a room full of people.</h1>
            <p>
              Kevin speaks about Copilot, agents, Microsoft 365, responsible
              AI, and the work required to turn technology into meaningful
              change.
            </p>
          </div>
          <div className={styles.heroCallout}>
            <span>Available for</span>
            <strong>Keynotes</strong>
            <strong>Conference sessions</strong>
            <strong>Workshops</strong>
            <strong>Panels and podcasts</strong>
            <a
              href="https://sessionize.com/kevin-mcdonnell"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Sessionize profile ↗
            </a>
          </div>
        </section>

        <section className={styles.recurring}>
          <div className={styles.recurringMark}>
            <span>LIVE</span>
          </div>
          <div className={styles.recurringCopy}>
            <h2>Copilot Fireside Chat.</h2>
            <p>
              On the last Wednesday of every month, Kevin and Zoe Wilson host
              an open online conversation with a guest from Microsoft. The
              format follows what is changing across Copilot and gives the
              community space to ask direct questions.
            </p>
            <div className={styles.recurringDetails}>
              <span>Monthly</span>
              <span>16:00 UK</span>
              <span>Online</span>
            </div>
            <a
              href="https://copilotfireside.chat/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the next Fireside Chat ↗
            </a>
          </div>
        </section>

        <section className={styles.engagements}>
          <header>
            <h2>Recent engagements.</h2>
            <p>
              A verified selection from conference programmes, speaker
              platforms, recordings, and published workshop material.
            </p>
          </header>
          <div className={styles.engagementRows}>
            {recentEngagements.map((engagement) => (
              <article key={`${engagement.date}-${engagement.title}`}>
                <time>{engagement.date}</time>
                <div className={styles.eventName}>
                  <span>{engagement.event}</span>
                  <small>{engagement.location}</small>
                </div>
                <div className={styles.engagementTitle}>
                  <h3>{engagement.title}</h3>
                  <span>{engagement.format}</span>
                </div>
                <a
                  href={engagement.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {engagement.source} ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.catalogue}>
          <header>
            <h2>Sessions ready for the next stage.</h2>
            <p>
              Current session abstracts from Kevin’s public Sessionize
              catalogue. Topics can be adapted for conference sessions,
              workshops, leadership audiences, or technical communities.
            </p>
          </header>
          <div className={styles.catalogueRows}>
            {currentSessions.map((session, index) => (
              <a
                href={session.href}
                target="_blank"
                rel="noopener noreferrer"
                key={session.title}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{session.title}</h3>
                  <p>{session.description}</p>
                </div>
                <strong>Read abstract ↗</strong>
              </a>
            ))}
          </div>
        </section>

        <section className={styles.invite}>
          <h2>Bring a practical AI conversation to your event.</h2>
          <div>
            <a
              href="https://sessionize.com/kevin-mcdonnell"
              target="_blank"
              rel="noopener noreferrer"
            >
              Invite Kevin through Sessionize ↗
            </a>
            <Link href="/about/">Read Kevin’s background →</Link>
          </div>
        </section>
      </main>
      <ReadingFooter />
    </div>
  );
}
