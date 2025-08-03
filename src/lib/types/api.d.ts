declare type DatabaseFields = {
  _id: string;
  createdAt: string;
  updatedAt: string;
};

declare type SuccessfullResponse<T> = {
  message: string;
} & T;

declare type ErrorResponse = {
  error: string;
  status: string;
  message: string;
};
declare type Category = {
  _id: string;
  name: string;
  image: string;
  productsCount: number;
};

declare type APIResponse<T> = SuccessfulResponse<T> | ErrorResponse;

declare type PaginatedResponse<T> = {
  metadata: Metadata;
} & T;
