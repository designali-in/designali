import type { Metadata } from "next";
import CreateCommunityClient from "@/comp/dashboard/admin/community/CreateCommunityClient";

import { env } from "@/env";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Create a community",
  description:
    "Bring like-minded individuals together by creating a community with specific hashtags. Share and engage with others who share your interests.",
};

const page = () => {
  return (
    <div>
      <Card className="flex h-full flex-col">
        <CardHeader className="flex-1">
          <CardTitle>Create a community</CardTitle>
          <CardDescription className="line-clamp-2">
            Create a community for your interests.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CreateCommunityClient />
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
