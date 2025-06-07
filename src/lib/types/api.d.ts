
declare type product = {
  rateAvg: number;
  rateCount: number;
  _id: string;
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
  createdAt: string;
  updatedAt: string;
  __v: number;
  isSuperAdmin?: boolean;
  sold: number;
};

declare type occasion = {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  isSuperAdmin: boolean;
  productsCount: number;
};


declare type metadata={
   currentPage: number,
        limit: number,
        totalPages: number,
        totalItems: number
}
declare type occasions={

  metadata:metadata,
  occasions:occasion[]

}

declare type productByOccasion={
  metadata:metadata,
  products:product[]
}