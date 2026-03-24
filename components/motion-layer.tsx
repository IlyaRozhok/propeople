"use client";

import { useEffect } from "react";

export function MotionLayer() {
  useEffect(() => {
    const motionReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    const hero = document.querySelector<HTMLElement>("[data-hero]");
    const reveals = document.querySelectorAll<HTMLElement>("[data-reveal]");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
          }
        });
      },
      { threshold: 0.2 }
    );

    reveals.forEach((section) => revealObserver.observe(section));

    if (motionReduced || !hero) {
      return () => {
        revealObserver.disconnect();
      };
    }

    const setHeroDepth = () => {
      const rect = hero.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / rect.height, 0), 1);

      root.style.setProperty("--mid-shift", `${progress * 26}px`);
      root.style.setProperty("--back-shift", `${progress * 38}px`);
      root.style.setProperty("--front-shift", `${progress * 56}px`);
      root.style.setProperty("--hero-image-shift", `${progress * 44}px`);
      root.style.setProperty("--hero-copy-shift", `${progress * -18}px`);
    };

    setHeroDepth();
    window.addEventListener("scroll", setHeroDepth, { passive: true });
    window.addEventListener("resize", setHeroDepth);

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", setHeroDepth);
      window.removeEventListener("resize", setHeroDepth);
    };
  }, []);

  return null;
}
