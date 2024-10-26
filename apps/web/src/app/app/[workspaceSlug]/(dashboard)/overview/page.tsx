import Dashboard from "@/comp/dashboard/overview/dash";
import UserId from "@/comp/dashboard/user-id";

export default function OrderDetailsPage() {
  return (
    <main className="mt-40">
      <div className="grid justify-center text-center">
        <h1 className="py-4">Welcome</h1>
        <UserId />
      </div>
      <Dashboard
        searchParams={{
          page: "1",
        }}
      />
    </main>
  );
}
