import type { Product } from "@/types/api/apiresponse";
import { ProductCardImg } from "./ProductImage";
import { ProductPrice } from "./ProductPrice";
import Rating from "./Rating";
import AddToCart from "@/components/Cart/AddToCart";
import Link from "next/link";
import styles from "./productcard.module.scss";
import { Divider } from "@components/Divider";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className={styles.productCard} role="region" aria-labelledby={`product-${product.id}`}>
      <Link href={`/product/${product.id}`} passHref>
        <div className={styles.imageContainer} aria-label={`View product: ${product.title}`}>
          <ProductCardImg product={product} />
        </div>

        <div className={styles.productInfo}>
          <h2 className={styles.title} id={`product-${product.id}`}>
            {product.title}
          </h2>
          <Rating rating={product.rating} reviews={product.reviews} />
          <p className={styles.description}>{product.description}</p>
        </div>

        <ProductPrice product={product} />
        <Divider />
      </Link>

      <AddToCart product={product} />
    </div>
  );
};
