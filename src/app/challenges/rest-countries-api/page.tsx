import React from "react";
import Header from "./components/Header";
import FilterFinder from "./components/FilterFinder";

const CountiriesPage = () => {
  return (
    <div className="text-black text-sm lg:max-w-7xl md:max-w-3xl md:text-base px-3 md:px-8 lg:px-20  max-w-sm w-full mx-auto">
      <Header />
      <FilterFinder />
    </div>
  );
};

export default CountiriesPage;
