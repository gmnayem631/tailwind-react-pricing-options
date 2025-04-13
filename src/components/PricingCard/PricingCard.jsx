import React from "react";
import PricingFeatures from "./PricingFeatures";

const PricingCard = ({ pricing }) => {
  const { name, price, description, features } = pricing;
  return (
    <div className="rounded-2xl bg-amber-600 p-4 mt-10 flex flex-col">
      {/* Card Header */}
      <div>
        <h1 className="text-7xl">{name}</h1>
        <h4 className="text-3xl">{price}</h4>
      </div>

      {/* Card Body */}
      <div className="bg-amber-400 p-4 rounded-2xl mt-10 flex-1">
        <p>{description}</p>
        {features.map((feature, index) => (
          <PricingFeatures feature={feature} key={index}></PricingFeatures>
        ))}
      </div>
      <button className="btn w-full mt-5 rounded-2xl">Subscribe</button>
    </div>
  );
};

export default PricingCard;
