import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/session";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export default async function Users({ children }: ProtectedLayoutProps) {
  const user = await getCurrentUser();

  if (user || user.role !== "USER" || "ADMIN") return <div>{children}</div>;
}
