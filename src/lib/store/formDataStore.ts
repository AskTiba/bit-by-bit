// lib/store/formDataStore.ts
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { FormData } from "~/lib/types/formData";

interface FormDataStore {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  resetFormData: () => void;
}

export const useFormDataStore = create<FormDataStore>()(
  devtools((set) => ({
    formData: {
      name: "",
      email: "",
      phone: "",
      plan: "arcade",
      isYearly: false,
      addons: [],
    },
    updateFormData: (data) =>
      set((state) => ({
        formData: {
          ...state.formData,
          ...data,
        },
      })),
    resetFormData: () =>
      set({
        formData: {
          name: "",
          email: "",
          phone: "",
          plan: "arcade",
          isYearly: false,  
          addons: [],
        },
      }),
  }))
);
