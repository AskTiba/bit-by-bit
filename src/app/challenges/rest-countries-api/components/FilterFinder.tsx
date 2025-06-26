"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "~/components/icons";
import Search from "~/components/icons/Search";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

const FilterFinder = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const Icon = isDropDownOpen ? ChevronUp : ChevronDown;

  return (
    <main>
      <section className="flex flex-col gap-6 md:flex-row md:justify-between my-5 md:my-8">
        {/* 🔍 Search */}
        <article>
          <div className="flex items-center gap-4 border border-gray-400 rounded-md py-3 px-4">
            <Search className="size-4 text-gray-900" strokeWidth={2} />
            <input
              className="md:w-2xs focus:outline-none bg-transparent w-full placeholder:text-gray-400"
              type="text"
              placeholder="Search for a country..."
            />
          </div>
        </article>

        {/* 🌍 Filter Dropdown */}
        <article>
          <DropdownMenu open={isDropDownOpen} onOpenChange={setIsDropDownOpen}>
            <DropdownMenuTrigger asChild>
              <button className="text-gray-950 justify-between w-1/2 flex items-center gap-4 md:w-full border border-gray-400 rounded-md py-3 px-4">
                <p>Filter by Region</p>
                <Icon className="size-4 text-gray-950" strokeWidth={2} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="text-gray-950 font-normal bg-transparent"
              aria-label="Region"
              align="start"
            >
              <DropdownMenuItem>Africa</DropdownMenuItem>
              <DropdownMenuItem>America</DropdownMenuItem>
              <DropdownMenuItem>Asia</DropdownMenuItem>
              <DropdownMenuItem>Europe</DropdownMenuItem>
              <DropdownMenuItem>Oceania</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </article>
      </section>
    </main>
  );
};

export default FilterFinder;
