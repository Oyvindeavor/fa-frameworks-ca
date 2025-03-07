import type { Product } from "@/types/api/apiresponse";

export interface CartItem {
  product: Product;
  quantity: number;
}
