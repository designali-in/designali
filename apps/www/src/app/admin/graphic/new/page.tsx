import type { Metadata } from "next";
import { redirect } from "next/navigation";
import CreateAnimeClient from "@/components/admin/agency/CreateAnimeClient";

import { env } from "@/env";
import { auth } from "@/lib/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "New Solution",
  description: "Add a new Solution",
};

const page = async () => {
  const session = await auth();

  if (!session) {
    redirect("/sign-in");
  }

  if (session.user.role !== "ADMIN") {
    redirect("/");
  }

  return (
    <div className="p-6">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Add Solution</CardTitle>
          <CardDescription>Add a new anime for the users</CardDescription>
        </CardHeader>
        <CardContent>
          <CreateAnimeClient />
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
