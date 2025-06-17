// components/StepIndicator.tsx
import React from "react";
import clsx from "clsx";

interface StepIndicatorProps {
  steps: number[];
  activeStep: number;
  onStepClick: (index: number) => void;
}

const stepLabels = [
  { title: "Step 1", subtitle: "Your Info" },
  { title: "Step 2", subtitle: "Select Plan" },
  { title: "Step 3", subtitle: "Add-ons" },
  { title: "Step 4", subtitle: "Summary" },
];

const StepIndicator: React.FC<StepIndicatorProps> = ({
  steps,
  activeStep,
  onStepClick,
}) => (
  <div className="absolute inset-0 z-10 lg:top-10 -top-20 lg:left-10 lg:flex-col lg:gap-8 flex gap-6 justify-center lg:justify-start">
    {steps.map((step, index) => (
      <div key={index} className="flex items-center lg:items-center lg:gap-3">
        <div className="">
          <button
            onClick={() => onStepClick(index)}
            aria-pressed={index === activeStep}
            className={clsx(
              "size-7 rounded-full border-2 cursor-pointer flex items-center justify-center font-medium transition-colors duration-300",
              {
                "bg-white text-black border-blue-600": index === activeStep,
                "bg-transparent text-white border-gray-300 hover:bg-white hover:text-black":
                  index !== activeStep,
              }
            )}
          >
            {step}
          </button>
        </div>

        {/* Only show text on large screens */}
        <div className="hidden lg:flex flex-col text-white">
          <span className="uppercase text-xs tracking-widest text-white">
            {stepLabels[index].title}
          </span>
          <span className="font-bold uppercase text-sm">
            {stepLabels[index].subtitle}
          </span>
        </div>
      </div>
    ))}
  </div>
);

export default StepIndicator;
