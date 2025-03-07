// Review structure
export interface Review {
  id: string;
  username: string;
  rating: number;
  description: string;
}

// Product structure
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: {
    url: string;
    alt: string;
  };
  rating: number;
  tags: string[];
  reviews: Review[];
  quantity?: number;
  total?: number;
}

// API response structure
export interface ApiResponse {
  data: [];
  meta: {
    isFirstPage: boolean;
    isLastPage: boolean;
    currentPage: number;
    previousPage: number | null;
    nextPage: number | null;
    pageCount: number;
    totalCount: number;
  };
}
