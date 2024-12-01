import { Suspense } from "react";
import Link from "next/link";
import DashboardProjects from "@/src/comp/dashboard/admin/ticket/DashboardProjscts";
import ProjectSettings from "@/src/comp/dashboard/admin/ticket/projectSettings";

import { Button } from "@/components/ui/button";

export default function AgencyPage() {
  return (
    <main className="p-6">
      <div className="">
        <h1 className="py-4 text-2xl font-semibold">Projects</h1>
        <Link href="/dashboard/agency/projects/createproject">
          <Button size="sm" className=" mr-auto gap-1">
            Create Project
          </Button>
        </Link>
        <Suspense>
          <DashboardProjects />
        </Suspense>
      </div>
    </main>
  );
}
