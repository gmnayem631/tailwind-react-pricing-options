import { CircleCheck } from "lucide-react";
import React from "react";

const PricingFeatures = ({ feature }) => {
  return (
    <p className="flex gap-2 mt-4">
      <CircleCheck></CircleCheck>
      {feature}
    </p>
  );
};

export default PricingFeatures;
