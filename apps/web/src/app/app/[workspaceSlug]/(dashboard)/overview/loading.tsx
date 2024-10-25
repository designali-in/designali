import { CardSkeleton } from "@/src/components/uis/card-skeleton";

export default function DashboardLoading() {
  return (
    <div className="mx-auto mt-40 max-w-7xl">
      <div className="grid gap-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
}
