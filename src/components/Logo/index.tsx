import Link from "next/link";
import styles from "./Logo.module.scss";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <span className={styles.text}>Litt & Kvert </span>
      </Link>
    </div>
  );
};
