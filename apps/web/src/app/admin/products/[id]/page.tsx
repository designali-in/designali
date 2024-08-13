import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductForm from "@/components/admin/product-form";
import { getProductById } from "@/lib/actions/product.actions";
import PageTitle from "@/src/components/mdx/page-title";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@designali/ui/breadcrumb";

export const metadata: Metadata = {
  title: `Update product - Designali`,
};

export default async function UpdateProductPage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const product = await getProductById(id);
  if (!product) notFound();
  return (
    <div className="mx-auto max-w-5xl space-y-8 px-6">
      <PageTitle
        title="Update Products"
        description={`Manage your account settings and set e-mail preferences.`}
      />
      <div className="mt-10 flex justify-center">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin/overview">Admin</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin/products">Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{product.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <ProductForm type="Update" product={product} productId={product.id} />
    </div>
  );
}
