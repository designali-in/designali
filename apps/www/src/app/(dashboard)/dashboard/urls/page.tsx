import { redirect } from "next/navigation";
import UserUrlsList from "@/src/comp/dashboard/tools/url-list";

import { getCurrentUser } from "@/lib/session";

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user.id) redirect("/login");

  return (
    <main className="mt-40">
      <div className="grid justify-center text-center">
        <h1 className="py-4">URLs</h1>
        <UserUrlsList
          user={{
            id: user.id,
            name: user.name || "",
            apiKey: user.apiKey || "",
          }}
          action="/api/url"
        />
      </div>
    </main>
  );
}
