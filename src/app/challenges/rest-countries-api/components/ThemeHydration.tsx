// components/ThemeHydration.tsx
"use client";

import { useEffect } from "react";
import { useThemeStore } from "~/lib/store/themeStore";

export default function ThemeHydration() {
  const { isDarkMode } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  return null;
}
