import { notFound, redirect } from "next/navigation";
import UpdateAnimeClient from "@/comp/dashboard/admin/agency/UpdateAnimeClient";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface AnimeUpdatePageProps {
  params: {
    anime: string;
  };
}

const AnimeUpdatePage = async ({ params }: AnimeUpdatePageProps) => {
  const { anime: animeId } = params;
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  const anime = await prisma.agency.findFirst({
    where: {
      id: animeId,
    },
  });

  if (!anime) {
    notFound();
  }

  return (
    <div>
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Update anime</CardTitle>
          <CardDescription>
            Update the content of this anime or delete it.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <UpdateAnimeClient anime={anime} />
        </CardContent>
      </Card>
    </div>
  );
};

export default AnimeUpdatePage;
