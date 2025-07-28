declare type Categories = {
  metadata: MetaData;
  categories: Category[];
};

declare type Category = {
  name: string;
  slug: string;
  image: string;
  updatedAt: string;
  isSuperAdmin: boolean;
  productsCount: number;
} & DatabaseFields;