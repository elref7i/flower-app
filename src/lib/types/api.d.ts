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
declare type Category = {
  _id: string;
  name: string;
  image: string;
  productsCount: number
}
declare type Product = {
  rateAvg: number,
  rateCount: number,
  _id: string,
  title: string,
  slug: string,
  description: string,
  imgCover: string,
  price: number,
  priceAfterDiscount: number,
  quantity: number,
  category: string,
  occasion: string,
  isSuperAdmin: boolean,
  sold: 100,
}
declare type APIResponse<T> = SuccessfulResponse<T> | ErrorResponse;
