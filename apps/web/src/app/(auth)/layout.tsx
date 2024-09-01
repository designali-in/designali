import { redirect } from "next/navigation";
import { auth } from "@designali/auth";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (session) redirect("/app/dashboard/overview");

  return (
    <div className="relative mt-14">
      <div className="absolute z-10 h-[900px] w-full bg-transparent bg-[linear-gradient(to_right,#60a5fa_1px,transparent_1px),linear-gradient(to_bottom,#60a5fa_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-10 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#a8a29e_1px,transparent_1px),linear-gradient(to_bottom,#a8a29e_1px,transparent_1px)]"></div>

      {children}
    </div>
  );
}
