// components/CountryExplorer.tsx

import React, { useState, useMemo } from "react";
import FilterFinder from "./FilterFinder";
import Countries from "./Countries";
import rawData from "../lib/data.json";
import { Country } from "~/types/country";

const mockCountries = rawData as Country[];

const CountryExplorer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  // Available regions (for filtering)
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const filteredCountries = useMemo(() => {
    return mockCountries.filter((country) => {
      const nameMatches = country.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const regionMatches = selectedRegion
        ? country.region === selectedRegion
        : true;
      return nameMatches && regionMatches;
    });
  }, [searchTerm, selectedRegion]);

  return (
    <main className="text-gray-950 dark:bg-[#202D36] dark:text-white font-sans mx-auto min-h-screen">
      <div className="text-sm lg:max-w-7xl md:max-w-3xl md:text-base max-w-sm mx-auto">
        <FilterFinder
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          regions={regions}
        />
        <Countries countries={filteredCountries} />
      </div>
    </main>
  );
};

export default CountryExplorer;
