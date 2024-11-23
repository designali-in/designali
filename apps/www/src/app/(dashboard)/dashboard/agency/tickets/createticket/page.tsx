import CreateTicket from "@/src/comp/dashboard/admin/ticket/CreateTicket";

export default function AgencyPage() {
  return (
    <main className="p-6">
      <div className="">
        <h1 className="py-4 text-2xl font-semibold"> Create Tickets</h1>
        <CreateTicket />
      </div>
    </main>
  );
}
