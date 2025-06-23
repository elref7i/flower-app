declare type Categories = {
  metadata: MetaData;
  categories: category[];
};

declare type category = {
  name: string;
  slug: string;
  image: string;
  updatedAt: string;
  isSuperAdmin: boolean;
  productsCount: number;
} & DatabaseProperties;
