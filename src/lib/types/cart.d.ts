declare type CartItem = {
  _id: string;
  price: number;
  quantity: number;
  product: {
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
    isSuperAdmin: boolean;
    sold: number;
  };
};

declare type CartInfo = {
  message: string;
  numOfCartItems: number;
  cart: {
    _id: string;
    user: string;
    cartItems: CartItem[];
    appliedCoupons: any[];
    totalPrice: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
};

declare type AddToCart = { children: React.ReactNode; product: string; quantity?: number };

declare type UpdateItemQuantityProps = {
  orderQuantity: number;
  validQuantity: number;
  productId: string;
};
