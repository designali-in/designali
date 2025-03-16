"use client";
import { TeamsTable } from "@/components/admin/assets/teams-table";

export default function AdminDashboardPage() {
  return (
    <div className="container py-10 overflow-hidden">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <TeamsTable />
    </div>
  );
}
