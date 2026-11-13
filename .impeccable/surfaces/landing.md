# Landing page — editorial redesign

## Approved direction

Deep editorial composition informed by the supplied Nymera screenshots, retaining NEXORA's blue/green identity, Plus Jakarta Sans, factual content, team photographs and official WhatsApp/Instagram destinations. The selected Overdrive direction is **1 — Architecture in motion**.

## Purpose and sequence

Convert interest in web development into a WhatsApp project conversation. The implemented sequence is sticky navigation → typographic dark hero with service links and factual proof → light numbered service grid → dark application architecture demonstration and pillars → supporting conversion panel → differentials and process → team and ideals → complementary services → FAQ → contact/footer.

The hero headline is “Vamos tornar a sua marca conhecida?”. Four services come from `WEB_SOLUTIONS`; details disclosures preserve their deliverables without requiring every item to remain visible. Process and FAQ preserve the commercial terms in `lib/nexora-data.ts`.

## Focal interaction

`components/nexora/architecture-demo.tsx` implements three selectable conceptual layers: Interface, Dados and Segurança. The default is Interface with the stack composed. “Explorar arquitetura” toggles expansion; choosing a layer also expands the stack. The selected layer appears in front with a light surface; buttons expose `aria-pressed`, inactive panels use `aria-hidden`, and the caption updates with `aria-live="polite"`.

The demonstration explicitly says it is conceptual and contains no customer data. It communicates architecture rather than promising a functioning product dashboard. Reduced motion removes stack movement and hides inactive layers; narrow layouts keep supporting layers behind the selected panel. The initial content remains visible without animation, but switching layers requires JavaScript.

## Preservation requirements

Keep the official logo and supplied team portraits. Keep the founding year, four service areas, three included revisions, payment split, additional-revision fee and demand-based delivery timing accurate. Generate service-specific WhatsApp messages through `buildWhatsAppUrl`; preserve the official Instagram account.

## Current boundaries and follow-up

The page retains a static secondary conversion illustration, gradient panels and multiple container conventions. RevealOnScroll and ParallaxLayer are static wrappers; architecture is the sole focal spatial animation. Buttons retain brief hover feedback. Browser validation is recorded separately from this design contract.

The Impeccable launcher was unavailable in this environment; no panel launch or panel rendering was verified. Documentation does not imply deployment, commits, analytics instrumentation or measured conversion improvement.
