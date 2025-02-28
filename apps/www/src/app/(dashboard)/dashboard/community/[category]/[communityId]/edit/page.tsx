import { notFound } from "next/navigation";
import UpdateCommunityClient from "@/components/dashboard/community/post/UpdateCommunityClient";

import { prisma } from "@/lib/db";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CommunityEditPageProps {
  params: {
    communityId: string;
  };
}

const CommunityEditPage = async ({ params }: CommunityEditPageProps) => {
  const { communityId } = params;

  const community = await prisma.community.findFirst({
    where: {
      id: communityId,
    },
  });

  if (!community) {
    notFound();
  }

  return (
    <div>
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Update community</CardTitle>
          <CardDescription>
            Update the content of this community.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <UpdateCommunityClient community={community} />
        </CardContent>
      </Card>
    </div>
  );
};

export default CommunityEditPage;
