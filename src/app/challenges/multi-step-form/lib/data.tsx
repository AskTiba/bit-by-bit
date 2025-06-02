import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";

type PlanData = {
  name: string;
  price: string;
  promoText?: string;
  icon: string;
};

export const monthlyPlans: PlanData[] = [
  {
    name: "Arcade",
    price: "$9/mo",
    promoText: "2 months free",
    icon: arcadeIcon,
  },
  {
    name: "Advanced",
    price: "$12/mo",
    promoText: "2 months free",
    icon: advancedIcon,
  },
  {
    name: "Pro",
    price: "$15/mo",
    promoText: "2 months free",
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
