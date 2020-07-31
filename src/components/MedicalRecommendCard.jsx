import React from "react";
import "./style.css";

const MedicalRecommendCard = ({ recommendation, image }) => {
  return (
    <div className="box">
      <div className="content">
        <img src={image} alt="" />
        <p>{recommendation}</p>
      </div>
    </div>
  );
};

export default MedicalRecommendCard;
