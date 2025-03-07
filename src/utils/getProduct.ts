import type { Product } from "@/types/api/apiresponse";
import type { ErrorResponse } from "@/types/api/error";
import { NOROFF_API } from "@api/constants";

export async function getProduct(id: string): Promise<Product> {
  try {
    const response = await fetch(`${NOROFF_API.SINGLE_PRODUCT(id)}`);

    if (!response.ok) {
      const errorData: ErrorResponse = await response.json();
      throw new Error(errorData.errors[0].message);
    }

    const result = await response.json(); // The full response containing `data` and `meta`
    return result.data as Product; // Extract only the product data
  } catch (error) {
    console.error("Error fetching product:", error);
    throw new Error("Internal Server Error");
  }
}
