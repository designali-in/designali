"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const teamFormSchema = z.object({
  name: z
    .string()
    .min(2, "Team name must be at least 2 characters.")
    .max(50, "Team name must be less than 50 characters."),
});

type TeamFormValues = z.infer<typeof teamFormSchema>;

interface TeamSettingsFormProps {
  team: {
    id: string;
    name: string;
  };
  userRole: string;
}

export function TeamSettingsForm({ team, userRole }: TeamSettingsFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const form = useForm<TeamFormValues>({
    resolver: zodResolver(teamFormSchema),
    defaultValues: {
      name: team.name,
    },
  });

  async function onSubmit(data: TeamFormValues) {
    setIsLoading(true);

    try {
      const response = await fetch(`/api/teams/${team.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to update team");

      toast.success("Team updated successfully");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  async function onDelete() {
    setIsDeleting(true);

    try {
      const response = await fetch(`/api/teams/${team.id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete team");

      toast.success("Team deleted successfully");
      router.push("/dashboard/teams");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Team Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  This is your team's visible name within the app.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" loading={isLoading}>
            Update team
          </Button>
        </form>
      </Form>

      {userRole === "OWNER" && (
        <div className="border-t pt-6">
          <h3 className="mb-4 text-sm font-medium text-destructive">
            Danger Zone
          </h3>
          <AlertDialog>
            <AlertDialogTrigger>
              <Button variant="destructive">Delete Team</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your team and remove all associated data.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={onDelete}
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                >
                  {isDeleting ? "Deleting..." : "Delete Team"}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      )}
    </div>
  );
}
