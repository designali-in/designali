"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Textarea } from "@/registry/default/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { DIcons } from "dicons";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

const profileFormSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters."),
  email: z.string().email("Invalid email address."),
  username: z.string().min(3, "Username must be at least 3 characters."),
  bio: z.string().min(3, "Bio must be at least 3 characters."),
  website: z.string().url("Invalid URL").optional().or(z.literal("")),
  twitter: z.string().optional(),
  instagram: z.string().optional(),
  linkedin: z.string().optional(),
  image: z.string().optional(),
  coverImage: z.string().optional(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

interface ProfileFormProps {
  user: {
    name?: string | null;
    email?: string | null;
    username?: string | null;
    bio?: string | null;
    website?: string | null;
    twitter?: string | null;
    instagram?: string | null;
    linkedin?: string | null;
    image?: string | null;
    coverImage?: string | null;
  };
}

const uploadImage = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to upload image");
  }

  const data = await response.json();
  return data.url;
};

export function ProfileForm({ user }: ProfileFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: user.name || "",
      email: user.email || "",
      username: user.username || "",
      bio: user.bio || "",
      website: user.website || "",
      twitter: user.twitter || "",
      instagram: user.instagram || "",
      linkedin: user.linkedin || "",
      image: user.image || "",
      coverImage: user.coverImage || "",
    },
  });

  // Update form values when user prop changes
  useEffect(() => {
    form.reset({
      name: user.name || "",
      email: user.email || "",
      username: user.username || "",
      bio: user.bio || "",
      website: user.website || "",
      twitter: user.twitter || "",
      instagram: user.instagram || "",
      linkedin: user.linkedin || "",
      image: user.image || "",
      coverImage: user.coverImage || "",
    });
  }, [user]);

  async function onSubmit(data: ProfileFormValues) {
    setIsLoading(true);

    try {
      const { image, coverImage, ...rest } = data;

      if (image && typeof image !== "string") {
        data.image = await uploadImage(image);
      }

      if (coverImage && typeof coverImage !== "string") {
        data.coverImage = await uploadImage(coverImage);
      }

      const response = await fetch("/api/user/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.text();
      console.log("API Response:", response.status, result);

      if (!response.ok) throw new Error(result || "Failed to update profile");

      toast.success("Profile updated");
      router.refresh();
    } catch (error: any) {
      console.error("Error:", error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <div className="flex w-full gap-3">
            <FormField
              disabled
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Profile Picture</FormLabel>
                  <FormControl>
                    <div className="space-y-3">
                      <Avatar className="h-40 w-40 rounded-md border">
                        <AvatarImage
                          src={
                            typeof field.value === "string"
                              ? field.value
                              : user.image
                          }
                          alt="Profile"
                        />
                        <AvatarFallback>{user.name?.[0] || "D"}</AvatarFallback>
                      </Avatar>
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex-1">
              <FormField
                control={form.control}
                name="coverImage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cover Image</FormLabel>
                    <FormControl>
                      <div className="relative h-40 w-full overflow-hidden rounded-lg">
                        <img
                          src="/placeholder.svg"
                          alt="Cover"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-3">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Your username" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display username.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    disabled
                    placeholder="Your email"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is the email associated with your account.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea placeholder="Your Bio" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display bio.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-3">
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <Input placeholder="https://yourwebsite.com" {...field} />
                </FormControl>
                <FormDescription>
                  Your personal or professional website.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="twitter"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Twitter</FormLabel>
                <FormControl>
                  <Input placeholder="Your Twitter username" {...field} />
                </FormControl>
                <FormDescription>
                  Your Twitter username without the @ symbol.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-3">
          <FormField
            control={form.control}
            name="instagram"
            render={({ field }) => (
              <FormItem>
                <FormLabel>GitHub</FormLabel>
                <FormControl>
                  <Input placeholder="Your Instagram username" {...field} />
                </FormControl>
                <FormDescription>Your GitHub username.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="linkedin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>LinkedIn</FormLabel>
                <FormControl>
                  <Input placeholder="Your LinkedIn profile URL" {...field} />
                </FormControl>
                <FormDescription>Your LinkedIn profile URL.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" disabled={isLoading}>
          {isLoading && <DIcons.Loader className="mr-2 h-4 w-4 animate-spin" />}
          Update profile
        </Button>
      </form>
    </Form>
  );
}
