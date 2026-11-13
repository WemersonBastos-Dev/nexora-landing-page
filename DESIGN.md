---
name: NEXORA
description: An editorial web studio identity in deep blue and vivid green.
colors:
  blue-primary: "#214594"
  blue-deep: "#152E69"
  green: "#16E07B"
  green-bright: "#31FA8C"
  green-strong: "#098A4B"
  petrol: "#1D688A"
  cyan: "#15B8A6"
  cyan-bright: "#2ED8BE"
  canvas: "#F7FAFC"
  surface: "#FFFFFF"
  subtle: "#EEF5FB"
  dark: "#0A1833"
  dark-elevated: "#11244A"
  text-primary: "#0B1933"
  text-secondary: "#3B4E6B"
  text-muted: "#5A6E8C"
  text-on-dark: "#F8FAFC"
  text-on-dark-muted: "#B8C7DF"
  border-light: "#DCE6F2"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "clamp(48px,7.3vw,104px)"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "clamp(38px,4.5vw,64px)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "29px"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "17px"
    lineHeight: 1.7
rounded:
  panel: "16px"
  action: "100px"
spacing:
  section: "clamp(64px,8vw,120px)"
  panel: "24px"
components:
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "{colors.dark}"
    rounded: "{rounded.action}"
    padding: "16px 24px"
  button-primary-hover:
    backgroundColor: "{colors.green-bright}"
  text-link:
    padding: "0"
  layer-selected:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.dark}"
    rounded: "{rounded.panel}"
---

# Design System: NEXORA

## Overview

**Creative North Star: "Architecture in motion"**

The approved world pairs expansive editorial typography with NEXORA's deep blue and green identity. Light reading sections alternate with dark, immersive moments. Fine rules and visible numbering organize the content, while tangible interface layers express the studio's development work.

**Key Characteristics:**
- Open, regular-weight display typography.
- Deep blue fields and vivid green actions.
- Ruled content grids with restrained panel framing.
- Meaningful interaction with a reduced-motion fallback.

## Colors

### Primary
Blue Primary carries brand emphasis on light surfaces; Blue Deep supports darker blue action states.

### Secondary
Green and Green Bright distinguish primary actions and headline emphasis on dark fields. Green Strong supports small check icons on light backgrounds. Petrol, Cyan and Cyan Bright supply supporting labels, icon accents and focus indication.

### Neutral
Canvas and Surface provide reading areas; Subtle groups supporting content. Dark and Dark Elevated frame the header, hero, application showcase and contact region. Text Primary, Secondary and Muted establish hierarchy on light surfaces; Text On Dark and Text On Dark Muted serve dark regions. Border Light separates supporting content.

**The Identity Rule.** Preserve the official logo and blue/green identity when adapting references.

## Typography

Plus Jakarta Sans is loaded with `next/font/google` at weights 400–800, with a sans-serif fallback. Large headlines use regular weight and tight tracking; body copy remains spacious. The frontmatter records the editorial hero, section-intro, service-title and intro-body roles, not every local text size.

Hero copy has a maximum measure of 60 characters and a line height of 1.75. Service descriptions use 15px with 1.7 line height. On screens up to 767px, the hero display becomes `clamp(44px,8vw,62px)` and service titles become 26px. Small factual labels range from 11px to 14px in the existing components.

## Layout

Editorial sections use a centered container capped at 1240px, with 24px side gutters; at widths up to 767px gutters become 20px. The hero supporting row uses a 1.25:1 split; section intros use 1.4:1. Services use two columns with 52px row and 64px column gaps. These become a single column on mobile. Proof statements retain two columns on mobile; application pillars become one.

The retained institutional sections use Tailwind containers capped at 1240px with 16px, 24px and 32px responsive padding. FAQ content is capped at 960px. Desktop navigation appears at 1024px; smaller screens use a toggleable menu. These existing container implementations are not yet unified.

## Elevation & Depth

Editorial services, differentials, ideals and process steps use rules and open spacing. The conceptual application uses overlapping surfaces and a shadow only on the active expanded layer (`0 22px 60px #0005`). Some retained conversion panels and buttons still use Tailwind shadows and blue gradients. Existing global shadow tokens remain in CSS but are not a mandate to add shadows to editorial rows.

## Shapes

Pill actions contrast with gently rounded panels. The current medium CSS radius is 16px, overriding an earlier 20px declaration. Services and process rows have square, open boundaries; portraits remain circular. Retained FAQ and team panels use 16px corners. Preserve logo and photograph proportions.

## Components

### Buttons
Primary editorial actions use green with dark text, 16px by 24px padding, a 48px minimum height and a 100px radius. Hover changes to Green Bright over 180ms. Existing `nx-btn` variants additionally lift 2px on hover and return on press. Links, buttons and summaries receive a 2px Cyan focus outline with a 3px offset. Text links use an underline rule and a 44px minimum height.

### Navigation
The sticky dark header pairs the white logo with light semibold links. Links turn green on hover. The mobile menu exposes its expanded state, closes on Escape and closes when a destination is chosen. Its white panel contains the same destinations and a blue WhatsApp action.

### Content rows and disclosure
Services pair a large muted number with a title and description under a fine top rule. Native details/summary reveals deliverables. The FAQ uses controlled buttons and labeled regions, starts with the first answer expanded and permits one open answer at a time. No text-entry fields exist on this landing page.

### Architecture layers
Interface, Dados and Segurança are selectable layers. Pressed buttons expose selection; inactive panels are hidden from assistive technology; a polite live caption describes the current layer. The exploration control separates or recomposes the stack. Transforms transition over 650ms with `cubic-bezier(.16,1,.3,1)`; background and opacity use 300ms. Reduced motion removes transforms and transitions and hides inactive layers. On mobile, non-active layers contract behind the active panel instead of spreading sideways.

## Do's and Don'ts

### Do:
- **Do** preserve official colors, Plus Jakarta Sans, logos and supplied portraits.
- **Do** use spacious type, fine rules and meaningful numbering for editorial content.
- **Do** preserve keyboard focus and reduced-motion behavior when extending interactions.

### Don't:
- **Don't** replace NEXORA's identity with the reference brand's palette or assets.
- **Don't** present conceptual interface layers as real client data.
- **Don't** treat every declared legacy CSS token as an instruction to use it.
