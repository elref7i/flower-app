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

declare type SuccessfullResponse<T> = {
  message: "success";
} & T;

declare type ErrorResponse = {
  error: string;
};

declare type PaginatedResponse<T> = {
  metadata: Metadata;
} & T;

declare type APIResponse<T> = SuccessfullResponse<T> | ErrorResponse;
