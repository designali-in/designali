"use client";

import dynamic from "next/dynamic";

const AddCommentForm = dynamic(() => import("./AddCommentForm"), {
  ssr: false,
  loading: () => null,
});

const AddCommentClient = ({ postId }: { postId: string }) => {
  return <AddCommentForm postId={postId} />;
};

export default AddCommentClient;
