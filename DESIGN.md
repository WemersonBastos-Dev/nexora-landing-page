---
name: NEXORA
description: A light futuristic studio with tangible CSS interfaces and blue/green identity.
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
    fontSize: "clamp(44px,4.8vw,70px)"
    fontWeight: 600
    lineHeight: 1.05
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
    backgroundColor: "{colors.blue-primary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.action}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.blue-deep}"
  text-link:
    padding: "0"
  layer-selected:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.dark}"
    rounded: "{rounded.panel}"
---

# Design System: NEXORA

## Overview

**Creative North Star: "A tangible digital studio"**

The approved world uses a light futuristic studio to make development feel tangible. A CSS-built laptop, technical SVG objects and native-scroll depth accompany NEXORA's blue and green identity. Open reading sections and a dark application showcase preserve clarity around the spatial illustrations.

**Key Characteristics:**
- A light hero with semibold display typography.
- Blue WhatsApp actions with white brand icons.
- Tangible device geometry and technical SVG illustrations.
- Native-scroll depth with simpler mobile and reduced-motion views.

## Colors

### Primary
Blue Primary carries brand emphasis on light surfaces; Blue Deep supports darker blue action states.

### Secondary
Green and Green Bright distinguish conceptual screen accents, the cursor object and selected architecture controls. Green Strong supports small check icons on light backgrounds. Petrol, Cyan and Cyan Bright supply supporting labels, icon accents and focus indication.

### Neutral
Canvas and Surface provide reading areas; Subtle groups supporting content. Dark and Dark Elevated frame the proof panel, conceptual screen, application showcase and contact region. The header and hero use Canvas. Text Primary, Secondary and Muted establish hierarchy on light surfaces; Text On Dark and Text On Dark Muted serve dark regions. Border Light separates supporting content.

**The Identity Rule.** Preserve the official logo and blue/green identity when adapting references.

## Typography

Plus Jakarta Sans is loaded with `next/font/google` at weights 400–800, with a sans-serif fallback. The hero uses semibold display text and tight tracking; section headlines retain regular weight. Frontmatter records the desktop hero, section-intro, service-title and intro-body roles.

Hero supporting copy is 16px with 1.7 line height and a 48-character measure, widening to 60 characters below 1024px. The hero display becomes `clamp(44px,7vw,68px)` below 1024px and `clamp(42px,10vw,60px)` below 768px. Service descriptions use 15px with 1.7 line height. Miniature laptop-screen labels are illustration details, not primary page instructions.

## Layout

Editorial sections use a centered container capped at 1240px, with 24px side gutters; at widths up to 767px gutters become 20px. The hero uses a 0.95:1.25 text/device split, a 28px gap and a 570px minimum height, becoming one column below 1024px; section intros use 1.4:1. Services use two columns with 52px row and 64px column gaps. These become a single column on mobile. Proof statements retain two columns on mobile; application pillars become one.

The retained institutional sections use Tailwind containers capped at 1240px with 16px, 24px and 32px responsive padding. FAQ content is capped at 960px. Desktop navigation appears at 1024px; smaller screens use a toggleable menu. These existing container implementations are not yet unified.

## Elevation & Depth

Services, differentials, ideals and process steps retain open rules and spacing. CSS geometry, metallic gradients and directional shadows give the laptop lid, keyboard deck and floating objects depth. The laptop scene uses 1300px perspective; its deck rotates 65 degrees around the X axis. Lid shadows are `8px 12px 0 #667b8d, 16px 26px 35px #0a183329`. Application panels have a solid 10px device border, a 22px bottom edge and `5px 8px 0 #71849b` shadow, with a separate laptop base.

DepthScene uses passive native scroll and requestAnimationFrame while intersecting. Its normalized scroll offset is clamped to ±1 and multiplied by 36px; individual objects apply relative multipliers. Mouse movement adds ±2.5 degrees yaw and ±2 degrees pitch to the hero laptop. At widths up to 767px or reduced motion, JavaScript resets depth variables. Reduced-motion CSS retains a static -4-degree laptop rotation. The older RevealOnScroll and ParallaxLayer wrappers are static passthroughs.

## Shapes

Pill actions contrast with gently rounded panels. The current medium CSS radius is 16px, overriding an earlier 20px declaration. Services and process rows have square, open boundaries; portraits remain circular. Retained FAQ and team panels use 16px corners. Preserve logo and photograph proportions.

## Components

### Buttons
WhatsApp links contain the white official SVG mark and use Blue Primary with white text, 12px by 20px padding, a 44px minimum height and a 100px radius. Hover changes to Blue Deep over 150ms. The shared selector applies to anchors containing the mark; the application CTA uses smaller 14px padding on mobile. Existing `nx-btn` variants additionally lift 2px on hover and return on press. Links, buttons and summaries receive a 2px Cyan focus outline with a 3px offset. Text links use an underline rule and a 44px minimum height.

### Navigation
The sticky light header pairs the original color logo with dark semibold links. Links turn blue on hover. The mobile menu exposes its expanded state, closes on Escape and closes when a destination is chosen. Its white panel contains the same destinations and a blue WhatsApp action.

### Content rows and disclosure
Services pair a blue 42px technical SVG icon, using a 1.5 stroke width, with a title and description under a fine top rule. Native details/summary reveals deliverables. The FAQ uses controlled buttons and labeled regions, starts with the first answer expanded and permits one open answer at a time. No text-entry fields exist on this landing page.

### Laptop illustration
The hero laptop is CSS/HTML geometry with an accessible image description and an explicit conceptual caption. Its screen, keyboard, code object and cursor use SVG and CSS rather than a WebGL runtime. At mobile widths the cursor disappears, the code object shrinks and the laptop uses a fixed -10-degree yaw and -5-degree rotation. It remains visible without animation.

### Architecture layers
Interface, Dados and Segurança are selectable layers. Pressed buttons expose selection; inactive panels are hidden from assistive technology; a polite live caption describes the current layer. The exploration control separates or recomposes the stack. Transforms transition over 650ms with `cubic-bezier(.16,1,.3,1)`; background and opacity use 300ms. Reduced motion removes transforms and transitions and hides inactive layers. On mobile, non-active layers contract behind the active panel instead of spreading sideways.

## Do's and Don'ts

### Do:
- **Do** preserve official colors, Plus Jakarta Sans, logos and supplied portraits.
- **Do** use spacious type, fine rules and meaningful SVG icons for editorial content.
- **Do** preserve keyboard focus and reduced-motion behavior when extending interactions.

### Don't:
- **Don't** replace NEXORA's identity with the reference brand's palette or assets.
- **Don't** present conceptual interface layers as real client data.
- **Don't** treat every declared legacy CSS token as an instruction to use it.
