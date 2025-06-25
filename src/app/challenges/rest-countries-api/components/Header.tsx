"use client";

import React from "react";
import { useThemeStore } from "~/lib/store/themeStore";
import { Dark, Light } from "~/components/icons";

const Header = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();
  return (
    <main className=" ">
      <header className="flex items-center justify-between py-5 shadow-2xs font-semibold">
        <p className="">Where in the world?</p>
        <article className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="flex items-center cursor-pointer
                 transition-all duration-300 
                 "
          >
            {isDarkMode ? (
              <Dark className="w-5 h-5 text-blue-950" strokeWidth={2} />
            ) : (
              <Light className="w-5 h-5 text-blue-950" strokeWidth={2} />
            )}
          </button>
          <span className="">{isDarkMode ? "Dark Mode" : "Light Mode"}</span>
        </article>
      </header>
    </main>
  );
};

export default Header;
