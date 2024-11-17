import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { env } from "@/env";
import { auth } from "@/lib/auth";

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Polls",
  description:
    "Empower the community by creating interactive polls with customized options and expiry dates. Vote on polls from fellow users and view the results once the poll expires.",
};

interface PollLayoutProps {
  children: React.ReactNode;
}

export default async function PollLayout({ children }: PollLayoutProps) {
  const session = await auth();

  if (!session) {
    redirect("/sign-in");
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="container flex-1 items-start lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <main className="flex w-full flex-col overflow-hidden">{children}</main>
      </div>
    </div>
  );
}
