import type { ReactNode } from "react";

// TODO: make the container min-h-screen and the footer below!
export default function AppLayout({
  children,
}: {
  children: ReactNode;
  params: { workspaceSlug: string };
}) {
  
  return (
    <div>
      {children}
    </div>
  );
}
