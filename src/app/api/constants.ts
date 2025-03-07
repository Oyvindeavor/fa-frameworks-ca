export const API_BASE_URL = "https://v2.api.noroff.dev/online-shop";

// API Endpoints
export const NOROFF_API = {
  ALL_PRODUCTS: `${API_BASE_URL}`,
  SINGLE_PRODUCT: (id: string) => `${API_BASE_URL}/${id}`,
};
