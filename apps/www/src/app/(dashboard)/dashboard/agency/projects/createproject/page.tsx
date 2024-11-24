import { Suspense } from "react";
import CreateProject from "@/src/comp/dashboard/admin/ticket/CreateProject";

export default function AgencyPage() {
  return (
    <main className="p-6">
      <div className="">
        <h1 className="py-4 text-2xl font-semibold">Create Projects</h1>
        <Suspense>
          <CreateProject />
        </Suspense>
      </div>
    </main>
  );
}
