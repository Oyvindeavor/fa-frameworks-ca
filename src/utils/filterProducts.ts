import { getProducts } from "@/utils/getProducts";
import type { Product } from "@/types/api/apiresponse";

export async function filterProducts(query: string): Promise<Product[]> {
  const response = await getProducts();
  const products: Product[] = response.data;
  return products.filter((product) => product.title.toLowerCase().includes(query.toLowerCase()));
}
