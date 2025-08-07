declare type AllStatisticsResponse = {
  statistics: {
    overall: {
      totalProducts: number;
      totalOrders: number;
      totalCategories: number;
      totalRevenue: number;
    };
    products: {
      productsByCategory: {
        _id: string;
        count: number;
        category: string;
        products: Pick<Product, "title" | "price" | "imgCover" | "quantity" | "sold">[];
      }[];
      topSellingProducts: {
        _id: string;
        title: string;
        imgCover: string;
        price: number;
        sold: number;
        id: string;
      }[];
      lowStockProducts: {
        _id: string;
        title: string;
        imgCover: string;
        price: number;
        quantity: number;
        id: string;
      }[];
    };
    orders: {
      ordersByStatus: {
        _id: string | null;
        count: number;
      }[];
      dailyRevenue: {
        _id: string; // e.g. "2025-07-31"
        revenue: number;
        count: number;
      }[];
      monthlyRevenue: {
        _id: string; // e.g. "2025-07"
        revenue: number;
        count: number;
      }[];
    };
    categories: {
      _id: string;
      name: string;
      totalProducts: number;
      totalRevenue: number;
    }[];
  };
};