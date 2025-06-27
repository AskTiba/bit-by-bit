"use client";

import React, { useState } from "react";
import { ChevronDown } from "~/components/icons";
import Search from "~/components/icons/Search";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

const FilterFinder = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  return (
    <main>
      <section className="flex flex-col gap-6 md:flex-row md:justify-between my-5 md:my-8">
        {/* 🔍 Search */}
        <article>
          <div className="flex items-center gap-4 shadow-md dark:bg-[#2B3945] rounded-sm py-3 px-4">
            <Search
              className="size-4 text-gray-900 dark:text-white"
              strokeWidth={2}
            />
            <input
              className="md:w-2xs focus:outline-none bg-transparent w-full placeholder:text-gray-400"
              type="text"
              placeholder="Search for a country..."
            />
          </div>
        </article>

        {/* 🌍 Filter Dropdown */}
        <article className="">
          <DropdownMenu open={isDropDownOpen} onOpenChange={setIsDropDownOpen}>
            <DropdownMenuTrigger asChild>
              <button
                className="flex items-center bg-transparent justify-between gap-4 dark:bg-[#2B3945] text-sm text-gray-700 dark:text-white rounded-md shadow-md px-4 py-3 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-transparent"
                aria-label="Filter by Region"
              >
                <span>{selectedRegion || "Filter by Region"}</span>
                <ChevronDown
                  className={`size-4 transform transition-transform duration-200 ${
                    isDropDownOpen ? "rotate-180" : ""
                  }`}
                  strokeWidth={2}
                />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              className="w-[--radix-dropdown-menu-trigger-width] text-sm rounded-sm border-0 bg-[#E9E8E3] dark:bg-[#2B3945] dark:text-white shadow-lg ring-0 focus:outline-none"
              align="start"
            >
              {regions.map((region) => (
                <DropdownMenuItem
                  key={region}
                  onSelect={() => setSelectedRegion(region)}
                  className="cursor-pointer py-2 font-medium text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-950 transition-colors duration-150 ease-in-out"
                >
                  {region}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </article>
      </section>
    </main>
  );
};

export default FilterFinder;
