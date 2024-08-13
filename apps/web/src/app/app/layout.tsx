import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { auth } from "@designali/auth";

// TODO: make the container min-h-screen and the footer below!
export default async function AppLayout({
  children,
}: {
  children: ReactNode;
  params: { workspaceSlug: string };
}) {
  const session = await auth();

  if (!session) {
    return redirect("/login");
  }
  return <div className="pb-20">{children}</div>;
}
