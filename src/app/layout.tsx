import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mcd79 | Make AI useful",
  description:
    "Kevin McDonnell's practical field guide to AI productivity, modern work, and sustained behaviour change.",
};

const designContract = `
<!--
THESIS: Productive AI practice is assembled deliberately; refuse the generic author-portrait-and-post-grid homepage.
OWN-WORLD: Sky-blue work fields, paper stock, black keylines, bright reading blocks, step diagrams, and inventory rows.
STORY: Meet Kevin, choose a published dispatch, then move into the four-level framework and wider library.
FIRST VIEWPORT: A compressed manifesto at left and an asymmetric ruled writing board at right; the latest note owns the largest block.
FORM: Dispatch board first, assembly manual second; approved layout refinement, seed homepage-build-your-practice.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <div
          aria-hidden="true"
          hidden
          dangerouslySetInnerHTML={{ __html: designContract }}
        />
        {children}
      </body>
    </html>
  );
}
