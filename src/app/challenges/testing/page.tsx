import React from "react";
import ReactHooks from "~/app/challenges/testing/components/reactHooks";
import RefHook from "~/app/challenges/testing/components/rehHook";

type Props = {};

const Testing = (props: Props) => {
  return (
    <div>
      <ReactHooks />
      <RefHook />
    </div>
  );
};

export default Testing;
