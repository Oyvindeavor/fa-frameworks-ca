import { CartItem } from "@/store/useStore";
import { ProductPrice } from "@/components/ProductCard/ProductPrice";
import styles from "./CartItemComponent.module.scss";
import Image from "next/image";

interface CartItemProps {
  item: CartItem;
  removeItem: (id: string, quantity: number) => void;
}

export function CartItemComponent({ item, removeItem }: CartItemProps) {
  return (
    <tr className={styles.cartItemRow}>
      {/* Product Image & Title */}
      <td className={styles.productInfo}>
        {item.image && (
          <div className={styles.productImage}>
            <Image src={item.image.url} alt={item.image.alt} width={80} height={80} />
          </div>
        )}
        <div className={styles.productDetails}>
          <h2>{item.title}</h2>
        </div>
      </td>

      {/* Price */}
      <td className={styles.price}>
        <ProductPrice product={item} />
      </td>

      {/* Quantity Controls */}
      <td className={styles.quantityControl}>
        <button onClick={() => removeItem(item.id, 1)} className={styles.quantityBtn}>
          -
        </button>
        <span className={styles.quantityValue}>{item.quantity || 1}</span>
        <button onClick={() => removeItem(item.id, -1)} className={styles.quantityBtn}>
          +
        </button>
      </td>

      {/* Total Price */}
      <td className={styles.total}>${(item.price * (item.quantity || 1)).toFixed(2)}</td>
    </tr>
  );
}
