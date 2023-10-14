import React from "react";

const Shimmer = () => {
  return (
    <>
      <div className="shimmer-filter-btn"></div>
      <div className="shimmer-container">
        {[...Array(15)].map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-card-logo"></div>
            <div className="shimmer-card-details__heading"></div>
            <div className="shimmer-card-details__name"></div>
            <div className="shimmer-card-details__rating"></div>
            <div className="shimmer-card-details__fees"></div>
            <div className="shimmer-card-details__time"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Shimmer;
