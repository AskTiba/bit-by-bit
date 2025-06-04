import type { Config } from "tailwindcss";
import sharedPreset from "~/packages/shared-tailwind-config/tailwind.preset";

const config: Config = {
  presets: [sharedPreset],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Project-specific overrides or additions
        accent: {
          green: "#00FFAA",
        },
      },
    },
  },
};

export default config;
