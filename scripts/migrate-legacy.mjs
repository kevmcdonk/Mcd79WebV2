import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import TurndownService from "turndown";

const paths = [
  "/blog/2023/01/setting-up-microsoft-syntex-payg-to-process-receipts",
  "/blog/2022/09/empowering-your-workforce-in-economic-uncertainty",
  "/blog/2022/09/the-why-of-viva-goals",
  "/blog/2022/06/18/viva-sales-what-it-means-for-future-of-viva",
  "/blog/2022/06/12/reflections-on-scottish-summit-2022",
  "/blog/2022/04/30/transforming-organisations-with-viva",
  "/blog/2021/10/10/discovering-ally",
  "/blog/2021/09/17/commsverse-lookback",
  "/blog/2021/07/17/samples-for-microsoft-search",
  "/blog/2021/07/09/toxic-male-behaviour-we-can-and-must-do-better",
];

const tagsBySlug = {
  "setting-up-microsoft-syntex-payg-to-process-receipts": [
    "Microsoft Syntex",
    "Content AI",
    "Automation",
  ],
  "empowering-your-workforce-in-economic-uncertainty": [
    "Microsoft Viva",
    "Employee experience",
    "Hybrid work",
  ],
  "the-why-of-viva-goals": ["Microsoft Viva", "OKRs", "Employee experience"],
  "viva-sales-what-it-means-for-future-of-viva": [
    "Microsoft Viva",
    "Sales",
    "Employee experience",
  ],
  "reflections-on-scottish-summit-2022": [
    "Community",
    "Conferences",
    "Accessibility",
  ],
  "transforming-organisations-with-viva": [
    "Microsoft Viva",
    "Change",
    "Employee experience",
  ],
  "discovering-ally": ["OKRs", "Microsoft Viva", "Employee experience"],
  "commsverse-lookback": ["Community", "Conferences", "Microsoft Teams"],
  "samples-for-microsoft-search": [
    "Microsoft Search",
    "Microsoft 365",
    "Development",
  ],
  "toxic-male-behaviour-we-can-and-must-do-better": [
    "Community",
    "Inclusion",
    "Culture",
  ],
};

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const turndown = new TurndownService({
  bulletListMarker: "-",
  codeBlockStyle: "fenced",
  headingStyle: "atx",
});

turndown.addRule("iframe", {
  filter: ["iframe"],
  replacement: (_content, node) => `\n\n${node.outerHTML}\n\n`,
});

const destination = path.join(process.cwd(), "content", "blog");
await mkdir(destination, { recursive: true });

for (const [index, pathname] of paths.entries()) {
  const sourceUrl = `https://www.mcd79.com${pathname}`;
  const response = await fetch(sourceUrl);

  if (!response.ok) {
    throw new Error(`Unable to migrate ${sourceUrl}: HTTP ${response.status}`);
  }

  const page = await response.text();
  const title = page.match(/<title>(.*?)<\/title>/s)?.[1]?.trim();
  const content = page.match(/<div class="content"[^>]*>([\s\S]*?)<\/div>/)?.[1]?.trim();

  if (!title || !content) {
    throw new Error(`Unable to locate article content in ${sourceUrl}`);
  }

  const [, year, month] = pathname.match(/\/blog\/(\d{4})\/(\d{2})/) ?? [];
  const day = pathname.match(/\/blog\/\d{4}\/\d{2}\/(\d{2})\//)?.[1];
  const date = `${monthNames[Number(month) - 1]} ${day ? `${Number(day)}, ` : ""}${year}`;
  const published = `${year}-${month}-${day ?? "01"}`;
  const slug = pathname.split("/").at(-1);
  const normalizedContent = content
    .replace(
      /<p>img: (\/assets\/[^\s<]+)\s*/g,
      '<p><img src="https://www.mcd79.com$1" alt="">',
    )
    .replace(
      '<img src="https://learn.microsoft.com/en-us/microsoft-365/contentunderstanding/syntex-overview" alt="lot of material on Microsoft Learn">',
      '<a href="https://learn.microsoft.com/en-us/microsoft-365/contentunderstanding/syntex-overview">lot of material on Microsoft Learn</a>',
    )
    .replaceAll('src="/assets/', 'src="https://www.mcd79.com/assets/')
    .replaceAll('href="/assets/', 'href="https://www.mcd79.com/assets/');
  const excerpt = normalizedContent
    .match(/<p>(.*?)<\/p>/s)?.[1]
    ?.replace(/<[^>]+>/g, "")
    .replaceAll("&amp;", "&")
    .replaceAll("&#39;", "'")
    .replaceAll("&quot;", '"')
    .trim();

  const frontmatter = [
    "---",
    `title: ${JSON.stringify(title)}`,
    `date: ${JSON.stringify(date)}`,
    `published: ${JSON.stringify(published)}`,
    `section: "blog"`,
    `order: ${index + 1}`,
    `excerpt: ${JSON.stringify(excerpt)}`,
    `sourceUrl: ${JSON.stringify(sourceUrl)}`,
    `tags: ${JSON.stringify(tagsBySlug[slug] ?? [])}`,
    "---",
    "",
  ].join("\n");

  const articleDestination = path.join(destination, year, month, day ?? "01");
  await mkdir(articleDestination, { recursive: true });

  await writeFile(
    path.join(articleDestination, `${slug}.md`),
    `${frontmatter}${turndown.turndown(normalizedContent).trim()}\n`,
    "utf8",
  );
}

console.log(`Migrated ${paths.length} legacy posts to content/blog.`);
