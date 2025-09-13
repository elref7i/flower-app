declare type Category = {
  _id: string;
  name: string;
  image: string;
  productsCount: number;
};
declare type CategoriesResponse = {
  categories: Category[];
};

declare type AddCategoryResponse = {
  message: string;
  category: Category;
};

declare type DeleteCategoryResponse = {
  token: string;
};
