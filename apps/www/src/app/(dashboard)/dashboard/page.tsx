import UserId from "@/src/comp/dashboard/app/user-id";

export default function DashboardPage() {
  return (
    <main className="mt-40">
      <div className="grid justify-center text-center">
        <h1 className="py-4">Welcome</h1>
        <UserId />
      </div>
    </main>
  );
}
