import React from "react";
import MedicalRecommendCard from "./components/MedicalRecommendCard";
import { covidRecommendations } from "./Recommends";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        {covidRecommendations.map(({ id, recommendation, image }) => (
          <MedicalRecommendCard
            key={id}
            recommendation={recommendation}
            image={image}
          />
        ))}
        <span style={{ fontSize: "10px", color: "#FFF" }}>Icons made by Freepik perfect from www.flaticon.com</span>
      </div>
    </div>
  );
}

export default App;
