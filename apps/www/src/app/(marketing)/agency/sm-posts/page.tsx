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
} from "@/components/ui/breadcrumb";

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
              <BreadcrumbLink href="/agency">Agency</BreadcrumbLink>
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
      <SMPostsGet />
      <About />
      <Connect />
    </div>
  );
}
