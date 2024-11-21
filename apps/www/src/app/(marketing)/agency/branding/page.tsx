import { Connect } from "@/comp/common/connect";
import { About } from "@/src/comp/marketing/agency/products/branding/about";
import { Banner } from "@/src/comp/marketing/agency/products/branding/banner";
import { BrandingCars } from "@/src/comp/marketing/agency/products/branding/card";
import { BrandingGet } from "@/src/comp/marketing/agency/products/branding/get";
import { Process } from "@/src/comp/marketing/agency/products/branding/process";
import PageTitle from "@/src/comp/mdx/page-title";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata = {
  title: "Branding - Designali",
  description: "A design agency with a touch of magic.",
};

export default function Branding() {
  return (
    <div className="mx-auto mb-20 mt-28 max-w-3xl px-6 md:max-w-7xl xl:px-0">
      <PageTitle
        title={"Branding"}
        description={`I am dedicated to creating premium branding solutions 
                      exclusively for small enterprises with grand aspirations.`}
      />
      <div className="mt-4 flex justify-center">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/agency">Agency</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{"Branding"}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <Banner />
      <BrandingCars />
      <Process />
      <BrandingGet />
      <About />
      <Connect />
    </div>
  );
}
