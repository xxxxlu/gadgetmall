"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    id: 1,
    name: "MINI LED",
    count: 11,
    image: "https://ext.same-assets.com/729254218/899083643.jpeg",
    slug: "mini-led",
  },
  {
    id: 2,
    name: "QLED",
    count: 12,
    image: "https://ext.same-assets.com/729254218/55303650.jpeg",
    slug: "qled",
  },
  {
    id: 3,
    name: "UHD TV",
    count: 8,
    image: "https://ext.same-assets.com/729254218/3610930784.jpeg",
    slug: "uhd-tv",
  },
];

const ProductCategories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.id} href={`#`}>
              <Card className="overflow-hidden h-full transition-all hover:shadow-md">
                <CardContent className="p-0 flex flex-col items-center">
                  <div className="w-full h-64 relative">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 text-center w-full">
                    <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                    <p className="text-gray-500">({category.count})</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
