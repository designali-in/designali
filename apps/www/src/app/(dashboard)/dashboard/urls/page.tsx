import { redirect } from "next/navigation";
import UserUrlsList from "@/src/comp/dashboard/tools/url-list";

import { getCurrentUser } from "@/lib/session";

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user.id) redirect("/login");

  return (
    <main className="p-6">
      <div className="">
        <h1 className="py-4 text-2xl font-semibold">URLs</h1>
        <UserUrlsList
          user={{
            id: user.id,
            name: user.name || "",
            apiKey: "",
          }}
          action="/api/url"
        />
      </div>
    </main>
  );
}
