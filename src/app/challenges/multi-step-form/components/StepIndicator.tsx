import React from "react";

type Props = {
  steps: number[];
  activeStep: number;
  onClick: (index: number) => void;
};

const steps = [1, 2, 3, 4];

const StepIndicator = ({ steps, activeStep, onClick }: Props) => (
  <div className="absolute inset-0 z-10 mt-8 w-56 mx-auto flex gap-6 justify-center">
    {steps.map((step, index) => {
      const isActive = index === activeStep;
      return (
        <button
          key={index}
          onClick={() => onClick(index)}
          aria-pressed={isActive}
          className={`size-7 rounded-full border-2 flex items-center justify-center font-medium transition-colors duration-300 ${
            isActive
              ? "bg-white text-black border-blue-600"
              : "bg-transparent text-white border-gray-300 hover:bg-white hover:text-black"
          }`}
        >
          {step}
        </button>
      );
    })}
  </div>
);

export default StepIndicator;
