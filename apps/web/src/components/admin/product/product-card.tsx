import type { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { getMyCart } from "@/lib/actions/cart.actions";
import { round2 } from "@/src/lib/dutils";
import { Button } from "@designali/ui/button";

import AddToCart from "./add-to-cart";

const ProductCard = async ({ product }: { product: Product }) => {
  const cart = await getMyCart();
  return (
    <div className="h-auto w-full rounded-3xl border p-2">
      <Link href={`/products/${[product.slug]}`}>
        <Image
          alt={product.name}
          className="h-[350px] rounded-t-2xl object-cover object-center md:h-[450px]"
          height={500}
          src={product.images[0]}
          width={500}
        />
      </Link>
      <div className="relative -mt-28 bg-gradient-to-b from-white/0 via-white/20 to-white pb-4 pt-16 text-white dark:bg-gradient-to-b dark:from-black/0 dark:to-black">
        <div className="px-4">
          <h2 className="text-2xl font-medium text-black dark:text-white">
            {product.name}
          </h2>
        </div>
      </div>
      <div className="flex justify-center gap-2">
        <Link
          href={`/products/${[product.slug]}`}
          className="flex w-full gap-2"
        >
          <Button variant="outline" size="lg" className="flex w-full gap-2">
            <span>View</span>
          </Button>
        </Link>
        <div className="w-sm">
          {product.stock !== 0 && (
            <AddToCart
              cart={cart}
              item={{
                productId: product.id,
                name: product.name,
                slug: product.slug,
                price: round2(product.price),
                qty: 1,
                image: product.images[0],
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
