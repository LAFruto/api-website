"use client";

import { useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";

interface UseObserverProps {
  threshold?: number;
  rootMargin?: string;
}

export function useObserver({ threshold = 0.5, rootMargin = "0px" }: UseObserverProps = {}) {
  const pathname = usePathname();
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        entry.target.classList.add("show-x");
        observer.unobserve(entry.target);
      } else {
        entry.target.classList.remove("show");
        entry.target.classList.remove("show-x");
      }
    });
  }, []);

  const observe = useCallback(
    (elements: string[]) => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      observerRef.current = new IntersectionObserver(handleIntersection, { threshold, rootMargin });

      elements.forEach((selector) => {
        document.querySelectorAll(selector).forEach((el) => {
          if (observerRef.current) {
            observerRef.current.observe(el);
          }
        });
      });

      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    },
    [handleIntersection, threshold, rootMargin]
  );

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Added pathname to ensure the animation re-renders on changing paths
    setTimeout(() => observe([".hide", ".hide-x"]), 100);
  }, [pathname, observe]);

  return { observe };
}
