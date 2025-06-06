"use client";

import React, { useState } from "react";
import { addons } from "../lib/data";
import { Checkbox } from "~/components/ui/checkbox";

type AddonsProps = {
  isYearly: boolean;
};

const Addons = ({ isYearly }: AddonsProps) => {
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const handleToggle = (addonName: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addonName)
        ? prev.filter((name) => name !== addonName)
        : [...prev, addonName]
    );
  };

  return (
    <main className="">
      <div className="p-6 flex flex-col gap-6 w-full">
        <div>
          <h2 className="text-xl font-semibold">Pick add-ons</h2>
          <p className="text-sm text-gray-600">
            Add-ons help enhance your gaming experience.
          </p>
        </div>

        <section className="text-[13px] flex flex-col gap-2">
          {addons.map((addon) => {
            const isSelected = selectedAddons.includes(addon.name);

            return (
              <div
                key={addon.name}
                onClick={() => handleToggle(addon.name)}
                className={`flex items-center justify-between w-full border rounded-sm p-3 cursor-pointer transition-colors duration-200 ${
                  isSelected
                    ? "border-purple-600 bg-purple-100"
                    : "border-gray-300 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center gap-4 ">
                  <div
                    onClick={(e) => e.stopPropagation()} // Prevent bubbling!
                  >
                    <Checkbox
                      checked={isSelected}
                      onCheckedChange={() => handleToggle(addon.name)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-semibold">{addon.name}</h3>
                    <h3 className="text-gray-600">{addon.description}</h3>
                  </div>
                </div>

                <h3 className="text-purple-600">
                  +$
                  {isYearly
                    ? `${addon.yearlyPrice}/yr`
                    : `${addon.monthlyPrice}/mo`}
                </h3>
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default Addons;
