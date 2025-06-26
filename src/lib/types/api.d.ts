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
};

declare type APIResponse<T> = SuccessfulResponse<T> | ErrorResponse;

declare type PaginatedResponse<T> = {
  metadata: Metadata;
} & T;
