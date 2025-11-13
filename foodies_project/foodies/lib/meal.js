import sql from "better-sqlite3";
const db = sql("meals.db");

const getMeal = (slug) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
};

export default getMeal;
