import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { env } from "@/env";
import { auth } from "@/lib/auth";

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Communities",
  description:
    "Discover a diverse collection of anime fan communities, created by users like you. Join discussions, share your thoughts, and connect with fellow enthusiasts.",
};

interface CommunityLayoutProps {
  children: React.ReactNode;
}

export default async function CommunityLayout({
  children,
}: CommunityLayoutProps) {
  const session = await auth();

  if (!session) {
    redirect("/sign-in");
  }

  return (
    <div className="p-6">
      <main className="flex w-full flex-col overflow-hidden">{children}</main>
    </div>
  );
}
