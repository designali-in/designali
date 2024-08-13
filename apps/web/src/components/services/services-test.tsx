import Image from "next/image";
import Link from "next/link";
import { getAllProducts } from "@/src/lib/actions/product.actions";

import ImageZoom from "../common/image-zoom";
import { HighlighterItem, HighlightGroup } from "../ui/highlighter";
import { Particles } from "../ui/particles";

export async function Services({
  searchParams,
}: {
  searchParams: {
    page: string;
    query: string;
  };
}) {
  const page = Number(searchParams.page) || 1;
  const searchText = searchParams.query || "";
  const products = await getAllProducts({
    query: searchText,
    page,
  });
  return (
    <div className="mt-10">
      <div className="grid gap-3 md:grid-cols-3">
        {products.data.map((product) => (
          <HighlightGroup className="group">
            <div
              key={product.id}
              className="group/item h-full md:col-span-6 lg:col-span-4"
              data-aos="fade-down"
            >
              <HighlighterItem className="h-full rounded-3xl">
                <div className="relative z-20 h-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100/50 dark:border-slate-800 dark:bg-black">
                  <Particles
                    className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
                    quantity={50}
                    color={"#ffffff"}
                    vy={-0.2}
                  />

                  <div className="flex flex-col">
                    <div
                      className="pointer-events-none absolute bottom-0 right-1 -z-10 aspect-square w-1/2 -translate-y-1/2 translate-x-1"
                      aria-hidden="true"
                    >
                      <div className="translate-z-0 absolute inset-0 rounded-full bg-slate-100 blur-[80px] dark:bg-slate-800" />
                    </div>

                    <ImageZoom>
                      <Image
                        src={product.images}
                        alt={``}
                        className="h-full w-full object-cover transition hover:scale-95 hover:rounded-lg"
                        width={500}
                        height={500}
                      />
                    </ImageZoom>
                    <Link href={`/services/${product.slug}`}>
                      <div className="p-6">
                        <h3 className="inline-flex items-baseline bg-gradient-to-r from-slate-600 via-slate-400 to-slate-600 bg-clip-text pb-1 font-semibold text-transparent dark:bg-gradient-to-r dark:from-slate-600 dark:via-slate-200 dark:to-slate-600 dark:bg-clip-text">
                          <span className="text-xl md:text-3xl">
                            {product.name}
                          </span>
                        </h3>
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm text-slate-600 dark:text-slate-400">
                            {product.description}
                          </h3>
                          <p className="text-md text-right leading-6 text-slate-600 dark:text-slate-400">
                            ₹ {product.price}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </HighlighterItem>
            </div>
          </HighlightGroup>
        ))}
      </div>
    </div>
  );
}
