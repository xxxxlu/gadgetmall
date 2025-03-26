import ProductDetail from "@/components/product/product-detail";
import { getProductBySlug } from "@/lib/products";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  }
}

export function generateMetadata({ params }: PageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Product Not Found - The TV Home",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${product.name} - The TV Home`,
    description: `Buy ${product.name} at The TV Home. Quality TV and entertainment products.`,
  };
}

export default function ProductPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return notFound();
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <ProductDetail product={product} />
      </div>
    </div>
  );
}
