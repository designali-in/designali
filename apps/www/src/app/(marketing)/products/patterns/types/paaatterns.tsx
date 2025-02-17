import Link from "next/link";
import { Grid5 } from "@/comp/common/gallery";
import { Button } from "@/registry/default/ui/button";

import cloudinary from "@/lib/cloudinary";

export async function Paaatterns() {
  const data = await cloudinary.v2.search
    .expression(`folder:products/patterns/paaatterns/*`)
    .sort_by("created_at", "desc")
    .max_results(400)
    .execute();

  return (
    <main>
      <div className="mb-6 grid justify-center gap-4">
        <Button variant="default" size="lg">
          <Link
            href="https://www.ls.graphics/products/paaatterns"
            target="_blank"
            className=""
          >
            Download Full Pack
          </Link>
        </Button>
      </div>
      <Grid5 images={data.resources} />
    </main>
  );
}
