import { fetchImages } from "@/lib/img/fetchImages";
import type { ImagesResults } from "@/types/Images";
import { ImageContainer2 } from "./imageContainer";
import addBlurredDataUrls from "@/lib/img/getBase64";
import getPrevNextPages from "@/lib/img/getPrevNextPages";
import Footer from "./Footer";
import Search from "./Search";

type Props = {
  topic?: string | undefined;
  page?: string | undefined;
};
const perPage = 100;
const Gallery = async ({ topic = "curated", page }: Props) => {
  let url;
  if (topic === "curated" && page) {
    // browsing beyond home
    url = `https://api.pexels.com/v1/curated?page=${page}&per_page=${perPage}`;
  } else if (topic === "curated") {
    // home
    url = `https://api.pexels.com/v1/curated?per_page=${perPage}`;
  } else if (!page) {
    // 1st page of search results
    url = `https://api.pexels.com/v1/search?query=${topic}&per_page=${perPage}`;
  } else {
    // search result beyond 1st page
    url = `https://api.pexels.com/v1/search?query=${topic}&page=${page}&per_page=${perPage}`;
  }
  const images: ImagesResults | undefined = await fetchImages(url);
  if (!images || Number(images.per_page) === 0) {
    return (
      <div className="w-full text-center">
        <h2 className="m-4 text-2xl h-[600px] font-bold">Not Found</h2>
        <p>No images found</p>
      </div>
    );
  }

  const photosWithBlur = await addBlurredDataUrls(images);

  const { prevPage, nextPage } = getPrevNextPages(images);

  const footerProps = { topic, page, nextPage, prevPage };

  return (
    <>
      <Search />
      <ImageContainer2 photosWithBlur={photosWithBlur} />
      <Footer {...footerProps} />
    </>
  );
};

export default Gallery;
