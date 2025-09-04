declare type Products = {
  products: Product[];
};

declare type Product = {
  rateAvg: number;
  rateCount: number;
  title: string;
  slug: string;
  description: string;
  imgCover: string;
  images: string[];
  price: number;
  priceAfterDiscount: number;
  quantity: number;
  category: string;
  occasion: string;
  isSuperAdmin?: boolean;
  sold: number;
} & DatabaseFields;

declare type ProductCard = Pick<
  Product,
  "imgCover" | "title" | "rateAvg" | "rateCount" | "price" | "priceAfterDiscount" | "_id"
>;

declare type Recommendation = {
  _id: string;
  title: string;
  imgCover: string;
  price: number;
  priceAfterDiscount: number;
  discount: number;
  rateAvg: number;
  rateCount: number;
  id: string;
};

declare type RelatedProductsResponse = {
  count: number;
  recommendations: Recommendation[];
};
declare type ProductReview = {
  reviews: review[];
} & Metadata;

declare type ProducteDeletedResponse = {
  id: string;
};

declare type reviews = {
  product: string;
  user: string;
  rating: number;
  title: string;
  comment: string;
  status: string;
} & DatabaseFields;
