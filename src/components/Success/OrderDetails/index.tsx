import styles from "./OrderDetails.module.scss";

interface OrderItem {
  title: string;
  quantity: number;
  price: number;
}

interface OrderDetailsProps {
  items: OrderItem[];
  total: string;
}

export function OrderDetails({ items, total }: OrderDetailsProps) {
  return (
    <section className={styles.orderDetails} aria-labelledby="order-summary-title">
      <h2 id="order-summary-title">Order Summary</h2>

      <table className={styles.itemsTable}>
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className={styles.item}>
              <td className={styles.itemTitle}>{item.title}</td>
              <td className={styles.itemQuantity}>x{item.quantity}</td>
              <td className={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.total} aria-live="polite">
        <span>Total</span>
        <span>${total}</span>
      </div>
    </section>
  );
}
