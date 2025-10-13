"use client";
import { useParams } from "next/navigation";

const SelectedMeal = () => {
  const { mealChoice } = useParams();
  return (
    <div>
      <h2>{mealChoice}</h2>
      <p>Good Choice</p>
    </div>
  );
};

export default SelectedMeal;
