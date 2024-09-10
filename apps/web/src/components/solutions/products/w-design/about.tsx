import Link from "next/link";
import { ARating } from "@/src/components/admin/product/rating";
import ShareLink from "@/src/components/common/sharelink";
import { getProductBySlug } from "@/src/lib/actions/product.actions";
import { getAdminSummary } from "@/src/lib/actions/user.actions";
import { Button } from "@designali/ui/button";
import { Separator } from "@designali/ui/separator";

import { Icons } from "../../../icons";

export async function About() {
  const product = await getProductBySlug("website-design");
  const reviews = await getAdminSummary();
  return (
    <div className="mb-40 md:mb-20">
      <div className="">
        <div>
          <div className="flex justify-center">
            <h1 className="inline-flex items-baseline bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text text-3xl font-semibold text-transparent dark:bg-gradient-to-r dark:from-slate-400 dark:via-slate-200 dark:to-slate-400 dark:bg-clip-text sm:text-5xl">
              {product.headline}
            </h1>
          </div>
          <p className="mx-auto mt-2 max-w-3xl text-center text-slate-600 dark:text-slate-400">
            {product.description}
          </p>
          <div className="my-3 grid items-center justify-center md:flex md:justify-between">
            <p className="mt-2 text-center text-slate-600 dark:text-slate-400">
              From{" "}
              <span className="text-xl font-semibold text-ali">
                ₹{product.price}*
              </span>
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-1 gap-y-2">
              <ARating />
              <p className="text-xl font-semibold text-slate-600 dark:text-slate-400">
                {" "}
                5.0{" "}
              </p>
              <span>({`${product.numReviews}`})</span>
              <span className="px-2 text-xs text-slate-600 dark:text-slate-400">
                Total: {reviews.reviewsCount[0].count} Reviews
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 grid justify-between gap-3 md:flex">
        <div className="flex gap-2">
          <Link
            href={"https://buy.stripe.com/test_14k7uC4ZE3ZB5e8dQQ"}
            target="_blank"
          >
            <Button variant="default" size="lg">
              Design Now
            </Button>
          </Link>
          <Link href={"https://cal.com/aliimam/designali"} target="_blank">
            <Button variant="outline" size="lg">
              Book a call
            </Button>
          </Link>
          <Link href={"https://wa.me/917678432186"} target="_blank">
            <Button variant="outline" size="lgicon">
              <Icons.whatsapp className="h-5 w-5" />
            </Button>
          </Link>
        </div>
        <ShareLink name={product.slug} slug={product.slug} />
      </div>
      <div className="mt-10">
        <div>
          <Separator className="my-4" />
          <div>
            <div className="flex h-5 flex-wrap items-center justify-center gap-4 text-sm">
              <div>AI</div>
              <Separator orientation="vertical" />
              <div>PDF</div>
              <Separator orientation="vertical" />
              <div>PSD</div>
              <Separator orientation="vertical" />
              <div>SVG</div>
              <Separator orientation="vertical" />
              <div>JPG</div>
              <Separator orientation="vertical" />
              <div>PNG</div>
              <Separator orientation="vertical" />
              <div className="flex items-center gap-2">
                <Icons.calendar strokeWidth={1} className="h-4 w-4" />
                48 hours delivery
              </div>
              <Separator orientation="vertical" />
              <div className="flex items-center gap-2">
                <Icons.repeat strokeWidth={1} className="h-4 w-4" />
                Unlimited Revisions
              </div>
              <Separator orientation="vertical" />
              <div className="flex items-center gap-2">
                <Icons.badge strokeWidth={1} className="h-4 w-4" />
                Lifetime Customer Support
              </div>

              <Separator orientation="vertical" />
              <div className="flex items-center gap-2">
                <Icons.repeat strokeWidth={1} className="h-4 w-4" />
                Unlimited stock photos
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
