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

  const onNext = async () => {
    const valid = await trigger(); // validate current step
    if (!valid) return;
    setActiveStep((prev) => Math.min(prev + 1, steps.length));
  };

  const onBack = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  const handleStepClick = async (index: number) => {
    if (visitedSteps[index]) {
      setActiveStep(index);
    } else if (index === activeStep + 1) {
      const valid = await trigger();
      if (valid) setActiveStep(index);
    }
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("🎉 Form completed:", data);
    setActiveStep(steps.length);
  };

  return (
    <main className="bg-blue-100 min-h-screen lg:flex items-center justify-center">
      <section className="grid grid-cols-1 lg:grid-cols-3 max-w-4xl w-full h-full bg-white lg:rounded-xl shadow-lg overflow-hidden">
        {/* Sidebar image & step indicators */}
        <div className="relative w-full h-48 lg:h-auto">
          {/* Desktop image */}
          <Image
            src={desktop_sidebar}
            alt="Desktop sidebar"
            className="hidden lg:block h-full w-full object-cover"
          />
          {/* Mobile image */}
          <Image
            src={sidebar}
            alt="Mobile sidebar"
            className="block lg:hidden h-full w-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full">
            <StepIndicator
              steps={steps}
              activeStep={activeStep}
              onStepClick={handleStepClick}
            />
          </div>
        </div>

        {/* Wizard form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="col-span-2 flex flex-col justify-between lg:mx-20  h-full overflow-y-auto"
        >
          <div className="flex-1 ">
            <StepContent
              activeStep={activeStep}
              isYearly={isYearly}
              setIsYearly={setIsYearly}
              register={register}
              errors={errors}
            />
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:block pt-4">
            <NavigationButtons
              activeStep={activeStep}
              stepsLength={steps.length}
              onNext={onNext}
              onBack={onBack}
            />
          </div>
        </form>

        {/* Mobile navigation */}
        <div className="lg:hidden sticky bottom-0 w-full bg-white py-3 shadow-inner z-10">
          <NavigationButtons
            activeStep={activeStep}
            stepsLength={steps.length}
            onNext={onNext}
            onBack={onBack}
          />
        </div>
      </section>
    </main>
  );
};

export default Sidebar;
