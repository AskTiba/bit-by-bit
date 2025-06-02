// Sidebar.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import sidebar from "../assets/images/bg-sidebar-mobile.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import PersonalInfo from "./personalInfo"; // This one already exists
import AddOns from "./add-ons";
import Finishing from "./finishing";
import Plan from "./plan";
import Addons from "./add-ons";

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
  const [isYearly, setIsYearly] = useState<boolean>(false); // 👈 toggle state

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Submitted:", data);
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      alert("Final submission logic goes here.");
    }
  };

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
      default:
        return null;
    }
  };

  return (
    <main className="h-full flex flex-col bg-slate-900 text-white min-h-screen">
      <div className="relative bg-gray-600/40">
        {/* Sidebar Background Image */}
        <Image
          alt="Sidebar Background"
          src={sidebar}
          className="w-full object-cover"
          priority
        />

        {/* Step Circles */}
        <StepIndicator
          steps={steps}
          activeStep={activeStep}
          onClick={setActiveStep}
        />
      </div>

      {/* Form Body */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-grow px-4 flex flex-col justify-between"
      >
        <div>{renderStepContent()}</div>

        {/* Navigation Button */}
        <div className="mt-10 flex justify-end my-4">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-300"
          >
            {activeStep === steps.length - 1 ? "Submit" : "Next Step"}
          </button>
        </div>
      </form>
    </main>
  );
};

export default Sidebar;
