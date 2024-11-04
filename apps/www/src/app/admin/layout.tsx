import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/session";
import { AdminTabs } from "@/src/comp/dashboard/app/app-tabs";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export default async function Admin({ children }: ProtectedLayoutProps) {
  const user = await getCurrentUser();

  if (!user || user.role !== "ADMIN") redirect("/dashboard");
  return (
    <>
    <AdminTabs />
      <div className="my-20 mx-auto max-w-7xl">{children}</div>
    </>
  );
}
