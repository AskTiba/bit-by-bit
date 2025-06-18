// components/StepContent.tsx
import React from "react";
import { UseFormRegister, FieldErrors, UseFormSetValue } from "react-hook-form";

// Step Components
import PersonalInfo from "./personalInfo";
import Plan from "./plan";
import Addons from "./add-ons";
import Finishing from "./finishing";
import Appreciation from "./appreciation";
import { MyFormData } from "~/lib/types/formData";

interface StepContentProps {
  activeStep: number;
  setValue: UseFormSetValue<MyFormData>; // <- Add this line
  register: UseFormRegister<MyFormData>;
  errors: FieldErrors<MyFormData>;
}

const StepContent: React.FC<StepContentProps> = ({
  activeStep,
  setValue, // <- Add this
  register,
  errors,
}) => {
  switch (activeStep) {
    case 0:
      return (
        <PersonalInfo
          register={register}
          errors={errors}
          setValue={setValue} // <- Pass this down
        />
      );
    case 1:
      return <Plan />;
    case 2:
      return <Addons />;
    case 3:
      return <Finishing />;
    case 4:
      return <Appreciation />;
    default:
      return null;
  }
};

export default StepContent;
