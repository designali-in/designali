"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ImageZoom from "@/src/components/common/image-zoom";

type ImageType = {
  url: string;
  description?: string;
};

export function Lummi() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <FeaturesAndGallerySection />
      </main>
    </div>
  );
}

function FeaturesAndGallerySection() {
  const [images, setImages] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/lummi/random-images");
      const data = await response.json();
      if (Array.isArray(data)) {
        setImages(data);
      } else {
        console.error("Unexpected response format:", data);
        setImages([]);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
      setImages([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="features" className="">
      {isLoading ? (
        <div className="text-center mt-20">Loading gallery...</div>
      ) : (
        <AnimatedGallery images={images} />
      )}
    </section>
  );
}

function AnimatedGallery({ images }: { images: ImageType[] }) {
  if (images.length === 0) {
    return <div className="text-center">No images available</div>;
  }

  return (
    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
      {images.map((image, index) => (
        <div key={index} className="break-inside-avoid mb-4">
          <ImageZoom>
            <img
              src={image.url}
              alt={image.description || `Image ${index + 1}`}
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </ImageZoom>
        </div>
      ))}
    </div>
  );
}
