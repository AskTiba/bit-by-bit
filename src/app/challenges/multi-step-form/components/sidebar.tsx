// Sidebar.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import sidebar from "../assets/images/bg-sidebar-mobile.svg";
import desktop_sidebar from "../assets/images/bg-sidebar-desktop.svg";
import { useForm, SubmitHandler } from "react-hook-form";

import StepIndicator from "./StepIndicator";
import StepContent from "./StepContent";
import NavigationButtons from "./NavigationButtons";
import { FormData } from "../lib/types/formData";

const steps = [1, 2, 3, 4]; // 4 steps

const Sidebar: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isYearly, setIsYearly] = useState(false);
  const [visitedSteps, setVisitedSteps] = useState<boolean[]>(
    Array(steps.length).fill(false)
  );

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<FormData>();

  // Mark step visited when activeStep changes
  useEffect(() => {
    setVisitedSteps((prev) => {
      const clone = [...prev];
      clone[activeStep] = true;
      return clone;
    });
  }, [activeStep]);

  // Move forward with validation
  const onNext = async () => {
    const valid = await trigger(); // validate current step
    if (!valid) return;
    setActiveStep((prev) => Math.min(prev + 1, steps.length));
  };

  // Move backward
  const onBack = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  // Click a step indicator: allow if visited
  const handleStepClick = async (index: number) => {
    if (visitedSteps[index]) {
      setActiveStep(index);
    } else if (index === activeStep + 1) {
      // If next step isn’t visited yet, gate it behind validation
      const valid = await trigger();
      if (valid) setActiveStep(index);
    }
  };

  // Final submission
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("🎉 Form completed:", data);
    setActiveStep(steps.length); // go to Appreciation screen
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-[1fr_auto] max-h-screen w-full">
      {/* Sidebar image & step indicators */}
      <div className="relative w-full">
        <Image
          src={desktop_sidebar}
          alt="Desktop sidebar"
          className="hidden lg:flex rounded-xl"
        />
        <Image
          src={sidebar}
          alt="Mobile sidebar"
          className="block lg:hidden w-full"
        />

        <StepIndicator
          steps={steps}
          activeStep={activeStep}
          onStepClick={handleStepClick}
        />
      </div>

      {/* Wizard form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="col-span-2 grid grid-rows-[1fr_auto] bg-white absolute z-20 top-24 lg:static mx-3 rounded-xl lg:mx-0"
      >
        <StepContent
          activeStep={activeStep}
          isYearly={isYearly}
          setIsYearly={setIsYearly}
          register={register}
          errors={errors}
        />
        <div className="hidden lg:block">
          <NavigationButtons
            activeStep={activeStep}
            stepsLength={steps.length}
            onNext={onNext}
            onBack={onBack}
          />
        </div>
      </form>
      <div className="lg:hidden absolute bottom-0 w-full">
        <NavigationButtons
          activeStep={activeStep}
          stepsLength={steps.length}
          onNext={onNext}
          onBack={onBack}
        />
      </div>
    </section>
  );
};

export default Sidebar;
