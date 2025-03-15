/* eslint-disable react/jsx-key */
"use client";

import { PhotoProvider, PhotoView } from "react-photo-view";

import "react-photo-view/dist/react-photo-view.css";

import { Photo } from "@/types/Images";
import Image from "next/image";
import { Button } from "../../ui/button";
import Link from "next/link";

type Props = {
  photo: Photo;
};

const ImageContainer = ({ photo }: Props) => {
  return (
    <div className="cursor-zoom-in">
      <PhotoView src={photo.src.original}>
        <Image
          src={photo.src.large}
          alt={photo.alt}
          loading="lazy"
          width={300}
          height={300}
          className="h-[300px] w-full rounded-2xl object-cover"
        />
      </PhotoView>
    </div>
  );
};

type PhotoProps = {
  photosWithBlur: Photo[];
};

const ImageContainer2 = ({ photosWithBlur }: PhotoProps) => {
  return (
    <div className=" ">
      <PhotoProvider
        toolbarRender={({ images, index }) => {
          const currentPhoto = images[index];
          const downloadUrl = currentPhoto?.src || "#"; // Fallback URL if undefined

          return (
            <>
              <Link href={downloadUrl} download={true} target="_blank">
                <Button className="h-8" disabled={downloadUrl === "#"}>
                  Download Full HD
                </Button>
              </Link>
            </>
          );
        }}
      >
        <div className="">
          <div className="gap-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {photosWithBlur.map((photo) => (
              <ImageContainer key={photo.id} photo={photo} />
            ))}
          </div>
        </div>
      </PhotoProvider>
    </div>
  );
};
 

export { ImageContainer, ImageContainer2 };
