import { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/registry/default/designali/ui/button";
import DashboardMain from "@/src/comp/dashboard/admin/ticket/DashboardMain";
import DashboardProgress from "@/src/comp/dashboard/admin/ticket/DashboardProgress";
import DashboardTickets from "@/src/comp/dashboard/admin/ticket/DashboardTickets";
import { DIcons } from "dicons";

const AgencyPage = () => {
  return (
    <main className="p-6">
      <div className="">
        <h1 className="py-4 text-2xl font-semibold">Agency</h1>
        <Suspense>
          <DashboardProgress />
          <DashboardTickets />
        </Suspense>
      </div>
    </main>
  );
};

export default AgencyPage;
