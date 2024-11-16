import { Suspense } from "react";
import Link from "next/link";
import AdminAnimes from "@/comp/dashboard/admin/agency/AdminAnimes";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AnimePage = () => {
  return (
    <div className="p-6">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <Card className="flex h-full flex-col">
          <CardHeader className="flex-1">
            <CardTitle className="line-clamp-1">Add a new anime</CardTitle>
            <CardDescription className="line-clamp-2">
              Add a new anime which will be displayed to the users.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link
              href="/admin/agency/new"
              className={cn(
                buttonVariants({
                  size: "sm",
                  className: "h-8 w-full",
                }),
              )}
            >
              Add a new anime
              <span className="sr-only">Add a new anime</span>
            </Link>
          </CardContent>
        </Card>
      </div>

      <Suspense>
        <div className="my-6">
          <AdminAnimes />
        </div>
      </Suspense>
    </div>
  );
};

export default AnimePage;
