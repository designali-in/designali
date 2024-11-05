import Link from "next/link";
import { Connect } from "@/comp/common/connect";
import { About } from "@/src/comp/marketing/agency/products/sm-posts/about";
import { Banner } from "@/src/comp/marketing/agency/products/sm-posts/banner";
import { SocialMedisCards } from "@/src/comp/marketing/agency/products/sm-posts/card";
import { SMPostsGet } from "@/src/comp/marketing/agency/products/sm-posts/get";
import PageTitle from "@/src/comp/mdx/page-title";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@designali/ui/breadcrumb";
import { Button } from "@designali/ui/button";

export const metadata = {
  title: "Social Media Design - Designali",
  description: "A design agency with a touch of magic.",
};

export default function SMPosts() {
  return (
    <div className="mx-auto mb-20 mt-28 max-w-3xl px-6 md:max-w-7xl xl:px-0">
      <PageTitle
        title={"Social Media Design"}
        description={` I craft visually appealing designs that align with your brand and drive engagement.`}
      />
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
              <BreadcrumbPage>{"Social Media Design"}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <Banner />
      <SocialMedisCards />
      <div className="" id="reviews">
        <div className="flex justify-center">
          <h1 className="inline-flex items-baseline bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text py-6 text-xl font-semibold text-transparent dark:bg-gradient-to-r dark:from-slate-400 dark:via-slate-200 dark:to-slate-400 dark:bg-clip-text sm:text-3xl">
            Reviews
          </h1>
        </div>
      </div>
      <SMPostsGet />
      <About />
      <Connect />
    </div>
  );
}
