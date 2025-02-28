//@ts-nocheck
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import PostClient from "@/components/dashboard/community/post/PostClient";

import { auth } from "@/lib/auth";
import { INFINITE_SCROLLING_PAGINATION_RESULTS } from "@/lib/constants";
import { prisma } from "@/lib/db";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface CommunityCategoryPageProps {
  params: {
    communityId: string;
  };
}

const CommunityCategoryPage = async ({
  params,
}: CommunityCategoryPageProps) => {
  const { communityId } = params;
  const session = await auth();

  const community = await prisma.community.findUnique({
    where: { id: communityId },
    include: {
      creator: true,
      post: {
        orderBy: {
          createdAt: "desc",
        },
        take: INFINITE_SCROLLING_PAGINATION_RESULTS,
        include: {
          comment: true,
          creator: true,
          like: true,
          community: true,
        },
      },
    },
  });

  if (!community) {
    notFound();
  }

  if (!session) {
    redirect("/sign-in");
  }

  const baseLink = `/dashboard/community/${community.category.toLowerCase()}`;

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-x-2">
        <Link
          href={`${baseLink}/${community.id}/post`}
          className={cn(buttonVariants({ size: "sm" }), "w-fit")}
        >
          Create a post
        </Link>
        {community.creator.id === session.user.id && (
          <Link
            href={`${baseLink}/${community.id}/edit`}
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "w-fit",
            )}
          >
            Edit details
          </Link>
        )}
      </div>
      <PostClient initialPosts={community.post} communityId={communityId} />
    </div>
  );
};

export default CommunityCategoryPage;
