import type { Metadata } from "next";
import { ReadingFooter, ReadingHeader } from "../_components/ReadingChrome";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Sheep Herding with Agent 365 | Kevin McDonnell",
  description:
    "Kevin McDonnell's Sheep Herding with Agent 365 talks and playable exercises about observing, governing, and securing AI agents.",
};

const principles = [
  {
    label: "Observe",
    title: "Know your flock.",
    copy: "Build a clear inventory, give every agent an identity, understand its owner and purpose, and find the shadow agents already moving across the hillside.",
  },
  {
    label: "Govern",
    title: "Set the gates.",
    copy: "Control how agents enter service, which tools they can reach, who remains accountable, and when an agent needs to be changed, contained, or retired.",
  },
  {
    label: "Secure",
    title: "Watch for wolves.",
    copy: "Connect identity, data, device, and threat controls so unsafe instructions, excessive access, and data loss are detected before they scatter the flock.",
  },
  {
    label: "Business Value",
    title: "Make the wool worth it.",
    copy: "Ensure that the efforts to observe, govern, and secure agents translate into tangible business outcomes and value for the organization...aka more wool.",
  }
];

const games = [
  {
    title: "Keep the flock",
    format: "Three-part field exercise",
    href: "/games/index.html",
    copy: "Find the missing flock, sort each agent through the right guardrails, then defend the farm through Observe, Govern, and Secure.",
  },
  {
    title: "Hill Farm 365",
    format: "Side-scrolling adventure",
    href: "/games/hill-farm-side-scroller.html",
    copy: "Walk the full Agent 365 farm from registry and mapping through lifecycle controls, connected security, and the final wolf encounter.",
  },
  {
    title: "Grand Theft Wool: Amsterdam",
    format: "Overhead arcade exercise",
    href: "/games/amsterdam-agent-city.html",
    copy: "Register shadow lambs and respond to injection wolves, privilege boars, exfiltration crows, unsafe tools, hallucinations, and runaway loops.",
  },
];

function SheepMark() {
  return (
    <svg viewBox="0 0 360 260" role="img" aria-label="A sheep inside a three-part Agent 365 field">
      <path d="M42 64h276M42 130h276M42 196h276" className={styles.fieldLine} />
      <path d="M112 87c-28-36 31-55 48-28 10-38 67-25 63 12 34-18 68 22 43 48 31 18 8 63-28 53-5 38-62 44-74 8-25 28-72 4-58-29-38-2-45-53 6-64Z" />
      <path d="M127 169v35M220 169v35M245 111l35-13M252 126l32 8" className={styles.sheepLine} />
      <circle cx="250" cy="112" r="28" />
      <circle cx="259" cy="106" r="3" className={styles.eye} />
      <path d="m105 80-24-24M210 67l23-27" className={styles.signalLine} />
    </svg>
  );
}

export default function SheepHerdingPage() {
  return (
    <div className={styles.page}>
      <ReadingHeader current="sheep-herding" />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <h1>Herd the agents. Don’t let them run the farm.</h1>
            <p>
              Sheep Herding with Agent 365 turns agent management into a
              practical story: know what is in the field, give it the right
              boundaries, and keep the wolves away.
            </p>
          </div>
          <div className={styles.heroField}>
            <SheepMark />
            <div>
              <span>One flock / three jobs</span>
              <strong>Observe</strong>
              <strong>Govern</strong>
              <strong>Secure</strong>
            </div>
          </div>
        </section>

        <section className={styles.introduction}>
          <div>
            <span>The talk</span>
            <h2>A memorable model for a serious control problem.</h2>
          </div>
          <p>
            As organisations create and adopt more agents, the challenge stops
            being how to build one. It becomes how to see the whole population,
            assign responsibility, control access, understand behaviour, and
            respond when something goes wrong. The sheep-herding metaphor makes
            that operating model visible without losing the technical detail.
          </p>
        </section>

        <section className={styles.principles} aria-label="The three parts of the talk">
          {principles.map((principle) => (
            <article key={principle.label}>
              <span>{principle.label}</span>
              <h2>{principle.title}</h2>
              <p>{principle.copy}</p>
            </article>
          ))}
        </section>

        <section className={styles.engagement}>
          <div className={styles.engagementTitle}>
            <span>On stage</span>
            <h2>Sheep herding with Agent 365.</h2>
          </div>
          <div className={styles.engagementDetails}>
            <dl>
              <div>
                <dt>Next Event</dt>
                <dd>ESPC</dd>
              </div>
              <div>
                <dt>Date</dt>
                <dd>1-3 December 2026</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>Amsterdam, Netherlands</dd>
              </div>
            </dl>
            <p>
              The conference session follows the flock from discovery and
              identity through lifecycle governance and layered protection,
              using the farm to connect the individual controls into one
              coherent operating story.
            </p>
            <a
              href="https://espc.tech/conference/espc-2026/programme/sheep-herding-with-agent-365/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View the published session ↗
            </a>
          </div>
        </section>

        <section className={`${styles.introduction} ${styles.mapIntroduction}`}>
          <div>
            <span>Interactive field guide</span>
            <h2>Explore what Agent 365 can do.</h2>
          </div>
          <div className={styles.mapOverview}>
            <p>
              Walk the farm from agent discovery and identity through lifecycle
              controls, tool access, compliance, and security. Each stop
              explains the capability and links to its Microsoft Learn source.
            </p>
            <ul className={styles.mapBenefits}>
              <li>
                <strong>Discover</strong>
                <span>Find agents, their identities, activity, and shadow AI.</span>
              </li>
              <li>
                <strong>Govern</strong>
                <span>Explore ownership, lifecycle policies, and tool access.</span>
              </li>
              <li>
                <strong>Secure</strong>
                <span>See how Entra, Purview, Defender, and Intune protect agents.</span>
              </li>
            </ul>
            <a className={styles.mapLink} href="/games/agent-365-hill-farm-map.html">
              Explore the Agent 365 map →
            </a>
          </div>
        </section>

        <section className={styles.games}>
          <header>
            <h2>Play the field notes.</h2>
            <p>
              These browser games turn the talk’s metaphors into small,
              hands-on exercises. Each game runs directly from this site.
            </p>
          </header>
          <div className={styles.gameRows}>
            {games.map((game) => (
              <a key={game.href} href={game.href}>
                <span>{game.format}</span>
                <div>
                  <h3>{game.title}</h3>
                  <p>{game.copy}</p>
                </div>
                <strong>Play game →</strong>
              </a>
            ))}
          </div>
        </section>
      </main>
      <ReadingFooter />
    </div>
  );
}
