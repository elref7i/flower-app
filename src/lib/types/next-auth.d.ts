declare type DatabaseProperties = {
  _id: string;
  createdAt: string;
};

declare type SuccessfulResponse<T> = {
  message: "success";
} & T;

declare type ErrorResponse = {
  error: string;
};

declare type APIResponse<T> = SuccessfulResponse<T> | ErrorResponse;
