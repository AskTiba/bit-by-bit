import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";

type PlanData = {
  name: string;
  price: string;
  promoText?: string;
  icon: any;
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
