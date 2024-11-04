import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
  const session = await auth();
  if (session) redirect("/dashboard");
  return <div className=" ">{children}</div>;
}
