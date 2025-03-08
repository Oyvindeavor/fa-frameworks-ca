import type { Product } from "@/types/api/apiresponse";
import Image from "next/image";
import styles from "./productimage.module.scss";

interface ProductCardImageProps {
  product: Product;
}
/**
 * Component to display the product image within a card.
 *
 * @param {ProductCardImageProps} props - The properties for the product image component.
 * @param {Object} props.product - The product object containing image details.
 * @param {Object} props.product.image - The image object of the product.
 * @param {string} props.product.image.url - The URL of the product image.
 * @param {string} props.product.image.alt - The alt text for the product image.
 * @returns {JSX.Element} The JSX element for the product image.
 */

const GENERIC_BLUR_DATA_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAv8BZyyUdAAAAABJRU5ErkJggg==";

export const ProductCardImg = ({ product }: ProductCardImageProps) => {
  return (
    <div className={styles.imageWrapper}>
      <Image
        className={styles.productImg}
        src={product.image.url}
        alt={product.image.alt}
        fill
        placeholder="blur"
        blurDataURL={GENERIC_BLUR_DATA_URL}
      />
    </div>
  );
};
