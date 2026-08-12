---
name: Mcd79
description: A working instruction-manual system for practical AI knowledge.
colors:
  working-sky: "#8dd8f8"
  action-blue: "#1769ff"
  build-yellow: "#ffd51f"
  build-red: "#f05540"
  build-green: "#33a86b"
  paper: "#f6f1e5"
  stock-white: "#ffffff"
  ink: "#121212"
typography:
  display:
    fontFamily: "Mcd79 Condensed, sans-serif"
    fontSize: "clamp(58px, 6.8vw, 104px)"
    fontWeight: 900
    lineHeight: 0.88
    letterSpacing: "-0.04em"
  index-display:
    fontFamily: "Mcd79 Condensed, sans-serif"
    fontSize: "clamp(64px, 8vw, 96px)"
    fontWeight: 900
    lineHeight: 0.88
    letterSpacing: "-0.04em"
  article-display:
    fontFamily: "Mcd79 Condensed, sans-serif"
    fontSize: "clamp(62px, 8vw, 96px)"
    fontWeight: 900
    lineHeight: 0.88
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Mcd79 Condensed, sans-serif"
    fontSize: "clamp(48px, 6vw, 88px)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Mcd79 Condensed, sans-serif"
    fontSize: "clamp(32px, 4.6vw, 68px)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "-0.035em"
  homepage-dispatch-title:
    fontFamily: "Mcd79 Condensed, sans-serif"
    fontSize: "clamp(45px, 4.7vw, 74px)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.035em"
  compact-title:
    fontFamily: "Mcd79 Condensed, sans-serif"
    fontSize: "clamp(28px, 3vw, 46px)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  continuation:
    fontFamily: "Mcd79 Condensed, sans-serif"
    fontSize: "clamp(50px, 6vw, 82px)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Mcd79 Sans, sans-serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1.55
    letterSpacing: "normal"
  reading-body:
    fontFamily: "Mcd79 Sans, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.72
    letterSpacing: "normal"
  label-micro:
    fontFamily: "Courier New, monospace"
    fontSize: "9px"
    fontWeight: 700
    lineHeight: "normal"
    letterSpacing: "0.1em"
  label-axis:
    fontFamily: "Courier New, monospace"
    fontSize: "10px"
    fontWeight: 700
    lineHeight: "normal"
    letterSpacing: "0.1em"
  label:
    fontFamily: "Courier New, monospace"
    fontSize: "11px"
    fontWeight: 700
    lineHeight: "normal"
    letterSpacing: "0.1em"
  label-nav:
    fontFamily: "Mcd79 Sans, sans-serif"
    fontSize: "12px"
    fontWeight: 800
    lineHeight: "normal"
    letterSpacing: "0.07em"
  label-action:
    fontFamily: "Mcd79 Sans, sans-serif"
    fontSize: "13px"
    fontWeight: 900
    lineHeight: "normal"
    letterSpacing: "0.05em"
rounded:
  square: "0"
spacing:
  tight: "14px"
  standard: "24px"
  roomy: "42px"
  section-block: "clamp(72px, 10vw, 150px)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.stock-white}"
    typography: "{typography.label-action}"
    rounded: "{rounded.square}"
    padding: "0 18px"
    height: "54px"
  button-primary-hover:
    backgroundColor: "{colors.build-yellow}"
    textColor: "{colors.ink}"
  button-action:
    backgroundColor: "{colors.build-yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.label-action}"
    rounded: "{rounded.square}"
    padding: "0 18px"
    height: "44px"
  card-feature:
    backgroundColor: "{colors.stock-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
---

# Design System: Mcd79

## Overview

**Creative North Star: "The Working Instruction Manual"**

Mcd79 presents practical knowledge as something assembled rather than merely read. The visual world combines sky-blue work fields, warm paper stock, black construction keylines, bright build pieces, step diagrams, dispatch boards, preservation ledgers, and instruction-sheet articles. It is editorial in hierarchy and instructional in structure: bold, exact, tactile, and useful rather than polished into anonymous software chrome.

