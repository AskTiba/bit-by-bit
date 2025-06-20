import React from "react";

interface NavigationButtonsProps {
  activeStep: number;
  stepsLength: number;
  onBack: () => void;
  onNext: () => void;
  isValid: boolean;
}

const colors = {
  blue: {
    DEFAULT: "bg-blue-950",
    hover: "hover:bg-blue-950/80",
    disabled: "bg-blue-950/60 cursor-not-allowed",
  },
  green: {
    DEFAULT: "bg-blue-800",
    hover: "hover:bg-blue-700",
    disabled: "bg-gray-300 cursor-not-allowed",
  },
};

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  activeStep,
  stepsLength,
  onBack,
  onNext,
  isValid,
}) => {
  if (activeStep >= stepsLength) return null; // no buttons on final screen

  const isLast = activeStep === stepsLength - 1;
  const btnColors = isLast ? colors.green : colors.blue;

  return (
    <div className="flex justify-between items-center p-4">
      {activeStep > 0 ? (
        <button
          type="button"
          onClick={onBack}
          className="px-4 py-2 bg-transparent cursor-pointer text-blue-400 hover:text-blue-950 transition rounded-md"
        >
          Go Back
        </button>
      ) : (
        <div />
      )}

      <button
        type="button"
        onClick={() => isValid && onNext()}
        disabled={!isValid}
        className={`px-6 py-2 text-white cursor-pointer font-medium rounded-md transition duration-300 ${
          isValid
            ? `${btnColors.DEFAULT} ${btnColors.hover}`
            : btnColors.disabled
        }`}
      >
        {isLast ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
};

export default NavigationButtons;
