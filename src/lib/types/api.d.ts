declare type DatabaseFields = {
  _id: string;
  createdAt: string;
  updatedAt: string;
};

declare type SuccessfullResponse<T> = {
  message: string;
declare type SuccessfulResponse<T> = {
  message: "success";
  status: "Success";
} & T;

declare type ErrorResponse = {
  error: string;
  status: string;
  message: string;
};

declare type APIResponse<T> = SuccessfulResponse<T> | ErrorResponse;

declare type PaginatedResponse<T> = {
  metadata: Metadata;
} & T;
