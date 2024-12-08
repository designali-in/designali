import { Grid5 } from "@/comp/common/gallery";

import cloudinary from "@/lib/cloudinary";

export async function Solarize() {
  const data = await cloudinary.v2.search
    .expression(`folder:products/graaadients/solarize/*`)
    .sort_by("created_at", "desc")
    .max_results(400)
    .execute();

  return (
    <main>
      <Grid5 images={data.resources} />
    </main>
  );
}
