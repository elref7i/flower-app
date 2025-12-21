declare type OverallStats = {
  totalProducts: number;
  totalOrders: number;
  totalCategories: number;
  totalRevenue: number;
};

declare type ProductsByCategory = {
  _id: string;
  count: number;
  category: string;
  products: Product[];
};

declare type TopSellingProduct = {
  _id: string;
  title: string;
  imgCover: string;
  price: number;
  sold: number;
  id: string;
};

declare type LowerStockProduct = {
  _id: string;
  title: string;
  imgCover: string;
  price: number;
  quantity: number;
  id: string;
};

declare type ProductsStats = {
  productsByCategory: ProductsByCategory[];
  topSellingProducts: TopSellingProduct[];
  lowStockProducts: LowerStockProduct[];
};

declare type OrderStatus = {
  _id: string;
  count: number;
};

declare type AllStatistics = {
  overall: OverallStats;
  products: ProductsStats;
  orders: OrdersStats;
  categories: CategoryStats[];
};

declare type AllStatisticsResponse = {
  statistics: AllStatistics;
};
