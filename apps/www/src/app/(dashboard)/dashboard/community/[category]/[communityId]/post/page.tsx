import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CreatePostClient from "@/components/dashboard/community/post/CreatePostClient";

import { env } from "@/env";
import { prisma } from "@/lib/db";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Create a post",
  description:
    "Share your thoughts and ideas with the community by creating a post. Engage with other users through comments and likes on your posts and discover diverse perspectives.",
};

interface CreatePostPageProps {
  params: {
    communityId: string;
    category: string;
  };
}

const CreatePostPage = async ({ params }: CreatePostPageProps) => {
  const { category, communityId } = params;

  const community = await prisma.community.findFirst({
    where: {
      id: communityId,
    },
    select: {
      name: true,
    },
  });

  if (!community) {
    notFound();
  }

  const formattedHastag = community.name.toLowerCase().split(" ").join("-");

  const formattedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  const formattedHref = `/dashboard/community/${category}/${communityId}`;

  return (
    <div>
      <Card className="flex h-full flex-col">
        <CardHeader className="flex-1">
          <CardTitle>Create a new post</CardTitle>
          <CardDescription className="line-clamp-2">
            This post will be displayed in the{" "}
            <span className="font-semibold">#{formattedHastag}</span> community.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CreatePostClient
            category={formattedCategory}
            communityId={communityId}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default CreatePostPage;
