import { redirect } from "next/navigation";
import { auth } from "@designali/auth";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (session) redirect("/app/dashboard/overview");

  return <div className="mt-14">{children}</div>;
}
