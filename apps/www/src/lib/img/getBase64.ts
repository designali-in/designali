import type { Photo, ImagesResults } from "@/types/Images";
 

export default async function addBlurredDataUrls(
  images: ImagesResults
): Promise<Photo[]> {
  const photosWithBlur: Photo[] = images.photos.map((photo, i) => {
    return photo;
  });

  return photosWithBlur;
}
