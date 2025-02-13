import styles from "./Hamburger.module.scss";
import Image from "next/image";

interface HamburgerProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const Hamburger = ({ isOpen, toggleMenu }: HamburgerProps) => {
  return (
    <button
      className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
      onClick={toggleMenu}
      aria-label="Toggle menu"
    >
      <Image
        src={isOpen ? "close-line.svg" : "Bars3.svg"}
        alt={isOpen ? "Close menu" : "Open menu"}
        className={isOpen ? styles.closeIcon : styles.hamburgerIcon}
        width={24}
        height={24}
      />
    </button>
  );
};
