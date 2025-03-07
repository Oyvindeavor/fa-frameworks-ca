import styles from "./Product.module.scss";
import type { Product } from "@/types/api/apiresponse";
import { ProductImage } from "./ProductImage";
import Rating from "../ProductCard/Rating";
import Reviews from "@components/Reviews";
import { ProductPrice } from "../ProductCard/ProductPrice";
import AddToCart from "@components/Cart/AddToCart";
import { Divider } from "@components/Divider";

export interface ProductViewProps {
  product: Product;
}

export default function ProductView({ product }: ProductViewProps) {
  return (
    <div className={styles.product}>
      <div className={styles.productHeader}>
        <ProductImage src={product.image.url} alt={product.image.alt} />
      </div>
      <div className={styles.productInfo}>
        <h1 className={styles.productTitle}>{product.title}</h1>
        <p className={styles.productDescription}>{product.description}</p>

        <ProductPrice product={product} />
        <AddToCart product={product} />

        <Rating rating={product.rating} reviews={product.reviews} />
        <Divider />
        <Reviews product={product} />
      </div>
    </div>
  );
}
