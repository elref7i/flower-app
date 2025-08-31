declare type DatabaseFields = {
  _id: string;
  createdAt: string;
  updatedAt: string;
};

declare type Metadata = {
  currentPage: number;
  limit: number;
  totalPages: number;
  totalItems: number;
};

declare type BestSellersResponse = {
  message?: string;
  metadata: Metadata;
  products: Product[];
};

declare type SuccessfullResponse<T> = {
  message: string;
} & T;

declare type ErrorResponse = {
  error: string;
};

declare type APIResponse<T> = SuccessfullResponse<T> | ErrorResponse;

declare type PaginatedResponse<T> = {
  metadata: Metadata;
} & T;

declare type APIResponse<T> = SuccessfullResponse<T> | ErrorResponse;
