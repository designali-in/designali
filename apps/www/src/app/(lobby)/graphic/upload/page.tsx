"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TagInput } from "@/components/dashboard/graphic/assets/tags-input";
import { DIcons } from "dicons";
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function UploadPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [downloadlink, setDownloadlink] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [loading, setLoading] = useState(false); // Add loading state
  const [error, setError] = useState<string | null>(null);
  const [tags, setTags] = useState<string[]>([]);
  const router = useRouter();
  const { data: session } = useSession();

  const MAX_IMAGES = 4; // Maximum allowed images

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);

    if (files.length + selectedFiles.length > MAX_IMAGES) {
      setError(`You can only upload up to ${MAX_IMAGES} images.`);
      return;
    }

    const newFiles = selectedFiles.slice(0, MAX_IMAGES - files.length); // Restrict to max images
    setFiles((prev) => [...prev, ...newFiles]);

    const newPreviews = newFiles.map((file) => URL.createObjectURL(file));
    setPreviews((prev) => [...prev, ...newPreviews]);
    setError(null); // Clear error if valid
  };

  const handleRemoveImage = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleCancel = () => {
    router.push("/graphic");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session) return;

    if (files.length < 1) {
      setError("Please upload at least one image.");
      return;
    }

    setLoading(true); // Set loading to true before starting the upload

    const formData = new FormData();
    formData.append("title", title);
    formData.append("downloadlink", downloadlink);
    formData.append("description", description);
    files.forEach((file) => formData.append("files", file));
    formData.append("tags", JSON.stringify(tags));

    const response = await fetch("/api/assets/upload", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const asset = await response.json();
      console.log("Uploaded asset:", asset);
      router.push("/graphic");
    } else {
      console.error("Upload failed:", await response.text());
    }
  };

  if (!session) {
    return <div>Please sign in to upload assets.</div>;
  }

  return (
    <div className="mx-auto my-40 max-w-7xl px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-semibold">
        Upload New Assets
      </h1>
      <form onSubmit={handleSubmit} className="mx-auto max-w-md">
        <div className="mb-4">
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Asset Title*"
            required
          />
        </div>

        <div className="mb-4">
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Asset Description"
          />
        </div>
        <div className="mb-4">
          <Input
            type="text"
            value={downloadlink}
            onChange={(e) => setDownloadlink(e.target.value)}
            placeholder="Download Link*"
            required
          />
        </div>
        <div className="mb-4">
          <TagInput onTagsChange={setTags} initialTags={tags} />
        </div>
        <div className="mb-4">
          <Input
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            multiple
            required
          />
        </div>

        {previews.length > 0 && (
          <div className="mb-4 grid grid-cols-2 gap-4">
            {previews.map((preview, index) => (
              <div key={index} className="relative">
                <Image
                  src={preview || "/placeholder.svg"}
                  alt={`Preview ${index + 1}`}
                  width={200}
                  height={200}
                  className="aspect-square h-full w-full rounded-md border object-cover"
                />
                <Button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="bg-ali absolute right-2 top-2 h-6 w-6 rounded-full p-1 text-white"
                >
                  <DIcons.Close />
                </Button>
              </div>
            ))}
          </div>
        )}
        {error && <div className="text-ali mb-4">{error}</div>}
        <div className="flex gap-2">
          <Button type="button" onClick={handleCancel} variant="outline">
            Cancel
          </Button>
          <Button type="submit">
            {" "}
            {loading ? "Uploading..." : "Upload Assets"}
          </Button>
        </div>
      </form>
    </div>
  );
}
