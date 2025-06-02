import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  number: string;
};

type Props = {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
};

const PersonalInfo = ({ register, errors }: Props) => {
  return (
    <section className="relative z-20 -mt-[75px] mb-10 rounded-xl text-black bg-white mx-3 flex flex-1">
      <div className="my-7 mx-4 flex flex-col w-full h-full">
        <h2 className="font-semibold text-xl">Personal Info</h2>
        <p className="text-gray-500 text-sm mb-4">
          Please provide your name, email address, and phone number dffdfdfdfdf.
        </p>

        <div className="flex flex-col gap-4">
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
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
