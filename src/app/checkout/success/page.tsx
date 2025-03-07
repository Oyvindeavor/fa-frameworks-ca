"use client";
import { useEffect, useState } from "react";
import { SuccessMessage } from "@components/Success/SuccessMessage";
import { OrderDetails } from "@components/Success/OrderDetails";
import { ContinueShopping } from "@components/Success/ContinueShopping";
import { useStore } from "@/store/useStore";

import styles from "./page.module.scss";

export default function SuccessPage() {
  const total = useStore((state) => state.total);
  const cart = useStore((state) => state.cart);
  const clearCart = useStore((state) => state.clearCart);

  const [cartItems, setCartItems] = useState<{ title: string; quantity: number; price: number }[]>(
    [],
  );
  const [finalTotal, setFinalTotal] = useState("0");

  useEffect(() => {
    if (cart.length > 0) {
      setCartItems(
        cart.map((item) => ({
          title: item.title,
          quantity: item.quantity,
          price: item.price,
        })),
      );
      setFinalTotal(total.toString());
      clearCart();
    }
  }, [cart, total, clearCart]);

  return (
    <div className={styles.successPage}>
      <div className={styles.content}>
        <SuccessMessage />
        <OrderDetails items={cartItems} total={finalTotal} />
        <ContinueShopping />
      </div>
    </div>
  );
}
