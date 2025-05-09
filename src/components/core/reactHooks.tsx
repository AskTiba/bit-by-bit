"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { Input } from "~/components/ui/input";

type Props = {};

type FormData = {
  firstName: string;
  lastName: string;
};

const ReactHooks = (props: Props) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => console.log(data));
  // firstName and lastName will have correct type

  const [count, setCount] = useState<number>(0);
  const countRef = useRef(0);

  const handleIncrement = () => {
    setCount((prev) => (prev || 0) + 1);
    countRef.current++;

    console.log(`State: ${count}`);
    console.log(`Ref: ${countRef.current}`);
  };

  const handleDecrement = () => {
    setCount((prev) => (prev || 0) - 1);
    countRef.current--;

    console.log(`State: ${count}`);
    console.log(`Ref: ${countRef.current}`);
  };

  const handleReset = () => {
    setCount(0);
    countRef.current = 0;

    console.log(`State: ${count}`);
    console.log(`Ref: ${countRef.current}`);
  };

  const handleSetToZero = () => {
    setCount(0);
    countRef.current = 0;

    console.log(`State: ${count}`);
    console.log(`Ref: ${countRef.current}`);
  };
  const handleSetToThirteen = () => {
    setCount(13);
    countRef.current = 13;

    console.log(`State: ${count}`);
    console.log(`Ref: ${countRef.current}`);
  };

  // useEffect(() => {
  //   console.log(`State: ${count}`);
  //   console.log(`Ref: ${countRef.current}`);

  //   return () => {
  //     console.log('Clean up just happened')
  //   };
  // }, [count, countRef]);

  return (
    <>
      <div className="border-2 border-[#3d348b] rounded-md p-4 m-4 shadow-md">
        <h1 className="text-3xl text-[#3d348b] font-bold text-center mt-4">
          UseState Hook
        </h1>
        <h1 className="text-2xl font-extrabold text-center mt-4">
          Count: {count}
        </h1>
        <div className="grid sm:grid-cols-5 gap-4 p-3">
          <Button size={"lg"} onClick={handleIncrement}>
            Increment
          </Button>
          <Button size={"lg"} onClick={handleDecrement}>
            Decrement
          </Button>
          <Button size={"lg"} variant={"destructive"} onClick={handleReset}>
            Reset
          </Button>
          <Button size={"lg"} onClick={handleSetToZero}>
            Set to 0
          </Button>
          <Button size={"lg"} onClick={handleSetToThirteen}>
            Set to 13
          </Button>
        </div>
      </div>

      <div className="border-2 border-[#3d348b] rounded-md p-4 m-4 shadow-md">
        <form className="" onSubmit={onSubmit}>
          <div className="sm:w-1/2 flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <label>First Name</label>
              <Input
                className="border-1 border-[#3d348b] rounded-sm py-2 px-1"
                {...register("firstName")}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Last Name</label>
              <Input
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

export default ReactHooks;
