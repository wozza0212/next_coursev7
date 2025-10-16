import { NextPage } from "next";
import "./globals.css";
import { ReactNode } from "react";
import MainHeader from "../components/Header/main-header";
import MainHeaderBackground from "../components/Header/main-header-background";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <MainHeader></MainHeader>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
