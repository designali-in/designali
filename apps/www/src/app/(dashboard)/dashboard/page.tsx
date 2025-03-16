import { Suspense } from "react";
import { DashboardStats } from "@/src/components/dashboard/users/stats"; 
import { DashboardUser } from "@/src/components/dashboard/graphic/assets/about-user";
import { getCurrentUser } from "@/src/lib/session";
import Image from "next/image";

export default async function DashboardPage() {
  const user = await getCurrentUser();
  return (
    <div className="space-y-3 p-3 md:p-6">
      <div className="h-40 w-full -mt-4 overflow-hidden md:h-[200px] ">
        <Image
          src="/images/products/3dbg.jpg"
          alt="Cover"
          width={1000}
          height={300}
          className="-z-10 h-full w-full rounded-xl object-cover"
        />
      </div>
      <DashboardUser user={user} />
      <Suspense fallback={""}>
        <DashboardStats />
      </Suspense> 
    </div>
  );
}
