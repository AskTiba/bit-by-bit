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

  // Refs for manual focus
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);

  // Function to merge RHF and custom refs
  const mergeRefs = (
    fieldRef: React.MutableRefObject<HTMLInputElement | null>,
    registerReturn: UseFormRegisterReturn
  ) => {
    return (element: HTMLInputElement) => {
      registerReturn.ref(element);
      fieldRef.current = element;
    };
  };

  // Set default values and autofocus on mount
  useEffect(() => {
    if (formData) {
      setValue("name", formData.name);
      setValue("email", formData.email);
      setValue("phone", formData.phone.toString());
    }

    // Only focus on initial mount
    nameRef.current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sync =
    (field: keyof MyFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      updateFormData({ [field]: e.target.value });
    };

  // Store register returns once
  const nameRegister = register("name", { required: "Name is required" });
  const emailRegister = register("email", {
    required: "Email is required",
    pattern: {
      value: /^[^@ ]+@[^@ ]+\.[^@ ]+$/,
      message: "Invalid email address",
    },
  });
  const phoneRegister = register("phone", {
    required: "Phone number is required",
  });

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
                {errors.name.message}
              </span>
            )}
          </div>

          <input
            {...nameRegister}
            id="name"
            onChange={(e) => {
              nameRegister.onChange(e);
              sync("name")(e);
            }}
            ref={mergeRefs(nameRef, nameRegister)}
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
                {errors.email.message}
              </span>
            )}
          </div>

          <input
            {...emailRegister}
            id="email"
            onChange={(e) => {
              emailRegister.onChange(e);
              sync("email")(e);
            }}
            ref={mergeRefs(emailRef, emailRegister)}
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
                {errors.phone.message}
              </span>
            )}
          </div>

          <input
            {...phoneRegister}
            id="phone"
            onChange={(e) => {
              phoneRegister.onChange(e);
              sync("phone")(e);
            }}
            ref={mergeRefs(phoneRef, phoneRegister)}
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
