"use client";

import React, { useState } from "react";
import { PlanCard } from "./PlanCard";

import { Switch } from "~/components/ui/switch";
import { monthlyPlans, yearlyPlans } from "../lib/data";

const Plan = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>("Arcade");
  const [isYearly, setIsYearly] = useState<boolean>(false); // 👈 toggle state

  const currentPlans = isYearly ? yearlyPlans : monthlyPlans;

  return (
    <main className="relative z-20 -mt-[75px] mb-10 mx-3 bg-white text-black rounded-xl shadow-md flex-1">
      <div className="p-6 flex flex-col gap-6 w-full">
        <div>
          <h2 className="text-xl font-semibold">Select your plan</h2>
          <p className="text-sm text-gray-500">
            You have the option of monthly or yearly billing.
          </p>
        </div>

        <section className="flex flex-col gap-3">
          {currentPlans.map((plan) => (
            <PlanCard
              key={plan.name}
              name={plan.name}
              price={plan.price}
              promoText={plan.promoText}
              icon={plan.icon}
              isActive={selectedPlan === plan.name}
              onClick={() => setSelectedPlan(plan.name)}
            />
          ))}
        </section>

        <div className="flex justify-center items-center gap-4 text-sm mt-4">
          <span
            className={`transition-colors duration-200 ${
              !isYearly ? "text-black font-semibold" : "text-gray-400"
            }`}
          >
            Monthly
          </span>
          <Switch
            id="billing-toggle"
            checked={isYearly}
            onCheckedChange={setIsYearly}
            className="text-black"
          />
          <span
            className={`transition-colors duration-200 ${
              isYearly ? "text-black font-semibold" : "text-gray-400"
            }`}
          >
            Yearly
          </span>
        </div>
      </div>
    </main>
  );
};

export default Plan;
