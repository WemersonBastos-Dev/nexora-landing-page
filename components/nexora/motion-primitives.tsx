"use client";

import React, { useEffect, useRef, useState } from "react";
import { calculateParallaxOffset } from "@/lib/nexora-data";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  offsetPx?: number;
  durationMs?: number;
  variant?: "fade-up" | "card" | "heading";
  as?: "div" | "section" | "article" | "li" | "blockquote";
}

export function RevealOnScroll({
  children,
  className = "",
  as: Tag = "div",
}: RevealOnScrollProps) {
  return <Tag className={className}>{children}</Tag>;
}

interface HeroVisualLayerProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}

export function HeroVisualLayer({
  children,
  className = "",
  delayMs = 0,
}: HeroVisualLayerProps) {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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
      className={`nx-hero-enter ${entered ? "" : "nx-hero-enter-pending"} ${className}`}
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
  className = "",
}: ParallaxLayerProps) {
  return <div className={className}>{children}</div>;
}

export function DecorativeSparkle({
  className = "w-5 h-5 text-[#16E07B]",
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
  className = "w-16 h-4 text-[#214594]",
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
