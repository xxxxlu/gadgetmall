"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus } from "lucide-react";
import type { Product } from "@/lib/products";
import { getRelatedProducts } from "@/lib/products";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const relatedProducts = getRelatedProducts(product.id);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
    });
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div>
      <Link href="/shop" className="text-gray-500 hover:text-black mb-4 inline-block">
        ← Back to shop
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Product Image */}
        <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="text-2xl font-bold mb-6">Rs.{product.price.toLocaleString()}</div>

          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          </div>

          {/* Add to Cart */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center border border-gray-300 rounded">
              <Button
                variant="ghost"
                size="icon"
                onClick={decrementQuantity}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-10 text-center">{quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={incrementQuantity}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button
              className="bg-black hover:bg-gray-800 text-white px-8"
              onClick={handleAddToCart}
            >
              Add to cart
            </Button>
          </div>

          {/* Product Category */}
          <div className="text-sm text-gray-500 mb-4">
            Category: <Link href={`/shop/${product.category.toLowerCase().replace(' ', '-')}`} className="hover:text-black">{product.category}</Link>
          </div>
        </div>
      </div>

      {/* Tabs for Additional Information */}
      <Tabs defaultValue="description" className="mb-16">
        <TabsList className="grid w-full md:w-1/2 grid-cols-3">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="pt-6">
          <p className="text-gray-700 leading-relaxed">{product.description}</p>
        </TabsContent>
        <TabsContent value="features" className="pt-6">
          {product.features && (
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          )}
        </TabsContent>
        <TabsContent value="specifications" className="pt-6">
          {product.specifications && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="border-b border-gray-200 pb-3">
                  <h3 className="font-medium text-gray-900">{key}</h3>
                  {Array.isArray(value) ? (
                    <ul className="mt-1 text-gray-600">
                      {value.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-1 text-gray-600">{value}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Related products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <Link href={`/product/${relatedProduct.slug}`}>
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-medium mb-2 line-clamp-2">{relatedProduct.name}</h3>
                      <p className="font-bold">
                        Rs.{relatedProduct.price.toLocaleString()}
                      </p>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
