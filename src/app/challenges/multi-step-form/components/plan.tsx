"use client";

import React, { useState } from "react";
import { PlanCard } from "./PlanCard";

import { Switch } from "~/components/ui/switch";
import { monthlyPlans, yearlyPlans } from "../lib/data";

type PlanProps = {
  isYearly: boolean;
  setIsYearly: React.Dispatch<React.SetStateAction<boolean>>;
};

const Plan = ({ isYearly, setIsYearly }: PlanProps) => {
  const [selectedPlan, setSelectedPlan] = useState<string>("Arcade");

  const currentPlans = isYearly ? yearlyPlans : monthlyPlans;

  return (
    <>
      <main className="">
        <div className="p-6 flex flex-col gap-6 w-full">
          <div>
            <h2 className="text-xl font-semibold">Select your plan</h2>
            <p className="text-sm text-gray-500">
              You have the option of monthly or yearly billing.
            </p>
          </div>

          <section className="flex flex-col lg:flex-row gap-3">
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
    </>
  );
};

export default Plan;
