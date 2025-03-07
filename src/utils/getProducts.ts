import type { ErrorResponse } from "@/types/api/error";
import type { ApiResponse } from "@/types/api/apiresponse";
import { NOROFF_API } from "@api/constants";

export async function getProducts(): Promise<ApiResponse> {
  try {
    const response = await fetch(NOROFF_API.ALL_PRODUCTS);

    if (!response.ok) {
      const errorData: ErrorResponse = await response.json();
      throw new Error(errorData.errors[0].message);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Internal Server Error");
  }
}
