"use client";

import React, { useEffect } from "react";
import { UseFormRegister, FieldErrors, UseFormSetValue } from "react-hook-form";
import { useFormStore } from "~/lib/store/formDataStore";
import { MyFormData } from "~/lib/types/formData";

interface Props {
  register: UseFormRegister<MyFormData>;
  errors: FieldErrors<MyFormData>;
  setValue: UseFormSetValue<MyFormData>; // ✅ Correct type
}

const PersonalInfo: React.FC<Props> = ({ register, errors, setValue }) => {
  const { formData, updateFormData } = useFormStore();

  // ✅ On mount: seed values from store into RHF
  useEffect(() => {
    if (!setValue) return;

    setValue("name", formData.name);
    setValue("email", formData.email);
    setValue("phone", formData.phone.toString());
  }, [formData, setValue]);

  // ✅ On change: sync RHF state to global store
  const sync =
    (field: keyof MyFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      updateFormData({ [field]: e.target.value });
    };

  return (
    <div className="p-6 flex flex-col gap-6">
      <div className="">
        <h2 className="text-3xl font-bold">Personal Info</h2>
        <p className="text-gray-500">
          Please provide your name, email address, and phone number.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="">
          <label>Name</label>
          <input
            {...register("name", { required: true })}
            onChange={sync("name")}
            className="w-full border p-2 rounded"
          />
          {errors.name && <p className="text-red-500">Required</p>}
        </div>
        <div className="">
          <label>Email</label>
          <input
            {...register("email", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ ]+$/,
            })}
            onChange={sync("email")}
            className="w-full border p-2 rounded"
          />
          {errors.email && <p className="text-red-500">Invalid email</p>}
        </div>
        <div className="">
          <label>Phone</label>
          <input
            {...register("phone", { required: true })}
            onChange={sync("phone")}
            className="w-full border p-2 rounded"
          />
          {errors.phone && <p className="text-red-500">Required</p>}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
