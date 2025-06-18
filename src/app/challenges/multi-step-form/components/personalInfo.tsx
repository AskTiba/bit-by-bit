"use client";

import React, { useEffect } from "react";
import {
  UseFormRegister,
  FieldErrors,
  UseFormSetValue,
} from "react-hook-form";
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
    <div className="p-6 flex flex-col gap-4">
      <h2 className="text-xl font-semibold">Personal Info</h2>

      <label>Name</label>
      <input
        {...register("name", { required: true })}
        onChange={sync("name")}
        className="w-full border p-2 rounded"
      />
      {errors.name && <p className="text-red-500">Required</p>}

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

      <label>Phone</label>
      <input
        {...register("phone", { required: true })}
        onChange={sync("phone")}
        className="w-full border p-2 rounded"
      />
      {errors.phone && <p className="text-red-500">Required</p>}
    </div>
  );
};

export default PersonalInfo;
