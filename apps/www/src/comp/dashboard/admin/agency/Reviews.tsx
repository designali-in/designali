import { auth } from "@/lib/auth";
import { INFINITE_SCROLLING_PAGINATION_ANIME } from "@/lib/constants";
import { prisma } from "@/lib/db";

import ReviewClient from "./ReviewClient";

interface ReviewsProps {
  graphicId: string;
  session: any; // Replace with appropriate session type
  initialReviews: any; // Replace with appropriate reviews type
}

const Reviews = ({ graphicId, session, initialReviews }: ReviewsProps) => {
  return (
    <ReviewClient
      graphicId={graphicId}
      session={session}
      initialReviews={initialReviews}
    />
  );
};

export async function getServerSideProps(context) {
  const session = await auth(context.req.headers);

  const reviews = await prisma.reviews.findMany({
    where: {
      graphicId: context.params.graphicId,
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

  return {
    props: {
      graphicId: context.params.graphicId,
      session,
      initialReviews: reviews,
    },
  };
}

export default Reviews;
