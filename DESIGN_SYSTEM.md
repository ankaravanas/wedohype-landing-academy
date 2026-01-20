# WEDOHYPE AI Course - Design System

## Colors (from Figma)

### Primary Colors
- **Primary Dark**: `#15301f` - Main text, headings, buttons
- **Primary Accent**: `#85c65f` - Highlights, accents, CTAs
- **Primary Light**: `#d5e9c6` - Badges, light backgrounds
- **Primary Extra Light**: `#eef6e8` - Section backgrounds

### Background Colors
- **White**: `#ffffff`
- **Light Gray**: `#f6f6f6` - Card backgrounds
- **Green Gradient Start**: `#f6f6f6`
- **Green Gradient End**: `#85c65f`
- **Section BG (green tint)**: `#e7f3df`

### Text Colors
- **Heading**: `#15301f`
- **Body**: `#15301f` with opacity for lighter variants
- **Muted**: Gray variants

## Typography (from Figma)

### Font Family
- **Primary**: `Google Sans` (with fallback to system sans-serif)
- Weights: Regular, Medium, SemiBold, Bold

### Font Sizes
- **Hero Headline**: 48px (font-semibold, leading-[1.1])
- **Section Headline**: 37px
- **Subheadline**: 28px
- **Body Large**: 18px (leading-[26px])
- **Body**: 16px (leading-[22px], tracking-[0.32px])
- **Small/Label**: 14px

## Spacing & Layout

### Border Radius
- **Cards/Large**: `rounded-[23px]` (23px)
- **Buttons/Medium**: `rounded-[15px]` (15px)
- **Small elements**: `rounded-[13px]` (13px)
- **Pills/Badges**: `rounded-[30px]` or `rounded-full`

### Shadows
- **Card Shadow**: `shadow-[0px_4px_91px_1px_rgba(135,135,135,0.1)]`
- **Glassmorphism**: `backdrop-blur-[26.5px] bg-[rgba(255,255,255,0.4)]`

### Container Widths
- **Max Width**: 1920px
- **Content Width**: ~1538px (for centered content)
- **Card Width**: varies by section

## Components

### Buttons
```tsx
// Primary CTA
className="bg-[#15301f] hover:bg-[#0d1f14] text-white font-semibold py-4 px-8 rounded-[15px] text-[18px]"

// Secondary/Outline
className="bg-white border border-[#d5e9c6] rounded-full px-5 py-2.5"
```

### Cards
```tsx
// Standard Card
className="bg-[#f6f6f6] rounded-[23px] p-8"

// Glassmorphism Card
className="backdrop-blur-[26.5px] bg-[rgba(255,255,255,0.4)] rounded-[13px] shadow-[0px_4px_91px_1px_rgba(135,135,135,0.1)]"

// Green Border Card
className="bg-[#eef6e8] rounded-2xl border border-[#c5ddb3]"
```

### Feature Pills
```tsx
className="flex items-center gap-2 bg-white border border-[#d5e9c6] rounded-full px-5 py-2.5 shadow-sm"
```

## Assets Location

All assets are stored in `/public/images/`:
- Landing page examples: `landing-page-1.png` to `landing-page-4.png`
- People: `businessman-main.png`, `young-guy-main.png`
- Icons: `shield.png`, `figma-icon.png`, `prompt-icon.png`, `checklist-icon.png`, etc.
- Backgrounds: `dot-pattern.png`, `ellipse-green.png`

## Gradients

### Green Gradient
```css
background: linear-gradient(180deg, #f6f6f6 0%, #85c65f 100%);
/* Tailwind: bg-gradient-to-b from-[#f6f6f6] to-[#85c65f] */
```

### Hero Ellipse
```css
background: radial-gradient(ellipse at center, rgba(213, 233, 198, 0.6) 0%, transparent 70%);
```
