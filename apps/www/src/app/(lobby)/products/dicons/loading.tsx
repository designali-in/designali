import { Skeleton } from "@/components/ui/skeleton";

const AnimeLoading = () => {
  return (
    <div className="p-6">
      <div className="flex w-full gap-6">
        <div className="flex h-full flex-col gap-6 border-r pr-6 sm:flex-row lg:flex-col">
          <Skeleton className="h-72 w-72" />
          <div className="flex w-1/2 flex-col justify-end gap-y-4 md:w-full">
            <div className="flex gap-2">
              <Skeleton className="h-9 w-1/3" />
              <Skeleton className="h-9 w-1/3" />
              <Skeleton className="h-9 w-1/3" />
            </div>

            <div className="mt-4 w-full space-y-6">
              <Skeleton className="h-9 w-full" />
              <Skeleton className="h-9 w-full" />
              <Skeleton className="h-9 w-full" />
              <Skeleton className="h-9 w-full" />
              <Skeleton className="h-9 w-full" />
            </div>
          </div>
        </div>
        <div className=" flex w-full flex-col gap-y-4">
          <div className="flex items-end gap-x-3">
            <Skeleton className="h-10 w-full  " />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {Array.from({ length: 200 }).map((_, index) => (
              <Skeleton key={index} className="h-20 w-20" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeLoading;
