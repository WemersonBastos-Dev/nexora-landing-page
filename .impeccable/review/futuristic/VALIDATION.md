# Futuristic redesign validation

Final production review performed on 2026-11-13 against the local Next.js standalone build.

## Coverage

- Visual captures: 360, 390, 430, 768, 1024, 1440 and 1920 px.
- No horizontal overflow or browser page errors at any tested width.
- Hero, navigation, service disclosures, architecture states, FAQ and mobile menu interactions exercised.
- Every `wa.me` call to action contains the white WhatsApp SVG symbol.
- `prefers-reduced-motion: reduce` disables pointer and scroll depth movement.
- axe WCAG 2 A/AA and WCAG 2.1 AA scans at 390, 768 and 1440 px: zero violations.
- Production build, ESLint and the existing business-content test suite pass.

## Local performance observations

- CLS observed as `0` at every tested width.
- LCP observed between 124 ms and 240 ms in an unthrottled local Chromium run.
- Approximately 273 KB transferred in the representative local page load.
- Scripted pointer and scroll checks confirmed that depth variables update only while motion is allowed.

These timings are local diagnostic observations, not field Core Web Vitals or a physical-device INP/60 fps guarantee.

## Asset provenance

- The hero device and floating objects are HTML/CSS/SVG geometry; no third-party product render was copied.
- The WhatsApp path uses the canonical brand geometry distributed by the Simple Icons catalog and is rendered white in every WhatsApp CTA.
