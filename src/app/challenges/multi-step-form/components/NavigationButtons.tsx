// components/NavigationButtons.tsx
import React from "react";

interface NavigationButtonsProps {
  activeStep: number;
  stepsLength: number;
  onBack: () => void;
  onNext: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  activeStep,
  stepsLength,
  onBack,
  onNext,
}) => {
  if (activeStep >= stepsLength) return null; // Hide on final appreciation step

  return (
    <div className="flex justify-between items-center p-4">
      {activeStep > 0 && (
        <button
          type="button"
          onClick={onBack}
          className="px-4 py-2 bg-transparent text-purple-500 cursor-pointer rounded-md hover:bg-gray-700 transition"
        >
          Go Back
        </button>
      )}
      <div className="ml-auto">
        <button
          type="button"
          onClick={onNext}
          className={`px-6 py-2 ${
            activeStep === stepsLength - 1
              ? "bg-green-600 hover:bg-green-700"
              : "bg-blue-600 hover:bg-blue-700"
          } text-white font-medium cursor-pointer rounded-md transition duration-300`}
        >
          {activeStep === stepsLength - 1 ? "Confirm" : "Next Step"}
        </button>
      </div>
    </div>
  );
};

export default NavigationButtons;
