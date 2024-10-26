"use client";

import type { SafeActionError } from "@/server/types";
import type { ShortLink } from "@designali/db/src/schema";
import type { z } from "zod";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/use-debounce";
import {
  checkSlug,
  createShortLink,
  editShortLink,
} from "@/server/actions/link";
import { Button } from "@designali/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@designali/ui/form";
import { Icons, iconVariants } from "@designali/ui/icons";
import { Input } from "@designali/ui/input";
import { Loader } from "@designali/ui/loader";
import { Textarea } from "@designali/ui/textarea";
import { insertLinkSchema } from "@designali/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { nanoid, setFormErrors } from "~/lib/utils";

const formSchema = insertLinkSchema;

type FormSchema = z.infer<typeof formSchema>;

type CustomLinkFormProps = (
  | {
      isEditing: boolean;
      defaultValues?: ShortLink;
    }
  | {
      isEditing?: undefined;
      defaultValues?: undefined;
    }
) & {
  onSetIsDialogOpen: (value: boolean) => void;
};

export const CustomLinkForm = ({
  onSetIsDialogOpen,
  isEditing = false,
  defaultValues,
}: CustomLinkFormProps) => {
  const [slug, setSlug] = useState("");
  const [isSlugExist, setIsSlugExist] = useState(false);
  const debouncedSlug = useDebounce(slug, 500);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: defaultValues.url ?? "",
      slug: defaultValues.slug ?? "",
      description: defaultValues.description ?? "",
    },
  });

  const handleSuccess = () => {
    toast.success(
      isEditing ? "Link edited successfully" : "Link created successfully",
    );
    onSetIsDialogOpen(false);
    form.reset();
  };

  const handleError = (error: SafeActionError) => {
    if (error.validationErrors) {
      return setFormErrors(form, error.validationErrors);
    }
    toast.error(error.serverError ?? error.fetchError);
  };

  const { execute: createLink, status: createLinkStatus } = useAction(
    createShortLink,
    { onSuccess: handleSuccess, onError: handleError },
  );

  const { execute: editLink, status: editLinkStatus } = useAction(
    editShortLink,
    { onSuccess: handleSuccess, onError: handleError },
  );

  const { execute: checkSlugExists, status: checkSlugExistsStatus } = useAction(
    checkSlug,
    {
      onError: handleError,
      onSuccess: (slugExist) => {
        if (slugExist) {
          setIsSlugExist(true);
          form.setError("slug", { message: "Slug already exist" });
        } else {
          setIsSlugExist(false);
          form.clearErrors("slug");
        }
      },
    },
  );

  useEffect(() => {
    setIsSlugExist(false);

    if (!debouncedSlug) {
      return form.clearErrors("slug");
    }

    checkSlugExists({ slug: debouncedSlug });
  }, [debouncedSlug]);

  const onSubmit = (values: FormSchema) => {
    if (isSlugExist) {
      return form.setError("slug", { message: "Slug already exist" });
    }

    if (isEditing) {
      editLink({ slug: defaultValues.slug ?? "", newLink: values });
    } else {
      createLink(values);
    }
  };

  const isExecuting =
    createLinkStatus === "executing" || editLinkStatus === "executing";
  const isCheckingSlug = checkSlugExistsStatus === "executing";

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Destination URL</FormLabel>
              <FormControl>
                <Input
                  placeholder="https://designali.in/products/graaadients"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex w-full items-center justify-between">
                <div>Short Link (optional)</div>
                <Button
                  type="button"
                  variant="ghost"
                  className="flex h-auto items-center px-0 py-0 text-xs text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
                  onClick={() => {
                    const newSlug = nanoid();
                    form.setValue("slug", newSlug);
                    setSlug(newSlug);
                  }}
                >
                  <Icons.Shuffle
                    className={iconVariants({
                      size: "xs",
                      className: "mr-1",
                    })}
                  />
                  Randomize
                </Button>
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    placeholder="designali"
                    className="pe-8"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      setSlug(e.target.value);
                    }}
                  />
                  {isCheckingSlug && (
                    <div className="absolute end-3 top-1/2 -translate-y-1/2 transform text-muted-foreground">
                      <Loader />
                    </div>
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description (optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Cut It is a free open source tool to generate short links"
                  className="h-24 resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={!form.formState.isDirty}
          isLoading={isExecuting}
        >
          {isEditing
            ? isExecuting
              ? "Saving changes..."
              : "Save changes"
            : isExecuting
              ? "Creating link..."
              : "Create link"}
        </Button>
      </form>
    </Form>
  );
};
