"use client";

import type { Product } from "@/types";
import type { z } from "zod";
import { useRouter } from "next/navigation";
import { createProduct, updateProduct } from "@/lib/actions/product.actions";
import { productDefaultValues } from "@/lib/constant/constants";
import { insertProductSchema, updateProductSchema } from "@/lib/validator";
import { Button } from "@designali/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@designali/ui/form";
import { Input } from "@designali/ui/input";
import { useToast } from "@designali/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import slugify from "slugify";

export default function ProductForm({
  type,
  product,
  productId,
}: {
  type: "Create" | "Update";
  product?: Product;
  productId?: string;
}) {
  const router = useRouter();

  const form = useForm<z.infer<typeof insertProductSchema>>({
    resolver:
      type === "Update"
        ? zodResolver(updateProductSchema)
        : zodResolver(insertProductSchema),
    defaultValues:
      product && type === "Update" ? product : productDefaultValues,
  });

  const { toast } = useToast();

  async function onSubmit(values: z.infer<typeof insertProductSchema>) {
    if (type === "Create") {
      const res = await createProduct(values);
      if (!res.success) {
        toast({
          variant: "destructive",
          description: res.message,
        });
      } else {
        toast({
          description: res.message,
        });
        router.push(`/admin/products`);
      }
    }
    if (type === "Update") {
      if (!productId) {
        router.push(`/admin/products`);
        return;
      }
      const res = await updateProduct({ ...values, id: productId });
      if (!res.success) {
        toast({
          variant: "destructive",
          description: res.message,
        });
      } else {
        router.push(`/admin/products`);
      }
    }
  }

  return (
    <Form {...form}>
      <form
        method="post"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <div className="flex flex-col gap-4 md:flex-row">
          <FormField
            control={form.control}
            name="name"
            render={({ field }: { field: any }) => (
              <FormItem className="w-full">
                <FormLabel className="text-xs text-slate-600 dark:text-slate-400">
                  Name
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter product name" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="slug"
            render={({ field }: { field: any }) => (
              <FormItem className="w-full">
                <FormLabel className="text-xs text-slate-600 dark:text-slate-400">
                  Slug
                </FormLabel>

                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Enter product slug"
                      className="pl-8"
                      {...field}
                    />
                    <Button
                      className="absolute right-1 top-1"
                      type="button"
                      size="sm"
                      onClick={() => {
                        form.setValue(
                          "slug",
                          slugify(form.getValues("name"), { lower: true }),
                        );
                      }}
                    >
                      Generate
                    </Button>
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="headline"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-xs text-slate-600 dark:text-slate-400">
                  Headline
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter product headline" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-xs text-slate-600 dark:text-slate-400">
                  Description
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter product description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="price"
            render={({ field }: { field: any }) => (
              <FormItem className="w-full">
                <FormLabel className="text-xs text-slate-600 dark:text-slate-400">
                  Price
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter product price" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div>
          <Button
            type="submit"
            size="lg"
            disabled={form.formState.isSubmitting}
            className="button col-span-2 w-full"
          >
            {form.formState.isSubmitting ? "Submitting..." : `${type} Product `}
          </Button>
        </div>
      </form>
    </Form>
  );
}
