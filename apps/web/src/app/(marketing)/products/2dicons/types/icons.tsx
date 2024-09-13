import { Grid8GapBG } from "@/components/common/gallery";
import cloudinary from "@/lib/cloudinary";

export default async function Icons() {
  const data = await cloudinary.v2.search
    .expression(`folder:products/2dicons/orange/*`)
    .sort_by("created_at", "desc")
    .max_results(400)
    .execute();

  return (
    <main className="">
      <Grid8GapBG images={data.resources} />
    </main>
  );
}
