import React from "react";
import "./LoaderCard.css";

const LoaderCard = () => {
  return (
    <div className="card loader-card">
      <div className="card-head skeleton-loader"></div>
      <div className="card-body">
        <div className="about-product">
          <div className="skeleton-loader"></div>
          <div className="skeleton-loader"></div>
        </div>
        <div className="card-button">
          <div className="skeleton-loader"></div>
        </div>
      </div>
    </div>
  );
};

export default LoaderCard;
