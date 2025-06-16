// components/StepIndicator.tsx
import React from "react";
import clsx from "clsx";

interface StepIndicatorProps {
  steps: number[];
  activeStep: number;
  onStepClick: (index: number) => void;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  steps,
  activeStep,
  onStepClick,
}) => (
  <div className="absolute inset-0 z-10 mt-8 lg:left-6 lg:flex-col lg:gap-10 flex gap-6 justify-center lg:justify-start">
    {steps.map((step, index) => (
      <button
        key={index}
        onClick={() => onStepClick(index)}
        aria-pressed={index === activeStep}
        className={clsx(
          "size-7 rounded-full border-2 flex items-center justify-center font-medium transition-colors duration-300",
          {
            "bg-white text-black border-blue-600": index === activeStep,
            "bg-transparent text-white border-gray-300 hover:bg-white hover:text-black":
              index !== activeStep,
          }
        )}
      >
        {step}
      </button>
    ))}
  </div>
);

export default StepIndicator;
