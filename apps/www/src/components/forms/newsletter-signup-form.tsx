"use client";

import type { NewsletterSignUpFormInput } from "@/lib/validations/newsletter";
import * as React from "react";
import { subscribeToNewsletter } from "@/actions/newsletter";
import { zodResolver } from "@hookform/resolvers/zod";
import { DIcons } from "dicons";
import { useForm } from "react-hook-form";

import { newsletterSignUpSchema } from "@/lib/validations/newsletter";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function NewsletterSignUpForm(): JSX.Element {
   
  const [isPending, startTransition] = React.useTransition();

  const form = useForm<NewsletterSignUpFormInput>({
    resolver: zodResolver(newsletterSignUpSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(formData: NewsletterSignUpFormInput): void {
    startTransition(async () => {
      try {
        const message = await subscribeToNewsletter({ email: formData.email });

        switch (message) {
          case "exists":
            toast({
              title: "You are subscribed already",
              variant: "destructive",
            });
            form.reset();
            break;
          case "success":
            toast({
              title: "Thank you!",
              description: "You have successfully subscribed to our newsletter",
            });
            form.reset();
            break;
          default:
            toast({
              title: "Something went wrong",
              description: "Please try again",
              variant: "destructive",
            });
        }
      } catch (error) {
        toast({
          title: "Something went wrong",
          description: "Please try again",
          variant: "destructive",
        });
      }
    });
  }

  return (
    <div className="mx-auto mt-6 max-w-md">
    <Form {...form}>
      <form
        className="flex h-10 w-full  items-center justify-center md:h-10"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="relative h-10 w-full space-y-0 md:h-10">
              <FormLabel className="sr-only">Email</FormLabel>
              <FormControl className="rounded-r-none">
                <Input
                  type="email"
                  placeholder="contact@designali.in"
                  className=" h-10  placeholder:text-xs md:placeholder:text-sm"
                  {...field}
                />
              </FormControl>
              <FormMessage className="pt-2 sm:text-sm" />
            </FormItem>
          )}
        />

        <Button className="h-10 rounded-l-none " disabled={isPending}>
          {isPending ? (
            <DIcons.Loader className="size-4 animate-spin" aria-hidden="true" />
          ) : (
            <div className="flex items-center gap-2">
              <DIcons.Send className="size-4" aria-hidden="true" />
              Join newsletter
            </div>
          )}
          <span className="sr-only">Join newsletter</span>
        </Button>
      </form>
    </Form>
    </div>
  );
}
