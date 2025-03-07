import { CartItem } from "@/store/useStore";
import { CartItemComponent } from "@/components/Checkout/CartItemComponent";
import styles from "./CartItemsList.module.scss";

interface CartItemsListProps {
  cart: CartItem[];
  removeItem: (id: string, quantity: number) => void;
}

export function CartItemsList({ cart, removeItem }: CartItemsListProps) {
  return (
    <table className={styles.cartTable}>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item: CartItem) => (
          <CartItemComponent key={item.id} item={item} removeItem={removeItem} />
        ))}
      </tbody>
    </table>
  );
}
