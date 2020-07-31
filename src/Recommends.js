import Cold from "./assets/cold.png";
import WashHands from "./assets/washing-hand.png";
import Flight from "./assets/flight.png";
import FirstAid from "./assets/first-aid-kit.png";
import Fever from "./assets/fever.png";
import MedicalMask from "./assets/medical-mask.png";
import Cooking from "./assets/cooking.png";

export const covidRecommendations = [
  {
    id: 1,
    recommendation: "Wash hands with soap and water every hour",
    image: WashHands,
  },
  {
    id: 2,
    recommendation:
      "When coughing and sneezing cover mouth and nose with flexed elbow or tissue",
    image: Cold,
  },
  {
    id: 3,
    recommendation: "Avoid travel if you have a fever and cough",
    image: Flight,
  },
  {
    id: 4,
    recommendation:
      "If you have a fever, cough and difficulty breathing seek medical care early",
    image: FirstAid,
  },
  {
    id: 5,
    recommendation:
      "If your are coughing or sneezing, wear a mask and must know how to use it and dispose of it properly",
    image: MedicalMask,
  },
  {
    id: 6,
    recommendation: "Eat only well-cooked food",
    image: Cooking,
  },
  {
    id: 7,
    recommendation: "Avoid close contact with animals that are sick",
    image: Fever,
  },
];
