"use client";

import React from "react";
import { Separator } from "~/components/ui/separator";
import { useFormStore } from "~/lib/store/formDataStore";

const Finishing = () => {
  const { formData, setStep } = useFormStore();
  const { plan, isYearly, planPrice, addonPrices } = formData;

  const total = planPrice + addonPrices.reduce((acc, a) => acc + a.price, 0);
  const billingCycle = isYearly ? "yr" : "mo";

  return (
    <main className="flex-1 w-full">
      <div className="w-full p-6 flex flex-col items-center justify-center gap-6">
        <div className="w-full">
          <h2 className="text-3xl font-bold">Finishing up</h2>
          <p className="text-sm text-gray-600">
            Double-check everything looks OK before confirming.
          </p>
        </div>

        <section className="w-full flex text-base flex-col gap-3 bg-gray-100 border rounded p-4">
          <div>
            <section className="">
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1">
                  <div className="font-bold">
                    {plan} ({isYearly ? "Yearly" : "Monthly"})
                  </div>
                  {/* CHANGE BUTTON HERE */}
                  <p
                    className="text-gray-600 text-sm underline cursor-pointer"
                    onClick={() => setStep("plan")}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && setStep("plan")}
                  >
                    Change
                  </p>
                </div>
                <h3 className="font-bold">
                  ${planPrice}/{billingCycle}
                </h3>
              </div>
            </section>
          </div>

          {addonPrices.length > 0 && (
            <>
              <Separator />
              {addonPrices.map((a) => (
                <div
                  key={a.name}
                  className="flex justify-between items-cente text-sm text-gray-500"
                >
                  <p>{a.name}</p>
                  <p className="text-gray-600 font-semibold">
                    +${a.price}/{billingCycle}
                  </p>
                </div>
              ))}
            </>
          )}
        </section>

        <div className="w-full px-4 flex justify-between items-center text-sm">
          <p className="text-gray-500">
            Total (per {isYearly ? "year" : "month"})
          </p>
          <p className="text-base font-bold text-purple-600">
            +${total}/{billingCycle}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Finishing;
