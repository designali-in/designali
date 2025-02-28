//@ts-nocheck
import type { ExtendedComment } from "@/types/global";
import type { FC } from "react";

import { formatTimeToNow } from "@/lib/utils";

import UserAvatar from "../../users/UserAvatar";

interface CommentCardProps {
  comment: ExtendedComment;
}

const CommentCard: FC<CommentCardProps> = ({ comment }) => {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const formattedName = comment.author.name?.split(" ")[0].toLowerCase();

  return (
    <div className="flex gap-x-2">
      <UserAvatar user={comment.author} className="h-6 w-6" />
      <div className="flex flex-col gap-y-1">
        <div className="font flex items-center gap-x-1 text-sm font-medium text-muted-foreground">
          <span>{`u/${formattedName}`}</span>
          <span>·</span>
          <span className="text-xs">
            {formatTimeToNow(new Date(comment.createdAt))}
          </span>
        </div>
        <p className="text-sm text-zinc-800 dark:text-zinc-300">
          {comment.text}
        </p>
      </div>
    </div>
  );
};

export default CommentCard;
