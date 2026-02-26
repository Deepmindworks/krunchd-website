import { notFound } from "next/navigation";
import { getProduct, getAllSlugs } from "@/lib/products";
import { ProductDetailContent } from "@/components/sections/ProductDetailContent";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailContent product={product} />;
}
