import { getCurrentUser } from "@/lib/session";
import { AppTabs } from "@/src/comp/dashboard/app/app-tabs";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export default async function Admin({ children }: ProtectedLayoutProps) {
  const user = await getCurrentUser();

  if (user || user.role !== "USER")
    return (
      <>
      <AppTabs />
        <div className="my-20">{children}</div>
      </>
    );
}
