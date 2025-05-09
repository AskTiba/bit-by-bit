"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

type Props = {};

const ReactHooks = (props: Props) => {
  const [count, setCount] = useState<number>();
  useEffect(() => {
    console.log(`The count is : ${count}`);

    return () => {
      console.log("I am Groot");
    };
  }, [count]);

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
          <Button
            size={"lg"}
            onClick={() => setCount((prev) => (prev || 0) + 1)}
          >
            Increment
          </Button>
          <Button
            size={"lg"}
            onClick={() => setCount((prev) => (prev || 0) - 1)}
          >
            Decrement
          </Button>
          <Button
            size={"lg"}
            variant={"destructive"}
            onClick={() => setCount(undefined)}
          >
            Reset
          </Button>
          <Button size={"lg"} onClick={() => setCount(0)}>
            Set to 0
          </Button>
          <Button size={"lg"} onClick={() => setCount(13)}>
            Set to 13
          </Button>
        </div>
      </div>
    </>
  );
};

export default ReactHooks;
