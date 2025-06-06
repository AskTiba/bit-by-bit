// components/Sidebar.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import sidebar from "../assets/images/bg-sidebar-mobile.svg";
import desktop_sidebar from "../assets/images/bg-sidebar-desktop.svg";
import { useForm, SubmitHandler } from "react-hook-form";

import StepIndicator from "./StepIndicator";
import StepContent from "./StepContent";
import NavigationButtons from "./NavigationButtons";
import { FormData } from "../lib/types/formData";

const steps = [1, 2, 3, 4];

const Sidebar: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0); // Tracks current step
  const [isYearly, setIsYearly] = useState<boolean>(false); // Toggles plan type

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (activeStep < steps.length) {
      setActiveStep((prev) => prev + 1);
    } else {
      console.log("🎉 Form submitted:", data);
    }
  };

  const handleStepClick = (index: number) => {
    if (index <= activeStep) {
      setActiveStep(index);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-[1fr_auto] max-h-screen w-full bg-gray-100">
      {/* Sidebar Image */}
      <div className="relative w-full">
        <Image
          src={desktop_sidebar}
          alt="Sidebar background"
          className="hidden lg:flex rounded-xl"
        />
        <Image
          src={sidebar}
          alt="Sidebar background mobile"
          className="block lg:hidden w-full"
        />
        {/* Step indicators */}
        <StepIndicator
          steps={steps}
          activeStep={activeStep}
          onStepClick={handleStepClick}
        />
      </div>

      {/* Step Content and Navigation */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="col-span-2 grid grid-rows-[1fr_auto] gap-6 bg-green-200 rounded-xl shadow-md"
      >
        <StepContent
          activeStep={activeStep}
          isYearly={isYearly}
          setIsYearly={setIsYearly}
          register={register}
          errors={errors}
        />

        <NavigationButtons
          activeStep={activeStep}
          stepsLength={steps.length}
          onBack={handleBack}
        />
      </form>
    </section>
  );
};

export default Sidebar;
