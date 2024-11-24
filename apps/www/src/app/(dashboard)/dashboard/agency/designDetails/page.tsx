import { Suspense } from "react";
import TicketDetails from "@/src/comp/dashboard/admin/ticket/TicketDetails";

const AgencyPage = () => {
  return (
    <main className="p-6">
      <div className="">
        <h1 className="py-4 text-2xl font-semibold">Designs</h1>
        <Suspense>
          <TicketDetails />
        </Suspense>
      </div>
    </main>
  );
};

export default AgencyPage;
