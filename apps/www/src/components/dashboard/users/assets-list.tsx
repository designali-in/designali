"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DeleteAssetModal } from "./delete-asset";
import { EditAssetModal } from "./edit-asset";
import { Button } from "@/components/ui/button";
import { Download, Eye, Heart, MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/use-toast";
import CldImage from "../../common/CloudImage";

interface Asset {
  id: string;
  title: string;
  description: string | null;
  url: string;
  downloadlink: string;
  downloads: number;
  views: number;
  likes: number;
  createdAt: string;
  tags: { id: string; name: string }[];
}

export function AssetsList() {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(5);

  const fetchAssets = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/assets");

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setAssets(data);
      setError(null);
    } catch (err) {
      console.error("Failed to fetch assets:", err);
      setError("Failed to load assets. Please try again.");
      toast({
        title: "Error",
        description: "Failed to load assets. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const handleDeleteAsset = async (id: string) => {
    try {
      const response = await fetch(`/api/assets/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      // Remove the asset from the state
      setAssets(assets.filter((asset) => asset.id !== id));

      toast({
        title: "Asset deleted",
        description: "Asset has been successfully deleted.",
      });
    } catch (err) {
      console.error("Failed to delete asset:", err);
      toast({
        title: "Error",
        description: "Failed to delete asset. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleEditAsset = async (id: string, updatedAsset: Partial<Asset>) => {
    try {
      const response = await fetch(`/api/assets/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: updatedAsset.title,
          description: updatedAsset.description,
          url: updatedAsset.url,
          downloadlink: updatedAsset.downloadlink,
          tags: updatedAsset.tags?.map((tag) => tag.name),
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();

      // Update the asset in the state
      setAssets(
        assets.map((asset) => (asset.id === id ? { ...asset, ...data } : asset))
      );

      toast({
        title: "Asset updated",
        description: "Asset has been successfully updated.",
      });
    } catch (err) {
      console.error("Failed to update asset:", err);
      toast({
        title: "Error",
        description: "Failed to update asset. Please try again.",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    fetchAssets();
  }, [fetchAssets]);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  if (loading) {
    return <div className="flex justify-center p-8">Loading assets...</div>;
  }

  if (error) {
    return (
      <div className="rounded-md bg-destructive/15 p-4 text-destructive">
        {error}
        <Button
          variant="outline"
          size="sm"
          className="ml-2"
          onClick={() => fetchAssets()}
        >
          Retry
        </Button>
      </div>
    );
  }

  if (assets.length === 0) {
    return (
      <div>
        <div className="rounded-md border p-8 text-center">
          <h3 className="text-lg font-medium">No assets found</h3>
          <p className="text-muted-foreground mt-2">
            You haven't created any assets yet. Click the "Create Asset" button
            to get started.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-md border overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-semibold">Your Assets</h2>
        <p className="text-sm text-muted-foreground">
          Manage and track your assets
        </p>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Tags</TableHead>
            <TableHead className="hidden md:table-cell">Created</TableHead>
            <TableHead className="text-center">
              <Eye className="h-4 w-4 inline mr-1" />
            </TableHead>
            <TableHead className="text-center">
              <Download className="h-4 w-4 inline mr-1" />
            </TableHead>
            <TableHead className="text-center">
              <Heart className="h-4 w-4 inline mr-1" />
            </TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assets.slice(0, visibleCount).map((asset) => (
            <TableRow key={asset.id}>
              <TableCell>
                <div className="flex flex-col">
                  <CldImage
                    src={asset.url || "/placeholder.svg"}
                    alt={asset.title}
                    height={40}
                    width={40}
                    className="h-20 w-20 rounded-sm object-cover"
                  />
                </div>
              </TableCell>
              <TableCell className="font-medium">{asset.title}</TableCell>
              <TableCell className="hidden md:table-cell">
                <div className="flex flex-wrap gap-1">
                  {asset.tags.map((tag) => (
                    <Badge key={tag.id} variant="outline">
                      {tag.name}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {new Date(asset.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell className="text-center">{asset.views}</TableCell>
              <TableCell className="text-center">{asset.downloads}</TableCell>
              <TableCell className="text-center">{asset.likes}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <a
                        href={`/graphic/assets/${asset.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View
                      </a>
                    </DropdownMenuItem>
                    <EditAssetModal
                      asset={asset}
                      onEdit={(updatedAsset) =>
                        handleEditAsset(asset.id, updatedAsset)
                      }
                    >
                      <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                        Edit
                      </DropdownMenuItem>
                    </EditAssetModal>
                    <DeleteAssetModal
                      assetId={asset.id}
                      assetTitle={asset.title}
                      onDelete={() => handleDeleteAsset(asset.id)}
                    >
                      <DropdownMenuItem
                        onSelect={(e) => e.preventDefault()}
                        className="text-destructive"
                      >
                        Delete
                      </DropdownMenuItem>
                    </DeleteAssetModal>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {visibleCount < assets.length && (
        <div className="flex justify-center p-3 mb-6">
          <Button onClick={loadMore}>Load More</Button>
        </div>
      )}
    </div>
  );
}
