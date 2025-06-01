"use client";

// hooks/useTailwindBreakpoint.ts
import { useEffect, useState } from "react";

export const useIsSmUp = () => {
  const [isSmUp, setIsSmUp] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");
    const handleChange = () => setIsSmUp(mediaQuery.matches);

    // Initial value
    handleChange();

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isSmUp;
};
