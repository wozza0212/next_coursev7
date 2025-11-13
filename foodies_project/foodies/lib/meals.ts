import sql from "better-sqlite3";
import { MealItemType } from "../components/Meals/meal-types";

class DatabaseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "Database Loading Error";
    this.message = "Error Loading Database";
    Object.setPrototypeOf(this, DatabaseError.prototype);
  }
}

const db = sql("meals.db");

const getMeals = async () => {
  // Add timeout to mimic real world loading times, and to use async
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  } catch (Error) {
    throw new DatabaseError("database laoding error");
  }
  return db.prepare("SELECT * FROM meals").all();
};;

export default getMeals;
