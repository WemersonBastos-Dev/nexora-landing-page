'use client';

import React from 'react';

interface RibbonProps {
  className?: string;
  animate?: boolean;
}

/**
 * SolutionsOrganicRibbon
 * Redesigned organic wave that flows behind the 4 solution cards.
 * - Perfectly continuous cubic Bézier curve with zero sharp bends or seams.
 * - Extends beyond left and right edges (-8% to 116%) so ends are never visible.
 * - Preserves balanced geometric thickness and full card legibility.
 * - Includes subtle ambient glow layer and motion that respects prefers-reduced-motion.
 */
export function SolutionsOrganicRibbon({
  className = '',
  animate = true,
}: RibbonProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 z-0 overflow-visible select-none ${className}`}
    >
      <div className={`relative -left-[8%] w-[116%] ${animate ? 'nx-ribbon-sway' : ''}`}>
        <svg
          viewBox="0 0 1600 260"
          fill="none"
          preserveAspectRatio="none"
          className="h-44 sm:h-56 lg:h-64 w-full overflow-visible"
        >
          <defs>
            <linearGradient
              id="nexoraSolutionsWaveGrad"
              x1="0"
              y1="130"
              x2="1600"
              y2="130"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#214594" stopOpacity="0.8" />
              <stop offset="18%" stopColor="#1D688A" stopOpacity="0.95" />
              <stop offset="38%" stopColor="#15B8A6" stopOpacity="1" />
              <stop offset="55%" stopColor="#16E07B" stopOpacity="1" />
              <stop offset="72%" stopColor="#31FA8C" stopOpacity="1" />
              <stop offset="88%" stopColor="#2ED8BE" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#214594" stopOpacity="0.8" />
            </linearGradient>

            <linearGradient
              id="nexoraSolutionsGlowGrad"
              x1="0"
              y1="130"
              x2="1600"
              y2="130"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#214594" stopOpacity="0.15" />
              <stop offset="30%" stopColor="#15B8A6" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#16E07B" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#2ED8BE" stopOpacity="0.15" />
            </linearGradient>

            <filter id="ribbonGlowBlur" x="-10%" y="-30%" width="120%" height="160%">
              <feGaussianBlur stdDeviation="16" />
            </filter>
          </defs>

          {/* Soft ambient luminous halo behind main ribbon */}
          <path
            d="M -100 160 C 220 230, 480 80, 800 160 C 1120 240, 1380 90, 1700 150"
            stroke="url(#nexoraSolutionsGlowGrad)"
            strokeWidth="90"
            strokeLinecap="round"
            filter="url(#ribbonGlowBlur)"
            className="hidden sm:block"
          />

          {/* Primary continuous organic ribbon with balanced thickness and smooth curvature */}
          <path
            d="M -100 160 C 220 230, 480 80, 800 160 C 1120 240, 1380 90, 1700 150"
            stroke="url(#nexoraSolutionsWaveGrad)"
            strokeWidth="60"
            strokeLinecap="round"
            className="hidden md:block"
          />

          {/* Optimized version for tablet/mobile: reduced thickness to keep cards the absolute focus */}
          <path
            d="M -100 160 C 220 230, 480 80, 800 160 C 1120 240, 1380 90, 1700 150"
            stroke="url(#nexoraSolutionsWaveGrad)"
            strokeWidth="32"
            strokeLinecap="round"
            className="block md:hidden opacity-75"
          />
        </svg>
      </div>
    </div>
  );
}

/**
 * WebAppSpotlightRibbon
 * Adapted subtle flowing ribbon for the Web Applications section.
 * Positioned behind the architecture pillars and interactive mockups.
 */
export function WebAppSpotlightRibbon({ className = '' }: RibbonProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden select-none ${className}`}
    >
      <div className="absolute -left-[20%] top-1/3 -translate-y-1/2 w-[140%] opacity-35 sm:opacity-45">
        <svg
          viewBox="0 0 1600 280"
          fill="none"
          preserveAspectRatio="none"
          className="h-64 sm:h-80 w-full"
        >
          <defs>
            <linearGradient
              id="nexoraWebAppGrad"
              x1="0"
              y1="140"
              x2="1600"
              y2="140"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#15B8A6" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#2ED8BE" stopOpacity="0.95" />
              <stop offset="65%" stopColor="#16E07B" stopOpacity="1" />
              <stop offset="100%" stopColor="#214594" stopOpacity="0.85" />
            </linearGradient>
          </defs>
          <path
            d="M -150 140 C 300 260, 700 30, 1150 180 C 1380 250, 1500 170, 1750 120"
            stroke="url(#nexoraWebAppGrad)"
            strokeWidth="56"
            strokeLinecap="round"
            className="hidden sm:block"
          />
          <path
            d="M -150 140 C 300 260, 700 30, 1150 180 C 1380 250, 1500 170, 1750 120"
            stroke="url(#nexoraWebAppGrad)"
            strokeWidth="28"
            strokeLinecap="round"
            className="block sm:hidden opacity-60"
          />
        </svg>
      </div>
    </div>
  );
}

