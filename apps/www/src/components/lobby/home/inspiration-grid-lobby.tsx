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
 

  return (
    <div className="">
      <InspirationGridLobby 
        inspirations={formattedAssets}
        isLiked={false}
      />
    </div>
  );
};

export default BrowseInspirationLobby;
