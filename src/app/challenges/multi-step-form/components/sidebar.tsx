// components/Sidebar.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import sidebar from "../assets/images/bg-sidebar-mobile.svg";
import desktop_sidebar from "../assets/images/bg-sidebar-desktop.svg";

import { useForm, SubmitHandler } from "react-hook-form";

// Step Components
import PersonalInfo from "./personalInfo";
import Plan from "./plan";
import Addons from "./add-ons";
import Finishing from "./finishing";
import Appreciation from "./apreciation";

// Import shared FormData interface
import { FormData } from "../lib/types/formData";

const steps = [1, 2, 3, 4];

const StepIndicator = ({
  steps,
  activeStep,
  onClick,
}: {
  steps: number[];
  activeStep: number;
  onClick: (index: number) => void;
}) => (
  <div className="absolute inset-0 lg:mt-20 z-10 mt-8 w-56 mx-auto lg:flex-col lg:gap-10 flex gap-6 justify-center lg:justify-start">
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

const Sidebar = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isYearly, setIsYearly] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return <PersonalInfo register={register} errors={errors} />;
      case 1:
        return <Plan isYearly={isYearly} setIsYearly={setIsYearly} />;
      case 2:
        return <Addons isYearly={isYearly} />;
      case 3:
        return <Finishing />;
      case 4:
        return <Appreciation />;
      default:
        return null;
    }
  };

  const onSubmit: SubmitHandler<FormData> = () => {
    if (activeStep < steps.length) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0 && activeStep <= steps.length) {
      setActiveStep((prev) => prev - 1);
    }
  };

  return (
    <main className="h-full lg:h-screen flex flex-col lg:flex-row bg-slate-900 lg:bg-blue-300 text-white">
      {/* Sidebar Image & Step Circles */}
      <div className="relative lg:p-4 bg-gray-600/40 flex">
        <Image
          alt="Sidebar Background"
          src={sidebar}
          className="w-full object-cover lg:hidden lg:m-4"
          priority
        />
        <Image
          alt="Sidebar Background"
          src={desktop_sidebar}
          className="hidden lg:flex "
          priority
        />
        <StepIndicator
          steps={steps}
          activeStep={activeStep}
          onClick={setActiveStep}
        />
      </div>

      {/* Main Form Logic */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-grow lg:p-10 px-4 flex flex-col justify-between "
      >
        {/* Step Content */}
        <div className="lg:py-20">{renderStepContent()}</div>

        {/* Navigation Buttons */}
        <div className="mt-10 flex justify-between items-center my-4">
          {/* Go Back */}
          {activeStep > 0 && activeStep < steps.length + 1 && (
            <button
              type="button"
              onClick={handleBack}
              className="px-4 py-2 bg-transparent border border-gray-400 text-white rounded-md hover:bg-gray-700 transition"
            >
              Go Back
            </button>
          )}

          {/* Next / Confirm / Final */}
          <div className="ml-auto">
            {activeStep < steps.length - 1 && (
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-300"
              >
                Next Step
              </button>
            )}

            {activeStep === steps.length - 1 && (
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition duration-300"
              >
                Confirm
              </button>
            )}

            {activeStep === steps.length && (
              <div className="text-sm text-gray-400 italic">
                <p className=""> 🎉 Thank you! You are all set.</p>
              </div>
            )}
          </div>
        </div>
      </form>
    </main>
  );
};

export default Sidebar;
