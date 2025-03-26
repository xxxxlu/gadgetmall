import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FeaturedProducts from "@/components/home/featured-products";
import ProductCategories from "@/components/home/product-categories";
import ViewingExperience from "@/components/home/viewing-experience";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#f7f7f7] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-[#cfebef] p-6 md:p-10 rounded-lg max-w-md">
                <h2 className="text-4xl md:text-5xl font-medium mb-4">
                  Everything You Need for Perfect Home Entertainment
                </h2>
                <Button asChild className="mt-6 bg-black hover:bg-gray-800 text-white">
                  <Link href="/shop">See our products</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="https://ext.same-assets.com/729254218/1387648879.jpeg"
                alt="TV Display"
                width={800}
                height={600}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Superior Picture Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Superior Picture, Premium Quality</h2>
          <p className="text-lg italic mb-12">Experience Innovation</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-left">
              <p className="text-gray-700">
                Enjoy stunning visuals, seamless performance, and immersive sound.
                Experience the next level of entertainment with cutting-edge technology and sleek designs.
              </p>
            </div>
            <div className="text-left">
              <p className="text-gray-700">
                Crisp visuals meet sleek design, delivering the ultimate viewing experience.
                Whether it's 4K clarity or smart connectivity, your entertainment just got better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <ProductCategories />

      {/* New Products Section */}
      <FeaturedProducts />

      {/* Viewing Experience Section */}
      <ViewingExperience />
    </div>
  );
}
