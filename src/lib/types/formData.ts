// types/formData.ts

export interface FormData {
  name: string;
  email: string;
  phone: string;
  plan: "arcade" | "advanced" | "pro";
  isYearly: boolean;
  addons: string[]; // or Addon[] if you're using objects
}

export interface Addon {
  id: string;
  name: string;
  price: number;
}
