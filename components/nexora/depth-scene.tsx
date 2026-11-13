"use client";

import { useEffect, useRef, type ReactNode } from "react";
/** Native-scroll depth, only while visible; static HTML is the baseline. */
export function DepthScene({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)");
    const compact = matchMedia("(max-width: 767px)");
    let visible = false,
      frame = 0;
    const reset = () => {
      el.style.setProperty("--depth-y", "0px");
      el.style.setProperty("--pointer-x", "0deg");
      el.style.setProperty("--pointer-y", "0deg");
    };
    const update = () => {
      frame = 0;
      if (reduce.matches || compact.matches || !visible || document.hidden) {
        reset();
        return;
      }
      const r = el.getBoundingClientRect();
      const offset = Math.max(
        -1,
        Math.min(1, (innerHeight / 2 - r.top - r.height / 2) / innerHeight),
      );
      el.style.setProperty("--depth-y", `${offset * 36}px`);
    };
    const schedule = () => {
      if (!frame && visible) frame = requestAnimationFrame(update);
    };
    const pointer = (e: PointerEvent) => {
      if (reduce.matches || compact.matches || e.pointerType !== "mouse")
        return;
      const r = el.getBoundingClientRect();
      el.style.setProperty(
        "--pointer-x",
        `${((e.clientX - r.left) / r.width - 0.5) * 5}deg`,
      );
      el.style.setProperty(
        "--pointer-y",
        `${-((e.clientY - r.top) / r.height - 0.5) * 4}deg`,
      );
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) schedule();
      else reset();
    });
    observer.observe(el);
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", schedule);
    document.addEventListener("visibilitychange", schedule);
    reduce.addEventListener("change", update);
    compact.addEventListener("change", update);
    el.addEventListener("pointermove", pointer);
    el.addEventListener("pointerleave", reset);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      removeEventListener("scroll", schedule);
      removeEventListener("resize", schedule);
      document.removeEventListener("visibilitychange", schedule);
      reduce.removeEventListener("change", update);
      compact.removeEventListener("change", update);
      el.removeEventListener("pointermove", pointer);
      el.removeEventListener("pointerleave", reset);
    };
  }, []);
  return (
    <div ref={ref} className={`nx-depth-scene ${className}`}>
      {children}
    </div>
  );
}
