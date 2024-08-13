import { Grid5BG } from "@/components/common/gallery";
import cloudinary from "@/lib/cloudinary";

export default async function Numbers() {
  const data = await cloudinary.v2.search
    .expression(`folder:products/3dicons/numbers/*`)
    .sort_by("created_at", "desc")
    .max_results(400)
    .execute();

  return (
    <main className="">
      <Grid5BG images={data.resources} />
    </main>
  );
}
