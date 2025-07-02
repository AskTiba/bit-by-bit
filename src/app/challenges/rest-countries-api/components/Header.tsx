"use client";

import React from "react";
import { useThemeStore } from "~/lib/store/themeStore";
import { Dark, Light } from "~/components/icons";

const Header = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    // 🌐 Full width background area
    <header className="w-full bg-[#E9E8E3] dark:bg-[#2B3945] text-gray-950  dark:text-white  shadow-md sticky top-0 z-10">
      <div className="flex items-center justify-between py-5 px-4 sm:px-6 md:px-10 lg:px-20 mx-auto max-w-7xl font-semibold">
        <p>Where in the world?</p>
        <article className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="flex items-center cursor-pointer transition-all duration-300"
          >
            {isDarkMode ? (
              <Dark
                className="w-5 h-5 text-blue-950 dark:text-white"
                strokeWidth={2}
              />
            ) : (
              <Light className="w-5 h-5 text-blue-950" strokeWidth={2} />
            )}
          </button>
          <span>{isDarkMode ? "Dark Mode" : "Light Mode"}</span>
        </article>
      </div>
    </header>
  );
};

export default Header;
