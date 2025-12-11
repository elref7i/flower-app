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

//!
declare type Address = {
  street: string;
  phone: string;
  city: string;
  lat: string;
  long: string;
  username: string;
  _id: string;
};

//!
declare type Category = {
  _id: string;
  name: string;
  image: string;
  productsCount: number;
};

//!
declare type Category = {
  _id: string;
  name: string;
  image: string;
  productsCount: number;
};
