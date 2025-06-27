import React from "react";
import Header from "./components/Header";
import FilterFinder from "./components/FilterFinder";
import { ThemeWrapper } from "./components/ThemeWrapper";
import Countries from "./components/Countries";

const CountiriesPage = () => {
  return (
    <ThemeWrapper>
      <main className="text-gray-950 dark:bg-[#202D36] dark:text-white font-sans mx-auto min-h-screen">
        <Header />
        <div className=" text-sm px-4 lg:max-w-7xl md:max-w-3xl lg:px-20 md:text-base max-w-sm mx-auto">
          <FilterFinder />
          <Countries />
        </div>
      </main>
    </ThemeWrapper>
  );
};

export default CountiriesPage;
