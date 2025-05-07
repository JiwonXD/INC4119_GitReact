import React from "react";

const FeatureCard = ({ title, description }) => {
  return (
    <div 
    className="feature"
    style={{
      backgroundColor: "#797979",
      color: "white",
    }}
    >      
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard; 