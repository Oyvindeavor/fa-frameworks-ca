import Image from "next/image";
import styles from "./cart.module.scss";

export const Cart = () => {
  return (
    <button type="button" className={styles.cartButton} title="cart">
      <Image
        src="/shopping-cart-line.svg"
        alt="Cart"
        width={24}
        height={24}
        className={styles.cartIcon}
      />
    </button>
  );
};
