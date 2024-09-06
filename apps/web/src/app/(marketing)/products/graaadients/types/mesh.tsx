import { Grid5 } from "@/components/common/gallery";
import cloudinary from "@/lib/cloudinary";

export async function Grad1() {
  const data = await cloudinary.v2.search
    .expression(`folder:products/graaadients/*`)
    .sort_by("created_at", "desc")
    .max_results(400)
    .execute();

  return (
    <main>
      <Grid5 images={data.resources} />
    </main>
  );
}
