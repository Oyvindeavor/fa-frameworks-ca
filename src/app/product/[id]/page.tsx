// app/product/[id]/page.tsx
import { getProduct } from "@/utils/getProduct";
import type { Product } from "@/types/api/apiresponse";
import styles from "./page.module.scss";
import ProductView from "@/components/Product";
import { Metadata } from "next";

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await getProduct(params.id).catch(() => null);

  return {
    title: product ? `${product.title} - Litt & Kvert` : "Product Not Found",
    description: product ? `Buy ${product.title} at Litt & Kvert.` : "Product page for the store",
  };
}

interface ProductPageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = params;

  let product: Product | null = null;

  try {
    product = await getProduct(id);
  } catch (error) {
    console.error("Error fetching product:", error);
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className={styles.container}>
      <ProductView product={product} />
    </div>
  );
}
