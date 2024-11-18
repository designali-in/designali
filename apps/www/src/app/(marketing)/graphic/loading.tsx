import { Skeleton } from "@/components/ui/skeleton";

const AnimeLoading = () => {
  return (
    <div className="mx-auto my-40 max-w-7xl px-6 xl:px-0">
      <div className="grid grid-cols-1 gap-x-2 lg:grid-cols-3">
        <div className="flex flex-col gap-8 sm:flex-row lg:flex-col">
          <Skeleton className="h-96 w-72" />
          <div className="flex w-1/2 flex-col justify-end gap-y-4 md:w-full">
            <Skeleton className="h-4 w-1/3" />
            <div className="w-full space-y-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-full md:w-3/4" />
              <Skeleton className="h-4 w-full md:w-3/4" />
            </div>
          </div>
        </div>
        <div className="col-span-2 mt-8 flex flex-col gap-y-4">
          <div className="flex items-end gap-x-3">
            <Skeleton className="h-10 w-full md:w-1/2" />
          </div>

          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-60 w-full" />
          <div className="flex items-center gap-x-2">
            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-8 w-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeLoading;
