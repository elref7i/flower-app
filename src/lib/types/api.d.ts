declare type DatabaseFields = {
  _id: string;
  createdAt: string;
  updatedAt: string;
};

declare type MetaData = {
  currentPage: number;
  limit: number;
  totalPages: number;
  totalItems: number;
};

declare type SuccessfulResponse<T> = {
  message: "success";
} & T;
declare type SuccessfullResponse<T> = {
  message: string;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> bb0877d8bd08e8fad23585659132090a40c2f336
} & T;
=======

 } & T;
// declare type SuccessfulResponse<T> = {
//   message: "success";
//   status: "Success";
// } & T;
>>>>>>> fcad3a7e8e9e2d2e86ef82d952b485a29b1483d7
=======
} & T;
>>>>>>> 81c7cfbceaaf7ee4a07bf075275088b037e2ed82

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
declare type APIResponse<T> = SuccessfulResponse<T> | ErrorResponse;

declare type PaginatedResponse<T> = {
  metadata: Metadata;
} & T;
