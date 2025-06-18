import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";
import { StaticImageData } from "next/image";

// 🧃 Plan Data
type PlanData = {
  name: string;
  price: string;
  promoText?: string;
  icon: StaticImageData;
};

export const monthlyPlans: PlanData[] = [
  {
    name: "Arcade",
    price: "$9/mo",
    icon: arcadeIcon,
  },
  {
    name: "Advanced",
    price: "$12/mo",
    icon: advancedIcon,
  },
  {
    name: "Pro",
    price: "$15/mo",
    icon: proIcon,
  },
];

export const yearlyPlans: PlanData[] = [
  {
    name: "Arcade",
    price: "$90/yr",
    promoText: "2 months free",
    icon: arcadeIcon,
  },
  {
    name: "Advanced",
    price: "$120/yr",
    promoText: "2 months free",
    icon: advancedIcon,
  },
  {
    name: "Pro",
    price: "$150/yr",
    promoText: "2 months free",
    icon: proIcon,
  },
];

// 🧩 Add-on Type w/ ID
export type Addon = {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
};

// 🧠 Add-on Data (now with IDs)
export const addons: Addon[] = [
  {
    id: "online-service",
    name: "Online service",
    description: "Access to multiplayer games",
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    id: "larger-storage",
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    id: "custom-profile",
    name: "Customizable Profile",
    description: "Custom theme on your profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
];
