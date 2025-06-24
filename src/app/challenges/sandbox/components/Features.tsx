import React from "react";
import FeatureItem from "./FeatureItem";
import { features } from "../lib/FeatureData";

const Features = () => {
  return (
    <section className="text-secondary">
      <header>
        <h2 className="font-bold text-muted  uppercase md:text-lg">
          Feature List
        </h2>
      </header>
      <ul className="flex flex-col gap-2 my-1 list-disc marker:text-muted ml-4">
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Features;
