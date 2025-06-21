"use client"; // 1️⃣ Needed for client-side components in Next.js

import React, { useEffect } from "react";
import { useForm } from "react-hook-form"; // 2️⃣ React Hook Form — best for easy form handling
import { Input } from "~/components/ui/input"; // 3️⃣ Custom UI component (maybe from shadcn)
import { useUserDataStore } from "~/lib/store/testStore"; // 4️⃣ Zustand store import

// 5️⃣ Define the form shape — notice camelCase (matches form input names)
type FormData = {
  firstName: string;
  lastName: string;
};

const RefHook = () => {
  // 6️⃣ Setup react-hook-form methods
  const { register, setFocus, handleSubmit } = useForm<FormData>();

  // 7️⃣ Grab just the `setUser` method from Zustand store
  const setUser = useUserDataStore((state) => state.setUser);

  // 8️⃣ Submit handler — wraps with react-hook-form for validation
  const onSubmit = handleSubmit((data) => {
    const userData = {
      firstname: data.firstName.trim(),
      lastname: data.lastName.trim(),
    };

    setUser(userData); // 9️⃣ Save to Zustand store
    console.log(
      `✅ User name saved to Zustand: ${JSON.stringify(userData, null, 2)} `
    ); // Debug/log
  });

  // 🔟 Focus first input on mount
  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);

  return (
    <div className="">
      <form className="my-8" onSubmit={onSubmit}>
        <div className="sm:w-1/2 sm:mx-auto flex flex-col gap-3">
          {/* 🔤 First Name Field */}
          <div className="flex flex-col gap-1">
            <label htmlFor="firstName">First Name</label>
            <Input
              id="firstName"
              placeholder="First Name"
              className="border border-[#3d348b] rounded-sm py-2 px-1"
              {...register("firstName")} // 🔗 Connect to react-hook-form
            />
          </div>

          {/* 🔤 Last Name Field */}
          <div className="flex flex-col gap-1">
            <label htmlFor="lastName">Last Name</label>
            <Input
              id="lastName"
              placeholder="Last Name"
              className="border border-[#3d348b] rounded-sm py-2 px-1"
              {...register("lastName")}
            />
          </div>

          {/* 🚀 Submit Button */}
          <button
            type="submit"
            className="bg-[#3d348b] text-white py-2 px-4 rounded-md mt-4"
          >
            Create User
          </button>
        </div>
      </form>
    </div>
  );
};

export default RefHook;
