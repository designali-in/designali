"use client";

import { PhotoProvider, PhotoView } from "react-photo-view";

import "react-photo-view/dist/react-photo-view.css";

import { CldImage } from "next-cloudinary";

import ImageZoom from "./image-zoom";

export function Grid2({ images }: { images: any }) {
  return (
    <>
      <PhotoProvider>
        <div className="grid items-stretch gap-2 md:grid-cols-2">
          {images.map((image: any) => (
            <PhotoView src={image.secure_url}>
              <CldImage
                src={image.secure_url}
                alt={image.secure_url}
                loading="lazy"
                width={700}
                height={600}
                className="rounded-xl object-cover hover:cursor-zoom-in hover:saturate-0"
              />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </>
  );
}

export function Grid3({ images }: { images: any }) {
  return (
    <>
      <PhotoProvider>
        <div className="grid grid-cols-2 items-stretch gap-2 md:grid-cols-3">
          {images.map((image: any) => (
            <PhotoView src={image.secure_url}>
              <CldImage
                src={image.secure_url}
                alt={image.secure_url}
                loading="lazy"
                width={500}
                height={500}
                className="rounded-xl object-cover hover:cursor-zoom-in hover:saturate-0"
              />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </>
  );
}

export function Grid4({ images }: { images: any }) {
  return (
    <>
      <PhotoProvider>
        <div className="grid grid-cols-2 items-stretch gap-2 md:grid-cols-4">
          {images.map((image: any) => (
            <PhotoView src={image.secure_url}>
              <CldImage
                src={image.secure_url}
                alt={image.secure_url}
                loading="lazy"
                width={400}
                height={400}
                className="rounded-xl object-cover hover:cursor-zoom-in hover:saturate-0"
              />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </>
  );
}

export function Grid5({ images }: { images: any }) {
  return (
    <>
      <PhotoProvider>
        <div className="grid grid-cols-2 items-stretch gap-2 md:grid-cols-5">
          {images.map((image: any) => (
            <PhotoView src={image.secure_url}>
              <CldImage
                src={image.secure_url}
                alt={image.secure_url}
                loading="lazy"
                width={300}
                height={300}
                className="rounded-xl object-cover hover:cursor-zoom-in hover:saturate-0"
              />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </>
  );
}

export function Grid5BG({ images }: { images: any }) {
  return (
    <>
      <PhotoProvider>
        <div className="grid grid-cols-2 items-stretch gap-2 md:grid-cols-5">
          {images.map((image: any) => (
            <PhotoView src={image.secure_url}>
              <CldImage
                src={image.secure_url}
                alt={image.secure_url}
                loading="lazy"
                width={300}
                height={300}
                className="rounded-xl border border-slate-200 bg-slate-100 object-cover hover:cursor-zoom-in hover:saturate-0 dark:border-slate-800 dark:bg-slate-900"
              />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </>
  );
}

export function Grid6({ images }: { images: any }) {
  return (
    <>
      <PhotoProvider>
        <div className="grid grid-cols-3 items-stretch gap-2 md:grid-cols-6">
          {images.map((image: any) => (
            <PhotoView src={image.secure_url}>
              <CldImage
                src={image.secure_url}
                alt={image.secure_url}
                loading="lazy"
                width={200}
                height={200}
                className="rounded-xl object-cover hover:cursor-zoom-in hover:saturate-0"
              />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </>
  );
}

export function IconsHome({ images }: { images: any }) {
  return (
    <>
      <div className="">
        {images.map((image: any) => (
          <CldImage
            src={image.secure_url}
            alt={image.secure_url}
            loading="lazy"
            width={200}
            height={200}
            className="rounded-xl hover:cursor-zoom-in hover:saturate-0"
          />
        ))}
      </div>
    </>
  );
}

export function ImageZoomTwo({ images }: { images: any }) {
  return (
    <>
      <div className="grid items-stretch gap-2 md:grid-cols-2">
        {images.map((image: any) => (
          <ImageZoom>
            <CldImage
              src={image.secure_url}
              alt={image.secure_url}
              loading="lazy"
              width={700}
              height={200}
              className="rounded-xl object-cover hover:cursor-zoom-in hover:saturate-0"
            />
          </ImageZoom>
        ))}
      </div>
    </>
  );
}

export function ImageZoomThree({ images }: { images: any }) {
  return (
    <>
      <div className="grid grid-cols-2 items-stretch gap-2 md:grid-cols-3">
        {images.map((image: any) => (
          <ImageZoom>
            <CldImage
              src={image.secure_url}
              alt={image.secure_url}
              loading="lazy"
              width={700}
              height={200}
              className="rounded-xl object-cover hover:cursor-zoom-in hover:saturate-0"
            />
          </ImageZoom>
        ))}
      </div>
    </>
  );
}
