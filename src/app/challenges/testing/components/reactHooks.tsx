"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../../../components/ui/button";

type Props = {};

const ReactHooks = (props: Props) => {
  const [count, setCount] = useState<number>(0);
  const countRef = useRef(0);
  const inputRef = useRef(null);

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
    </>
  );
};

export default ReactHooks;
