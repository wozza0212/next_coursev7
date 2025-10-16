import Link from "next/link";
import Image from "next/image";
import styles from "./main-header.module.css";
import logoImg from "../../assets/logo.png";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href={"/"}>
          <Image priority src={logoImg} alt="A plate with food on it" />
          Next Level Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <NavLink href="/meals" text="Browse Meals" />
            <NavLink href="/community" text="Foodies Community" />
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
