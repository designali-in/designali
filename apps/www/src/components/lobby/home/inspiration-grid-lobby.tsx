import { InspirationGridLobby } from "@/src/components/dashboard/graphic/assets/inspiration-grid";
import { prisma } from "@/lib/db";

const BrowseInspirationLobby = async () => {
  const assets = await prisma.inspiration.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      likes: true,
      tags: true, // Include tags
    },
  });

  const formattedAssets = assets.map((asset) => ({
    ...asset,
    uploadedAt: asset.createdAt.toISOString(),
    tags: asset.tags.map((tag) => tag.name), // Extract tag names
  }));

  const tags = await prisma.tag.findMany();
  const availableTags = tags.map((tag) => tag.name);

  return (
    <div className="">
      <InspirationGridLobby
        availableTags={availableTags}
        inspirations={formattedAssets}
        isLiked={false}
      />
    </div>
  );
};

export default BrowseInspirationLobby;
