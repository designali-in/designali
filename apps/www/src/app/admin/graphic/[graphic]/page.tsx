import { notFound, redirect } from "next/navigation";
import UpdateAnimeClient from "@/components/admin/agency/UpdateAnimeClient";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

interface AnimeUpdatePageProps {
  params: {
    anime: string;
  };
}

const AnimeUpdatePage = async ({ params }: AnimeUpdatePageProps) => {
  const { anime: animeId } = params;
  const session = await auth();
  console.log("Anime ID passed to query:", animeId);

  if (!session) {
    redirect("/");
  }

  const anime = await prisma.graphic.findFirst({
    where: {
      id: animeId,
      name: animeId,
    },
  });

  if (!anime) {
    notFound();
  }

  return (
    <div className="p-6">
      <Card>
        <CardHeader className="space-y-1">
          <p>{anime.id}</p>
          <CardTitle className="text-2xl">Update {anime.name}</CardTitle>
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
