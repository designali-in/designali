"use client";

import type { ReviewLike, Reviews, User } from "@prisma/client";
import type { Session } from "next-auth";
import dynamic from "next/dynamic";

const ReviewInfiniteFetching = dynamic(() => import("./Reviews"), {
  ssr: false,
  loading: () => null,
});

type ExtendedReview = Reviews & {
  user: User;
  reviewLikes: ReviewLike[];
};

interface ReviewsProps {
  initialReviews: ExtendedReview[];
  graphicId: string;
  session: Session | null;
}

const ReviewClient = ({ graphicId, initialReviews, session }: ReviewsProps) => {
  return (
    <ReviewInfiniteFetching
      graphicId={graphicId}
      initialReviews={initialReviews}
      session={session}
    />
  );
};

export default ReviewClient;
