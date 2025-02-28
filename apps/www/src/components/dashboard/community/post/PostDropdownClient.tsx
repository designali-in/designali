"use client";

import type { ExtendedPost } from "@/types/global";
import dynamic from "next/dynamic";

import { Skeleton } from "@/components/ui/skeleton";

const PostDropdown = dynamic(() => import("./PostDropdown"), {
  ssr: false,
  loading: () => <Skeleton className="h-8 w-8" />,
});

interface PostDropdownProps {
  children: React.ReactNode;
  post: Pick<ExtendedPost, "id" | "creator" | "community">;
  sessionId: string;
}

const PostDropdownClient = ({
  children,
  post,
  sessionId,
}: PostDropdownProps) => {
  return (
    <PostDropdown post={post} sessionId={sessionId}>
      {children}
    </PostDropdown>
  );
};

export default PostDropdownClient;
