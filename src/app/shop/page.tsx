import ProductGrid from "@/components/shop/product-grid";

export const metadata = {
  title: "Our Products - The TV Home",
  description: "Browse our selection of TVs and entertainment products",
};

export default function ShopPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-16">Our products</h1>
        <ProductGrid />
      </div>
    </div>
  );
}
