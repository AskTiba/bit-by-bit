import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";
import { StaticImageData } from "next/image";

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
    icon: arcadeIcon,
  },
  {
    name: "Advanced",
    price: "$120/yr",
    icon: advancedIcon,
  },
  {
    name: "Pro",
    price: "$150/yr",
    icon: proIcon,
  },
];

// Define the structure for each add-on
type Addon = {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
};

// Array of add-ons
export const addons: Addon[] = [
  {
    name: "Online service",
    description: "Access to multiplayer games",
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    name: "Customizable Profile",
    description: "Custom theme on your profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
];
