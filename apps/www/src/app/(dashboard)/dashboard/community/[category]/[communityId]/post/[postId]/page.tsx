import { Suspense } from "react";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import AddCommentClient from "@/comp/dashboard/admin/community/post/AddCommentClient";
import Comments from "@/comp/dashboard/admin/community/post/Comments";
import LikePostClient from "@/comp/dashboard/admin/community/post/LikePostClient";
import PostDropdownClient from "@/comp/dashboard/admin/community/post/PostDropdownClient";
import { DIcons } from "dicons";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { cn, formatTimeToNow } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface IndividualPostPageProps {
  params: {
    postId: string;
    communityId: string;
    category: string;
  };
}

const IndividualPostPage = async ({ params }: IndividualPostPageProps) => {
  const { postId, category, communityId } = params;
  const session = await auth();

  if (!session) {
    redirect("/sign-in");
  }

  const post = await prisma.designPost.findFirst({
    where: {
      id: postId,
    },
    include: {
      like: true,
      creator: true,
      community: true,
    },
  });

  const commentCount = await prisma.comment.count({
    where: {
      postId,
    },
  });

  if (!post) {
    notFound();
  }

  const initialLike = !!post.like.find(
    (eachObj) => eachObj.userId === session.user.id,
  );

  const formattedName = post.creator.name.split(" ")[0].toLowerCase();

  return (
    <div>
      <Card>
        <CardHeader className="flex flex-col gap-y-2 border-b">
          <div className="grid gap-1">
            <div className="flex w-full items-center justify-between">
              <Link
                href={`/dashboard/community/${category}/${communityId}`}
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "w-fit px-0",
                )}
              >
                Go back
              </Link>
              <PostDropdownClient post={post} sessionId={session.user.id}>
                <Button variant="ghost" size="icon">
                  <DIcons.Menu className="h-4 w-4" />
                </Button>
              </PostDropdownClient>
            </div>
            <div>
              <span className="text-sm font-medium text-muted-foreground">
                Posted by {`u/${formattedName}`} ·{" "}
                {formatTimeToNow(new Date(post.createdAt))}
              </span>
              <h1 className="py-1 text-3xl font-bold tracking-tight md:text-4xl">
                {post.title}
              </h1>
            </div>
            <p className="text-md text-muted-foreground">{post.message}</p>
          </div>
          <div className="flex items-center gap-x-5">
            <div className="flex items-center gap-x-1">
              <DIcons.Send className="h-3.5 w-3.5" />
              <span className="text-sm text-muted-foreground">
                {commentCount.toLocaleString()}
              </span>
            </div>
            <LikePostClient
              likes={post.like.length}
              initialLike={initialLike}
              postId={post.id}
            />
          </div>
        </CardHeader>
        <CardContent className="flex w-full flex-col gap-y-4 py-5">
          <AddCommentClient postId={post.id} />
        </CardContent>
        <Suspense>
          <Comments postId={post.id} initialComments={[]} />
        </Suspense>
      </Card>
    </div>
  );
};

export default IndividualPostPage;
