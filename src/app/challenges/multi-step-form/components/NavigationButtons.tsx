// components/NavigationButtons.tsx
import React from 'react';

interface NavigationButtonsProps {
  activeStep: number;
  stepsLength: number;
  onBack: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({ activeStep, stepsLength, onBack }) => (
  <div className="flex justify-between justify-self-end">
    {activeStep > 0 && activeStep < stepsLength + 1 && (
      <button
        type="button"
        onClick={onBack}
        className="px-4 py-2 bg-transparent text-purple-500 cursor-pointer rounded-md hover:bg-gray-700 transition"
      >
        Go Back
      </button>
    )}
    <div className="ml-auto">
      {activeStep < stepsLength - 1 && (
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium cursor-pointer rounded-md transition duration-300"
        >
          Next Step
        </button>
      )}
      {activeStep === stepsLength - 1 && (
        <button
          type="submit"
          className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition duration-300"
        >
          Confirm
        </button>
      )}
      {activeStep === stepsLength && (
        <div className="text-sm text-gray-400 italic">
          <p>🎉 Thank you! You are all set.</p>
        </div>
      )}
    </div>
  </div>
);

export default NavigationButtons;
