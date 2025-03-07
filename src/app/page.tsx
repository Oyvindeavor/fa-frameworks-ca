import { getProducts } from "@/utils/getProducts";
import type { Product, ApiResponse } from "@/types/api/apiresponse";
import { ProductCard } from "@/components/ProductCard";
import { Metadata } from "next";
import styles from "./page.module.css";
import Search from "@/components/Search";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Litt & Kvert - Home",
    description: "Welcome to Litt & Kvert",
  };
}
export default async function Home() {
  const apiResponse: ApiResponse = await getProducts();
  const products = apiResponse.data;

  return (
    <section>
      <h1 aria-label="Homepage"> </h1>
      <Search />

      <div className={styles.container}>
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
