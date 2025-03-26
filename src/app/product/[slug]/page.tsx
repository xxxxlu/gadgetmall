import ProductDetail from "@/components/product/product-detail";
import { getProductBySlug } from "@/lib/products";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 生成元数据
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params; // 等待 params 解析
  const product = await getProductBySlug(resolvedParams.slug);

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

// 页面组件
export default async function ProductPage({ params }: PageProps) {
  const resolvedParams = await params; // 等待 params 解析
  const product = await getProductBySlug(resolvedParams.slug);

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