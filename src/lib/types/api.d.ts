declare type DatabaseFields = {
  _id: string;
  createdAt: string;
  updatedAt: string;
};

declare type ApplicationUser = {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  phone: string;
  photo: string;
  role: string;
  wishlist: [];
  addresses: [];
} & DatabaseFields;

declare type SuccessfullResponse<T> = {
  message: string;
} & T;

declare type MetaData = {
  currentPage: number;
  limit: number;
  totalPages: number;
  totalItems: number;
};

declare type ErrorResponse = {
  error: string;
};

declare type APIResponse<T> = SuccessfullResponse<T> | ErrorResponse;

declare type PaginatedResponse<T> = {
  metadata: Metadata;
} & T;
