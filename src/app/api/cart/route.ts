import { getCartItems } from "@/lib/api/cart";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const response: CartInfo = await getCartItems();
    if (response.message !== "success") throw new Error(response.message || "Can't get items");
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ message: error, items: [] });
  }
}
