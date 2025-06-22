import React from "react";

interface FeatureItemProps {
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => {
  return (
    <li>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default FeatureItem;
