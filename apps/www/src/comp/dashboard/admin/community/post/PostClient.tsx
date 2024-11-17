"use client";

import type { ExtendedPost } from "@/types";
import dynamic from "next/dynamic";

const Posts = dynamic(() => import("./Posts"), {
  ssr: false,
  loading: () => <div className="flex flex-col gap-y-4">sd</div>,
});

interface PostsProps {
  initialPosts: ExtendedPost[];
  communityId: string;
}

const PostClient = ({ communityId, initialPosts }: PostsProps) => {
  return <Posts initialPosts={initialPosts} communityId={communityId} />;
};

export default PostClient;
