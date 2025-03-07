import Link from "next/link";
import Image from "next/image";
import styles from "./dropdown.module.scss";
import type { Product } from "@/types/api/apiresponse";

interface DropdownProps {
  show: boolean;
  products: Product[];
}

/**
 * Dropdown component that displays a list of products when the `show` prop is true.
 *
 * @param {DropdownProps} props - The component props.
 * @returns {JSX.Element | null} The rendered dropdown component or null if `show` is false.
 */
export function Dropdown({ show, products }: DropdownProps) {
  if (!show) return null;

  return (
    <div className={styles.dropdown}>
      <ul className={styles.dropdownList}>
        {products.map((product) => (
          <li key={product.id} className={styles.dropdownItem}>
            <Link
              href={`/product/${product.id}`}
              className={styles.dropdownLink}
              aria-label={`View details of ${product.title}`}
            >
              <Image
                src={product.image.url || "/default-product-image.jpg"}
                alt={product.title}
                className={styles.dropdownImage}
                width={50}
                height={50}
              />
              <span>{product.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
