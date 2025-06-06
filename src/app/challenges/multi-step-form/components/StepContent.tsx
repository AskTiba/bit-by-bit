// components/StepContent.tsx
import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

// Step Components
import PersonalInfo from "./personalInfo";
import Plan from "./plan";
import Addons from "./add-ons";
import Finishing from "./finishing";
import Appreciation from "./apreciation";

// Import shared FormData interface
import { FormData } from "../lib/types/formData";

interface StepContentProps {
  activeStep: number;
  isYearly: boolean;
  setIsYearly: React.Dispatch<React.SetStateAction<boolean>>;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const StepContent: React.FC<StepContentProps> = ({
  activeStep,
  isYearly,
  setIsYearly,
  register,
  errors,
}) => {
  switch (activeStep) {
    case 0:
      return <PersonalInfo register={register} errors={errors} />;
    case 1:
      return <Plan isYearly={isYearly} setIsYearly={setIsYearly} />;
    case 2:
      return <Addons isYearly={isYearly} />;
    case 3:
      return <Finishing />;
    case 4:
      return <Appreciation />;
    default:
      return null;
  }
};

export default StepContent;
