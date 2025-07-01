"use client";

import React, { useState } from "react";
import { ChevronDown } from "~/components/icons";
import Search from "~/components/icons/Search";
import X from "~/components/icons/X";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

const FilterFinder = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const [searchTerm, setSearchTerm] = useState("");

  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  return (
    <main>
      <section className="flex flex-col gap-6 md:flex-row md:justify-between py-5 md:py-8">
        {/* 🔍 Search */}
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
                className="w-full bg-transparent placeholder:text-gray-400 focus:outline-none pr-8" // 👈 padding for the X
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
