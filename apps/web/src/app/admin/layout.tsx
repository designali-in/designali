import React from "react";
import { AdminTabs } from "@/comp/layout/dashboard/app-tabs";
import { auth } from "@designali/auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (session.user.role !== "admin")
    throw new Error("admin permission required");
  return (
    <>
      <AdminTabs />
      <div className="mx-auto mt-40 max-w-7xl pb-20">{children}</div>
    </>
  );
}
