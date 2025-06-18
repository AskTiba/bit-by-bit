// lib/types.ts

export type Addon = {
  id: string; // Important: keep this as a string, not number | string
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
};

export type SelectedAddon = Addon & {
  price: number; // dynamically added based on isYearly
};

export interface MyFormData {
  name: string;
  email: string;
  phone: string;
  plan: string;
  isYearly: boolean;
  planPrice: number;
  addons: string[];
  addonPrices: SelectedAddon[];
}
