import React from "react";
import "./LoadingComponent.css";
const LoadingComponent = () => {
  return (
    <div className="loading">
      <div className="insideLoading">
        <h1>Please Wait</h1>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default LoadingComponent;
