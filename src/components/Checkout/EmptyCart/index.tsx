import styles from "./emptyCart.module.scss";
import Link from "next/link";

export function EmptyCart() {
  return (
    <div className={styles.emptyCart}>
      <h2>Your cart is empty</h2>
      <Link className={styles.shopButton} href={"/"}>
        Continue Shopping
      </Link>
    </div>
  );
}
