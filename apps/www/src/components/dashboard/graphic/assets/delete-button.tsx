"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function DeleteAssetButton({ assetId }: { assetId: string }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this asset?")) {
      setIsDeleting(true);
      try {
        const response = await fetch(`/api/assets/${assetId}`, {
          method: "DELETE",
        });

        if (response.ok) {
          router.push("/graphic");
          router.refresh();
        } else {
          console.error("Failed to delete asset");
        }
      } catch (error) {
        console.error("Error deleting asset:", error);
      } finally {
        setIsDeleting(false);
      }
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleDelete}
      disabled={isDeleting}
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  );
}
