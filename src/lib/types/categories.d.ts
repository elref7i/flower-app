declare type Categories = {
  categories: category[];
} & MetaData;

declare type category = {
  name: string;
  slug: string;
  image: string;
  updatedAt: string;
  isSuperAdmin: boolean;
  productsCount: number;
} & DatabaseProperties;
