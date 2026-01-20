# CLAUDE.md - Project Context for Claude Code

## Project Overview

Landing page for the **WEDOHYPE AI Course** - a course teaching how to build landing pages using AI tools. The site is in Greek (Ελληνικά).

## Tech Stack

- **Framework:** Next.js 16.1.3 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion (`motion/react`)
- **Icons:** Lucide React
- **UI Components:** Radix UI primitives

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # Run ESLint
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main page - imports all sections
│   ├── layout.tsx        # Root layout with fonts
│   └── globals.css       # Global styles & CSS variables
├── components/
│   ├── sections/         # Page sections (18 total)
│   │   ├── index.ts      # Barrel exports
│   │   ├── Hero.tsx
│   │   ├── UniqueSystem.tsx
│   │   ├── PainPoints.tsx
│   │   ├── CoursePreview.tsx
│   │   ├── CourseModules.tsx
│   │   ├── PricingCTA.tsx
│   │   ├── MoneyBackGuarantee.tsx
│   │   ├── BonusPack.tsx
│   │   ├── AboutWedohype.tsx
│   │   ├── WhatYouGain.tsx
│   │   ├── RealResults.tsx
│   │   ├── TargetAudience.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── WhyChoose.tsx
│   │   ├── Charity.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   └── FinalCTA.tsx
│   └── ui/               # Reusable UI components
│       ├── button.tsx
│       └── testimonials-columns.tsx
├── lib/
│   └── utils.ts          # cn() utility for classnames
└── public/
    └── images/           # Static images
```

## Design System

### Colors (CSS Variables)

| Variable | Value | Usage |
|----------|-------|-------|
| `--primary` | `#15301f` | Dark green - main text, headings |
| `--accent` | `#85c65f` | Bright green - CTAs, highlights |
| `--primary-bg` | `#d5e9c6` | Light green - backgrounds |
| `--primary-bg-light` | `#eef6e8` | Very light green |
| `--section-bg` | `#f6f6f6` | Gray section backgrounds |
| `--border` | `#c5ddb3` | Border color |

### Typography

- **Font:** Inter (Google Fonts)
- **Headings:** font-semibold or font-bold
- **Body:** text-[14px] to text-[16px]

### Border Radius

- Small: `13px` / `rounded-[13px]`
- Medium: `15px` / `rounded-[15px]`
- Large: `23px` / `rounded-[23px]`
- Full: `30px` / `rounded-full`

### Shadows

```css
box-shadow: 0px 4px 91px 1px rgba(135, 135, 135, 0.1);
```

## Background Patterns

CSS utilities defined in `globals.css` for dot/grid patterns:

```tsx
// Dots pattern with edge fade
<div className="bg-pattern bg-dots mask-fade-edges">

// Light dots
<div className="bg-pattern bg-dots-light mask-fade-center">

// Grid pattern
<div className="bg-pattern bg-grid mask-fade-y">
```

Available classes:
- `bg-dots`, `bg-dots-light` - Dot patterns
- `bg-grid`, `bg-grid-light` - Grid patterns
- `mask-fade-edges`, `mask-fade-center`, `mask-fade-y` - Fade masks

## Figma Access

The design is in Figma and can be accessed via MCP:
- **File Key:** `ht5tUmKjXpxbZetvvco4Mw`
- **Main Page Node:** `1:2` (Landing Page Desktop)
- **Account:** WEDOHYPE (hello@wedohype.com)

### Example Figma MCP Usage

```
mcp__figma__get_screenshot(fileKey: "ht5tUmKjXpxbZetvvco4Mw", nodeId: "1:2")
mcp__figma__get_design_context(fileKey: "ht5tUmKjXpxbZetvvco4Mw", nodeId: "1:2")
```

## Component Patterns

### Section Template

```tsx
export default function SectionName() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-[28px] md:text-[37px] font-semibold text-[#15301f] text-center mb-10">
          Section Title
        </h2>

        {/* Content */}
      </div>
    </section>
  );
}
```

### Button Styles

```tsx
// Primary CTA
<button className="bg-[#85c65f] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#75b54f] transition-colors">
  Button Text
</button>

// Secondary/Outline
<button className="border-2 border-[#15301f] text-[#15301f] px-6 py-3 rounded-full font-medium">
  Button Text
</button>
```

### Animation with Framer Motion

```tsx
import { motion } from "motion/react";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

## Important Notes

1. **Greek Content:** All visible text is in Greek
2. **Responsive:** Mobile-first design with md: breakpoints
3. **Images:** Store in `/public/images/` and reference as `/images/filename.ext`
4. **New Sections:** Add to `sections/index.ts` barrel file and import in `page.tsx`
5. **No Dark Mode:** Design is light theme only
6. **Tailwind v4:** Uses new CSS-first configuration (no tailwind.config.js)
