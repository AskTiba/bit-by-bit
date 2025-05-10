"use client";

import React, { useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { useForm } from "react-hook-form";
import { Input } from "~/components/ui/input";

type Props = {};

type FormData = {
  firstName: string;
  lastName: string;
};

const RefHook = (props: Props) => {
  const {
    register,
    setValue,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => console.log(data));
  // firstName and lastName will have correct type

  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);

  return (
    <>
      <div className="border-2 border-[#3d348b] rounded-md p-4 m-4 shadow-md">
        <form className="" onSubmit={onSubmit}>
          <div className="sm:w-1/2 flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <label>First Name</label>
              <Input
                placeholder="First Name"
                className="border-1 border-[#3d348b] rounded-sm py-2 px-1"
                {...register("firstName")}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Last Name</label>
              <Input
                placeholder="Last Name"
                className="border-1 border-[#3d348b] rounded-sm py-2 px-1"
                {...register("lastName")}
              />
            </div>
            <button
              type="button"
              className="bg-[#3d348b] text-white w-full py-2 px-4 rounded-md mt-4"
              onClick={onSubmit}
            >
              Create User
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RefHook;
