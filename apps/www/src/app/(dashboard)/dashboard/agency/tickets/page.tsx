import { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/registry/default/designali/ui/button";
import DashboardMain from "@/src/comp/dashboard/admin/ticket/DashboardMain";
import { DIcons } from "dicons";

const AgencyPage = () => {
  return (
    <main className="p-6">
      <div className="">
        <h1 className="py-4 text-2xl font-semibold">Agency</h1>
        <Suspense>
          <Link href="/dashboard/agency/tickets/createticket">
            <Button size="sm" className=" mr-auto gap-1">
              Create New Ticket
              <DIcons.ArrowUpRight className="h-4 w-4" />
            </Button>
          </Link>
          <DashboardMain />
        </Suspense>
      </div>
    </main>
  );
};

export default AgencyPage;
