import Link from "next/link";
import { notFound } from "next/navigation";
import CommunityClient from "@/comp/dashboard/admin/community/CommunityClient";
import { categories } from "@/data/community";

import { INFINITE_SCROLLING_PAGINATION_RESULTS } from "@/lib/constants";
import { prisma } from "@/lib/db";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface CommunityCategoryPageProps {
  params: {
    category: string;
  };
}

// eslint-disable-next-line @typescript-eslint/require-await
export async function generateStaticParams() {
  const categories = ["general", "agency", "manga", "question", "feedback"];

  return categories.map((category) => ({
    category,
  }));
}

const CommunityCategoryPage = async ({
  params,
}: CommunityCategoryPageProps) => {
  const { category } = params;
  const formattedCategory = category[0].toUpperCase() + category.slice(1);

  const categoryValidation = categories.find(
    (category) => category.label === formattedCategory,
  );

  if (!categoryValidation) {
    notFound();
  }

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
    where: {
      category: formattedCategory,
    },
  });

  return (
    <div className="px-1">
      <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
        {formattedCategory} Communities
      </h1>
      <Link
        href="/dashboard/community/create"
        className={cn(buttonVariants(), "w-fit")}
      >
        Create your own community
      </Link>
      <CommunityClient
        initialCommunities={initialCommunities}
        category={formattedCategory}
      />
    </div>
  );
};

export default CommunityCategoryPage;
