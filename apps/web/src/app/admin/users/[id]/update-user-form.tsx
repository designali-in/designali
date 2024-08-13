"use client";

import type { z } from "zod";
import { useRouter } from "next/navigation";
import { updateUser } from "@/lib/actions/user.actions";
import { updateUserSchema } from "@/lib/validator";
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

export default function UpdateUserForm({
  user,
}: {
  user: z.infer<typeof updateUserSchema>;
}) {
  const router = useRouter();

  const form = useForm<z.infer<typeof updateUserSchema>>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: user,
  });

  const { toast } = useToast();
  async function onSubmit(values: z.infer<typeof updateUserSchema>) {
    try {
      const res = await updateUser({
        ...values,
        id: user.id,
      });
      if (!res.success)
        return toast({
          variant: "destructive",
          description: res.message,
        });

      toast({
        description: res.message,
      });
      form.reset();
      router.push(`/admin/users`);
    } catch (error: any) {
      toast({
        variant: "destructive",
        description: error.message,
      });
    }
  }

  return (
    <Form {...form}>
      <form
        method="post"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }: { field: any }) => (
              <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    disabled={true}
                    placeholder="Enter user email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name="name"
            render={({ field }: { field: any }) => (
              <FormItem className="w-full">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex-between">
          <Button
            type="submit"
            size="lg"
            variant="default"
            className="w-full"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Submitting..." : `Update User`}
          </Button>
        </div>
      </form>
    </Form>
  );
}
