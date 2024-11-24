import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: `Admin - Designali`,
  description: "A design agency with a touch of magic.",
};

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="py-4 text-2xl font-semibold">Admin</h1>
      <div className="mt-5 flex gap-3 max-md:flex-col">
        <Card className="sm:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle>All Projects</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Manage all your clients projects in one place.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Link href="/admin/projects">
              <Button>Go Projects</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="sm:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle>All Design Request</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Manage all your clients designs in one place.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Link href="/admin/tickets">
              <Button>Go Designs</Button>
            </Link>
          </CardFooter>
        </Card>{" "}
      </div>
    </div>
  );
}
