"use client";

import React, { useState } from "react";
import Image from "next/image";
import sidebar from "../assets/images/bg-sidebar-mobile.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import PersonalInfo from "./personalInfo";

type FormData = {
  name: string;
  email: string;
  number: string;
};

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

const Sidebar = () => {
  const [activeStep, setActiveStep] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Submitted:", data);
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    }
  };

  return (
    <main className="h-full flex flex-col">
      <div className="relative bg-gray-600/40">
        {/* Background Image */}
        <Image
          alt="Sidebar Background"
          src={sidebar}
          className="w-full"
          priority
        />

        {/* Step Circles */}
        <StepIndicator
          steps={steps}
          activeStep={activeStep}
          onClick={setActiveStep}
        />

        {/* Step Content */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {activeStep === 0 && (
            <PersonalInfo register={register} errors={errors} />
          )}

          {/* More steps go here with similar structure */}
        </form>
      </div>
      {/* Button inside the form to ensure submit works */}
      <div className="flex justify-end px-4 pb-4 my-10">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-sm"
        >
          {activeStep === steps.length - 1 ? "Submit" : "Next Step"}
        </button>
      </div>
    </main>
  );
};

export default Sidebar;
