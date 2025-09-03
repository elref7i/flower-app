declare type Categories = {
  name: string;
  slug: string;
  image: string;
  isSuperAdmin: boolean;
  productsCount: number;
} & DatabaseFields;

declare type CategoriesResponse = {
  categories: Categories[];
};
