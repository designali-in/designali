"use client";

import type { ExtendedComment } from "@/types";
import dynamic from "next/dynamic";

import { CardFooter } from "@/components/ui/card";

const InfiniteComments = dynamic(() => import("./Comments"), {
  ssr: false,
  loading: () => null,
});

interface CommentsProps {
  initialComments: ExtendedComment[];
  postId: string;
}

const CommentClient = ({ initialComments, postId }: CommentsProps) => {
  return (
    <CardFooter className="border-t py-3">
      <InfiniteComments initialComments={initialComments} postId={postId} />
    </CardFooter>
  );
};

export default CommentClient;
