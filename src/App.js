import React from "react";
import MedicalRecommendCard from "./components/MedicalRecommendCard";
import { covidRecommendations } from "./Recommends";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        {covidRecommendations.map(({ id, recommendation, image, author }) => (
          <MedicalRecommendCard
            key={id}
            recommendation={recommendation}
            image={image}
            author={author}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
