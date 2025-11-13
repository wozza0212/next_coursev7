"use client";
import styles from "./page.module.css";
import { useParams } from "next/navigation";
import Image from "next/image";
import getMeal from "../../../lib/meal";
import { MealItemType } from "../../../components/Meals/meal-types";
const SelectedMeal = () => {
  const { mealSlug } = useParams();
  const meal = getMeal(mealSlug)
  return (
    <div>
      <header className={styles.header}>
        <div>
          <Image src={meal.image} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{mealSlug}</h1>
          <p className={styles.creator}>
            {/* by <a href={`mailto:${"EMAIL"}`}>{meal.creator}</a> */}
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      {/* <main>
        <div>
          <h1>{meal.title}</h1>
        </div>
      </main> */}
    </div>
  );
};

export default SelectedMeal;
