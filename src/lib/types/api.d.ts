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

// declare type SuccessfulResponse<T> = {
//   message: "success";
//   status: "Success";
// } & T;

declare type ErrorResponse = {
  error: string;
};

declare type Category = {
  _id: string;
  name: string;
  image: string;
  productsCount: number;
};
declare type Product = {
  rateAvg: number;
  rateCount: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  imgCover: string;
  price: number;
  priceAfterDiscount: number;
  quantity: number;
  category: string;
  occasion: string;
  isSuperAdmin: boolean;
  sold: 100;
};

declare type APIResponse<T> = SuccessfullResponse<T> | ErrorResponse;

declare type PaginatedResponse<T> = {
  metadata: Metadata;
} & T;

declare type APIResponse<T> = SuccessfullResponse<T> | ErrorResponse;
