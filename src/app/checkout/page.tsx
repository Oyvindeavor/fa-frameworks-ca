"use client";
import { useStore } from "@/store/useStore";
import { CartItem } from "@/store/useStore";
import { CartItemsList } from "@/components/Checkout/CartItemsList";
import { CartSummary } from "@components/Checkout/CartSummary";
import { EmptyCart } from "@components/Checkout/EmptyCart";
import styles from "./page.module.scss";

export default function CheckoutPage() {
  const cart: CartItem[] = useStore((state) => state.cart);
  const total = useStore((state) => state.total);
  const removeItem = useStore((state) => state.removeItem);

  return (
    <div className={styles.cartPageContainer}>
      <h1 className={styles.pageTitle}>Your Cart</h1>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className={styles.cartContent}>
          <CartItemsList cart={cart} removeItem={removeItem} />
          <CartSummary total={total} />
        </div>
      )}
    </div>
  );
}