/**
 * DifferentialsOrganicRibbon
 * Organic wave traversing behind the 6 differentials cards.
 */
export function DifferentialsOrganicRibbon({ className = '' }: RibbonProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 z-0 overflow-hidden select-none ${className}`}
    >
      <div className="relative -left-[6%] w-[112%] opacity-30 sm:opacity-40">
        <svg
          viewBox="0 0 1600 240"
          fill="none"
          preserveAspectRatio="none"
          className="h-48 sm:h-64 w-full"
        >
          <defs>
            <linearGradient
              id="nexoraDifferentialsGrad"
              x1="0"
              y1="120"
              x2="1600"
              y2="120"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#214594" stopOpacity="0.85" />
              <stop offset="25%" stopColor="#1D688A" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#15B8A6" stopOpacity="1" />
              <stop offset="75%" stopColor="#16E07B" stopOpacity="1" />
              <stop offset="100%" stopColor="#214594" stopOpacity="0.85" />
            </linearGradient>
          </defs>
          <path
            d="M -100 170 C 260 60, 560 220, 880 120 C 1200 30, 1420 190, 1700 100"
            stroke="url(#nexoraDifferentialsGrad)"
            strokeWidth="42"
            strokeLinecap="round"
            className="hidden sm:block"
          />
          <path
            d="M -100 170 C 260 60, 560 220, 880 120 C 1200 30, 1420 190, 1700 100"
            stroke="url(#nexoraDifferentialsGrad)"
            strokeWidth="22"
            strokeLinecap="round"
            className="block sm:hidden opacity-60"
          />
        </svg>
      </div>
    </div>
  );
}

/**
 * ContactBannerOrganicRibbon
 * Luminous cyan & neon green wave arc inside the dark contact banner.
 */
export function ContactBannerOrganicRibbon({ className = '' }: RibbonProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden select-none ${className}`}
    >
      <div className="relative -left-[8%] -top-[10%] w-[116%] h-[120%] opacity-25 sm:opacity-35">
        <svg
          viewBox="0 0 1200 240"
          fill="none"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <defs>
            <linearGradient
              id="nexoraContactGrad"
              x1="0"
              y1="120"
              x2="1200"
              y2="120"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#214594" stopOpacity="0.4" />
              <stop offset="30%" stopColor="#15B8A6" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#16E07B" stopOpacity="1" />
              <stop offset="85%" stopColor="#31FA8C" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#2ED8BE" stopOpacity="0.5" />
            </linearGradient>
            <filter id="contactWaveGlow" x="-20%" y="-40%" width="140%" height="180%">
              <feGaussianBlur stdDeviation="20" />
            </filter>
          </defs>
          <path
            d="M -60 190 C 260 50, 600 220, 920 80 C 1060 20, 1180 110, 1260 130"
            stroke="url(#nexoraContactGrad)"
            strokeWidth="60"
            strokeLinecap="round"
            filter="url(#contactWaveGlow)"
            className="hidden sm:block"
          />
          <path
            d="M -60 190 C 260 50, 600 220, 920 80 C 1060 20, 1180 110, 1260 130"
            stroke="url(#nexoraContactGrad)"
            strokeWidth="38"
            strokeLinecap="round"
            className="hidden sm:block"
          />
          <path
            d="M -60 190 C 260 50, 600 220, 920 80 C 1060 20, 1180 110, 1260 130"
            stroke="url(#nexoraContactGrad)"
            strokeWidth="20"
            strokeLinecap="round"
            className="block sm:hidden opacity-50"
          />
        </svg>
      </div>
    </div>
  );
}
