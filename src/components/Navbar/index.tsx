"use client";

// components/Navbar/Navbar.tsx
import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@components/Logo";
import { Hamburger } from "@components/Hamburger";
import { Cart } from "@components/Cart";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
        <Logo />

        <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
          <Link href="/contact" className={styles.link}>
            Contact
          </Link>
        </div>
        <Cart />
      </div>
    </nav>
  );
};
