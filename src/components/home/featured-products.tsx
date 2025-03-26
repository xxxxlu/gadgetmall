"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Eye } from "lucide-react";
import { useCart } from "@/context/cart-context";

// Sample product data
const featuredProducts = [
  {
    id: 166,
    name: "TCL 65″ C655 QLED Pro TV – Local Dimming",
    price: 329900,
    image: "https://ext.same-assets.com/729254218/2306040691.jpeg",
    slug: "65-c655-qled-pro-tv-local-dimming",
  },
  {
    id: 131,
    name: "TCL 75″ V6C UHD Google TV",
    price: 259990,
    image: "https://ext.same-assets.com/729254218/4225088003.jpeg",
    slug: "75-v6c-uhd-google-tv",
  },
  {
    id: 159,
    name: "TCL 75″ C655 QLED Pro TV – Local Dimming",
    price: 449900,
    image: "https://ext.same-assets.com/729254218/2306040691.jpeg",
    slug: "tcl-75-c655-qled-pro-tv-local-dimming",
  },
];

const FeaturedProducts = () => {
  const { addItem } = useCart();
  interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
  }
  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">New products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex space-x-2">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full"
                        onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingBag className="h-4 w-4" />
                      </Button>
                      <Button
                        asChild
                        size="icon"
                        variant="secondary"
                        className="rounded-full"
                      >
                        <Link href={`/product/${product.slug}`}>
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <Link href={`/product/${product.slug}`} className="hover:text-gray-700">
                    <h3 className="font-medium mb-2 text-lg line-clamp-2">{product.name}</h3>
                  </Link>
                  <p className="text-lg font-bold">
                    Rs.{(product.price).toLocaleString()}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
