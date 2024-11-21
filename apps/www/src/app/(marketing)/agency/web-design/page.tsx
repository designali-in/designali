import Link from "next/link";
import { Connect } from "@/comp/common/connect";
import Projects from "@/src/comp/common/projects";
import { About } from "@/src/comp/marketing/agency/products/w-design/about";
import { Banner } from "@/src/comp/marketing/agency/products/w-design/banner";
import { WebsiteDesignCards } from "@/src/comp/marketing/agency/products/w-design/card";
import { WebDesignGet } from "@/src/comp/marketing/agency/products/w-design/get";
import { DesignInclude } from "@/src/comp/marketing/agency/products/w-design/include";
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
  title: "Website Design - Designali",
  description: "A design agency with a touch of magic.",
};

export default function Design() {
  return (
    <div className="mx-auto mb-20 mt-28 max-w-3xl px-6 md:max-w-7xl xl:px-0">
      <PageTitle
        title={"Web Design"}
        description={`Select us for unparalleled web design that amplifies your brand and engages your audience

`}
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
              <BreadcrumbPage>{"Web Design"}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <Banner />
      <WebsiteDesignCards />
      <DesignInclude />
      <Projects />
      <WebDesignGet />
      <About />
      <Connect />
    </div>
  );
}
