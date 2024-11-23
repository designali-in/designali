import { Suspense } from "react";
import DashboardMain from "@/src/comp/dashboard/admin/ticket/DashboardMain";
import DashboardProgress from "@/src/comp/dashboard/admin/ticket/DashboardProgress";

const AgencyPage = () => {
  return (
    <main className="p-6">
      <div className="">
        <h1 className="py-4 text-2xl font-semibold">Agency</h1>
        <Suspense>
          <DashboardProgress />
          <DashboardMain />
        </Suspense>
      </div>
    </main>
  );
};

export default AgencyPage;
