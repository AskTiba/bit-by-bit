"use client";

import React, { useEffect, useRef } from "react";
import { ChevronDown } from "~/components/icons";
import Search from "~/components/icons/Search";
import X from "~/components/icons/X";

interface FilterFinderProps {
  selectedRegion: string | null;
  setSelectedRegion: (region: string | null) => void;
  regions: string[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const FilterFinder: React.FC<FilterFinderProps> = ({
  selectedRegion,
  setSelectedRegion,
  regions,
  searchTerm,
  setSearchTerm,
}) => {
  const [isDropDownOpen, setIsDropDownOpen] = React.useState(false);

  // Ref for dropdown container, to detect clicks outside
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toggle dropdown open/close
  const toggleDropdown = () => setIsDropDownOpen((open) => !open);

  // Select region and close dropdown
  const selectRegion = (region: string) => {
    setSelectedRegion(region);
    setIsDropDownOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropDownOpen(false);
      }
    }
    if (isDropDownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropDownOpen]);

  return (
    <section className="flex flex-col gap-6 md:flex-row md:justify-between py-5 md:py-8">
      {/* 🔍 Search Input */}
      <article>
        <div className="relative shadow-md dark:bg-[#2B3945] rounded-sm py-3 px-4">
          <div className="flex items-center gap-2">
            <Search
              className="size-5 text-gray-900 dark:text-white"
              strokeWidth={2}
            />

            <input
              type="text"
              placeholder="Search for a country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent placeholder:text-gray-400 focus:outline-none pr-8"
            />
          </div>

          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full bg-transparent dark:bg-[#202D36] hover:scale-110 transition"
              aria-label="Clear input"
            >
              <X className="size-4 text-gray-900 dark:text-white" />
            </button>
          )}
        </div>
      </article>

      {/* 🌍 Custom Filter Dropdown */}
      <article className="relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex justify-between cursor-pointer items-center w-48 px-4 py-3 bg-[#E9E8E3] dark:bg-[#2B3945] dark:border-none rounded-md shadow-md text-sm font-medium text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-[#3c4a56] transition"
          aria-haspopup="listbox"
          aria-expanded={isDropDownOpen}
          aria-label="Filter by Region"
        >
          {selectedRegion || "Filter by Region"}
          <ChevronDown
            strokeWidth={2}
            className={`w-4 h-4 ml-2 transition-transform duration-200 ${
              isDropDownOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isDropDownOpen && (
          <div
            role="listbox"
            className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-[#E9E8E3] dark:bg-[#2B3945] focus:outline-none z-10"
          >
            <div className="py-1">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => selectRegion(region)}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    selectedRegion === region
                      ? "bg-gray-100 dark:bg-gray-700 font-semibold"
                      : "text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                  }`}
                >
                  {region}
                </button>
              ))}

              {/* Optional Clear Region */}
              {selectedRegion && (
                <button
                  onClick={() => {
                    setSelectedRegion(null);
                    setIsDropDownOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-100 hover:text-[#E9E8E3] dark:hover:bg-red-700 font-medium"
                >
                  Clear Filter
                </button>
              )}
            </div>
          </div>
        )}
      </article>
    </section>
  );
};

export default FilterFinder;
