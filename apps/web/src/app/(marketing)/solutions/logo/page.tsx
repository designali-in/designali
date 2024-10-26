import Link from "next/link";
import { Connect } from "@/comp/common/connect";
import { getProductBySlug } from "@/lib/actions/product.actions";
import PageTitle from "@/src/comp/mdx/page-title";
import { About } from "@/src/comp/solutions/products/logo/about";
import { Banner } from "@/src/comp/solutions/products/logo/banner";
import { LogoCards } from "@/src/comp/solutions/products/logo/card";
import { LogoGet } from "@/src/comp/solutions/products/logo/get";
import ReviewList from "@/src/comp/solutions/review-list";
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

export const metadata = {
  title: "Logo - Designali",
  description: "A design agency with a touch of magic.",
};

export default async function Logo() {
  const product = await getProductBySlug("logo");
  const session = await auth();
  return (
    <div className="mx-auto mb-20 mt-28 max-w-3xl px-6 md:max-w-7xl xl:px-0">
      <PageTitle
        title={product.name}
        description={`Logo design is the art of turning your business identity into a visual masterpiece. `}
      />
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
      <LogoCards />

      <div className=" " id="reviews">
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
          <Link className="flex justify-center" href="/login">
            <Button variant="outline" size="lg">
              Login to see the reviews
              <span className="sr-only">Buy now</span>
            </Button>
          </Link>
        )}
      </div>
      <LogoGet />
      <About />
      <Connect />
    </div>
  );
}
