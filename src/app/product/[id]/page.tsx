// app/product/[id]/page.tsx
import { getProduct } from "@/utils/getProduct";
import type { Product } from "@/types/api/apiresponse";
import styles from "./page.module.scss";
import ProductView from "@/components/Product";
import { Metadata } from "next";

export async function generateMetadata(props: ProductPageProps): Promise<Metadata> {
  const params = await props.params;
  const product = await getProduct(params.id).catch(() => null);

  return {
    title: product ? `${product.title} - Litt & Kvert` : "Product Not Found",
    description: product ? `Buy ${product.title} at Litt & Kvert.` : "Product page for the store",
  };
}

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage(props: ProductPageProps) {
  const params = await props.params;
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
