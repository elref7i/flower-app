declare type DatabaseProperties = {
  _id: string;
  createdAt: string;
};

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
