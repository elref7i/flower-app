declare type Product = {
  rateAvg: number;
  rateCount: number;
  id: string;
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

declare type ProductReview = {
  review: review;
};

declare type review = {
  product: string;
  user: string;
  rating: number;
  title: string;
  comment: string;
  status: string;
} & DatabaseFields;
