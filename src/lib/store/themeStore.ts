// src/store/themeStore.ts
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ThemeState {
  isDarkMode: boolean;
  toggleTheme: () => void;
  hasHydrated: boolean;
  setHasHydrated: (value: boolean) => void;
}

export const useThemeStore = create<ThemeState>()(
  devtools(
    persist(
      (set) => ({
        isDarkMode: false,
        toggleTheme: () =>
          set((state) => ({
            isDarkMode: !state.isDarkMode,
          })),
        hasHydrated: false,
        setHasHydrated: (value) => set({ hasHydrated: value }),
      }),
      {
        name: "theme-preference",
        onRehydrateStorage: () => (state) => {
          state?.setHasHydrated(true); // ✅ flag is set after rehydration
        },
      }
    ),
    { name: "ThemeStore" }
  )
);
