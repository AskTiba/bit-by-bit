import React from "react";
import FeatureItem from "./FeatureItem";
import { features } from "../lib/FeatureData";

const Features = () => {
  return (
    <section>
      <header>
        <h2>🔑 Feature List</h2>
      </header>
      <ul>
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
