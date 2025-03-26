"use client";

import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const CartSummary = () => {
  const { subtotal } = useCart();

  // For this demo, we'll use a simplified shipping calculation
  const shipping = subtotal > 0 ? 1500 : 0; // Rs.1,500 shipping
  const total = subtotal + shipping;

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle>Cart Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">Rs.{subtotal.toLocaleString()}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">Shipping</span>
            <span className="font-medium">Rs.{shipping.toLocaleString()}</span>
          </div>

          <Separator />

          <div className="flex justify-between">
            <span className="text-gray-900 font-bold">Total</span>
            <span className="text-gray-900 font-bold">Rs.{total.toLocaleString()}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          className="w-full bg-black hover:bg-gray-800 text-white"
        >
          <Link href="/checkout">Proceed to Checkout</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CartSummary;
