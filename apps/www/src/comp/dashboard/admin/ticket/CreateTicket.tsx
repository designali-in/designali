"use client";

/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const categories = [
  {
    id: "logo",
    label: "Logo",
  },
  {
    id: "branding",
    label: "Branding",
  },
  {
    id: "web-design",
    label: "Web Design",
  },
  {
    id: "web-develop",
    label: "Web Develop",
  },
  {
    id: "social-media",
    label: "Social Media",
  },
  {
    id: "other",
    label: "Other Design",
  },
] as const;

const FormSchema = z.object({
  title: z.string().nonempty("Title is required."),
  message: z.string().nonempty("messages is required."),
  priority: z.string().optional(),
  category: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

interface Project {
  id: string;
  projectName: string;
  // projectInfo?: string | null;
  // techStack: string[];
  // projectUrl?: string | null;
  // githubUrl?: string | null;
  // completedTickets?: number | null;
  // tickets: Ticket[];
  // createdAt: Date;
  // updatedAt: Date;
  // userId?: string | null;
}

const CreateTicket = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      category: [],
    },
  });
  const router = useRouter();
  const { toast } = useToast();

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/project");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const handleSubmit = async (data: z.infer<typeof FormSchema>) => {
    setLoading(true);
    toast({
      title: "Loading...",
      description: (
        <div>Your request is currently being processed. Please wait</div>
      ),
    });

    try {
      if (projects[0]?.projectName) {
        const projectId = projects[0].id;
        const { title, message, category, priority } = data;
        const messages: string[] = [];
        messages[0] = message;
        const response = await fetch("/api/ticket", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            messages: messages,
            priority,
            category,
            projectId,
          }),
        });
      }

      router.push("/dashboard/agency/tickets");
      setLoading(false);
      toast({
        title: "Your ticket has been created!",
        description: <div>We will be start working</div>,
      });
    } catch (error) {
      toast({
        title: "Error!",
        description: (
          <div>We&apos;re experiencing an error. Please try again later.</div>
        ),
      });
    }
  };

  return (
    <div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="my-6 w-11/12 gap-12 md:w-6/12 md:gap-24"
          >
            <div className="my-6">
              <div className="mb-6 text-2xl font-semibold">
                {projects[0]?.projectName}
              </div>
              <FormField
                control={form.control}
                name="title"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel className="text-base">Title</FormLabel>
                      <FormDescription>Design title</FormDescription>
                      <Input {...form.register("title")} />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel className="text-base">Your Message</FormLabel>
                      <FormDescription>
                        Explain your ticket requirements in detail.
                      </FormDescription>

                      <Textarea
                        {...form.register("message")}
                        className="w-full rounded-md border p-2"
                      />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="priority"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Priority Level</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a priority level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>You can leave blank.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="category"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">Design Category</FormLabel>
                    <FormDescription>
                      What kind of a design you need
                    </FormDescription>
                  </div>
                  {categories.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="category"
                      render={({
                        field,
                      }: {
                        field: { value: any; onChange: Function };
                      }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([
                                        ...(field.value || []),
                                        item.id,
                                      ])
                                    : field.onChange(
                                        (field.value || []).filter(
                                          (value: any) => value !== item.id,
                                        ),
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-6 flex flex-col gap-3">
              <Button type="submit" disabled={loading}>
                Create
              </Button>
              <Button
                variant="outline"
                disabled={loading}
                onClick={() => router.push("/dashboard/agency")}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateTicket;
