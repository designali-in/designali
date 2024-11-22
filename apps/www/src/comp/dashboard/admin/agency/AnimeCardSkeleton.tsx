import { DIcons } from "dicons";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const AnimeCardSkeleton = ({ length = 5 }: { length?: number }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
      {Array.from({ length }).map((_, index) => (
        <SingleAnimeCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default AnimeCardSkeleton;

export const SingleAnimeCardSkeleton = () => {
  return (
    <Card className="rounded-sm">
      <CardHeader className="border-b p-0">
        <AspectRatio>
          <div className="flex h-full items-center justify-center bg-secondary">
            <DIcons.Image
              className="h-9 w-9 text-muted-foreground"
              aria-hidden="true"
            />
          </div>
        </AspectRatio>
      </CardHeader>
      <CardContent className="grid gap-2.5 p-4">
        <Skeleton className="h-4 w-1/2" />
      </CardContent>
    </Card>
  );
};
