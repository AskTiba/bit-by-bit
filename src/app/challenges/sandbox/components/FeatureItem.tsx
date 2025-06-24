import React from "react";

interface FeatureItemProps {
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => {
  return (
    <li className="md:text-base">
      <h3 className="text-secondary font-semibold">{title}</h3>
      <p className="font-semibold text-sm text-muted">
        {description}
      </p>
    </li>
  );
};

export default FeatureItem;
