/* eslint-disable @typescript-eslint/consistent-type-definitions */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
"use client";

import React from "react";
import { setFormErrors } from "@/lib/utils";
import { createShortLink } from "@/server/actions/link";
import { Button } from "@designali/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@designali/ui/form";
import { Input } from "@designali/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { DIcons } from "dicons";
import { useAction } from "next-safe-action/hooks";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  url: z.string().url(),
});

type FormSchema = z.infer<typeof formSchema>;

type LinkFormProps = {
  renderCustomLink: React.ReactNode;
};

export const LinkForm = ({ renderCustomLink }: LinkFormProps) => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
    },
  });

  const { execute: createLink, status: createLinkStatus } = useAction(
    createShortLink,
    {
      onSuccess() {
        toast.success("Link created successfully");
        form.reset();
      },
      onError(error) {
        if (error.validationErrors) {
          return setFormErrors(form, error.validationErrors);
        }
        toast.error(error.serverError ?? error.fetchError);
      },
    },
  );

  const onSubmit = (values: FormSchema) => {
    createLink({ url: values.url, slug: "" });
  };

  return (
    <Form {...form}>
      <div className="flex w-full gap-2">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full justify-center gap-2"
        >
          <div className="flex-1">
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter the link here" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            className="h-10 w-10"
            size="lgicon"
            isLoading={createLinkStatus === "executing"}
          >
            <DIcons.Scissors className={"h-6 w-6"} />
            <span className="sr-only">Create short link</span>
          </Button>
        </form>
        {renderCustomLink}
      </div>
    </Form>
  );
};
