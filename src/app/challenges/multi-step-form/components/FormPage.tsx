"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import sidebar from "../assets/images/bg-sidebar-mobile.svg";
import desktop_sidebar from "../assets/images/bg-sidebar-desktop.svg";
import { useForm, SubmitHandler } from "react-hook-form";

import StepIndicator from "./StepIndicator";
import StepContent from "./StepContent";
import NavigationButtons from "./NavigationButtons";
import { MyFormData } from "~/lib/types/formData";

const steps = [1, 2, 3, 4]; // 4 steps

const FormPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [visitedSteps, setVisitedSteps] = useState<boolean[]>(
    Array(steps.length).fill(false)
  );

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    setValue, // 👈 Add this
  } = useForm<MyFormData>();

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

  const onSubmit: SubmitHandler<MyFormData> = (data) => {
    console.log("🎉 Form completed:", data);
    setActiveStep(steps.length);
  };

  return (
    <main className="bg-blue-100 min-h-screen lg:flex items-center justify-center lg:py-16">
      <section className="grid grid-cols-1 lg:grid-cols-3 max-w-4xl w-full h-full bg-blue-100 lg:bg-white lg:rounded-xl overflow-hidden">
        {/* Sidebar image & step indicators */}
        <div className="relative h-48 lg:h-auto lg:min-h-full w-full">
          {/* Desktop image */}
          <Image
            src={desktop_sidebar}
            alt="Desktop sidebar"
            priority
            className="hidden lg:flex w-full h-full object-contain p-3 rounded-xl"
          />
          {/* Mobile image */}
          <Image
            src={sidebar}
            alt="Mobile sidebar"
            priority
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
          className="col-span-2 relative lg:mx-12 lg:static flex flex-col bg-white rounded-xl -top-20 z-60 justify-between mx-3 h-full"
        >
          <div className="lg:pt-5 flex flex-col h-full">
            <StepContent
              activeStep={activeStep}
              register={register}
              errors={errors}
              setValue={setValue} // 👈 Add this too
            />
          </div>
          <div className="hidden lg:block  sticky bottom-0 w-full py-3 z-10">
            <NavigationButtons
              activeStep={activeStep}
              stepsLength={steps.length}
              onNext={onNext}
              onBack={onBack}
            />
          </div>
        </form>
      </section>
      {/* Mobile navigation */}
      <div className="lg:hidden absolute   bottom-0 w-full bg- py-3 z-10">
        <NavigationButtons
          activeStep={activeStep}
          stepsLength={steps.length}
          onNext={onNext}
          onBack={onBack}
        />
      </div>
    </main>
  );
};

export default FormPage;
