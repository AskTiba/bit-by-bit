import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { MyFormData } from "../types/formData";

type FormStep = "personal" | "plan" | "addons" | "finishing";

type FormStore = {
  formData: MyFormData;
  updateFormData: (data: Partial<MyFormData>) => void;
  resetFormData: () => void;
  step: FormStep;
  setStep: (step: FormStep) => void;
};

export const useFormStore = create<FormStore>()(
  devtools(
    persist(
      (set) => ({
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

        step: "personal",

        updateFormData: (data) =>
          set(
            (state) => ({
              formData: {
                ...state.formData,
                ...data,
              },
            }),
            false,
            "form/updateFormData"
          ),

        resetFormData: () =>
          set(
            () => ({
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
              step: "personal",
            }),
            false,
            "form/resetFormData"
          ),

        setStep: (step) => set(() => ({ step }), false, "form/setStep"),
      }),
      {
        name: "FormStore", // 👈 shows up in localStorage and Redux Devtools
      }
    )
  )
);
