declare type DatabaseFields = {
  _id: string;
  createdAt: string;
  updatedAt: string;
};

<<<<<<< HEAD
declare type MetaData = {
  currentPage: number;
  limit: number;
  totalPages: number;
  totalItems: number;
};

declare type SuccessfulResponse<T> = {
  message: "success";
=======
declare type SuccessfullResponse<T> = {
  message: string;
>>>>>>> bb0877d8bd08e8fad23585659132090a40c2f336
} & T;

declare type ErrorResponse = {
  error: string;
};

declare type APIResponse<T> = SuccessfulResponse<T> | ErrorResponse;

declare type PaginatedResponse<T> = {
  metadata: Metadata;
} & T;
