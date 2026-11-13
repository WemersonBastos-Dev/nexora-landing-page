# Landing page — futuristic light studio

## Approved direction

The user explicitly replaced the previous editorial direction with a futuristic light hero, CSS3D laptop, technical SVG objects, native-scroll parallax and simpler mobile/reduced-motion behavior. Preserve NEXORA's blue/green identity, Plus Jakarta Sans, product facts, team portraits and official channels. Every WhatsApp CTA contains a white WhatsApp brand mark.

## Purpose and sequence

Convert interest in web development into a WhatsApp project conversation. The implemented sequence is sticky navigation → light hero with CSS laptop with service links and factual proof → light SVG-led service grid → dark application architecture demonstration and pillars → supporting conversion panel → differentials and process → team and ideals → complementary services → FAQ → contact/footer.

The hero headline is “Vamos tornar a sua marca conhecida?”. Four services come from `WEB_SOLUTIONS`; details disclosures preserve their deliverables without requiring every item to remain visible. Process and FAQ preserve the commercial terms in `lib/nexora-data.ts`.

## Hero scene

`laptop-scene.tsx` creates a conceptual notebook from CSS/HTML, with a 48-key deck and inline SVG technical objects. `depth-scene.tsx` supplies native-scroll offsets, visible-only requestAnimationFrame updates and mouse tilt. No Three.js, WebGL or external 3D model is used. Mobile disables dynamic depth and hides the cursor object; reduced motion gives a static device view. The page does not claim this concept is a shipped customer application.

## Application interaction

`components/nexora/architecture-demo.tsx` implements three selectable conceptual layers: Interface, Dados and Segurança. The default is Interface with the stack composed. “Explorar arquitetura” toggles expansion; choosing a layer also expands the stack. The selected layer appears in front with a light surface; buttons expose `aria-pressed`, inactive panels use `aria-hidden`, and the caption updates with `aria-live="polite"`.

The stack now sits in device frames above a laptop base, wrapped in DepthScene at half the scroll-depth offset. The demonstration explicitly says it is conceptual and contains no customer data. It communicates architecture rather than promising a functioning product dashboard. Reduced motion removes stack movement and hides inactive layers; narrow layouts keep supporting layers behind the selected panel. The initial content remains visible without animation, but switching layers requires JavaScript.

## Preservation requirements

Keep the official logo and supplied team portraits. Keep the founding year, four service areas, three included revisions, payment split, additional-revision fee and demand-based delivery timing accurate. Generate service-specific WhatsApp messages through `buildWhatsAppUrl`; preserve the official Instagram account.

## Current boundaries and follow-up

This document records inspected code, not an independent browser or accessibility audit. The retained conversion illustration is static: ParallaxLayer and RevealOnScroll are passthroughs. Native depth is implemented by DepthScene for the hero and application scene. Existing institutional sections still use different container conventions and some retained gradients.

The Impeccable launcher was unavailable; no panel launch or panel rendering was verified. Component sidecar previews are static extracts and do not reproduce React-driven depth or selection. Documentation does not imply deployment, analytics instrumentation or measured conversion improvement.
