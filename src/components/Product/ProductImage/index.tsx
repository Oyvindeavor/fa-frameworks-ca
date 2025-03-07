import styles from "./ProductImage.module.scss";
import Image from "next/image";

interface ProductImageProps {
  src: string;
  alt: string;
}

export function ProductImage({ src, alt }: ProductImageProps) {
  return (
    <div className={styles.productImage}>
      <Image src={src} alt={alt} width={400} height={400} />
    </div>
  );
}
