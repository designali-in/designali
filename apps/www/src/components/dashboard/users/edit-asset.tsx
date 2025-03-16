"use client";

import type React from "react";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import CldImage from "../../common/CloudImage";

interface Asset {
  id: string;
  title: string;
  description: string | null;
  url: string;
  downloadlink: string;
  tags: { id: string; name: string }[];
}

interface EditAssetModalProps {
  children: React.ReactNode;
  asset: Asset;
  onEdit: (updatedAsset: Partial<Asset>) => void;
}

export function EditAssetModal({
  children,
  asset,
  onEdit,
}: EditAssetModalProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: asset.title,
    description: asset.description || "",
    url: asset.url,
    downloadlink: asset.downloadlink,
    tags: asset.tags.map((tag) => tag.name).join(", "),
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const tagArray = formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag);

      const updatedAsset = {
        title: formData.title,
        description: formData.description,
        url: formData.url,
        downloadlink: formData.downloadlink,
        tags: tagArray.map((name) => ({ id: "", name })),
      };

      onEdit(updatedAsset);
      setOpen(false);
    } catch (error) {
      console.error("Failed to update asset:", error);
      toast({
        title: "Error",
        description: "Failed to update asset. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Edit Asset</DialogTitle>
            <DialogDescription>
              Update the details of your asset.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="edit-title">Title</Label>
              <Input
                id="edit-title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Asset title"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-description">Description</Label>
              <Textarea
                id="edit-description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your asset"
                rows={3}
              />
            </div>
            <div className="grid gap-2">
              <CldImage
                src={
                  (asset.url.includes(",")
                    ? asset.url.split(",")[0]
                    : asset.url) || "/placeholder.svg"
                }
                alt={asset.title}
                height={40}
                width={40}
                className="h-20 w-20 rounded-sm object-cover"
              />
              <Label htmlFor="edit-url">Image URL</Label>
              <Input
                id="edit-url"
                name="url"
                type="url"
                value={formData.url}
                onChange={handleChange}
                placeholder="https://example.com/asset"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-downloadlink">Download Link</Label>
              <Input
                id="edit-downloadlink"
                name="downloadlink"
                type="url"
                value={formData.downloadlink}
                onChange={handleChange}
                placeholder="https://example.com/download/asset"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-tags">Tags (comma separated)</Label>
              <Input
                id="edit-tags"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="3D, Design, UI, etc."
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Updating..." : "Update Asset"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
