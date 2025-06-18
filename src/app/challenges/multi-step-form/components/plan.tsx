// components/plan.tsx
"use client";

import React from "react";
import { PlanCard } from "./PlanCard";
import { Switch } from "~/components/ui/switch";
import { monthlyPlans, yearlyPlans } from "../lib/data";
import { useFormStore } from "~/lib/store/formDataStore";

const Plan: React.FC = () => {
  const { formData, updateFormData } = useFormStore();
  const { plan, isYearly } = formData;

  const currentPlans = isYearly ? yearlyPlans : monthlyPlans;

  const handlePlanSelect = (planName: string, price: string) => {
    const numericPrice = parseInt(price.replace(/\D/g, ""));
    updateFormData({ plan: planName, planPrice: numericPrice });
  };

  return (
    <div className="p-6 flex flex-col gap-6 w-full">
      <h2 className="text-xl font-semibold">Select your plan</h2>
      <p className="text-gray-500">
        You have the option of monthly or yearly billing.
      </p>

      <div className="flex flex-col lg:flex-row gap-3">
        {currentPlans.map((p) => (
          <PlanCard
            key={p.name}
            name={p.name}
            price={p.price}
            promoText={p.promoText}
            icon={p.icon}
            isActive={plan === p.name}
            onClick={() => handlePlanSelect(p.name, p.price)}
          />
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 text-sm mt-4">
        <span className={!isYearly ? "font-semibold" : "text-gray-400"}>
          Monthly
        </span>
        <Switch
          id="billing-toggle"
          checked={isYearly}
          onCheckedChange={(val) => updateFormData({ isYearly: val })}
        />
        <span className={isYearly ? "font-semibold" : "text-gray-400"}>
          Yearly
        </span>
      </div>
    </div>
  );
};

export default Plan;
