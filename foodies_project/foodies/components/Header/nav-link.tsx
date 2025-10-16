"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./nav-link.module.css";
interface NavLinkProps {
  href: string;
  text: string;
}

const NavLink = ({ href, text }: NavLinkProps) => {
  const currentPath = usePathname();
  return (
    <li>
      <Link
        href={href}
        className={
          currentPath.startsWith(href)
            ? `${styles.active} ${styles.link}`
            : `${styles.link}`
        }
      >
        {text}
      </Link>
    </li>
  );
};

export default NavLink;
