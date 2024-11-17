import Link from "next/link";
import CommunityClient from "@/comp/dashboard/admin/community/CommunityClient";

import { INFINITE_SCROLLING_PAGINATION_RESULTS } from "@/lib/constants";
import { prisma } from "@/lib/db";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const CommunityPage = async () => {
  const initialCommunities = await prisma.community.findMany({
    take: INFINITE_SCROLLING_PAGINATION_RESULTS,
    orderBy: {
      post: {
        _count: "desc",
      },
    },
    include: {
      post: true,
      creator: true,
    },
  });

  return (
    <div className="space-y-3">
      <h1 className="py-4 text-2xl font-semibold">Communities</h1>

      <Link
        href="/dashboard/community/create"
        className={cn(buttonVariants(), "w-fit")}
      >
        Create your own community
      </Link>
      <CommunityClient initialCommunities={initialCommunities} />
    </div>
  );
};

export default CommunityPage;
