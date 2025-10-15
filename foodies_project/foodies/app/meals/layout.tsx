
import { ReactNode } from "react";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

const MealsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <h3>Meals Layout</h3>
      {children}
    </>
  );
};

export default MealsLayout;
