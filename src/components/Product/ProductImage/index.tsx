import styles from "./ProductImage.module.scss";
import Image from "next/image";

interface ProductImageProps {
  src: string;
  alt: string;
}

const GENERIC_BLUR_DATA_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAv8BZyyUdAAAAABJRU5ErkJggg==";

export function ProductImage({ src, alt }: ProductImageProps) {
  return (
    <div className={styles.productImage}>
      <Image
        src={src}
        alt={alt}
        width={400}
        height={400}
        placeholder="blur"
        blurDataURL={GENERIC_BLUR_DATA_URL}
        loading="eager"
      />
    </div>
  );
}