The system deliberately refuses the generic author portrait paired with a post grid. Current writing is arranged as an asymmetric dispatch board, legacy history as a chronological preservation ledger, and long-form pages as instruction sheets with explicit provenance. Condensed headlines carry the authorial argument while numbered parts, metadata, arrows, and ruled rows make ideas feel inspectable and connected. The working-canvas grid remains a specialist material confined to exploded model canvases.

**Key Characteristics:**
- Warm paper and sky-blue working fields separated by black keylines.
- Oversized condensed statements paired with compact technical labels.
- Square, flat components with bright functional color assignments.
- Asymmetric dispatch boards, chronological ledger rows, and yellow provenance rails.
- Long-form instruction sheets with clear hero status and continuation strips.
- Brief, purposeful assembly and hover motion with reduced-motion support.

## Colors

The palette sets utilitarian black and paper against a sky-blue field, then assigns saturated yellow, red, green, and deep blue to actions, build pieces, provenance, and structural emphasis.

### Primary
- **Working Sky** (#8dd8f8): The broad working-field color behind the opening model and feature visual.
- **Action Blue** (#1769ff): The high-visibility focus, selection, and diagram accent.

### Secondary
- **Build Yellow** (#ffd51f): The primary action and framework field, also used as the durable provenance rail beside long-form reading.
- **Build Red** (#f05540): A major section field and one of the recurring model-piece colors.
- **Build Green** (#33a86b): The personal-level model piece, completing the build-piece vocabulary.

### Neutral
- **Paper Stock** (#f6f1e5): The warm page ground and default editorial surface.
- **Stock White** (#ffffff): The clean insert used for feature cards and translucent working layers.
- **Construction Ink** (#121212): The shared text, icon, keyline, and dark-action color.

### Named Rules

**The Color Has a Job Rule.** Saturated colors identify working fields, actions, or build parts; they are not ambient decoration.

**The Canvas Boundary Rule.** The working-canvas grid belongs only inside an exploded model canvas; the surrounding page remains solid paper or solid color.

**The Provenance Is Structural Rule.** Yellow marks provenance as a ruled rail or continuation field; it is never a detached badge.

## Typography

**Display Font:** Mcd79 Condensed, locally hosted Barlow Condensed (with sans-serif fallback)  
**Body Font:** Mcd79 Sans, locally hosted Barlow (with sans-serif fallback)  
**Label/Mono Font:** Courier New (with monospace fallback)

**Character:** Heavy condensed type gives the knowledge a manifesto-like directness without consuming unnecessary width. Barlow keeps explanatory text plain and approachable, while Courier labels diagram coordinates, metadata, and inventory information as technical annotation.

### Hierarchy
- **Display** (900, fluid 58–104px, 0.88 line-height): Compressed first-order statements, balanced over a short measure.
- **Index Display** (900, fluid 64–96px, 0.88 line-height): Current-writing and legacy-index declarations; on compact screens it remains forceful rather than scaling proportionally.
- **Article Display** (900, fluid 62–96px, 0.88 line-height): Long-form titles that share one ramp across current and preserved hero variants.
- **Headline** (900, fluid 48–88px, 0.92 line-height): Section arguments with tight negative tracking.
- **Title** (900, fluid 32–68px, 0.92 line-height): Primary dispatch-board titles.
- **Homepage Dispatch Title** (900, fluid 45–74px, 0.90 line-height): The dominant dispatch on the home working board.
- **Compact Title** (900, fluid 28–46px, 0.95 line-height): Secondary dispatch cells and chronological ledger titles; compact dispatch titles use a 32–56px mobile override below 640px.
- **Continuation** (900, fluid 50–82px, 0.90 line-height): Cross-index bridge statements on yellow or red continuation fields.
- **Body** (600, 18px, 1.55 line-height): Explanatory reading copy, generally constrained to 62 characters.
- **Reading Body** (400, 19px, 1.72 line-height): Long-form article copy in a 920px maximum reading field; it becomes 18px below 640px.
- **Micro Label** (700, 9px, 0.10em letter-spacing): Dense dispatch metadata.
- **Axis Label** (700, 10px, 0.10–0.12em letter-spacing): Diagram axes and compact working annotations.
- **Label** (700, 11px, 0.10em letter-spacing): Dates, provenance, article status, and diagram notation.
- **Navigation Label** (800–900, 12px, 0.07em letter-spacing): Uppercase reading navigation; the second mobile header row uses a deliberate 10px compact override.
- **Action Label** (900, 13px, 0.05em letter-spacing): Primary actions, return routes, and article continuation links.

### Named Rules

**The Compression With Air Rule.** Display type is tightly set, but it sits inside generous section spacing and never competes with dense body copy.

**The Annotation Is Functional Rule.** Monospace uppercase text labels parts, metadata, or instructions; it is not a decorative eyebrow.

## Layout

The desktop system uses full-width ruled fields rather than a floating centered shell. Major areas are grid compositions with generous fluid padding, usually between 20–96px horizontally and 72–150px vertically. Content grids intentionally mix unequal columns: text occupies the quieter side while working diagrams or structured lists take the larger operational field.

Strong 2px keylines define section boundaries and primary component edges; 1px rules subdivide diagrams. Repeated 14px, 24px, and 42px intervals organize compact relationships, normal component gaps, and action separation. Reading copy stays near 54–62 characters even when the surrounding field is broad.

At 980px, homepage multi-column hero, framework, feature, and author structures stack, navigation is removed, and component borders move to preserve the keyline logic. Reading surfaces use their own durable 900px stack point: dispatch boards become one column, provenance rails move above the article body, and the reading header becomes two ruled rows with identity and home action above a horizontally ordered navigation row. At 680px the exploded model becomes a single vertical four-step sequence; at 640px reading indexes, ledger rows, article spacing, and the second header row compact independently. The system preserves sequence and hierarchy rather than shrinking desktop compositions uniformly.

### Named Rules

**The Ruled Field Rule.** Layout edges are expressed through shared keylines and color fields, not isolated floating cards.

**The Stack Without Softening Rule.** Responsive layouts change axis and column count while retaining square geometry, strong type, and structural rules.

## Elevation & Depth

The system uses no shadows. Depth comes from solid color planes, translucent white layers over the sky field, black keylines, and the top/side shading drawn into build-piece illustrations. Motion may separate a build piece temporarily, but the resting interface remains flat.

### Named Rules

**The Flat Assembly Rule.** Establish hierarchy with plane, rule, overlap, and diagram shading; never introduce ambient card shadows.

## Shapes

The interface is rectilinear and almost entirely square-cornered. Primary controls, cards, section fields, and inventory rows use hard edges with 2px ink borders. Arrows use square line caps and miter joins. Small radii appear only inside illustrated construction blocks, where they describe the object rather than soften the interface.

Geometric marks may rotate or overlap within an illustration, but content containers remain aligned to the governing grid.

### Named Rules

**The Object, Not Chrome Rule.** Rounded detail belongs to depicted build pieces; interface chrome remains square.

## Components

### Buttons

Buttons feel like labeled construction parts: rectangular, high-contrast, and decisive.

- **Shape:** Square corners with a 2px construction-ink border.
- **Primary:** Ink field with white text, 54px minimum height, 18px inline padding, and a directional line arrow.
- **Action:** Build-yellow field with ink text and a 44px minimum touch height.
- **Hover / Focus:** Primary reverses to build yellow and ink; the yellow action may reverse to stock white. State color transitions use 180ms ease-out. Keyboard focus is a 4px action-blue outline with a 4px offset.
- **Tertiary:** Heavy uppercase text with a thin underline offset by 5px; it remains visually subordinate to the filled action.

### Cards / Containers

Containers behave as ruled working inserts rather than elevated cards.

- **Corner Style:** Square.
- **Background:** Paper, stock white, working sky, or a task-specific build color.
- **Shadow Strategy:** None; use the flat assembly vocabulary.
- **Border:** 2px ink outer rule with 1px internal diagram divisions where needed.
- **Internal Padding:** Fluid 22–72px according to information density.

### Navigation

The homepage header is a three-part ruled strip: condensed Mcd79 wordmark, centered uppercase links, and a yellow reading action. Its navigation disappears below 980px while identity and action remain. Reading surfaces use a related instruction-sheet header: three columns on wide screens, then at 900px a two-row composition with wordmark and home action on row one and the complete underlined navigation on a separately ruled row two. At 640px that row uses 10px labels and tighter spacing rather than hiding routes. The footer repeats the wordmark on an ink field and uses white type.

### Current-Writing Dispatch Board

Current writing uses an asymmetric ruled board rather than equal cards. A white lead dispatch spans three desktop rows while three smaller blue, red, and yellow cells form the secondary column. Every cell combines an oversized alphabetical index, compressed title, date or subject metadata, and terminal arrow. At 900px the board becomes one column; below 640px it keeps the lead's greater depth and gives all titles a shared forceful mobile ramp.

### Legacy Chronological Ledger

Preserved writing is a chronological ledger of full-width ruled rows. Each row exposes sequence number, date, title, excerpt, and arrow in that order; subtle periodic sky tint creates counting rhythm without obscuring chronology. Rows are at least 210px on wide screens, recompose to three columns below 640px, and keep date and excerpt visible. Fine-pointer hover turns the row Working Sky and shifts it 8px.

### Article Instruction Sheet

Current and legacy articles share one long-form scaffold but use distinct hero variants: Working Sky identifies current writing while Paper Stock identifies preserved material. Both first viewports expose return route, title, excerpt, date, author, and status. A yellow provenance rail sits beside the body on wide screens and above it below 900px; it carries `NEW` or the source year, provenance explanation, and the original-source action when available.

Article copy uses a maximum 920px field, 19px type at 1.72 line-height, 26px paragraph rhythm, and 72px separation before level-two headings. Images and 16:9 media occupy the reading width, receive a 2px ink frame, and use 44px block margins. At 640px body type becomes 18px and page padding becomes 24px.

### Continuation Strip

Indexes and articles close with full-width ruled continuation fields instead of isolated recommendation cards. Index strips use a high-contrast yellow or red field to bridge between current and preserved writing. Article strips use Working Sky and keep the instruction first, followed by explicit routes to new writing, legacy history, and the framework; they collapse from four columns to one below 640px.

### Exploded Model Canvas

The signature explanatory component is a ruled, translucent working canvas over Working Sky. A 24px square grid supports four numbered levels, colored construction-block diagrams, a vertical context axis, and a directional baseline. Blocks assemble downward over 780ms with a fast-settling easing curve; each block is delayed by 90ms. Reduced-motion preference removes the animation.

### Inventory Rows

Inventory links are full-width ruled rows with a compact monospace part code, uppercase title, plain-language description, and line arrow. Fine-pointer hover changes the row to Working Sky and shifts it 8px horizontally over 160ms. On narrow screens, description and action reflow without losing their reading order.

### Feature Insert

The featured-reading component joins a yellow index cell, white editorial body, and sky-blue illustrated action cell inside one 2px frame. On smaller screens the action cell moves below the copy and its dividing border moves from left to top. Fine-pointer hover separates the illustrated build pieces over 300ms.

## Do's and Don'ts

### Do:
- **Do** use warm paper and solid working fields as the default material vocabulary.
- **Do** use 2px ink keylines for major boundaries and 1px ink rules for internal diagram structure.
- **Do** pair compressed statements with generous surrounding space and readable body measures.
- **Do** expose provenance in index metadata, article hero status, and the yellow article rail.
- **Do** preserve the asymmetric lead choice for current writing and chronological scan order for legacy writing.
- **Do** keep article media full-width within the reading measure and frame it with a 2px ink keyline.
- **Do** make writing actions visibly primary and preserve a 44px minimum action height.
- **Do** gate hover movement to fine pointers and remove assembly motion for reduced-motion preference.

### Don't:
- **Don't** spread the working-canvas grid beyond an exploded model canvas.
- **Don't** add shadows, soft card radii, gradients, or glass effects to create hierarchy.
- **Don't** use bright colors without a structural, action, or build-part role.
- **Don't** turn functional monospace annotation into decorative eyebrow copy.
- **Don't** flatten dispatch boards into equal cards or legacy ledgers into an undated post grid.
- **Don't** hide the reading routes on mobile; preserve the ruled second header row.
- **Don't** collapse responsive layouts by scaling everything down; preserve sequence, keylines, and reading order.
