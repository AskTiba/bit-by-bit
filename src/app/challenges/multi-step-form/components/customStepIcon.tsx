import React from "react";
import { StepIconProps } from "@mui/material/StepIcon";

type Props = {};

export const customStepIcon = (props: StepIconProps) => {
  const { active, completed, className, icon } = props;
  return (
    <div
      className={`
        flex items-center justify-center 
        w-7 h-7 rounded-full border-2
        ${
          active
            ? "bg-white text-purple-600 border-white"
            : "bg-transparent text-white border-gray-300"
        }
        ${className}
      `}
    >
      <span className="text-sm font-semibold">{icon}</span>
    </div>
  );
};

export default customStepIcon;
