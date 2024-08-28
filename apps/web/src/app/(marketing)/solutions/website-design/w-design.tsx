import Link from "next/link";
import { ImageZoomThree } from "@/components/common/gallery";
import cloudinary from "@/lib/cloudinary";
import { Button } from "@designali/ui/button";

export default async function Logos() {
  const data = await cloudinary.v2.search
    .expression(`folder:creatives/uiux/*`)
    .sort_by("created_at", "desc")
    .max_results(3)
    .execute();

  return (
    <main className="mt-10">
      <div className="flex justify-center">
        <h1 className="inline-flex items-baseline bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text py-6 text-xl font-semibold text-transparent dark:bg-gradient-to-r dark:from-slate-400 dark:via-slate-200 dark:to-slate-400 dark:bg-clip-text sm:text-3xl">
          Past Works
        </h1>
      </div>
      <ImageZoomThree images={data.resources} />
      <Link className="mt-10 flex justify-center" href={"/works"}>
        <Button variant="outline">See More Works</Button>
      </Link>
    </main>
  );
}
