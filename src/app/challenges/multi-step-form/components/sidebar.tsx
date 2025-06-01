"use client";

import React, { useState } from "react";
import Image from "next/image";
import sidebar from "../assets/images/bg-sidebar-mobile.svg";
import { useForm } from "react-hook-form";
import Link from "next/link";

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
  const [activeStep, setActiveStep] = useState<number>(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    console.log("Form Submitted:", data);
    setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  });

  return (
    <main className="h-full flex flex-col ">
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

        {/* Form Content */}
        <section className="relative z-20 -mt-[75px] mb-10 rounded-xl bg-white mx-3 flex flex-1">
          <div className="my-7 mx-4 flex flex-col w-full h-full">
            <h2 className="font-semibold text-xl">Personal Info</h2>
            <p className="text-gray-500 text-sm mb-4">
              Please provide your name, email address, and phone number.
            </p>

            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="e.g. Stephen King"
                  {...register("name", { required: "Name is required" })}
                  className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.name && (
                  <span className="text-red-500 text-xs">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="e.g. stephenking@lorem.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && (
                  <span className="text-red-500 text-xs">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div>
                <label htmlFor="number" className="text-sm font-medium">
                  Phone Number
                </label>
                <input
                  id="number"
                  type="tel"
                  placeholder=" e.g. +1 234 567 890"
                  {...register("number", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{7,14}$/,
                      message: "Enter a valid phone number",
                    },
                  })}
                  className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.number && (
                  <span className="text-red-500 text-xs">
                    {errors.number.message}
                  </span>
                )}
              </div>
            </form>
          </div>
        </section>
      </div>

      {/* Simulated Next Link */}
      <div className="flex self-end">
        <button
          type="submit"
          className="m-4 px-4 py-2 bg-blue-600 text-white rounded-sm transition cursor-pointer flex self-end "
        >
          Next Step
        </button>
      </div>
    </main>
  );
};

export default Sidebar;
