import { create } from "zustand";
import { MyFormData } from "../types/formData";

// Define the possible steps in your form flow as a TypeScript union
type FormStep = "personal" | "plan" | "addons" | "finishing";

type FormStore = {
  formData: MyFormData;

  // Update form data partially (e.g. just one or two fields)
  updateFormData: (data: Partial<MyFormData>) => void;

  // Reset form data back to initial empty/default values
  resetFormData: () => void;

  // Store current step (track which form screen is active)
  step: FormStep;

  // Function to update the current step
  setStep: (step: FormStep) => void;
};

export const useFormStore = create<FormStore>((set) => ({
  formData: {
    name: "",
    email: "",
    phone: "",
    plan: "",
    planPrice: 0,
    addons: [],
    addonPrices: [],
    isYearly: false,
  },

  // Start at the first step of the form
  step: "personal",

  updateFormData: (data) =>
    set((state) => ({
      formData: {
        ...state.formData,
        ...data,
      },
    })),

  resetFormData: () =>
    set(() => ({
      formData: {
        name: "",
        email: "",
        phone: "",
        plan: "",
        planPrice: 0,
        addons: [],
        addonPrices: [],
        isYearly: false,
      },
      step: "personal", // Reset step to first step on form reset
    })),

  setStep: (step) => set({ step }),
}));
