import Image from "next/image";
import styles from "./cart.module.scss";
import { Counter } from "@/components/Cart/Counter";
import { useStore } from "@/store/useStore";
import { CartItem } from "@/store/useStore";

import Link from "next/link";

export const Cart = () => {
  const cart: CartItem[] = useStore((state) => state.cart); // Access the cart state

  return (
    <div className={styles.cartContainer}>
      <button type="button" className={styles.cartButton} title="cart">
        <Link href="/checkout">
          <Image
            src="/shopping-cart-line.svg"
            alt="Cart"
            width={24}
            height={24}
            className={styles.cartIcon}
          />
        </Link>
        {cart.length > 0 && (
          <Counter count={cart.reduce((total, item) => total + item.quantity, 0)} />
        )}{" "}
      </button>
    </div>
  );
};
