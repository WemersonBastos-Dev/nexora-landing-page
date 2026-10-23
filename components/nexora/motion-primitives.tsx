'use client';

import React, { useEffect, useRef, useState } from 'react';
import { calculateParallaxOffset } from '@/lib/nexora-data';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  offsetPx?: number;
  durationMs?: number;
  variant?: 'fade-up' | 'card' | 'heading';
  as?: 'div' | 'section' | 'article' | 'li' | 'blockquote';
}

export function RevealOnScroll({
  children,
  className = '',
  delayMs = 0,
  offsetPx,
  durationMs,
  variant = 'fade-up',
  as: Tag = 'div',
}: RevealOnScrollProps) {
  const ref = useRef<HTMLElement | null>(null);
  // Start visible on SSR / before hydration so failed JS never hides content
  const [status, setStatus] = useState<'ssr' | 'pending' | 'visible'>('ssr');

  // Determine variant-specific parameters
  const resolvedOffset =
    offsetPx !== undefined
      ? offsetPx
      : variant === 'heading'
      ? 24
      : variant === 'card'
      ? 24
      : 24;

  const resolvedDuration =
    durationMs !== undefined
      ? durationMs
      : variant === 'heading'
      ? 700
      : variant === 'card'
      ? 640
      : 600;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const rect = el.getBoundingClientRect();
    // If element is already well within the initial viewport at mount, keep visible
    if (rect.top < window.innerHeight * 0.88 && rect.bottom > 0) {
      return;
    }

    let observer: IntersectionObserver | null = null;
    const rafId = window.requestAnimationFrame(() => {
      setStatus('pending');
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setStatus('visible');
              observer?.disconnect();
              break;
            }
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      );
      if (el) observer.observe(el);
    });

    return () => {
      window.cancelAnimationFrame(rafId);
      if (observer) observer.disconnect();
    };
  }, []);

  const getStyle = (): React.CSSProperties => {
    if (status === 'ssr') return {};

    const isPending = status === 'pending';
    const transform = isPending
      ? variant === 'card'
        ? `translate3d(0, ${resolvedOffset}px, 0) scale(0.97)`
        : `translate3d(0, ${resolvedOffset}px, 0)`
      : variant === 'card'
      ? 'translate3d(0, 0, 0) scale(1)'
      : 'translate3d(0, 0, 0)';

    return {
      opacity: isPending ? 0 : 1,
      transform,
      transitionProperty: 'opacity, transform',
      transitionDuration: `${resolvedDuration}ms`,
      transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
      transitionDelay: delayMs > 0 ? `${delayMs}ms` : undefined,
      willChange: isPending ? 'opacity, transform' : 'auto',
    };
  };

  return (
    // @ts-expect-error dynamic HTML tag ref
    <Tag ref={ref} className={`nx-reveal ${className}`} style={getStyle()}>
      {children}
    </Tag>
  );
}

interface HeroVisualLayerProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}

export function HeroVisualLayer({
  children,
  className = '',
  delayMs = 0,
}: HeroVisualLayerProps) {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      const id = window.requestAnimationFrame(() => setEntered(true));
      return () => window.cancelAnimationFrame(id);
    }
    const id = window.requestAnimationFrame(() => {
      setEntered(true);
    });
    return () => window.cancelAnimationFrame(id);
  }, []);

  return (
    <div
      className={`nx-hero-enter ${entered ? '' : 'nx-hero-enter-pending'} ${className}`}
      style={{ transitionDelay: delayMs ? `${delayMs}ms` : undefined }}
    >
      {children}
    </div>
  );
}

interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number; // e.g. 0.6 to 1.1 -> max 15..28px desktop, 5..9px mobile
  className?: string;
}

export function ParallaxLayer({
  children,
  speed = 0.85,
  className = '',
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      el.style.transform = 'translate3d(0, 0, 0)';
      return;
    }

    let isIntersecting = false;
    let rafId: number | null = null;

    const updatePosition = () => {
      rafId = null;
      if (!el || !isIntersecting) return;
      if (mediaQuery.matches) {
        el.style.transform = 'translate3d(0, 0, 0)';
        return;
      }
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const isMobile = window.innerWidth < 768;
      const offsetY = calculateParallaxOffset({
        rectTop: rect.top,
        rectHeight: rect.height,
        viewportHeight,
        speed,
        isMobile,
        reducedMotion: false,
      });
      el.style.transform = `translate3d(0, ${offsetY}px, 0)`;
    };

    const onScrollOrResize = () => {
      if (!isIntersecting) return;
      if (rafId === null) {
        rafId = window.requestAnimationFrame(updatePosition);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          isIntersecting = entry.isIntersecting;
          if (isIntersecting) {
            onScrollOrResize();
          }
        }
      },
      { rootMargin: '120px 0px 120px 0px' }
    );

    observer.observe(el);
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function DecorativeSparkle({
  className = 'w-5 h-5 text-[#16E07B]',
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    >
      <path d="M12 1L14.8 9.2L23 12L14.8 14.8L12 23L9.2 14.8L1 12L9.2 9.2L12 1Z" />
    </svg>
  );
}

export function DecorativeWave({
  className = 'w-16 h-4 text-[#214594]',
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 84 16"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    >
      <path
        d="M2 10C8.5 3 15.5 3 22 10C28.5 17 35.5 17 42 10C48.5 3 55.5 3 62 10C68.5 17 75.5 17 82 10"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
