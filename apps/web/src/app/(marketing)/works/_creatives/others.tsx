import { Grid2 } from "@/comp/common/gallery";
import cloudinary from "@/lib/cloudinary";

export default async function Home() {
  const data = await cloudinary.v2.search
    .expression(`folder:creatives/others/*`)
    .sort_by("created_at", "desc")
    .max_results(400)
    .execute();

  return (
    <main className="">
      <Grid2 images={data.resources} />
    </main>
  );
}
