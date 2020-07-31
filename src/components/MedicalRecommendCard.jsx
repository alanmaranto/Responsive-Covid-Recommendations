import React from "react";
import "./style.css";

const MedicalRecommendCard = ({ recommendation, image, author }) => {
  return (
    <div className="box">
      <div className="content">
        <img src={image} alt="" />
        <p>{recommendation}</p>
        <span style={{ fontSize: "10px"}}>{author}</span>
      </div>
    </div>
  );
};

export default MedicalRecommendCard;
