"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function EditAssetPage({ params }: { params: { id: string } }) {
  const [asset, setAsset] = useState<any>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [downloadlink, setDownloadlink] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchAsset = async () => {
      try {
        const response = await fetch(`/api/assets/${params.id}`);
        if (response.ok) {
          const data = await response.json();
          setAsset(data);
          setTitle(data.title);
          setDescription(data.description || "");
          setDownloadlink(data.downloadlink || "");
        } else {
          console.error("Failed to fetch asset");
        }
      } catch (error) {
        console.error("Error fetching asset:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAsset();
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const response = await fetch(`/api/assets/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description, downloadlink }),
      });

      if (response.ok) {
        router.push(`/graphic/assets/${params.id}`);
        router.refresh();
      } else {
        console.error("Failed to update asset");
      }
    } catch (error) {
      console.error("Error updating asset:", error);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <div className="my-40 min-h-screen text-center">Loading...</div>;
  }

  if (!asset) {
    return (
      <div className="my-40 min-h-screen text-center">Asset not found</div>
    );
  }

  return (
    <div className="mx-auto my-40 max-w-7xl px-4 py-8">
      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle>Edit Asset</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <Input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="downloadlink"
                className="block text-sm font-medium text-gray-700"
              >
                Download Link
              </label>
              <Input
                id="downloadlink"
                type="text"
                value={downloadlink}
                onChange={(e) => setDownloadlink(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSaving}>
              {isSaving ? "Saving..." : "Save Changes"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
