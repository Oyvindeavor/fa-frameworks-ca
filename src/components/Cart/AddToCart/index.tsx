/**
 * @fileoverview This component renders a button that allows users to add a product to their cart.
 * It uses the `useStore` hook to access the `addToCart` function from the store.
 * The button also changes its icon on hover to provide visual feedback to the user.
 *
 * @component
 * @example
 * // Example usage:
 * // <ProductButton product={product} />
 *
 * @param {ProductButtonProps} props - The props for the ProductButton component.
 * @param {Product} props.product - The product to be added to the cart.
 *
 * @returns {JSX.Element} The rendered button component.
 *
 *
 */
"use client";

import { useState } from "react";
import { useStore } from "@/store/useStore";
import type { Product } from "@/types/api/apiresponse";
import Image from "next/image";
import styles from "./AddToCart.module.scss";

interface ProductButtonProps {
  product: Product;
}

export default function ProductButton({ product }: ProductButtonProps) {
  const { addToCart } = useStore();
  const [hover, setHover] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <button
      onClick={handleAddToCart}
      className={styles.addToCart}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      Add to Cart
      <Image
        src={hover ? "/shopping-cart-2-fill.svg" : "/shopping-cart-2-line.svg"}
        alt="Cart Icon"
        width={24}
        height={24}
      />
    </button>
  );
}
