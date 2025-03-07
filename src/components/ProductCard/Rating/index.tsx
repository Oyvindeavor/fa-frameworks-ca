/**
 * Component to display the rating of a product.
 *
 * @param {Product} props - The product object containing rating and reviews.
 * @param {number} props.rating - The rating of the product.
 * @param {Array} props.reviews - The list of reviews for the product.
 *
 * @returns {JSX.Element} The rendered rating component.
 */
import styles from "./rating.module.scss";
import type { Product } from "@/types/api/apiresponse";
import Image from "next/image";

export interface RatingProps {
  rating: number;
  reviews: Product["reviews"];
}

export default function Rating({ rating, reviews }: RatingProps) {
  return (
    <div className={styles.rating}>
      {Array.from({ length: Math.floor(rating) }, (_, i) => (
        <span key={i} className={styles.stars}>
          <Image src="/star-s-fill.svg" alt="full star" width={16} height={16} />
        </span>
      ))}

      {rating % 1 >= 0.5 && (
        <span key="half" className={styles.stars}>
          <Image src="/star-half-s-fill.svg" alt="half star" width={16} height={16} />
        </span>
      )}

      {reviews.length !== 1 ? (
        <span className={styles.count}>({reviews.length}) reviews</span>
      ) : (
        <span className={styles.count}>({reviews.length}) review</span>
      )}
    </div>
  );
}
