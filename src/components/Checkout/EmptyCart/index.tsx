import styles from "./emptyCart.module.scss";

export function EmptyCart() {
  return (
    <div className={styles.emptyCart}>
      <h2>Your cart is empty</h2>
      <button className={styles.shopButton}>Continue Shopping</button>
    </div>
  );
}
