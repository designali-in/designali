"use client";

import type { Cart, CartItem } from "@/types";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { addItemToCart, removeItemFromCart } from "@/lib/actions/cart.actions";
import { Button } from "@designali/ui/button";
import { ToastAction } from "@designali/ui/tosst";
import { useToast } from "@designali/ui/use-toast";

import { Icons } from "../../icons";

export default function AddToCart({
  cart,
  item,
}: {
  cart?: Cart;
  item: Omit<CartItem, "cartId">;
}) {
  const router = useRouter();
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const existItem =
    cart && cart.items.find((x) => x.productId === item.productId);
  return existItem ? (
    <div className="flex w-full items-center">
      <Button
        type="button"
        size="lgicon"
        variant="outline"
        disabled={isPending}
        onClick={() => {
          startTransition(async () => {
            const res = await removeItemFromCart(item.productId);
            toast({
              variant: res.success ? "default" : "destructive",
              description: res.message,
            });
            return;
          });
        }}
      >
        {isPending ? (
          <Icons.loader strokeWidth={1} className="h-4 w-4 animate-spin" />
        ) : (
          <Icons.minus strokeWidth={1} className="h-4 w-4" />
        )}
      </Button>
      <span className="px-4">{existItem.qty}</span>
      <Button
        type="button"
        variant="outline"
        size="lgicon"
        disabled={isPending}
        onClick={() => {
          startTransition(async () => {
            const res = await addItemToCart(item);
            toast({
              variant: res.success ? "default" : "destructive",
              description: res.message,
            });
            return;
          });
        }}
      >
        {isPending ? (
          <Icons.loader strokeWidth={1} className="h-4 w-4 animate-spin" />
        ) : (
          <Icons.plus strokeWidth={1} className="h-4 w-4 " />
        )}
      </Button>
    </div>
  ) : (
    <Button
      className=""
      type="button"
      variant="outline"
      size="lgicon"
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          const res = await addItemToCart(item);
          if (!res.success) {
            toast({
              variant: "destructive",
              description: res.message,
            });
            return;
          }
          toast({
            description: `${item.name} added to the cart`,
            action: (
              <ToastAction
                className="bg-primary"
                onClick={() => router.push("/cart")}
                altText="Go to cart"
              >
                Go to cart
              </ToastAction>
            ),
          });
        });
      }}
    >
      {isPending ? (
        <Icons.loader strokeWidth={1} className="animate-spin" />
      ) : (
        <Icons.plus strokeWidth={1} className=" h-5 w-5" />
      )}
    </Button>
  );
}
