import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "../../components/Meals/meals-grid";
import getMeals from "../../lib/meals";
import { MealItemType } from "../../components/Meals/meal-types";

const MealsPage = async () => {
  const meals = (await getMeals()) as MealItemType[];

  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicous meals, created by{" "}
          <span className={styles.highlight}>By you</span>
        </h1>
        <p>Choose you favourite Recipe and cook it yourself</p>
        <p className={styles.cta}>
          <Link href="meals/share">Share your favourite recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
};

export default MealsPage;
