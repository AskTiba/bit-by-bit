"use client";

import React, { useEffect, useRef } from "react";
import {
  UseFormRegister,
  FieldErrors,
  UseFormSetValue,
  UseFormRegisterReturn,
} from "react-hook-form";
import { useFormStore } from "~/lib/store/formDataStore";
import { MyFormData } from "~/lib/types/formData";

interface Props {
  register: UseFormRegister<MyFormData>;
  errors: FieldErrors<MyFormData>;
  setValue: UseFormSetValue<MyFormData>;
}

const PersonalInfo: React.FC<Props> = ({ register, errors, setValue }) => {
  const { formData, updateFormData } = useFormStore();

  // Input refs
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);

  // Merged refs for RHF + manual focus
  const mergeRefs = (
    fieldRef: React.MutableRefObject<HTMLInputElement | null>,
    registerReturn: UseFormRegisterReturn
  ) => {
    return (element: HTMLInputElement) => {
      registerReturn.ref(element);
      fieldRef.current = element;
    };
  };

  useEffect(() => {
    // Set default values on mount
    if (formData) {
      setValue("name", formData.name);
      setValue("email", formData.email);
      setValue("phone", formData.phone.toString());
    }

    // Focus name input initially
    nameRef.current?.focus();
  }, [formData, setValue]);

  const sync =
    (field: keyof MyFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      updateFormData({ [field]: e.target.value });
    };

  return (
    <div className="p-6 flex flex-col gap-6">
      <div>
        <h2 className="text-3xl font-bold">Personal Info</h2>
        <p className="text-gray-500">
          Please provide your name, email address, and phone number.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {/* === Name === */}
        <div
          className="flex flex-col gap-1 cursor-pointer group"
          onMouseEnter={() => nameRef.current?.focus()}
        >
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
            <label
              htmlFor="name"
              className="text-base font-medium text-gray-700"
            >
              Name
            </label>
            {errors.name && (
              <span className="hidden lg:inline text-xs text-red-500 font-medium">
                {errors.name.message || "This field is required"}
              </span>
            )}
          </div>

          <input
            {...register("name", { required: "Name is required" })}
            onChange={sync("name")}
            ref={mergeRefs(
              nameRef,
              register("name", { required: "Name is required" })
            )}
            id="name"
            className={`w-full border p-2 rounded transition outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />

          {errors.name && (
            <p className="text-xs text-red-500 font-medium lg:hidden">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* === Email === */}
        <div
          className="flex flex-col gap-1 cursor-pointer group"
          onMouseEnter={() => emailRef.current?.focus()}
        >
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
            <label
              htmlFor="email"
              className="text-base font-medium text-gray-700"
            >
              Email
            </label>
            {errors.email && (
              <span className="hidden lg:inline text-xs text-red-500 font-medium">
                {errors.email.message || "Invalid email"}
              </span>
            )}
          </div>

          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ ]+$/,
                message: "Invalid email address",
              },
            })}
            onChange={sync("email")}
            ref={mergeRefs(
              emailRef,
              register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ ]+$/,
                  message: "Invalid email address",
                },
              })
            )}
            id="email"
            className={`w-full border p-2 rounded transition outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />

          {errors.email && (
            <p className="text-xs text-red-500 font-medium lg:hidden">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* === Phone === */}
        <div
          className="flex flex-col gap-1 cursor-pointer group"
          onMouseEnter={() => phoneRef.current?.focus()}
        >
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
            <label
              htmlFor="phone"
              className="text-base font-medium text-gray-700"
            >
              Phone
            </label>
            {errors.phone && (
              <span className="hidden lg:inline text-xs text-red-500 font-medium">
                {errors.phone.message || "This field is required"}
              </span>
            )}
          </div>

          <input
            {...register("phone", { required: "Phone number is required" })}
            onChange={sync("phone")}
            ref={mergeRefs(
              phoneRef,
              register("phone", { required: "Phone number is required" })
            )}
            id="phone"
            className={`w-full border p-2 rounded transition outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
          />

          {errors.phone && (
            <p className="text-xs text-red-500 font-medium lg:hidden">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
