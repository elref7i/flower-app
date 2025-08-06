export type DatabaseFields = {
  _id: string;
  createdAt: string;
  updatedAt: string;
};

export type Metadata = {
  currentPage: number;
  limit: number;
  totalPages: number;
  totalItems: number;
};

export type Product = {
  rateAvg: number;
  rateCount: number;
  title: string;
  slug: string;
  description: string;
  imgCover: string;
  images: string[];
  price: number;
  priceAfterDiscount: number;
  quantity: number;
  category: string;
  occasion: string;
  isSuperAdmin?: boolean;
  sold: number;
} & DatabaseFields;

export type BestSellersResponse = {
  message?: string;
  metadata: Metadata;
  products: Product[];
};

export type SuccessfulResponse<T> = {
  message: string;
} & T;

export type ErrorResponse = {
  error: string;
};

export type APIResponse<T> = SuccessfulResponse<T> | ErrorResponse;

export type PaginatedResponse<T> = {
  metadata: Metadata;
} & T;
