import type { ExtendedPost } from "@/types/global";
import type { FC } from "react";
import Link from "next/link";
import { DIcons } from "dicons";

import { formatDescription } from "@/lib/utils";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import UserAvatar from "../../users/UserAvatar";

interface PostCardProps {
  post: ExtendedPost;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  const formattedCategory = post.community.category.toLowerCase();

  const href = `/dashboard/community/${formattedCategory}/${post.communityId}/post/${post.id}`;
  const trimmedMessage = formatDescription(post.message, 250);

  return (
    <Link href={href} className="group focus:outline-none">
      <Card className="focused relative flex h-full flex-col transition hover:border-neutral-100 dark:hover:border-neutral-900">
        <CardHeader className="flex flex-row gap-x-2 py-5">
          <UserAvatar className="mt-2 h-8 w-8" user={post.creator} />
          <div className="flex-1 space-y-2">
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>{trimmedMessage}</CardDescription>
            <div className="absolute bottom-1 right-5 md:bottom-2">
              <div className="mt-8 flex w-full items-center justify-end gap-x-1 ">
                <DIcons.Send className="h-3 w-3" />
                <span className="text-xs text-muted-foreground">
                  {post.comment.length}
                </span>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default PostCard;
