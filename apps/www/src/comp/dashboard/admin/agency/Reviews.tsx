import { auth } from "@/lib/auth";
import { INFINITE_SCROLLING_PAGINATION_ANIME } from "@/lib/constants";
import { prisma } from "@/lib/db";

import ReviewClient from "./ReviewClient";

interface ReviewsProps {
  graphicId: string;
}

const Reviews = async ({ graphicId }: ReviewsProps) => {
  const session = await auth();

  const reviews = await prisma.reviews.findMany({
    where: {
      graphicId,
    },
    include: {
      user: true,
      reviewLikes: true,
    },
    orderBy: {
      reviewLikes: {
        _count: "desc",
      },
    },
    take: INFINITE_SCROLLING_PAGINATION_ANIME,
  });

  return (
    <ReviewClient
      graphicId={graphicId}
      session={session}
      initialReviews={reviews}
    />
  );
};

export default Reviews;
