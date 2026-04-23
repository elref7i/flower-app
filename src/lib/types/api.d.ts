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

declare type Metadata = {
  currentPage: number;
  limit: number;
  totalPages: number;
  totalItems: number;
};

declare type SuccessfullResponse<T> = {
  message: string;
  metadata: Metadata;
} & T;

declare type ErrorResponse = {
  error: string;
};

declare type APIResponse<T> = SuccessfullResponse<T> | ErrorResponse;

declare type Address = {
  street: string;
  phone: string;
  city: string;
  lat: string;
  long: string;
  username: string;
  _id: string;
};

declare type Category = {
  _id: string;
  name: string;
  image: string;
  productsCount: number;
};

declare type PaginatedResponse<T> = {
  message: string;
  metadata: Metadata;
} & T;
