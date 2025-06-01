"use client";

import React, { useState } from "react";
import PersonalInfo from "./personalInfo";
import Plan from "./plan";
import Addons from "./add-ons";
import Finishing from "./finishing";

type Props = {};

// We store the components in an object so we can dynamically switch between them
const views = {
  personalInfo: <PersonalInfo />,
  plan: <Plan />,
  addOns: <Addons />,
  finishing: <Finishing />,
};

const Steps = (props: Props) => {
  const [currentView, setCurrentView] =
    useState<keyof typeof views>("personalInfo");

  // This selects the current component based on the state
  const ActiveComponent = views[currentView];

  return (
    <div className="p-4 max-w-md mx-auto">
      {/* Render the active component */}
      <div className="border rounded p-4 shadow bg-white">
        {ActiveComponent}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4 flex-wrap gap-2">
        <button
          onClick={() => setCurrentView("personalInfo")}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Step 1
        </button>
        <button
          onClick={() => setCurrentView("plan")}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Step 2
        </button>
        <button
          onClick={() => setCurrentView("addOns")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Step 3
        </button>
        <button
          onClick={() => setCurrentView("finishing")}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Step 4
        </button>
      </div>
    </div>
  );
};

export default Steps;
