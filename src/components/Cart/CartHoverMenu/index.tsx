import styles from "./carthover.module.scss";
import { useStore } from "@/store/useStore";
import type { Product } from "@/types/api/apiresponse";
import { Divider } from "@/components/Divider";

export const CartHoverMenu = () => {
  const { cart } = useStore();
  const total = useStore((state) => state.total);

  const removeItem = useStore((state) => state.removeItem);

  return (
    <div className={styles.cartHoverMenu}>
      <h2>Cart</h2>
      {cart.length === 0 && <p>Your cart is empty</p>}
      <div>
        {cart.map((product: Product) => (
          <div key={product.id}>
            <img src={product.image.url} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Quantity: {product.quantity}</p>
            <button onClick={() => removeItem(product.id, 1)}>Remove</button>
            <Divider />
          </div>
        ))}

        {cart.length > 0 && (
          <>
            <h3>Total: {total}$</h3>
            <button onClick={() => alert("Checkout")}>Checkout</button>
          </>
        )}
      </div>
    </div>
  );
};
