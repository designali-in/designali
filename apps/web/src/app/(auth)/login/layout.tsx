import { redirect } from "next/navigation";
import { auth } from "@designali/auth";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (session) redirect("/app/dashboard/overview");

  return <div className="my-40 flex justify-center md:my-60">{children}</div>;
}
