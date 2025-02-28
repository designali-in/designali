import { Suspense } from "react";
import DashboardTickets from "@/src/components/dashboard/ticket/DashboardTickets";

const AgencyPage = () => {
  return (
    <main className="p-6">
      <div className="">
        <h1 className="py-4 text-2xl font-semibold">All Designs</h1>
        <Suspense>
          <DashboardTickets />
        </Suspense>
      </div>
    </main>
  );
};

export default AgencyPage;
