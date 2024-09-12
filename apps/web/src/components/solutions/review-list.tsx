"use client";

import type { Review } from "@/types";
import type { SubmitHandler } from "react-hook-form";
import type { z } from "zod";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Rating } from "@/components/admin/product/rating";
import {
  createUpdateReview,
  getReviews,
  getUserReviewByProductId,
} from "@/lib/actions/review.actions";
import { reviewFormDefaultValues } from "@/lib/constant/constants";
import { formatDateTime } from "@/lib/dutils";
import { insertReviewSchema } from "@/lib/validator";
import { Button } from "@designali/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@designali/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@designali/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@designali/ui/form";
import { Input } from "@designali/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@designali/ui/select";
import { Separator } from "@designali/ui/separator";
import { Textarea } from "@designali/ui/textarea";
import { useToast } from "@designali/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar, Check, StarIcon, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { useInView } from "react-intersection-observer";

import { Icons } from "../icons";

export default function ReviewList({
  userId,
  productId,
  productSlug,
}: {
  userId: string;
  productId: string;
  productSlug: string;
}) {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [reviews, setReviews] = useState<Review[]>([]);
  const { ref, inView } = useInView();
  const reload = async () => {
    try {
      const res = await getReviews({ productId, page: 1 });
      setReviews([...res.data]);
      setTotalPages(res.totalPages);
    } catch (err) {
      toast({
        variant: "destructive",
        description: "Error in fetching reviews",
      });
    }
  };
  useEffect(() => {
    const loadMoreReviews = async () => {
      if (page === totalPages) return;
      const res = await getReviews({ productId, page });
      setReviews([...reviews, ...res.data]);
      setTotalPages(res.totalPages);
      if (page < res.totalPages) {
        setPage(page + 1);
      }
    };
    if (inView) {
      loadMoreReviews();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  type CustomerReview = z.infer<typeof insertReviewSchema>;

  const form = useForm<CustomerReview>({
    resolver: zodResolver(insertReviewSchema),
    defaultValues: reviewFormDefaultValues,
  });
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const onSubmit: SubmitHandler<CustomerReview> = async (values) => {
    const res = await createUpdateReview({ ...values, productId });
    if (!res.success)
      return toast({
        variant: "destructive",
        description: res.message,
      });
    setOpen(false);
    reload();
    toast({
      description: res.message,
    });
  };

  const handleOpenForm = async () => {
    form.setValue("productId", productId);
    form.setValue("userId", userId);
    const review = await getUserReviewByProductId({ productId });
    if (review) {
      form.setValue("title", review.title);
      form.setValue("description", review.description);
      form.setValue("rating", review.rating);
    }
    setOpen(true);
  };

  return (
    <div className="grid justify-center space-y-6">
      {reviews.length === 0 && (
        <div className="text-center">No reviews yet</div>
      )}
      {userId ? (
        <Dialog open={open} onOpenChange={setOpen}>
          <Button
            className="mx-auto max-w-sm"
            onClick={handleOpenForm}
            variant="default"
          >
            <div className="flex gap-2">
              <Icons.pen strokeWidth={1} className="h-5 w-5" />
              <p>Write a review</p>
            </div>
          </Button>

          <DialogContent className="sm:max-w-[425px]">
            <Form {...form}>
              <form method="post" onSubmit={form.handleSubmit(onSubmit)}>
                <DialogHeader>
                  <DialogTitle>Write a review</DialogTitle>
                  <DialogDescription>
                    share your thoughts with other customers
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="flex flex-col gap-5">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter title" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea
                              className="h-40"
                              placeholder="Enter description"
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
                      name="rating"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Rating</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value.toString()}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a rating" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {Array.from({ length: 5 }).map((_, index) => (
                                <SelectItem
                                  key={index}
                                  value={(index + 1).toString()}
                                >
                                  <div className="flex items-center gap-1">
                                    {index + 1} <StarIcon className="h-4 w-4" />
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <DialogFooter>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      ) : (
        <div>
          Please
          <Link
            className="px-2 text-primary"
            href={`/api/auth/signin?callbackUrl=/product/${productSlug}`}
          >
            sign in
          </Link>
          to write a review
        </div>
      )}

      <div className="grid gap-3 md:grid-cols-2">
        {reviews.slice(0, 2).map((review) => (
          <Card className="h-full w-full" key={review.id}>
            <CardHeader>
              <div className="flex justify-between">
                <CardTitle>{review.title}</CardTitle>
                <div className="flex items-center gap-1 text-sm italic text-green-500">
                  <Check className="h-4 w-4" />
                  {""} Verified Purchase
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="h-[200px] py-4 text-xs md:h-[100px]">
                {review.description}
              </p>
            </CardContent>
            <Separator />
            <div className="grid gap-y-3 p-6 text-sm text-muted-foreground md:flex md:w-full md:justify-between">
              <Rating value={review.rating} />
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1">
                  <User className="h-3 w-3" />
                  {review.user ? review.user.name : "Deleted User"}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {formatDateTime(review.createdAt).dateOnly}
                </div>
              </div>
            </div>
          </Card>
        ))}
        <div ref={ref}>{page < totalPages && "Loading..."}</div>
      </div>
    </div>
  );
}
