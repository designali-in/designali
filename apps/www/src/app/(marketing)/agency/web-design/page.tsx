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
      <PageTitle title={"Web Design"} description={`✌️ Under Construction`} />
      <div className="mt-4 flex justify-center">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/solutions">Solutions</BreadcrumbLink>
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
      <div id="reviews">
        <div className="flex justify-center">
          <h1 className="inline-flex items-baseline bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text py-6 text-xl font-semibold text-transparent dark:bg-gradient-to-r dark:from-slate-400 dark:via-slate-200 dark:to-slate-400 dark:bg-clip-text sm:text-3xl">
            Reviews
          </h1>
        </div>
      </div>
      <WebDesignGet />
      <About />
      <Connect />
    </div>
  );
}
