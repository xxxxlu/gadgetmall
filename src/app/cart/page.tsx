"use client";

import Link from "next/link";
import CartItems from "@/components/cart/cart-items";
import CartSummary from "@/components/cart/cart-summary";
import CheckoutSteps from "@/components/cart/checkout-steps";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

export default function CartPage() {
  const { items } = useCart();
  const isCartEmpty = items.length === 0;

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Cart</h1>

        <CheckoutSteps currentStep={1} />

        {isCartEmpty ? (
          <div className="text-center py-16">
            <div className="flex justify-center mb-6">
              <ShoppingBag className="h-16 w-16 text-gray-300" />
            </div>
            <h2 className="text-2xl font-medium mb-4">Your cart is currently empty!</h2>
            <p className="text-gray-500 mb-8">Add some products to your cart to continue shopping.</p>
            <Button asChild className="bg-black hover:bg-gray-800 text-white">
              <Link href="/shop">Return to shop</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <CartItems />
            </div>
            <div className="lg:col-span-1">
              <CartSummary />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
