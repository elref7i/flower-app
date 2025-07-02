declare type Occasion = {
  name: string;
  slug: string;
  image: string;
  isSuperAdmin: boolean;
  productsCount: number;
} & DatabaseFields;

declare type FetchOccasionsResponse = {
  occasions: Occasion[];
};
