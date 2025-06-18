// components/add-ons.tsx
"use client";

import React from "react";
import { addons } from "../lib/data";
import { Checkbox } from "~/components/ui/checkbox";
import { useFormStore } from "~/lib/store/formDataStore";

const AddOns: React.FC = () => {
  const { formData, updateFormData } = useFormStore();
  const { addons: selected, addonPrices, isYearly } = formData;

  const handleToggle = (name: string) => {
    const addon = addons.find((a) => a.name === name);
    if (!addon) return;

    const price = isYearly ? addon.yearlyPrice : addon.monthlyPrice;
    const isSelected = selected.includes(name);

    const updatedAddons = isSelected
      ? selected.filter((a) => a !== name)
      : [...selected, name];

    const updatedAddonPrices = isSelected
      ? addonPrices.filter((a) => a.name !== name)
      : [...addonPrices, { ...addon, price }]; // ✅ works now

    updateFormData({ addons: updatedAddons, addonPrices: updatedAddonPrices });
  };

  return (
    <div className="p-6 flex flex-col gap-6 w-full">
      <div className="">
        <h2 className="text-3xl font-bold">Pick add-ons</h2>
        <p className="text-gray-600">
          Add-ons help enhance your gaming experience.
        </p>
      </div>

      <div className="flex flex-col gap-2 text-[13px]">
        {addons.map((a) => {
          const isSelected = selected.includes(a.name);
          return (
            <div
              key={a.name}
              onClick={() => handleToggle(a.name)}
              className={`flex justify-between items-center border p-3 rounded transition ${
                isSelected
                  ? "bg-purple-100 border-purple-600"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center text-base gap-4">
                <div onClick={(e) => e.stopPropagation()}>
                  <Checkbox
                    checked={isSelected}
                    onCheckedChange={() => handleToggle(a.name)}
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{a.name}</h3>
                  <p className="text-gray-600 text-sm">{a.description}</p>
                </div>
              </div>

              <p className="text-purple-600 font-semibold">
                +${isYearly ? `${a.yearlyPrice}/yr` : `${a.monthlyPrice}/mo`}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddOns;
