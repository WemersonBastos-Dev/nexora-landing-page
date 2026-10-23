import test from 'node:test';
import assert from 'node:assert/strict';
import {
  NEXORA_CONTACT,
  WEB_SOLUTIONS,
  PROCESS_STEPS,
  TEAM_MEMBERS,
  DIFFERENTIALS,
  COMPLEMENTARY_SERVICES,
  FAQ_ITEMS,
  buildWhatsAppUrl,
  calculateParallaxOffset,
  getCommercialTermsSummary,
} from './nexora-data';

test('WhatsApp link uses exact required number and encoded initial message', () => {
  const url = buildWhatsAppUrl();
  assert.ok(url.startsWith('https://wa.me/5588997204035?text='));
  const decoded = decodeURIComponent(url.split('?text=')[1]);
  assert.equal(
    decoded,
    'Olá! Conheci a NEXORA pelo site e gostaria de solicitar um orçamento para meu projeto.'
  );
});

test('WhatsApp link with service preserves base greeting and appends service name', () => {
  const url = buildWhatsAppUrl('Aplicações Web');
  const decoded = decodeURIComponent(url.split('?text=')[1]);
  assert.ok(decoded.startsWith(NEXORA_CONTACT.defaultWhatsappMessage));
  assert.ok(decoded.includes('Aplicações Web'));
});

test('Commercial terms strictly match the PDF specification', () => {
  const terms = getCommercialTermsSummary();
  assert.equal(terms.entryPercentage, 50);
  assert.equal(terms.remainingOnApprovalPercentage, 50);
  assert.equal(terms.includedFreeRevisions, 3);
  assert.equal(terms.extraRevisionFeePercentage, 5);
  assert.equal(PROCESS_STEPS.length, 7);
});

test('All four web solutions and three team members from the PDF are present', () => {
  assert.equal(WEB_SOLUTIONS.length, 4);
  assert.deepEqual(
    WEB_SOLUTIONS.map((s) => s.title),
    ['Landing Pages', 'Redesign de Sites', 'Aplicações Web', 'E-commerce Interativo']
  );
  assert.equal(TEAM_MEMBERS.length, 3);
  assert.deepEqual(
    TEAM_MEMBERS.map((m) => m.name),
    ['Wemerson B. Evangelista', 'Gusttavo B. de Sousa', 'Cícero Lucas Soares Alves']
  );
  assert.equal(DIFFERENTIALS.length, 6);
  assert.equal(COMPLEMENTARY_SERVICES.length, 10);
  assert.ok(FAQ_ITEMS.length >= 5);
});

test('Parallax calculation respects desktop/mobile bounds and reduced motion', () => {
  assert.equal(
    calculateParallaxOffset({
      rectTop: 200,
      rectHeight: 300,
      viewportHeight: 900,
      speed: 1,
      isMobile: false,
      reducedMotion: true,
    }),
    0
  );

  const desktopOffset = calculateParallaxOffset({
    rectTop: 0,
    rectHeight: 200,
    viewportHeight: 900,
    speed: 1,
    isMobile: false,
    reducedMotion: false,
  });
  assert.ok(Math.abs(desktopOffset) <= 30 && Math.abs(desktopOffset) > 0);

  const mobileOffset = calculateParallaxOffset({
    rectTop: 0,
    rectHeight: 200,
    viewportHeight: 844,
    speed: 1,
    isMobile: true,
    reducedMotion: false,
  });
  assert.ok(Math.abs(mobileOffset) <= 10 && Math.abs(mobileOffset) > 0);
  assert.ok(Math.abs(mobileOffset) < Math.abs(desktopOffset));
});
