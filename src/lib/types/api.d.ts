declare type DatabaseFields = {
  _id: string;
  createdAt: string;
  updatedAt: string;
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
  status: string;
  message: string;
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
  sold: number,
  createdAt:string

}
declare type APIResponse<T> = SuccessfulResponse<T> | ErrorResponse;

declare type PaginatedResponse<T> = {
  metadata: Metadata;
} & T;
