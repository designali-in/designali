import { Grid5BG } from "@/comp/common/gallery";
import cloudinary from "@/lib/cloudinary";

export default async function CapsWords() {
  const data = await cloudinary.v2.search
    .expression(`folder:products/3dicons/capswords/*`)
    .sort_by("created_at", "desc")
    .max_results(400)
    .execute();

  return (
    <main className="">
      <Grid5BG images={data.resources} />
    </main>
  );
}
