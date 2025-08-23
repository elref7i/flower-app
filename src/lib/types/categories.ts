declare type Categories = {
  metadata: Metadata;
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

declare type AddCategoryResponse = {
  message: string;
  category: Category;
};

declare type DeleteCategoryResponse = {
  token: string;
};
