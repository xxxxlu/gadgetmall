"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Eye } from "lucide-react";
import { useCart } from "@/context/cart-context";

// Sample product data
const products = [
  {
    id: 166,
    name: "65″ C655 QLED Pro TV – Local Dimming",
    price: 329900,
    image: "https://ext.same-assets.com/729254218/2306040691.jpeg",
    slug: "65-c655-qled-pro-tv-local-dimming",
  },
  {
    id: 131,
    name: "75″ V6C UHD Google TV",
    price: 259990,
    image: "https://ext.same-assets.com/729254218/4225088003.jpeg",
    slug: "75-v6c-uhd-google-tv",
  },
  {
    id: 100,
    name: "Samsung 32″ T5300 HD Smart TV (2020)",
    price: 70000,
    image: "https://ext.same-assets.com/729254218/3610930784.jpeg",
    slug: "samsung-32-t5300-hd-smart-tv-2020",
  },
  {
    id: 102,
    name: "Samsung 43″ DU7000 Crystal UHD 4K Smart TV (2024)",
    price: 95000,
    image: "https://ext.same-assets.com/729254218/460564587.jpeg",
    slug: "samsung-43-du7000-crystal-uhd-4k-smart-tv-2024",
  },
  {
    id: 120,
    name: "Samsung 50″ 50CU7000 Class Crystal UHD Smart TV 1Y",
    price: 168999,
    image: "https://ext.same-assets.com/729254218/55303650.jpeg",
    slug: "samsung-50-50cu7000-class-crystal-uhd-smart-tv-1y",
  },
  {
    id: 104,
    name: "Samsung 50DU7000 50″ Crystal UHD 4K Smart TV (2024)",
    price: 130000,
    image: "https://ext.same-assets.com/729254218/55303650.jpeg",
    slug: "samsung-50du7000-50-crystal-uhd-4k-smart-tv-2024",
  },
  {
    id: 121,
    name: "Samsung 55″ 55CU7000 Class Crystal UHD Smart TV 1Y",
    price: 194999,
    image: "https://ext.same-assets.com/729254218/894076257.jpeg",
    slug: "samsung-55-55cu7000-class-crystal-uhd-smart-tv-1y",
  },
  {
    id: 128,
    name: "Samsung 55″ LS03B The Frame QLED 4K TV With Official Warranty (QA55LS03BA)",
    price: 344999,
    image: "https://ext.same-assets.com/729254218/3692665812.jpeg",
    slug: "samsung-55-ls03b-the-frame-qled-4k-tv-with-official-warranty-qa55ls03ba",
  },
  {
    id: 118,
    name: "Samsung 55CU8000 Crystal UHD 4K Smart TV (2023) With Official Warranty",
    price: 219999,
    image: "https://ext.same-assets.com/729254218/3314384397.jpeg",
    slug: "samsung-55cu8000-crystal-uhd-4k-smart-tv-2023-with-official-warranty",
  },
];

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  slug: string;
}

const ProductGrid = () => {
  const { addItem } = useCart();

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
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
  );
};

export default ProductGrid;
