import { AssetGridLobby } from "@/src/components/dashboard/graphic/assets/asset-grid";
import { prisma } from "@/lib/db";

const BrowseAssetsLobby = async () => {
  const assets = await prisma.asset.findMany({
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
      <AssetGridLobby assets={formattedAssets} availableTags={availableTags} />
    </div>
  );
};

export default BrowseAssetsLobby;
