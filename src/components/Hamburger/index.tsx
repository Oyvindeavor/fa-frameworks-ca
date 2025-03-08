import { useEffect, useRef } from "react";
import styles from "./Hamburger.module.scss";
import Image from "next/image";

interface HamburgerProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const Hamburger = ({ isOpen, toggleMenu }: HamburgerProps) => {
  const menuRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        toggleMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleMenu]);

  return (
    <button
      ref={menuRef}
      className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
      onClick={toggleMenu}
      aria-label="Toggle menu"
    >
      <div className={styles.iconWrapper}>
        <Image
          src={isOpen ? "/close-line.svg" : "/Bars3.svg"}
          alt={isOpen ? "Close menu" : "Open menu"}
          className={styles.icon}
          width={24}
          height={24}
        />
      </div>
    </button>
  );
};
