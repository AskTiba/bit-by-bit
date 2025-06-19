import React from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx"; // for cleaner conditional class merging

type PlanCardProps = {
  name: string;
  price: string;
  promoText?: string;
  icon: StaticImageData;
  isActive: boolean;
  onClick: () => void;
};

export const PlanCard = ({
  name,
  price,
  promoText,
  icon,
  isActive,
  onClick,
}: PlanCardProps) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "cursor-pointer p-4 flex lg:flex-col lg:w-36 gap-6 rounded-md",
        "hover:border-purple-700 hover:ring-1 hover:ring-purple-300",
        isActive
          ? "border-purple-900 border-2 ring-2 ring-purple-300"
          : "border border-gray-300"
      )}
    >
      <Image src={icon} alt={name} priority />
      <div>
        <h3 className="text-base font-medium">{name}</h3>
        <p className="text-sm text-gray-500">{price}</p>
        {promoText && <p className="text-sm text-purple-800">{promoText}</p>}
      </div>
    </div>
  );
};
