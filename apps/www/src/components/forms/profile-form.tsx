 
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { DIcons } from "dicons";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
  summary: z.string().min(3, "Summary must be at least 10 characters."),
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
    summary?: string | null;
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
  const [isUsernameEditable, setIsUsernameEditable] = useState(false);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: user.name || "",
      email: user.email || "",
      username: user.username || "",
      bio: user.bio || "",
      summary: user.summary || "",
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
      summary: user.summary || "",
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
          <div className="grid w-full gap-3 md:flex">
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
                              : user.image || undefined
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
            <div className="md:flex-1">
              <FormField
                control={form.control}
                name="coverImage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cover Image</FormLabel>
                    <FormControl>
                      <div className="relative h-40 w-full overflow-hidden rounded-lg">
                        <img
                          src="/images/products/3dbg.jpg"
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
        <div className="grid w-full gap-3 md:flex">
          <div className="grid gap-3 ">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your username"
                      {...field}
                      disabled={!isUsernameEditable}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your public display username.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-2">
              <Checkbox
                id="edit-username"
                checked={isUsernameEditable}
                onCheckedChange={() =>
                  setIsUsernameEditable(!isUsernameEditable)
                }
              />
              <Label className="text-sm" htmlFor="edit-username">
                Edit Username
              </Label>
            </div>
          </div>
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
          <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea className="field-sizing-content max-w-60 max-h-10 min-h-10 resize-none py-2" placeholder="Your Bio" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display bio.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>

        
        <FormField
          control={form.control}
          name="summary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Summary</FormLabel>
              <FormControl>
                <Textarea className="h-40" placeholder="Your summary" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display summary.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid w-full gap-3 md:flex">
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <Input
                    className="w-full md:w-80"
                    placeholder="https://designali.in"
                    {...field}
                  />
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
                  <Input
                    className="w-full md:w-80"
                    placeholder="Your Twitter username"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Your Twitter username without the @ symbol.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid w-full gap-3 md:flex">
          <FormField
            control={form.control}
            name="instagram"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Instagram</FormLabel>
                <FormControl>
                  <Input
                    className="w-full md:w-80"
                    placeholder="Your Instagram username"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Your Instagram username.</FormDescription>
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
                  <Input
                    className="w-full md:w-80"
                    placeholder="Your LinkedIn profile URL"
                    {...field}
                  />
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
