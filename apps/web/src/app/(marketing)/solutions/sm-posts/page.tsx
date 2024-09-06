import { Connect } from "@/components/common/connect";
import { FAQ } from "@/components/home/faq";
import { getProductBySlug } from "@/lib/actions/product.actions";
import PageTitle from "@/src/components/mdx/page-title";
import { About } from "@/src/components/solutions/products/sm-posts/about";
import { Banner } from "@/src/components/solutions/products/sm-posts/banner";
import { SocialMedisCards } from "@/src/components/solutions/products/sm-posts/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@designali/ui/breadcrumb";

export const metadata = {
  title: "SM Posts - Designali",
  description:
    "This section includes end-to-end guides for developing Next.js 13 apps.",
};

export default async function SMPosts() {
  const product = await getProductBySlug("sm-posts");

  return (
    <div className="mx-auto mb-20 mt-28 max-w-3xl px-6 md:max-w-7xl xl:px-0">
      <PageTitle title={product.name} description={`✌️ Under Construction`} />
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
              <BreadcrumbPage>{product.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <Banner />
      <SocialMedisCards />
      <About />
      <div id="reviews">
        <div className="flex justify-center">
          <h1 className="inline-flex items-baseline bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text py-6 text-xl font-semibold text-transparent dark:bg-gradient-to-r dark:from-slate-400 dark:via-slate-200 dark:to-slate-400 dark:bg-clip-text sm:text-3xl">
            Reviews
          </h1>
        </div>
      </div>
      <FAQ />
      <Connect />
    </div>
  );
}
