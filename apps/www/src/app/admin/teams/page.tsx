"use client";
import { TeamsTable } from "@/components/admin/assets/teams-table";

export default function AdminDashboardPage() {
  return (
    <div className="p-3 md:p-6 overflow-hidden">   
      <TeamsTable />
    </div>
  );
}
