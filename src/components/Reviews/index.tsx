import styles from "./Reviews.module.scss";
import type { Product } from "@/types/api/apiresponse";
import Rating from "../ProductCard/Rating";

export interface ReviewsProps {
  product: Product;
}

export default function Reviews({ product }: ReviewsProps) {
  return (
    <section className={styles.reviews} aria-labelledby="reviews-heading">
      <h2 id="reviews-heading">Reviews for {product.title}</h2>

      {product.reviews.length === 0 ? (
        <p>No reviews yet. Be the first to write one!</p>
      ) : (
        <ul>
          {product.reviews.map((review, index) => (
            <li key={index}>
              <strong>{review.username}</strong>
              <Rating
                rating={review.rating}
                reviews={[]}
                aria-label={`Rated ${review.rating} out of 5`}
              />
              <p>{review.description}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
