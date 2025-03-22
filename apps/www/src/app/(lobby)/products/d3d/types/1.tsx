import Link from "next/link";
import { Grid5 } from "@/components/common/gallery";
import { Button } from "@/components/ui/button";

import cloudinary from "@/lib/cloud";
import { getCurrentUser } from "@/lib/session";

export async function Halftone() {
  const user = await getCurrentUser();
  const data = await cloudinary.search
    .expression(`folder:products/3dicons/icons/*`)
    .sort_by("created_at", "desc")
    .max_results(400)
    .execute();

  return (
    <main>
      <div className="mb-6 grid justify-center gap-4">
        {user ? (
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/graphic">
              <Button variant="outline" size="lg">
                Download from Graphics
              </Button>
            </Link>
            <Button variant="default" size="lg">
              <Link
                href="https://www.jioaicloud.com/l/?u=ZqxSQhckVQRBBUzo4QqeZiLt-VD2aqfByVm3zqFEZh4=hIb"
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
