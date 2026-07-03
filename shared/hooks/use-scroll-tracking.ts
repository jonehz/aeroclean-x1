"use client";

import { useEffect } from "react";

import { trackEvent } from "../lib/analytics";

export function useScrollTracking() {
  useEffect(() => {
    function handleScroll() {
      trackEvent("scroll", {
        position:
          window.scrollY,
      });
    }

    window.addEventListener(
      "scroll",
      handleScroll,
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);
}