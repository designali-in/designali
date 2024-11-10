"use client";

import type { UserRole } from "@prisma/client";
import type { User } from "next-auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@designali/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DIcons } from "dicons";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const emailPreferencesSchema = z.object({
  marketing: z.boolean().default(false),
  social: z.boolean().default(false),
  security: z.boolean().default(true),
});

type EmailPreferencesFormValues = z.infer<typeof emailPreferencesSchema>;

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, "name" | "image" | "email">;
}

export function EmailPreferencesForm({ user }: UserAccountNavProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<EmailPreferencesFormValues>({
    resolver: zodResolver(emailPreferencesSchema),
    defaultValues: {
      marketing: false,
      social: false,
      security: true,
    },
  });

  async function onSubmit(data: EmailPreferencesFormValues) {
    setIsLoading(true);

    try {
      const response = await fetch("/api/user/email-preferences", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to update email preferences");

      toast.success("Email preferences updated");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="marketing"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Marketing emails</FormLabel>
                <FormDescription>
                  Receive emails about new products, features, and more.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="social"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Social emails</FormLabel>
                <FormDescription>
                  Receive emails for friend requests, follows, and more.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="security"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Security emails</FormLabel>
                <FormDescription>
                  Receive emails about your account security.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  disabled
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading && <DIcons.Loader className="mr-2 h-4 w-4 animate-spin" />}
          Update preferences
        </Button>
      </form>
    </Form>
  );
}
