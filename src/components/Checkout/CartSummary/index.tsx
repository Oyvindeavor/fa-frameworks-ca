import Link from "next/link";
import styles from "./CartSummary.module.scss";

interface CartSummaryProps {
  total: number;
}

export function CartSummary({ total }: CartSummaryProps) {
  return (
    <div className={styles.cartSummary}>
      <h2>Order Summary</h2>
      <div className={styles.summaryRow}>
        <span>Subtotal</span>
        <span>${total}</span>
      </div>
      <div className={styles.totalRow}>
        <span>Total</span>
        <span>{total}</span>
      </div>
      <Link href="/checkout/success">
        <button className={styles.checkoutBtn}>Checkout</button>
      </Link>
      <div className={styles.continueShopping}>
        <Link href="/">← Continue Shopping</Link>
      </div>
    </div>
  );
}
