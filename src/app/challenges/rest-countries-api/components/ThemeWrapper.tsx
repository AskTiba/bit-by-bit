"use client";

// ThemeWrapper.tsx or App.tsx

import { useThemeStore } from "~/lib/store/themeStore";

export const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode, hasHydrated } = useThemeStore();

  if (!hasHydrated) return null; // 🧠 prevent flash/mismatch

  return (
    <div
      className={`transition-colors duration-500 ${isDarkMode ? "dark" : ""}`}
    >
      {children}
    </div>
  );
};
