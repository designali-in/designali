import Link from "next/link";
import { Connect } from "@/components/common/connect";
import { FAQ } from "@/components/home/faq";
import { getProductBySlug } from "@/lib/actions/product.actions";
import PageTitle from "@/src/components/mdx/page-title";
import { About } from "@/src/components/solutions/products/brochure/about";
import { Banner } from "@/src/components/solutions/products/brochure/banner";
import ReviewList from "@/src/components/solutions/review-list";
import { Related } from "@/src/components/solutions/services";
import { auth } from "@designali/auth";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@designali/ui/breadcrumb";
import { Button } from "@designali/ui/button";

import Branding from "./brochure";

export const metadata = {
  title: "Brochure - Designali",
  description:
    "This section includes end-to-end guides for developing Next.js 13 apps.",
};

export default async function Brochure() {
  const product = await getProductBySlug("brochure");
  const session = await auth();
  return (
    <div className="mx-auto mb-20 mt-28 max-w-3xl px-6 md:max-w-7xl">
      <PageTitle title={product.name} description={`✌️ Under Construction`} />
      <div className="mt-10 flex justify-center">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/solutions">Services</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{product.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <Banner />
      <About />
      <Branding />
      <Related />
      <div id="reviews">
        <div className="flex justify-center">
          <h1 className="inline-flex items-baseline bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text py-6 text-xl font-semibold text-transparent dark:bg-gradient-to-r dark:from-slate-400 dark:via-slate-200 dark:to-slate-400 dark:bg-clip-text sm:text-3xl">
            Reviews
          </h1>
        </div>
        {session ? (
          <ReviewList
            productId={product.id}
            productSlug={product.slug}
            userId={session.user.id}
          />
        ) : (
          <Link className="mb-6 flex justify-center" href="/login">
            <Button variant="outline" size="lg">
              Login to see the reviews
              <span className="sr-only">Buy now</span>
            </Button>
          </Link>
        )}
      </div>
      <FAQ />
      <Connect />
    </div>
  );
}
