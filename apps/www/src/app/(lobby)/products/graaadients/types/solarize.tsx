import Link from "next/link";
import { Grid5 } from "@/components/common/gallery";
import { Button } from "@/components/ui/button";

import cloudinary from "@/lib/cloudinary";
import { getCurrentUser } from "@/lib/session";

export async function Solarize() {
  const user = await getCurrentUser();
  const data = await cloudinary.v2.search
    .expression(`folder:products/graaadients/solarize/*`)
    .sort_by("created_at", "desc")
    .max_results(400)
    .execute();

  return (
    <main>
      <div className="mb-6 grid justify-center gap-4">
        {user ? (
          <div className="flex flex-wrap  justify-center gap-2">
            <Link href="/graphic">
              <Button variant="outline" size="lg">
                Download from Graphics
              </Button>
            </Link>
            <Button variant="default" size="lg">
              <Link
                href="https://www.jiocloud.com/l/?u=huds7GZPRM2xIizDjSEP9XZ8OpAbGptSes-qMggXDAM=o8v"
                target="_blank"
                className=""
              >
                Download Full Pack
              </Link>
            </Button>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/graphic">
              <Button variant="outline" size="lg">
                Download from Graphics
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" size="lg">
                Login to Download
                <span className="sr-only">Buy now</span>
              </Button>
            </Link>
          </div>
        )}
      </div>
      <Grid5 images={data.resources} />
    </main>
  );
}
