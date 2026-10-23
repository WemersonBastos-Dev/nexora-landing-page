const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const VIEWPORTS = [
  { width: 320, height: 640, name: 'mobile-320' },
  { width: 375, height: 667, name: 'mobile-375' },
  { width: 390, height: 844, name: 'mobile-390' },
  { width: 430, height: 932, name: 'mobile-430' },
  { width: 768, height: 1024, name: 'tablet-768' },
  { width: 1024, height: 768, name: 'desktop-1024' },
  { width: 1440, height: 900, name: 'desktop-1440' },
];

async function main() {
  console.log('--- STARTING NEXORA COMPREHENSIVE VIEWPORT VALIDATION ---');
  const browser = await chromium.launch({ headless: true });
  const outDir = path.join(process.cwd(), 'public', 'assets', 'validation');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const results = [];

  for (const vp of VIEWPORTS) {
    const page = await browser.newPage({
      viewport: { width: vp.width, height: vp.height },
    });

    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    // Allow any initial animations to settle
    await page.waitForTimeout(600);

    const metrics = await page.evaluate(() => {
      const docWidth = document.documentElement.scrollWidth;
      const winWidth = window.innerWidth;
      const hasHorizontalScroll = docWidth > winWidth;

      // Check all 12 expected sections/landmarks
      const sections = {
        header: !!document.querySelector('header'),
        hero: !!document.getElementById('topo'),
        trustStrip: !!document.querySelector('[aria-label="Áreas de atuação da NEXORA"]'),
        solutions: !!document.getElementById('solucoes'),
        solutionsCards: document.querySelectorAll('#solucoes article').length,
        webappSpotlight: !!document.getElementById('heading-webapp-spotlight'),
        darkConversion: !!document.getElementById('heading-dark-conversion'),
        differentials: !!document.getElementById('diferenciais'),
        differentialsCards: document.querySelectorAll('#diferenciais article').length,
        process: !!document.getElementById('processo'),
        about: !!document.getElementById('sobre'),
        complementaryServices: !!document.querySelector('[aria-labelledby="heading-servicos-complementares"]'),
        faq: !!document.getElementById('faq'),
        faqItemsCount: document.querySelectorAll('#faq [role="region"]').length,
        finalCta: !!document.getElementById('heading-contato-final'),
        footer: !!document.querySelector('footer'),
      };

      // Check ribbon presence
      const ribbon = !!document.querySelector('.nx-ribbon-sway');

      return {
        docWidth,
        winWidth,
        hasHorizontalScroll,
        sections,
        ribbon,
      };
    });

    results.push({ viewport: vp, metrics });

    console.log(
      `[${vp.name}] Width: ${metrics.winWidth}px, ScrollWidth: ${metrics.docWidth}px, HasHorizScroll: ${metrics.hasHorizontalScroll}`
    );

    // Capture sections on desktop 1440 and mobile 390
    if (vp.width === 1440) {
      // Scroll to solutions
      await page.locator('#solucoes').scrollIntoViewIfNeeded();
      await page.waitForTimeout(600);
      await page.screenshot({
        path: path.join(outDir, 'solutions-desktop-1440.png'),
      });

      // Scroll to webapp spotlight
      await page.locator('#heading-webapp-spotlight').scrollIntoViewIfNeeded();
      await page.waitForTimeout(600);
      await page.screenshot({
        path: path.join(outDir, 'webapp-desktop-1440.png'),
      });

      // Scroll to differentials & process
      await page.locator('#diferenciais').scrollIntoViewIfNeeded();
      await page.waitForTimeout(600);
      await page.screenshot({
        path: path.join(outDir, 'differentials-desktop-1440.png'),
      });

      // Scroll to footer & contact
      await page.locator('#contato').scrollIntoViewIfNeeded();
      await page.waitForTimeout(600);
      await page.screenshot({
        path: path.join(outDir, 'contact-desktop-1440.png'),
      });
    }

    if (vp.width === 390) {
      await page.locator('#solucoes').scrollIntoViewIfNeeded();
      await page.waitForTimeout(600);
      await page.screenshot({
        path: path.join(outDir, 'solutions-mobile-390.png'),
      });

      await page.locator('#diferenciais').scrollIntoViewIfNeeded();
      await page.waitForTimeout(600);
      await page.screenshot({
        path: path.join(outDir, 'differentials-mobile-390.png'),
      });

      await page.locator('#contato').scrollIntoViewIfNeeded();
      await page.waitForTimeout(600);
      await page.screenshot({
        path: path.join(outDir, 'contact-mobile-390.png'),
      });
    }

    await page.close();
  }

  await browser.close();

  console.log('--- ALL VIEWPORT TESTS COMPLETE ---');
  console.log(JSON.stringify(results, null, 2));
}

main().catch((err) => {
  console.error('Validation script failed:', err);
  process.exit(1);
});
