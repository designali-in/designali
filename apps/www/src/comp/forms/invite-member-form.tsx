"use client";

import { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@designali/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const inviteFormSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  role: z.enum(["ADMIN", "MEMBER"], {
    required_error: "Please select a role.",
  }),
});

type InviteFormValues = z.infer<typeof inviteFormSchema>;

interface InviteMemberFormProps {
  teamId: string;
  onSuccess?: () => void;
}

export function InviteMemberForm({ teamId, onSuccess }: InviteMemberFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<InviteFormValues>({
    resolver: zodResolver(inviteFormSchema),
    defaultValues: {
      role: "MEMBER",
    },
  });

  async function onSubmit(data: InviteFormValues) {
    setIsLoading(true);

    try {
      const response = await fetch(`/api/teams/${teamId}/invitations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send invitation");

      toast.success("Invitation sent successfully");
      form.reset();
      onSuccess();
    } catch (error) {
      toast.error("Failed to send invitation");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email address</FormLabel>
              <FormControl>
                <Input placeholder="member@example.com" {...field} />
              </FormControl>
              <FormDescription>
                Enter the email address of the person you want to invite
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="ADMIN">Admin</SelectItem>
                  <SelectItem value="MEMBER">Member</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Choose what level of access they should have
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        Send invitation
      </form>
    </Form>
  );
}
