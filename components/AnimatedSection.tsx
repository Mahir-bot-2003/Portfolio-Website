"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "up" | "left" | "right" | "scale";
}

const animationClasses = {
  up: "reveal",
  left: "reveal-left",
  right: "reveal-left", // reuses left with mirrored transform
  scale: "reveal-scale",
};

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  animation = "up",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            el.style.transitionDelay = `${delay * 0.1}s`;
          }
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const baseClass = animationClasses[animation] || "reveal";

  return (
    <div ref={ref} className={`${baseClass} ${className}`}>
      {children}
    </div>
  );
}
