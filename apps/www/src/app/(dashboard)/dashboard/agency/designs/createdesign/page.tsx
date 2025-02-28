import CreateTicket from "@/src/components/dashboard/ticket/CreateTicket";

export default function AgencyPage() {
  return (
    <main className="p-6">
      <div className="">
        <h1 className="py-4 text-2xl font-semibold"> Create Designs</h1>
        <CreateTicket />
      </div>
    </main>
  );
}
