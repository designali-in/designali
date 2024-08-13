"use client";

import { useState, useTransition } from "react";
import { cn } from "@designali/ui";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@designali/ui/alert-dialog";
import { Button, buttonVariants } from "@designali/ui/button";
import { useToast } from "@designali/ui/use-toast";

import { Icons } from "../icons";

export default function DeleteDialog({
  id,
  action,
}: {
  id: string;

  action: (id: string) => Promise<{ success: boolean; message: string }>;
}) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button size="icon" variant="outline">
          <Icons.trash strokeWidth={1} className="h-4 w-4 text-ali" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "lg",
              }),
            )}
          >
            Cancel
          </AlertDialogCancel>

          <Button
            variant="destructive"
            size="lg"
            disabled={isPending}
            onClick={() =>
              startTransition(async () => {
                const res = await action(id);
                if (!res.success) {
                  toast({
                    variant: "destructive",
                    description: res.message,
                  });
                } else {
                  setOpen(false);
                  toast({
                    description: res.message,
                  });
                }
              })
            }
          >
            {isPending ? "Deleting..." : "Delete"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
