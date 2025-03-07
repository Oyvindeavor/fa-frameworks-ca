import Link from "next/link";
import styles from "./ContinueShopping.module.scss";

export function ContinueShopping() {
  return (
    <nav
      className={styles.continueShopping}
      role="navigation"
      aria-label="Continue shopping section"
    >
      <p>
        <Link
          href="/"
          className={styles.button}
          aria-label="Return to homepage to continue shopping"
        >
          Continue Shopping
        </Link>
      </p>
    </nav>
  );
}
