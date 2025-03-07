import styles from "./productprice.module.scss";
import type { Product } from "@/types/api/apiresponse";

interface ProductPriceProps {
  product: Product;
  size?: "small" | "medium" | "large";
}

/**
 * Component to display the price of a product, including any discounts.
 *
 * @param {ProductPriceProps} props - The properties for the ProductPrice component.
 * @param {Object} props.product - The product object containing price information.
 * @param {number} props.product.price - The original price of the product.
 * @param {number} props.product.discountedPrice - The discounted price of the product.
 * @param {string} [props.size="medium"] - The size of the price display (e.g., "small", "medium", "large").
 *
 * @returns {JSX.Element} The JSX element representing the product price, including discount information if applicable.
 * @example
 * <ProductPrice product={{ price: 100, discountedPrice: 80 }} size="small" />
 */
export const ProductPrice = ({ product, size = "medium" }: ProductPriceProps) => {
  const hasDiscount = product.price !== product.discountedPrice;
  const discountPercentage = hasDiscount
    ? Math.round(((product.price - product.discountedPrice) / product.price) * 100)
    : 0;

  return (
    <div className={`${styles.priceContainer} ${styles[size]}`}>
      {hasDiscount ? (
        <>
          <div className={styles.priceWrapper}>
            <span className={styles.originalPrice}>${product.price.toFixed(2)}</span>
            <span className={styles.currentPrice}>${product.discountedPrice.toFixed(2)}</span>
          </div>
          <span className={styles.discountBadge}>-{discountPercentage}%</span>
        </>
      ) : (
        <div className={styles.priceWrapper}>
          <span className={styles.currentPriceSingle}>${product.price.toFixed(2)}</span>
        </div>
      )}
    </div>
  );
};
