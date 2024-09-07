import type { Metadata } from "next";
import Link from "next/link";
import ProductForm from "@/components/admin/product-form";
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
  title: `Create product - Designali`,
  description: "A design agency with a touch of magic.",
};

export default function UpdateProductPage() {
  return (
    <>
      <PageTitle
        title="Create Products"
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
              <BreadcrumbPage>Create</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="my-8 px-6">
        <ProductForm type="Create" />
      </div>
    </>
  );
}
